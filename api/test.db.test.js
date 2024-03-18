const axios = require('axios');

test('Vérifier les données dans la base de données', async () => {
  try {
    const response = await axios.get('http://localhost:3000/post');

    expect(response.status).toBe(200);

    const data = response.data;

    expect(data).toHaveLength(5);

    expect(data[0].name).toBe('iPhone 13 Pro Max');
    expect(data[1].price).toBe(909);
  } catch (error) {
    console.error('Erreur lors de la requête GET :', error);
    throw error;
  }
});
