import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  const expectedPassword = import.meta.env.RAMBERT_PASSWORD || 'rambert2026';

  if (!email || !password) {
    return redirect('/#acces-prive');
  }

  if (password !== expectedPassword) {
    // TODO: afficher un message d'erreur côté client
    return redirect('/#acces-prive');
  }

  // Logger l'accès (email + timestamp)
  // TODO: envoyer vers Google Sheet ou stocker dans un fichier
  console.log(`[PRIVATE ACCESS] ${email} — ${new Date().toISOString()}`);

  // Créer un cookie de session (24h)
  cookies.set('rambert_session', email, {
    path: '/',
    maxAge: 60 * 60 * 24,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  return redirect('/private');
};
