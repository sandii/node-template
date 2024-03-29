import express from 'express';
import testRouter from './routers/test-router';

const app = express();
const base = '/test';
app.use(express.json());
app.use(`${base}/test`, testRouter);
const port = 9001;
app.listen(port, () => console.log(`listening ${port}`));

// http://localhost:9001/test/test/test
// http://localhost:9001/test/test/test?id=12
