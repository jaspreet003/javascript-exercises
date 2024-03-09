const getTheTitles = function (arr) {
    let arrOfTitles = arr.map((obj, index) => {
        return arr[index].title;
    })

    return arrOfTitles;
};


// Do not edit below this line
module.exports = getTheTitles;
