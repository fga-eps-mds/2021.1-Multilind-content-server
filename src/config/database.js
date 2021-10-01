require("../env");
console.log(process.env.DB_HOST);
console.log(process.env.DB_DIALECT);
module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  storage: "./database.sqlite",
  define: {
    timestamps: true,
  },
};
