const dotenv = require("dotenv");

dotenv.config();

const ENV = {
  PORT: process.env.PORT,
  MONGO: process.env.MONGO_URI,
  DBNAME: process.env.DBNAME,
  TOKEN: process.env.TOKEN
};

module.exports = ENV;
