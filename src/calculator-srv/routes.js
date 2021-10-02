const { Router } = require('express');
const { makeCalculation } = require('./controller');

const router = Router();


router
    .route('/')
    .get(makeCalculation);


exports.calculatorRouter = router;