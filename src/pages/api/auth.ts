import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const lang = formData.get('lang')?.toString() || 'fr';

  const expectedPassword = import.meta.env.RAMBERT_PASSWORD || 'rambert2026';
  const prefix = lang === 'en' ? '/en' : '';

  if (!email || !password) {
    return redirect(`${prefix}/#acces-prive`);
  }

  if (password !== expectedPassword) {
    return redirect(`${prefix}/#acces-prive`);
  }

  console.log(`[PRIVATE ACCESS] ${email} — ${new Date().toISOString()}`);

  cookies.set('rambert_session', email, {
    path: '/',
    maxAge: 60 * 60 * 24,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  return redirect(`${prefix}/private`);
};
