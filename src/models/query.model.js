import { Sequelize, sequelize } from './db'

import Image from './image.model'
import QueryImage from './query.images.model'

const Query = sequelize.define(
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

/*
Query.belongsToMany(Image, {
    as: 'images',
    through: 'query_image',
    foreignKey: 'query_id',
    otherKey: 'image_id',
})
*/



Query.belongsToMany(Image, {
    through: {
        model: QueryImage,
        unique: false
    },
    foreignKey: 'query_id',
    otherKey: 'image_id',
    constraints: false
});

module.exports = Query

/*
Post.belongsToMany(Tag, {
    through: {
        model: QueryImage,
        unique: false,
        scope: {
            taggable: 'post'
        }
    },
    foreignKey: 'taggable_id',
    constraints: false
});
*/