const request = require('supertest');
const app = require('./server');

test('Vérifier le démarrage du serveur', async () => {
  await request(app).get('/').expect(200);
});
