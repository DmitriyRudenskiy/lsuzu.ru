import Query from '../../models/query.model'

const QueryController = {}
module.exports = QueryController

QueryController.index = async (ctx, next) => {
    const limit = 25
    const page = ctx.params.page || 1
    const offset = limit * (page - 1)

    const queries = await Query.findAndCountAll({ offset, limit })
    const pages = Math.ceil(queries.count / limit)

    console.log(queries);

    ctx.body = await ctx.render('query/index', {"title": "Список", list: queries.rows, page, pages })
}
