var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;


// Verificar token--- middleware

exports.verificaToken = function(req, res, next) {

    var token = req.query.token; // resiviendo el token por el url

    jwt.verify(token, SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }

        req.usuario = decoded.usuario;

        next();
        /*return res.status(200).json({
            ok: true,
            decoded: decoded
        });*/
    });
}