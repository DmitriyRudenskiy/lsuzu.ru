import { Sequelize, sequelize } from './db'

module.exports = sequelize.define(
    'Query',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        visible: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        alias: {
            type: Sequelize.STRING,
        },
    },
    {
        tableName: 'query',
        underscored: true,
        timestamps: false,
    }
)
