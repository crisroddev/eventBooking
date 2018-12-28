const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON bodys
app.use(bodyParser.json());

//Parametros: req(request), res(response), next
app.get('/', (req, res, next) => {
    res.send('Hello Wold!!!');
})

//Port Listen
app.listen(3000)
