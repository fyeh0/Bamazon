module.exports = {
  "development": {
    "user": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "bamazon",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "user": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "bamazon",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
}
