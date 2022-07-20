module.exports = {
  env: 'development',
  url: 'https://dendermondse-bc.herokuapp.com/api/',
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
  mail: {
    adres: process.env.MAIL_ADDRESS,
    password: process.env.MAIL_PASSWORD,
    service: process.env.MAIL_SERVICE
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
      issuer: 'dendermondsebc.be',
      audience: 'dendermondsebc.be',
    },
  },
};
