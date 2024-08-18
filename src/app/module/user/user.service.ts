import config from '../../config'
import { TUser } from './user.interface'
import { User } from './user.model'
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const register = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email })
  if (user) {
    throw new Error('Email already exist')
  }

  const result = await User.create(payload)
  return result
}

const login = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    throw new Error('Email not found')
  }

  const matchPassword = async (plainPassword: string, hasPassword: string) => {
    const isMatch = await bycrypt.compare(plainPassword, hasPassword)
    return isMatch
  }

  if (!matchPassword(payload.password, user.password)) {
    throw new Error('Password does not match')
  }

  const jwtPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(jwtPayload, config.access_token as string, {
    expiresIn: config.accsess_token_expireIn,
  })

  const refreshToken = jwt.sign(jwtPayload, config.refresh_token as string, {
    expiresIn: config.refresh_token_expireIn,
  })

  return {
    accessToken,
    refreshToken,
    user,
  }
}

const getAllUser = async () => {
  const result = await User.find()
  return result
}

export const userService = {
  register,
  login,
  getAllUser,
}
