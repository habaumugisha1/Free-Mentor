import chai from 'chai';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../index';


// Configure chai
chai.use(chaiHttp);
chai.should();

describe('sessionscontrollers', () => {
  const user = {
    id: 1,
    firstName: 'jonathanu',
    lastName: 'kukutodhgch',
    email: 'jonathanu9@gmail.com',
    password: '1234567890',
    adress: 'kenya nailobi',
    biography: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    occupation: 'freelancer',
    role: 'mentee',
    expertise: 'BackEnd developer',
  };
  const session = {
    sessionId: 1,
    mentorId: 1,
    menteeId: 1,
    menteeEmail: 'sam@gmail.com',
    questions: 'the question is about how to install node js?',
    status: 'pending',
  };
  const token = jwt.sign({ user }, 'privateKey', (token));

  it('it should request mentorship session', (done) => {
    chai.request(app)
      .post('/api/v1/sessions')
      .set('authorization', `bearer ${token}`)
      .send(session)
      .end((err, res) => {
        res.status.should.have.equal(200);
        res.body.should.be.a('object');

        done();
      });
  });

  it('it should request mentorship session', (done) => {
    chai.request(app)
      .patch('/api/v1/sessions/1/accept')
      .set('authorization', `bearer ${token}`)
      .send(token)
      .end((err, res) => {
        res.status.should.have.equal(200);
        res.body.should.be.a('object');

        done();
      });
  });
});
