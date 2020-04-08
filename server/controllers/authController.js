require('dotenv').config();
const bcrypt = require('bcryptjs');



///LOGIN
async function login(req, res) {
  const { username, password } = req.body;
  const db = req.app.get('db');
  
  
  const foundUser = await db.getUser(username);
  if (foundUser.length === 0) {
    return res.status(409).json('User not found. Please register as a new user before logging in.');
    
  } else {
    const user = await bcrypt.compareSync(password, foundUser[0].password);
    req.session.user = { user_id: user.user_id, email: user.email, username: user.username, phone: user.phone, address: user.address, is_vendor: user.is_vendor};
    res.status(200).json(req.session.user);
  }
}


// REGISTER
let register = async (req, res) => {
  let { email, username, phone, address, password, is_vendor } = req.body;
  let db = req.app.get('db');

  let salt = bcrypt.genSaltSync(12);
  let hash = bcrypt.hashSync(password, salt);

  const result = await db.registerUser([email, username, phone, address, hash, is_vendor])
 .then(() => {
  res.sendStatus(200)
  console.log('registered')
}).catch(error => {
   console.log(error)
 })
}

//GET
async function getUser(req, res) {
  if (req.session.user) {
      res.status(200).json(req.session.user)
  } else {
      res.sendStatus(404).json('User does not exist')
  }
}

// async function register(req,res) {
//     const {email, username, phone, address, password, is_vendor } = req.body;
//     const db = req.app.get('db');


//     const result = await db.getUser(username);
//     if (result.length !== 0) {
//       return res.status(409).json('Username taken. Please try again.');
//     }
    

//     const hash = await bcrypt.hashSync(password, 10)
//     console.log(hash)
//     const registeredUser = await db.registerUser(email, username, phone, address, hash, is_vendor);
//     const user = registeredUser[0];
//     req.session.user = { user_id: user.user_id, email: user.email, username: user.username, phone: user.phone, address: user.address,
//     is_vendor: user.is_vendor }
//     res.status(201).json(req.session.user);
    
//     }


module.exports = {
        register,
        login,
        getUser
    }