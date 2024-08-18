import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_round: process.env.SALI_ROUND,
  access_token: process.env.ACCESS_TOKEN_SECRET,
  accsess_token_expireIn: process.env.ACCESS_TOKEN_EXPIREIN,
  refresh_token: process.env.REFRESH_TOKEN_SECRET,
  refresh_token_expireIn: process.env.REFRESH_TOKEN_EXPIREIN,
}
