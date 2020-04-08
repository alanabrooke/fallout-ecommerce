require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const session = require('express-session')
const auth = require('./middleware/checkSessions');

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
const {getUser, register, login} = require('./controllers/authController')
const {deleteUser, editUser, logout} = require('./controllers/acctController')
const {getProducts, addProduct, editProduct, deleteProduct } = require('./controllers/productController')
const { cartCount, getCart, addToCart, removeFromCart, clearCart } = require('./controllers/cartController');

//auth 
app.get('/account', getUser )
app.post('/register', register);
app.post('/login', login);

//acct
app.put('/account/edit/${user_id}', editUser)
app.delete('/account/delete/${user_id}', deleteUser)
app.post('/account/logout', logout);

//vendor
app.post('/vendor/add', auth.usersOnly, auth.vendorsOnly, addProduct);
app.put('/vendor/edit/:product_id', auth.usersOnly, auth.vendorsOnly, editProduct);
app.delete('/vendor/delete/:product_id', auth.usersOnly, auth.vendorsOnly, deleteProduct)

//products
app.get('/products', getProducts )
app.post('/products', addProduct )

//cart
app.get('/cart/count', cartCount);
app.get('/cart/products', getCart);
app.post('/cart/add/:prod_id', addToCart);
app.delete('/cart/delete/:prod_id', removeFromCart);
app.delete('/cart/clear', clearCart);

////


    
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT} :)`))

