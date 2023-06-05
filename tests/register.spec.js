const request = require('supertest');
const { app } = require('../src/app');
const mongoose = require('mongoose');
const { expect } = require('chai');

describe('Test suite 1:', () => {
  it('test 1: Check home route', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).to.equal(200);
  });

  it('test 2: Check non-existent route', async () => {
    const res = await request(app).get('/1234');
    expect(res.statusCode).to.equal(404);
  });
});
describe('Test suite 2:', function() {
  var successCode = 302;
  let server;

  before(function(done) {
    server = app.listen(0, function() {
      const port = server.address().port;
      process.env.PORT = port.toString();
      done();
    });
  });

  after(function(done) {
    server.close(function() {
      mongoose.disconnect(done);
    });
  });

  it('test 1: Register user', function(done) {
    this.timeout(5000); // Increase the timeout to 5000ms (5 seconds)

    const userData = {
      name: 'Gitit Dadon',
      id: '123456789',
      grade1: 99,
      grade2: 90,
      grade3: 95,
    };

    request(app)
      .post('/register')
      .send(userData)
      .expect(successCode)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('test 2: Invalid user registration', function() {
    const userData = {
      name: 'Gitit667Dadon',
      id: '123456789!!!',
      grade1: 990,
      grade2: 90,
      grade3: -95,
    };

    return request(app)
      .post('/register')
      .send(userData)
      .expect(400);
  });
});
