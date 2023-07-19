const db = require('../db/knexfile.js');

const getAdminByLogin = async (login) => {
  try {
    const admin = await db('admins').where({ login }).first();
    return admin;
  } catch (error) {
    console.error('Ошибка при получении админа из БД:', error);
    throw error;
  }
};

module.exports = getAdminByLogin;
