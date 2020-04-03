require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const session = require('express-session')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;



massive(CONNECTION_STRING)
.then(db => {
    app.set('db',db)
})
.catch(err =>  {
    console.log(err)
})

app.use(
    session({
        saveUninitialized: true,
        resave: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 60 * 60 * 24 * 7 * 13
        }
    })
    )
    app.use(express.json())

////ENDPOINTS////

//controllers
const auth = require('./controllers/authController')
const acct = require('./controllers/acctController')
const {getItems} = require('./controllers/itemsController')

//auth 
app.get('/user', auth.getUser )
app.post('/register', auth.register);
app.post('/login', auth.login);

//acct
app.put('/account/edit/${user_id}', acct.editUser)
app.delete('/account/delete/${user_id}', acct.deleteUser)
app.post('/account/logout', acct.logout);

//items
app.get('/items', getItems )

////


    
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT} :)`))

