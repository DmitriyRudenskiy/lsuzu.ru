import Mailer from '../../services/mailgun.service'

const MailController = {}
module.exports = MailController

MailController.send = async (ctx, next) => {

    console.log(ctx.request.body);

    const refer = ctx.request.get('Referrer') || ctx.headers.referrer || ctx.headers.referer
    const name = ctx.request.body.name
        .toString()
        .substr(0, 255)
        .trim()
    const phone = ctx.request.body.phone.toString().replace(/[^0-9]/g, '')

    const message =
        'Сайт: ' +
        refer +
        '\n\tЗаявка на просчёт\n\tИмя: ' +
        name +
        '\n\tТелефон: ' +
        phone

    Mailer(process.env.MAILGUN_ADMIN, 'Заявка с сайта', message)

    ctx.body = 'Ok';
}

MailController.form = async (ctx, next) => {
    const refer =
        ctx.get('Referrer') || ctx.headers.referrer || ctx.headers.referer
    const phone = ctx.request.body.phone.toString().replace(/[^0-9]/g, '')

    // Данные из формы
    const sparePart = ctx.request.body.spare_part || '>>>НЕ УКАЗАНО<<<'
    const city = ctx.request.body.city || '>>>НЕ УКАЗАНО<<<'
    const maker = ctx.request.body.maker || '>>>НЕ УКАЗАНО<<<'
    const model = ctx.request.body.model || '>>>НЕ УКАЗАНО<<<'
    const vin = ctx.request.body.vin || '>>>НЕ УКАЗАНО<<<'
    const year = ctx.request.body.year || '>>>НЕ УКАЗАНО<<<'

    // Text
    let text = '\tНазвание запчасти: ' + sparePart + '\n'
    text += '\tВ городе: ' + city + '\n'
    text += '\tМарка: ' + maker + '\n'
    text += '\tМодель: ' + model + '\n'
    text += '\tVin-code или Frame: ' + vin + '\n'
    text += '\tГод выпуска: ' + year + '\n'

    const message =
        'Сайт: ' +
        refer +
        '\n\tЗаявка c верхней формы\n\tСодержание: \n\n' +
        text +
        '\n\tТелефон: ' +
        phone

    Mailer(process.env.MAILGUN_ADMIN, '[Новая] Заявка с сайта', message)

    ctx.body = 'Ok';
}
