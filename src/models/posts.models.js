const db = require('../utils/database');

const { DataTypes } = require('sequelize');

const Posts = db.define('posts',{

    id:{
        type: DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },
    content:{
        type: DataTypes.STRING,
        allowNull:false
    },
    userName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    isPublished:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    }


})

module.exports = Posts