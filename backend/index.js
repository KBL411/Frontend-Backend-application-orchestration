const PORT = 3000;
const HOST = 'localhost';

const express = require('express');

const app = express();

const session = require('express-session');

    app.use(
        session({
            secret: 'secret string',
            resave: false,
            saveUnitialized: false,
            cookies :{}
        })
    );

    app.get('/', function(req, res) {
        if(!req.session.pageCountcurrent)
            req.session.pageCountcurrent = 0;
        req.session.pageCountcurrent++;
        res.send({
            pageCount: req.session.pageCountcurrent
        });
    });


app.listen(PORT, () => {
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
    });