const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>

const CADENA_CONEXION = process.env.DATABASE_URL ||
    "postgresql://postgres:postgres@localhost:5432/postgres"

const sequelize = new Sequelize(CADENA_CONEXION, {
    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized : false
        }
    }
})

const usuario = sequelize.define("usuario", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(100),
        allowNull : false
    } ,
    apellido : {
        type : DataTypes.STRING(100),
        allowNull : false
    } 

}, {
    timestamps : false,
    freezeTableName : true
})


module.exports = {
    usuario 
}