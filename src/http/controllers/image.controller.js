import Query from '../../models/query.model'
import Image from '../../models/image.model'

const ImageController = {}
module.exports = ImageController

ImageController.index = async (ctx, next) => {
    const alias = ctx.params.alias

    const query = await Query.findOne({ where: { alias } })

    if (query === null) {
        throw new Error('Not find');
    }

    const images = await query.getImages();

    ctx.body = await ctx.render('image/index', { query, images})
}