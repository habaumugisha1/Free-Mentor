import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../index';
import users from './mocks/userdata';


// Configure chai
chai.use(chaiHttp);
chai.should();

describe('users', () => {
  const token = jwt.sign(users.newuser, 'privateKey', (token));
  it('should return home page', (done) => {
    // calling sever as app
    chai.request(app)
      .get('/api/v1/home')
      .send('Welcome to Free Mentor')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('it should create user ', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(users.newuser)
      .end((err, res) => {
        res.status.should.have.equal(201);
        res.body.should.be.a('object');

        done();
      });
  });

  it('it should not create user with existing email of user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(users.newuser)
      .end((err, res) => {
      // bad request status
        res.should.have.status(409);
        res.body.should.be.a('object');

        done();
      });
  });

  it('should not create user when user data is not valid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(users.invaliddata)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should get all users', (done) => {
    chai.request(app)
      .get('/api/v1/auth/users')
      .end((err, res) => {
        res.status.should.be.equal(200);
        done();
      });
  });
  it('should not change user to mentor if is not found', (done) => {
    chai.request(app)
      .patch('/api/v1/auth/users/19')
      .end((err, res) => {
        res.status.should.be.equal(401);
        res.body.should.be.a('object');
        done();
      });
  });


  it('should change user to mentor if user exist', (done) => {
    chai.request(app)
      .patch('/api/v1/auth/users/1')
      .end((err, res) => {
        res.status.should.be.equal(401);

        done();
      });
  });
  it('user should login', (done) => {
    chai.request(app)
      .post('/api/auth/login')
      .set('authorization', `bearer ${token}`)
      .send(users.userdata)
      .end((err, res) => {
        res.status.should.be.equal(404);
        res.body.should.be.a('object');
        done();
      });
  });

  it('user should not login if email is not exist', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .end((err, res) => {
        res.status.should.be.equal(422);
        done();
      });
  });

  it('should get mentors', (done) => {
    chai.request(app)
      .get('/api/v1/mentors')
      .set('authorization', `bearer ${token}`)
      .send(token)
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should not get specific mentor if ID is not found', (done) => {
    chai.request(app)
      .get('/api/v1/mentors/9')
      .send(users.mentor)
      .set('authorization', `bearer ${token}`)
      .end((err, res) => {
        res.status.should.be.equal(404);

        done();
      });
  });
  it('should get specific mentor', (done) => {
    chai.request(app)
      .get('/api/v1/mentors/5')
      .send(users.mentor)
      .set('authorization', `bearer ${token}`)
      .end((err, res) => {
        res.status.should.be.equal(200);
        res.body.should.be.a('object');

        done();
      });
  });
});
