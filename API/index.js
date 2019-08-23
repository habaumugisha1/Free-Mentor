import express from 'express';
import {json} from 'body-parser';
import PORT from './config';
const app = express();
app.use(json());

import userRouter from './routes/userRoutes'


app.use('/api/v1', userRouter);
 



app.use((req, res, next) =>{
const error = new Error("not found");
error.status = 404;
next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



app.listen(PORT, () => {
    console.log(`the server is listening on port ${PORT}!`)
});

export default app;