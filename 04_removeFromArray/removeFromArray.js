const removeFromArray = function (arr, valueToRemove) {

    let resultArr = [];
    let arrOfValueToRemove = "";
    arrOfValueToRemove = valueToRemove;

    console.log(typeof valueToRemove, valueToRemove);

    if (arr.includes(',')) {
        arrOfValueToRemove = valueToRemove.split(',');
    }
    console.log(arrOfValueToRemove);

    // for (let i = 0; i < arr.length; i++) {
    //     // console.log(i, arr[i]);

    //     if (arr[i] === valueToRemove) {
    //         // console.log(arr, valueToRemove)
    //         resultArr = arr.toSpliced(i, 1);
    //         // console.log(resultArr)

    //     }

    // }

    // return resultArr;
};

removeFromArray([1, 2, 3], 3, 4);

// Do not edit below this line
//module.exports = removeFromArray;
