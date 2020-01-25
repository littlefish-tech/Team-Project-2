require('dotenv').config();

module.exports = {

  "development": {
<<<<<<< HEAD:app/config/config.json
    "username": "root",
    "password": "password",
    "database": "movies_db",
    "host": "127.0.0.1",
=======
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_KEY,
    "database": process.env.MYSQL_DBNAME,
    "host": process.env.MYSQL_HOST,
>>>>>>> c07dd0dc336f5ec59c42e6e9b17ac6b44cd1733a:app/config/config.js
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "dialect": "mysql",
    
    "use_env_variable": "JAWSDB_URL"
  }
}

