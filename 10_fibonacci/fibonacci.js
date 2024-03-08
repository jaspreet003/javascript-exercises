const fibonacci = function (number) {

    let previousNumber = 0;
    let currentNumber = 1;
    let sum = 0;
    if (number == 1) {
        sum = 1
    } else if (number < 0) {
        sum = 'OOPS'
    } else {
        for (let i = 1; i < number; i++) {

            sum = previousNumber + currentNumber

            previousNumber = currentNumber;

            currentNumber = sum;
        }
    }
    return sum;
};



// Do not edit below this line
module.exports = fibonacci;
