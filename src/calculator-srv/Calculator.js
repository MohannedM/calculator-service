class Calculator{
    constructor() {
        this.currentCalculation = '';
    }
    addItem(value) {
        const nonNumbers = ['+', '-', '/', '*', '(', ')'];
        // The '+' sign is being converted as a space when sent in the query parameter. So, this is a check to solve it by converting space into a plus sign.
        if (value === ' ') value = '+';
        const currentCalculationLength = this.currentCalculation.length;
        const valueToAdd = nonNumbers.includes(value) || nonNumbers.includes(this.currentCalculation[currentCalculationLength - 1]) ? ' ' + value : value;
        this.currentCalculation += valueToAdd;
    }
    constructCalculation(calculation) {
        for(let i = 0; i < calculation.length; i++) {
            this.addItem(calculation[i]);
        }
        return this.currentCalculation;
    }
    calculateResult(calculation) {
        try {
            this.constructCalculation(calculation);
            const result = eval(this.currentCalculation);
            return result;
        } catch(error) {
            throw error;
        }
    }
}

exports.Calculator = Calculator;