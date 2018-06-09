module.exports = function (req, res, next) {
    'use strict';
    var err;
    console.log(req.session);
    if (req.session && req.session.loggedIn && req.session.lastDb) {
        return next();
    }

    err = new Error();
    err.status = 404; // 404 for more security

    next(err);
};
