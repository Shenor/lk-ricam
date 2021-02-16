module.exports = function headers(req, res, next) {

    // Сайт, к которому вы хотите подключиться
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // http://lk.ricam.ru | http://localhost:3000

    // Request vетоды, которые вы хотите разрешить
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request заголовков, которые вы хотите разрешить
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    //  Установите значение true, если вам нужно, чтобы веб-сайт включал файлы cookie в отправленные запросы.
    // к API (например, если вы используете сеансы)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Перейти к следующему слою промежуточного программного обеспечения
    next();
}