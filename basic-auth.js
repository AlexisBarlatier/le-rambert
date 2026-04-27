export default async (request, context) => {
  const auth = request.headers.get('Authorization');
  const expected = 'Basic ' + btoa('rambert:rambert2026');

  if (auth !== expected) {
    return new Response('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Le Rambert"' }
    });
  }
  return context.next();
};
