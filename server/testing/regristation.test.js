const request = require('supertest');
const app = require('../server'); // Asumsikan file aplikasi Express Anda bernama 'app.js'

describe('Registration API', () => {
  it('should return 422 if validation fails', async () => {
    const response = await request(app)
      .post('/register')
      .send({}); // Mengirimkan permintaan tanpa data yang diperlukan

    expect(response.status).toBe(422);
    expect(response.body.errors).toBeDefined();
  });

  it('should return 400 if email is already registered', async () => {
    // Menyiapkan pengguna yang sudah terdaftar sebelumnya
    const existingUser = await request(app)
      .post('/api/register')
      .send({ name: 'John Doe', email: 'johndoe@example.com', password: 'password123' });

    const response = await request(app)
      .post('/api/register')
      .send({ name: 'Jane Doe', email: 'johndoe@example.com', password: 'password456' });

    expect(response.status).toBe(400);
    expect(response.body.errors).toBe('Email sudah terdaftar');
  });

  it('should return 200 if registration is successful', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({ name: 'John Doe', email: 'johndoe@example.com', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.success).toBeTruthy();
    expect(response.body.message).toBeDefined();
    expect(response.body.message).toContain('Aktivasi sukses');
  });
});