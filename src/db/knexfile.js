// Update with your config settings.
const knex = require('knex');
const path = require('path'); // добавьте эту строку
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexConfig = {
  client: 'postgres',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'zombi119',
    database: 'oilmarketpd'
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, './migrations') // Путь до папки с миграциями
  },
};

const db = knex(knexConfig);

module.exports = db;
