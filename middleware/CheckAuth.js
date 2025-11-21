module.exports = function CheckAuth(req, res, next) {
    if (!req.session.userid) {
        res.redirect('/login');
        return
    }
    next();
}