// Netlify Function — Google Calendar API → JSON des réservations
// Utilise une clé API (read-only, calendrier public)

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

interface CalendarEvent {
  summary: string;
  start: string;
  end: string;
}

export default async function handler(req: Request): Promise<Response> {
  if (!CALENDAR_ID || !API_KEY) {
    return new Response(JSON.stringify({ error: 'Configuration manquante (CALENDAR_ID ou API_KEY)' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Fenêtre : aujourd'hui → +12 mois
  const now = new Date();
  const timeMin = now.toISOString();
  const futureDate = new Date(now);
  futureDate.setMonth(futureDate.getMonth() + 12);
  const timeMax = futureDate.toISOString();

  const params = new URLSearchParams({
    key: API_KEY,
    timeMin,
    timeMax,
    singleEvents: 'true',     // expanse les récurrences
    orderBy: 'startTime',
    maxResults: '250',
    fields: 'items(summary,start,end)',  // ne récupère que ce qu'on affiche
  });

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?${params}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      const body = await res.text();
      return new Response(JSON.stringify({ error: `Google API: ${res.status}`, detail: body }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    const events: CalendarEvent[] = (data.items || []).map((item: any) => ({
      summary: item.summary || 'Réservé',
      start: item.start?.date || item.start?.dateTime?.slice(0, 10),
      end: item.end?.date || item.end?.dateTime?.slice(0, 10),
    }));

    return new Response(JSON.stringify({ events }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Erreur de connexion à Google Calendar' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export const config = {
  path: '/api/calendar',
};
