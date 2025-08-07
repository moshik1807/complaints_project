import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const routerAdmin = express.Router();

routerAdmin.post('/', (req, res) => {
  const { password } = req.body;
  
  if (password === process.env.PASSWORD) {
    res.send('<h1>Welcome, admin!</h1>');
  } else {
    res.status(401).send('<h1>Unauthorized</h1>');
  }
});
export default routerAdmin;
