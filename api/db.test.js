const request = require('supertest');
const app = require('./server');

jest.mock('supertest', () => {
  return jest.fn(() => ({
    get: jest.fn().mockReturnThis(),
    expect: jest.fn().mockReturnThis(),
  }));
});

test('Vérifier le démarrage du serveur', async () => {
  await request("http://localhost:3000").get('/').expect(200);
});
