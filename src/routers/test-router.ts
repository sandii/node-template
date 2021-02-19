import express from 'express';

const router = express.Router();

router.get('/test', async (req, res) => {
  const { id } = req.query;
  if (!id) {
    res.send({ code: 9000, msg: 'no id' });
    return;
  }
  res.send({
    code: 0,
    msg: 'success',
    data: { id },
  });
});

export default router;
