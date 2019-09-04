import express from 'express';
import { json } from 'body-parser';
import PORT from './config';
import indexRouter from './routes/indexRoutes';

const app = express();

app.use(json());

app.use('/api/v1', indexRouter);


app.listen(PORT, () => {
  console.log(`the server is listening on port ${PORT}!`);
});

export default app;
