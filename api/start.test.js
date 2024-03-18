const request = require('supertest');
const app = require('./server.js');

test('Vérifier le démarrage du serveur', async () => {
  await request(app).get('/').expect(200);
});

test('Vérifier la disponibilité des endpoints', async () => {
  const endpoints = ['/', '/post', '/user'];

  for (const endpoint of endpoints) {
    await request(app).get(endpoint).expect(200);
  }
});

test('Vérifier la réponse aux requêtes POST', async () => {
  const postData = { /* Données à envoyer dans la requête POST */ };

  await request(app).post('/post').send(postData).expect(200);
});

test('Vérifier la gestion des erreurs', async () => {
  await request(app).get('/nonexistent').expect(404);
});
