import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

// Configure chai
chai.use(chaiHttp);
chai.should();
// const expect = { chai };


describe('users', () => {
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

  it('it should not create user with existing email of user', (done) => {
    const user = {

      id: 1,
      firstName: 'kamana',
      lastName: 'kamanamana',
      email: 'kamana@gmail.com',
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
        res.should.have.status(500);
        res.body.should.be.a('object');

        done();
      });
  });

  it('should not create user when existing email', (done) => {
    const user = {
      id: 6,
      email: 'kamana12@gmail.com',
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
        res.should.have.status(409);
        // res.body.should.have.property('message');
        // res.body.should.be.a('object')
        done();
      });
  });

  it('should get all users', (done) => {
    chai.request(app)
      .get('/api/v1/auth/users')
    // .send(users)
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body.data.should.be.a('array');
        done();
      });
  });
});
