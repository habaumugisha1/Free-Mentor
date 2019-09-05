import express from 'express';
import logger from 'morgan';
// eslint-disable-next-line import/no-extraneous-dependencies
import { json } from 'body-parser';
import PORT from './config';
// eslint-disable-next-line import/no-named-as-default
import indexRouter from './routes/indexRoutes';

const app = express();

app.use(logger('dev'));
app.use(json());

app.use('/api/v1', indexRouter);


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`the server is listening on port ${PORT}!`);
});

export default app;
