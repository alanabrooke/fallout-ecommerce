
const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200).json(req.session)
  }
  
  async function editUser(req, res) {
    const { email, username, address, phone, is_vendor,  } = req.body;
    const { user_id } = req.params;
    const db = req.app.get('db');
  
    const userCheck = await db.getUser(username);
    if (userCheck.length !== 0 && userCheck[0].username !== req.session.user.username){
      res.status(409).json('Username taken, please pick a new name and try again.');
    }
  
    await db.editUser(user_id, email, username, phone, address, password, is_vendor);
    req.session.user = { user: user_id, email, username, phone, address, is_vendor }
    res.status(200).json(req.session.user);
  }
  
  
  async function deleteUser(req, res) {
    const { user_id } = req.params;
    const db = req.app.get('db');
  
    await db.user.deleteUser(user_id);
    req.session.destroy();
    res.sendStatus(200);
  }
  
  module.exports = {
    logout,
    editUser,
    deleteUser
  }
  