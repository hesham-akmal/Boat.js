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
			
			/*if(req.body.f == "-1")
			{
                (async () => {res.send(await publicIp.v4()); })();
			}
            else
            {*/
                vals = [req.body.f,req.body.r,req.body.l]
                console.log(vals)
                res.send('s')
           // }
        });

    app.use('/vals', router);
};

module.exports = getPersonRoutes;

function vals_zeroed() {
  vals = zerovals
}

setInterval(vals_zeroed, 5000);