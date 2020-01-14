module.exports = function(sequelize, DataTypes) {
    //USER TABLE 
    var Media = sequelize.define("Media", {
      media_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 1,
            msg: "Movie must be at least 1 character long"
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:{
            args: 100,
            msg: "Description must be at least 100 characters long"
          }
          
        }
      },
      release_yr:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          len:{
            args: 4,
            msg: "Year must be valid"
          }
        }
      },
      createrID:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }   

    });
    return Media;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
};