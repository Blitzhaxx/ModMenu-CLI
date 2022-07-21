module.exports = {
  env: 'development',
  log: {
    level: 'silly',
    disabled: false,
  },
  cors: {
    origins: ['http://localhost:3000'],
    maxAge: 3 * 60 * 60,
  },
  database: {
    client: 'mysql2',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
  auth: {
    argon: {
      saltLength: 16, //128 bits
      hashLength: 32, //256 bits
      timeCost: 4,
      memoryCost: 2 ** 17, //1024bits
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expirationInterval: 3*60 * 60, //3u
      issuer: 'Blitzhax',
      audience: 'Users',
    },
  },
};
