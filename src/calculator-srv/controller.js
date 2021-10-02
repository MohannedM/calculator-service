const { Calculator } = require('./Calculator');

exports.makeCalculation = (req, res, next) => {
    let { expression } = req.query;
    if (!expression) return res.status(400).json({ error: 'Please add an "expression" query parameter'});
    const calculator = new Calculator();
    try {
        const result = calculator.calculateResult(expression);
        expression = calculator.currentCalculation;
        res.status(200).json({ expression, result });
    } catch (error) {
        expression = calculator.constructCalculation(expression)
        res.status(400).json({ expression, error: error.message });
    }
}