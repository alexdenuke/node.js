const adminService = require('../services/adminService.js');


const login = async (req, res) => {
  const { login, password } = req.body;
  try {
    const admin = await adminService(login, password);
    if (admin) {
      // Создайте здесь сессию или JWT, и отправьте его обратно клиенту.
      res.json({ message: "Admin logged in" });
    } else {
      res.status(401).json({ message: "Invalid login or password" });
    }
  } catch (error) {
    console.error(error); // Добавьте эту строку для вывода ошибки в консоль.
    res.status(500).json({ message: error.message });
  }
};

module.exports = login ;