const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("activity", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        }, 

        name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      difficulty:{
        type: DataTypes.ENUM("1","2","3","4","5"),
        allowNull: false,
        },
        
      duration: {
        type: DataTypes.TIME,
        allowNull: false,
        // validate: {
        //   min: 1,
        //   max: 24,
          // isEven(value) {
          //   if (value < 1 || value > 24) {
          //     throw new Error("La duración debe ser de 1 a 24");
          //   }
        //   },
        // },
      },
      season: {
        type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
        allowNull: false,
      },
    },{timestamps: false
    });
  };
