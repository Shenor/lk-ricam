const keys = require('./../keys/index');

module.exports = function (id, name, legalAdress, leftDays) {
    return {
      to: keys.email_to,
      from: keys.email_from,
      subject: `"${name}" заканчивается ФН"`,
      html: `<div class="card-info">
            <h1>Клиент "${name}"</h1>
            <strong>Юридический адрес: </strong> <span>${legalAdress}</span>
            <p>Фискальный накопитель заканчивается через <b>${leftDays}</b> дн(ей/я).</p> 
            <hr>
            <br>
            <a href="http://lk.ricam.ru/user/${id}" 
            style="padding: 10px 15px; background: #ee6e73; color: #fff; text-decoration: none; border-radius: 5px;">Личный кабинет</a>
            </div>`
    };
}
