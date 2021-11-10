require("../env");

module.exports = {
  dialect: process.env.NODE_ENV === "test" ? "sqlite" : process.env.DB_DIALECT,
  host: process.env.NODE_ENV === "test" ? "localhost" : process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  storage: "./tests/database.sqlite",
  dialectOptions: process.env.NODE_ENV !== "dev" && {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  define: {
    timestamps: false,
  },
};
