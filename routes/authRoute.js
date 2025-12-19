import express from 'express';
import { registerController, loginController, authController } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();

//routing
//Register || Method Post
router.post('/register', registerController);

//Login || Post
router.post('/login', loginController);

//Protected Route
router.get("/test", requireSignIn, isAdmin, authController );

export default router;

