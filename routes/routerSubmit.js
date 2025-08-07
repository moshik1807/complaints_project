import express from 'express';
const routerSubmit = express.Router();

routerSubmit.post('/', (req, res) => {
  const { domain, message } = req.body;
  res.send(`<h1>Thank you for your complaint!</h1><a href="/">Back</a>`);
});

export default routerSubmit;
