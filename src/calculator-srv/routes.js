const { Router } = require('express');
const { makeCalculation } = require('./controller');

const router = Router();


router.get('/', makeCalculation);


exports.calculatorRouter = router;