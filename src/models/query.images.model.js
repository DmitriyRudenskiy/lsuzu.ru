import { Sequelize, sequelize } from './db'

const QueryImage = sequelize.define(
    'QueryImage',
    {
        query_id: {
            type: Sequelize.INTEGER,
        },
        image_id: {
            type: Sequelize.INTEGER,
        },
    },
    {
        tableName: 'query_image',
        underscored: true,
        timestamps: false,
    }
)

module.exports = QueryImage
