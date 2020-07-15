require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT,
  },
  db: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_ISSUER: process.env.JWT_ISSUER || 'stacy',
    JWT_REFRESH_TOKEN_EXPIRY: process.env.JWT_REFRESH_TOKEN_EXPIRY || '30d',
    JWT_ACCESS_TOKEN_EXPIRY: process.env.JWT_ACCESS_TOKEN_EXPIRY || '15m',
  },
};
