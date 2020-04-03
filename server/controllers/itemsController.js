
async function getItems(req, res) {
    const db = req.app.get('db')
    const items = await db.getItems();
    
    res.status(200).json(items)
}
module.exports = {
    getItems
}

