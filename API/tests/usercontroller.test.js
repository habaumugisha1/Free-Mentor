import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

// Configure chai
chai.use(chaiHttp);
chai.should();
// const expect = { chai };


// eslint-disable-next-line no-undef
describe('users', () => {
  // eslint-disable-next-line no-undef
  it('should return home page', (done) => {
    // calling sever as app
    chai.request(app)
      .get('/api/v1/home')
      .send('Welcome to Free Mentor') // THis is HTTP response
      .end((err, res) => {
        // HTTP status should be 200
        res.should.have.status(200);
        done();
      });
  });

  // eslint-disable-next-line no-undef
  it('it should not create user with existing email of user', (done) => {
    const user = {

      id: 1,
      firstName: 'kamana',
      lastName: 'kamanamana',
      email: 'kamana12@gmail.com',
      password: '1234567890',
      adress: 'Rwanda kigali',
      biography: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      occupation: 'freelancer',
      expertise: 'BackEnd developer',
    };

    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.be.a('object');

        done();
      });
  });

  // eslint-disable-next-line no-undef
  it('should ot create user when user data is not valid', (done) => {
    const user = {
      id: 6,
      email: 'kamana12gmail.com',
      password: '$2a$10$wp.Mpmu0inbdlzze8HBkVuHH2dy26t6TbWh7BLqMAA5SVWQxSHyIq',
      adress: 'Rwanda kigali',
      biography: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      occupation: 'freelancer',
      role: 'mentee',
      expertise: 'BackEnd developer',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .end((err, res) => {
        res.should.have.status(400);
        // res.body.should.have.property('message');
        // res.body.should.be.a('object')
        done();
      });
  });

  // eslint-disable-next-line no-undef
  it('should get all users', (done) => {
    chai.request(app)
      .get('/api/v1/auth/users')
    // .send(users)
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
  });
});
