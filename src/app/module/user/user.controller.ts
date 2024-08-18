/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { catchAsync } from '../utils/catchAsync'

import httpStatus from 'http-status'
import { userService } from './user.service'

const registerUser = catchAsync(async (req, res, next) => {
  const data = req.body
  const result = await userService.register(data)
  res.status(httpStatus.OK).json({
    success: true,
    message: 'User register succesfully',
    data: result,
  })
})

const loggedUser = catchAsync(async (req, res, next) => {
  const data = req.body
  const { accessToken, refreshToken, user } = await userService.login(data)

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  })

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User loging succesfully',
    token: accessToken,
    data: user,
  })
})
const getAllUserIntoDB = catchAsync(async (req, res, next) => {
  const result = await userService.getAllUser()
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrive succesfully',
    data: result,
  })
})

export const userController = {
  registerUser,
  loggedUser,
  getAllUserIntoDB,
}
