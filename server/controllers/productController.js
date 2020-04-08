const getProducts = async (req, res) => {
    const db = req.app.get('db');

    const allProducts = await db.getProducts();
    // console.log(allProducts)
    res.status(200).json(allProducts);
}

const getProduct = async (req, res) => {
    const db = req.app.get('db');

    const oneProduct = await db.getProduct(req.params.prod_id)
    res.status(200).json(oneProduct[0])
}

const addProduct = async (req, res) => {
    const db = req.app.get('db');
    const { prod_name, prod_desc, prod_price, user_id } = req.body;

    const addedProducts = await db.addProduct(prod_name, prod_desc, prod_price, user_id);
    res.status(200).json(addedProducts);
}

const editProduct = async (req, res) => {
    const db = req.app.get('db');
    const prod_id  = req.params.prod_id;
    const { prod_name, prod_desc, prod_price, user_id } = req.body;
    console.log(req.params, req.body)

    const updatedItems = await db.editProduct(prod_id, prod_name, prod_desc, prod_price, user_id);
    res.status(200).json(updatedItems);
}

const deleteProduct = async (req, res) => {
    const db = req.app.get('db');
    const { prod_id } = req.params;

    const products = await db.deleteProduct(prod_id);
    res.status(200).json(products);
}

module.exports= {
    getProducts,
    getProduct,
    addProduct,
    editProduct,
    deleteProduct
}
// async function newProduct(req,res) {
//     const db = req.app.get('db');
//     let {prod_name, prod_desc, prod_price, user_id} = req.body;

//     // const result = await db.getProducts(prod_name);

//     const newPost = await db.newProduct([prod_name, prod_desc, prod_price, req.session.user.user_id])
//     .catch(() => {
//         res.status(501).json('Failed to add Product');

//     let {newPost} = newProduct[0]
//     await db.getProducts(newPost, req.session.user.user_id)

//     res.status(200).json(req.body)
// }
// }

// module.exports = { 
//     getProducts,
//     newProduct
// }

