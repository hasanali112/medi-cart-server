import { Router } from 'express'
import { userController } from './user.controller'
import { userValidation } from './user.validation'
import dataValidation from '../../middleware/validationMiddleware'

const routes = Router()

routes.post(
  '/signup',
  dataValidation(userValidation.createUserValidationSchema),
  userController.registerUser,
)
routes.post('/login', userController.loggedUser)
routes.get('/users', userController.getAllUserIntoDB)

export const userRoute = routes
