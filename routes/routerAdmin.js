import express from 'express';
const routerAdmin = express.Router();

routerAdmin.post('/', (req, res) => {
  const { password } = req.body;
  
  if (password === env.password) {
    res.send('<h1>Welcome, admin!</h1>');
  } else {
    res.status(401).send('<h1>Unauthorized</h1>');
  }
});

export default routerAdmin;
