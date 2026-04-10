// Détection automatique de la langue + cookie de préférence
// S'exécute uniquement sur la racine "/"

export default async (request: Request) => {
  const url = new URL(request.url);

  // Ne rediriger que la racine exacte
  if (url.pathname !== '/') return;

  // Cookie prioritaire
  const cookies = request.headers.get('cookie') || '';
  const langMatch = cookies.match(/rambert_lang=(fr|en)/);
  if (langMatch) {
    if (langMatch[1] === 'en') {
      return Response.redirect(new URL('/en/', url), 302);
    }
    return; // FR = pas de redirect, c'est la page par défaut
  }

  // Détection Accept-Language
  const acceptLang = request.headers.get('accept-language') || '';
  const prefersEnglish = !acceptLang.toLowerCase().startsWith('fr');

  if (prefersEnglish) {
    return Response.redirect(new URL('/en/', url), 302);
  }
};

export const config = { path: '/' };
