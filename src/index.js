const express = require('express');
const { calculatorRouter } = require('./calculator-srv/routes');
const app = express();

app.use('/calculator', calculatorRouter);

app.listen(3001);
console.log('Listening on Port 3001');