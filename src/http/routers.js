import HomeController from './controllers/home.controller'
import ImageController from './controllers/image.controller'
import MailController from './controllers/mail.controller'
import QueryController from './controllers/query.controller'
import Router from 'koa-router'

const router = Router()
module.exports = router

router.get('/', QueryController.index)
router.get('/page/:page', QueryController.index)
router.get('/about', HomeController.about)
router.get('/contact', HomeController.contact)
router.get('/gallery', ImageController.index)
router.get('/gallery/:alias.html', ImageController.index)
router.get('/gallery/view/:id', ImageController.view)
router.post('/mail/send', MailController.send)
router.post('/mail/form', MailController.form)
