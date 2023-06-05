// const request = require('supertest');
// const { app } = require('../src/app');

// describe('Test suite 1:', () => {
//   test('test 1:', async () => {
//     const res = await request(app).get('/');
//     expect(res.statusCode).toEqual(200);
//   });

//   test('test 2:', async () => {
//     const res = await request(app).get('/1234');
//     expect(res.statusCode).toEqual(404);
//   });
// });

// describe('Test suite 2:', () => {
//   let server;

//   beforeAll((done) => {
//     server = app.listen(0, () => {
//       const port = server.address().port;
//       process.env.PORT = port.toString();
//       done();
//     });
//   });

//   afterAll((done) => {
//     server.close(done);
//   });
//   var successCode=302;
//   test('test 2: Register user', async () => {
//     const userData = {
//       name: 'Gitit Dadon',
//       id: '123456789',
//       grade1: 99,
//       grade2: 90,
//       grade3: 95,
//     };

//     const res = await request(app).post('/register').send(userData);
//     console.log(userData);
//     expect(res.statusCode).toEqual(successCode);
//   });

//   test('test 3: Invalid user registration', async () => {
//     const userData = {
//       name: 'Gitit667Dadon',
//       id: '123456789!!!',
//       grade1: 990,
//       grade2: 90,
//       grade3: -95,
//     };

//     const res = await request(app).post('/register').send(userData);
//     expect(res.statusCode).toEqual(400);
//   });
// });
