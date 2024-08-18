/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose'
import { TUser } from './user.interface'
import bycrypt from 'bcryptjs'
import config from '../../config'

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: [true, 'Name is required'] },
    email: { type: String, required: [true, 'Email is required'] },
    password: { type: String, required: [true, 'Password is required'] },
    contactNumber: { type: String, required: [true, 'Password is required'] },
    role: {
      type: String,
      enum: ['admin', 'user'],
      required: [true, 'Role is required'],
    },
    address: { type: String, required: [true, 'Address is required'] },
  },
  {
    timestamps: true,
  },
)

userSchema.methods.toJSON = function () {
  const userData = this.toObject()
  delete userData.password
  return userData
}

userSchema.pre('save', async function (next) {
  const user = this
  user.password = await bycrypt.hash(user.password, Number(config.salt_round))
  next()
})

export const User = model<TUser>('User', userSchema)
