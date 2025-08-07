import express from 'express';
import dotenv from 'dotenv';
import {getAll} from '../controllers/complaintsController.js'
dotenv.config();

const routerAdmin = express.Router();

routerAdmin.post('/',async (req, res)=> {
  const { password } = req.body;
  
  if (password === process.env.PASSWORD) {
    let controllers = await getAll()
    res.send(controllers);
  } else {
    res.status(401).send('<h1>Unauthorized</h1>');
  }
});
export default routerAdmin;
