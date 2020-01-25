  
/* /models/user.js */

// Require all the stuff
var Sequelize = require('sequelize');
var passportLocalSequelize = require('passport-local-sequelize');
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../config/config.json')[env];

// Setup sequelize db connection
var sequelize = new Sequelize(config.database, config.username, config.password, config);


    

    //USER TABLE 
    var User = passportLocalSequelize.defineUser(sequelize, {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args:[4,12],
            msg: "Username must be between 4 and 12 characters long"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:{
            args: 8,
            msg: "Password must be at least 8 characters long"
          }
          
        }
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          len:{
            args: 6,
            msg: "Email must be at least 6 characters long"
          },
          isEmail:{
            msg: "Email must be valid"
          }
        }
      }
           

    });
  module.exports = User;
 