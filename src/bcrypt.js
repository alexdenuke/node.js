const bcrypt = require('bcrypt');

const password = 'root12345';  // замените 'yourPassword' на пароль, который вы хотите захешировать
const saltRounds = 10; // укажите количество раундов генерации соли

const bcryptCheck = bcrypt.hash(password, saltRounds, function(err, hash) {
  // обработка ошибок
  if (err) {
    console.error(err);
    return;
  }
  
  // вывод хеша пароля в консоль
  console.log(hash);
});

module.exports = bcryptCheck;