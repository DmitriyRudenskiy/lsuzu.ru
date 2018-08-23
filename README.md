Установка
=========

npm install -g jshint 
npm install -g phantomjs
npm install -g supervisor

// Поиск утечек памяти 
npm install -g memwatch


Запуск приложения
=================

npm install
gulp build
supervisor bin/server.js

Запуск тестов
=============

npm test

Нужно зарегистрироваться
========================

https://blogs.yandex.ru/add.xml
http://rssreader.ru/addfeed


Лента новостей
==============

<link rel=start href="https://davidwalsh.name/" title="David Walsh Blog">
<link rel=alternate type="application/atom+xml" title="David Walsh Blog Atom Feed" href="https://davidwalsh.name/feed/atom">
<link rel=alternate type="application/rss+xml" title="David Walsh Blog RSS 2.0 Feed" href="https://davidwalsh.name/feed">
<link rel=alternate type=text/xml title="David Walsh Blog RSS 0.92 Feed" href="https://davidwalsh.name/feed/rss">


XML
===

npm install xml

var xml = require('xml');
var xmlString = xml(xmlObject, options);


Почта
=====

npm install nodemailer --save

var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'user@gmail.com',
        pass: 'pass'
    }
};

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// verify connection configuration
transporter.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

session - сессия
================

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'foo',
    store: new MongoStore(options)
}));

Работа с изображениями
======================

npm install gm

const fs = require('fs');
const gm = require('gm');

// resize and remove EXIF profile data
gm('/path/to/my/img.jpg')
.resize(240, 240)
.noProfile()
.write('/path/to/resize.png', function (err) {
  if (!err) console.log('done');
});

# автоматически исправляет простые ошибки в коде
npm install gulp-fixmyjs --save-dev

gulp.src("./src/*.js")
    .pipe(fixmyjs({
        // JSHint settings here
    }))
    .pipe(gulp.dest("./src"));

# для поиска дубликатов в коде.
npm install gulp-jscpd --save-dev

gulp.task('jscpd', function() {
  return gulp.src('**/*.js')
    .pipe(jscpd({
      'min-lines': 10,
      verbose    : true
    }));
});


Тестирование
============

jasmine JASMINE_CONFIG_PATH=spec/support/jasmine.json spec/hello-world.spec.js


//

CREATE TABLE `image` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `vendor_id` int(10) unsigned NOT NULL,
  `hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `original` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `source` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `download` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `image_hash_unique` (`hash`),
  KEY `image_visible_index` (`visible`),
  KEY `image_download_index` (`download`)
) ENGINE=InnoDB AUTO_INCREMENT=38148 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `query` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `source_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `alias` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `query_name_unique` (`name`),
  UNIQUE KEY `query_alias_unique` (`alias`),
  KEY `query_source_id_foreign` (`source_id`),
  KEY `query_visible_index` (`visible`),
  CONSTRAINT `query_source_id_foreign` FOREIGN KEY (`source_id`) REFERENCES `source` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30101 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE `query_image` (
  `query_id` int(10) unsigned NOT NULL,
  `image_id` int(10) unsigned NOT NULL,
  `is_unique` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`query_id`,`image_id`),
  KEY `query_image_image_id_foreign` (`image_id`),
  CONSTRAINT `query_image_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `image` (`id`),
  CONSTRAINT `query_image_query_id_foreign` FOREIGN KEY (`query_id`) REFERENCES `query` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

