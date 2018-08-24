import Query from '../../models/query.model'
import Image from '../../models/image.model'

const ImageController = {}
module.exports = ImageController

ImageController.index = async (ctx, next) => {
    const alias = ctx.params.alias

    const query = await Query.findOne({ where: { alias } })

    if (!query) {
        throw new Error('Not find')
    }

    const images = await query.getImages({ download: 1 })

    ctx.body = await ctx.render('image/index', { query, images })
}

ImageController.view = async (ctx, next) => {
    const id = ctx.params.id
    const image = await Image.findById(id)

    if (!image) {
        throw new Error('Not find')
    }

    ctx.body = await ctx.render('image/view', { image })
}
