import express from 'express';
import bodyParser from 'body-parser';
import testRouter from './routers/test-router';

const app = express();
const base = '/test';
app.use(bodyParser.json());
app.use(`${base}/test`, testRouter);
const port = 9001;
app.listen(port, () => console.log(`listening ${port}`));
