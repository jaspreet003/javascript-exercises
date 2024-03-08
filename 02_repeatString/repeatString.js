const repeatString = function (strValue, noOfRepeation) {

    let result = "";

    if (noOfRepeation > 0) {
        for (let i = 0; i < noOfRepeation; i++) {

            result = result + strValue;

        }
    } else if (noOfRepeation < 0) {
        result = "ERROR";
    } else {
        result = "";
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
