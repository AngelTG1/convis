import express from 'express';
import { UserController } from '../controllers/userController';
import { AuthController } from '../controllers/authController';
import { UnitController } from '../controllers/unitController';
import { UserUnitController } from '../controllers/userUnitController';

const router = express.Router();
const userController = new UserController();
const authController = new AuthController();
const unitController = new UnitController();
const userUnitController = new UserUnitController();

router.post('/users', (req, res) => userController.createUser(req, res));
router.post('/login', (req, res) => authController.login(req, res));
router.post('/unit', (req, res, next) => authController.verifyToken(req, res, next), (req, res) => unitController.createUnit(req, res));
router.post('/UserUnit', (req, res, next) => authController.verifyToken(req, res, next), (req, res) => userUnitController.assignUnitToUser(req, res));
router.get('/protected', (req, res, next) => authController.verifyToken(req, res, next), (req, res) => {
  res.send('Bienvenido chulos');
});
router.get('/convis', (req, res, next) => authController.verifyToken(req, res, next), (req, res) => {
  res.send('A las Convis papi');
});

export default router;
