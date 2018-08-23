import Query from '../../models/query.model'

const ImageController = {}
module.exports = ImageController

ImageController.index = async (ctx, next) => {
    let limit = 50
    let page = req.params.page
    let offset = limit * (page - 1)
    let pages = Math.ceil(data.count / limit)

    const queries = await Query.findAll({ limit, offset })

    ctx.body = await ctx.render('catalog/index', { queries, page, pages })
}

ImageController.view = async (ctx, next) => {
    ctx.body = await ctx.render('catalog/index', { queries, page, pages })
}
