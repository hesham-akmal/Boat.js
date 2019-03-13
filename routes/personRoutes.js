'use strict';

const Router = require('express');

var zerovals = ["0.0","0.0","0.0"]
var vals = zerovals

const getPersonRoutes = (app) => {
    const router = new Router();

    router
        .get('/', (req, res) => {
			console.log("Get!")
            res.send(vals)
        })
        .post('/', (req, res) => {
                vals = [req.body.f,req.body.r,req.body.l]
                res.send('s')
        });

    app.use('/vals', router);
};
module.exports = getPersonRoutes;