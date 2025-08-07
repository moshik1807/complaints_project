import express from 'express';
import {add} from '../controllers/complaintsController.js'

const routerSubmit = express.Router();

routerSubmit.post('/',async (req, res) => {
  await add(req.body)
  res.send(`Thank you for your complaint!`);
});

export default routerSubmit;
