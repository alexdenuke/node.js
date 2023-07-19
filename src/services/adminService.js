const getAdminByLogin = require('../repositories/adminRepository.js');
const bcrypt = require('bcrypt');

const getAdmin = async (login, password) => {
  const admin = await getAdminByLogin(login);
  console.log('Admin found:', admin);
  if (admin && await bcrypt.compare(password, admin.password)) {
    console.log('Password matches');
    return admin;
  }
  console.log('Password does not match or admin not found');
  return null;
};

module.exports = getAdmin ;