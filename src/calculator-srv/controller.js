const { Calculator } = require('./Calculator');

exports.makeCalculation = (req, res, next) => {
    const calculator = new Calculator();
    let { expression } = req.query;
    try {
        const result = calculator.calculateResult(expression);
        expression = calculator.currentCalculation;
        res.status(200).json({ expression, result });
    } catch (error) {
        expression = calculator.constructCalculation(expression)
        res.status(400).json({ expression, error: error.message });
    }
}