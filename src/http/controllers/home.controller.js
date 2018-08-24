const HomeController = {}
module.exports = HomeController

HomeController.about = async (ctx, next) => {
    ctx.body = await ctx.render('home/about', {})
}

HomeController.contact = async (ctx, next) => {
    ctx.body = await ctx.render('home/contact', {})
}
