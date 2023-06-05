const request = require('supertest');
const assert = require('assert');
const { app } = require('../src/app.js');

describe('Test suite 1:', () => {
  it('test 1:', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.statusCode, 200);
  });

  it('test 2:', async () => {
    const res = await request(app).get('/1234');
    assert.strictEqual(res.statusCode, 404);
  });
});

describe('Test suite 2:', () => {
  let server;

  before((done) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      process.env.PORT = port.toString();
      done();
    });
  });

  after((done) => {
    server.close(done);
  });

  const successCode = 302;

  it('test 2: Register user', async () => {
    const userData = {
      name: 'Gitit Dadon',
      id: '123456789',
      grade1: 99,
      grade2: 90,
      grade3: 95,
    };

    const res = await request(app).post('/register').send(userData);
    console.log(userData);
    assert.strictEqual(res.statusCode, successCode);
  });

  it('test 3: Invalid user registration', async () => {
    const userData = {
      name: 'Gitit667Dadon',
      id: '123456789!!!',
      grade1: 990,
      grade2: 90,
      grade3: -95,
    };

    const res = await request(app).post('/register').send(userData);
    assert.strictEqual(res.statusCode, 400);
  });
});
