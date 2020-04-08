module.exports = {
    usersOnly: (req, res, next) => {
        if(!req.session.user) {
            return res.status(401).send('Please log in');
        }
        next();
    },
    vendorsOnly: (req, res, next) => {
        if(!req.session.user.is_vendor) {
            return res.status(403)
        }
        next();
    }
}