import { User } from '@clerk/express';
import express from 'express'
import { getAllProjects, getProjectById, getUserCredits, toggleProjectPublic } from '../controllers/userController.js';
import { protect } from '../middlewares/auth.js';
import { addCredits } from '../controllers/userController.js'

const  userRouter = express.Router();

userRouter.get('/credits', protect, getUserCredits)
userRouter.get('/projects', protect, getAllProjects)
userRouter.get('/projects/:projectId', protect, getProjectById)
userRouter.get('/publish/:projectId', protect, toggleProjectPublic)
userRouter.get('/add-credits', protect, addCredits)

export default userRouter;