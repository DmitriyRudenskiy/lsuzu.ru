const HomeController = {}
module.exports = HomeController

HomeController.about = async (ctx, next) => {
    ctx.body = await ctx.render('home/about', { queries, page, pages })
}

HomeController.contact = async (ctx, next) => {
    ctx.body = await ctx.render('home/contact', {title: "Список", queries, page, pages })
}
