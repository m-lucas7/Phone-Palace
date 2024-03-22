const request = require('supertest');

test('Vérifier l\'affichage des informations de la table telephones', async () => {
    const mockResponse = [
        { name: 'iPhone 13 Pro Max', price: 1259 },
        { name: 'iPhone 13', price: 909 },
        { name: 'iPhone SE (2020)', price: 489 },
        { name: 'iPhone 12 Mini', price: 809 },
        { name: 'iPhone 11 Pro', price: 1159 },
    ];

    request.mockReturnValueOnce({
        get: jest.fn().mockResolvedValueOnce({ status: 200, body: mockResponse }),
    });

    const response = await request('http://localhost:3000').get('/post');
    expect(response.status).toBe(200);

    expect(response.body).toHaveLength(5);
    expect(response.body[0].name).toBe('iPhone 13 Pro Max');
    expect(response.body[0].price).toBe(1259);
    expect(response.body[1].name).toBe('iPhone 13');
    expect(response.body[1].price).toBe(909);
    expect(response.body[2].name).toBe('iPhone SE (2020)');
    expect(response.body[2].price).toBe(489);
    expect(response.body[3].name).toBe('iPhone 12 Mini');
    expect(response.body[3].price).toBe(809);
    expect(response.body[4].name).toBe('iPhone 11 Pro');
    expect(response.body[4].price).toBe(1159);
});
