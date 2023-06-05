const request = require('supertest');
const { app, server } = require('../src/app');
describe('Test suite 1:', () => {
  test('test 1:', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  test('test 2:', async () => {
    const res = await request(app).get('/1234');
    expect(res.statusCode).toEqual(404);
  });
});
var succesCode=400;

describe('Test suite 2:', () => {
  beforeAll(() => {
    jest.setTimeout(30000); // Set the timeout value to 30000ms (30 seconds) for the entire suite
  });

  afterAll((done) => {
    server.close(done);
  });

  test('test 2: Register user', async () => {
    const userData = {
      name: 'Gitit Dadon',
      id: '123456789',
      grade1: 99,
      grade2: 90,
      grade3: 95,
    };

    const res = await request(app).post('/register').send(userData);
    expect(res.statusCode).toEqual(succesCode);
    console.log(res.body.error);

  });

  test('test 2: Register user', async () => {
    const userData = {
      name: 'Gitit667Dadon',
      id: '123456789!!!',
      grade1: 990,
      grade2: 90,
      grade3: -95,
    };

    const res = await request(app).post('/register').send(userData);
    expect(res.statusCode).toEqual(400);
  });
});
