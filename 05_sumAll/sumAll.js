const sumAll = function (num1, num2) {

    let result = 0;

    let startNum = 0;
    let endNum = 0;

    if (typeof num1 === 'number' && typeof num2 === 'number' && num1 >= 0 && num2 >= 0) {

        if (num1 > num2) {
            startNum = num2;
            endNum = num1;
        } else if (num1 < num2) {
            startNum = num1;
            endNum = num2;
        } else {
            result = startNum;
        }

        for (let i = startNum; i <= endNum; i++) {
            result += i;
        }

    } else {
        result = 'ERROR';
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
