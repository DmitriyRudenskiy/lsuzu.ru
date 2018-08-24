import { Sequelize, sequelize } from './db'

module.exports = sequelize.define(
    'Image',
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        vendorId: {
            field: 'vendor_id',
            type: Sequelize.INTEGER,
        },
        visible: {
            type: Sequelize.INTEGER,
        },
        download: {
            type: Sequelize.INTEGER,
        },
        hash: {
            type: Sequelize.STRING,
        },
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        original: {
            type: Sequelize.STRING,
        },
        source: {
            type: Sequelize.STRING,
        },
    },
    {
        tableName: 'image',
        underscored: true,
        timestamps: false,
    }
)
