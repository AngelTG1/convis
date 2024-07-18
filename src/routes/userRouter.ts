import express from 'express';
import { UserController } from '../controllers/userController';
import { AuthController } from '../controllers/authController';

const router = express.Router();
const userController = new UserController();
const authController = new AuthController();

router.post('/users', (req, res) => userController.createUser(req, res));
router.post('/login', (req, res) => authController.login(req, res));
router.get('/protected', (req, res, next) => authController.verifyToken(req, res, next), (req, res) => {
  res.send('Bienvenido chulos');
});

router.get('/convis', (req, res, next) => authController.verifyToken(req, res, next), (req, res) => {
    res.send('A las Convis papi');
  });

export default router;
