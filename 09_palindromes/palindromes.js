const palindromes = function (value) {

    let clearString = value.replace(/[^a-zA-Z0-9]/g, '');

    return clearString.split('').reverse().join('').toUpperCase() === clearString.toUpperCase() ? true : false;

};


// Do not edit below this line
module.exports = palindromes;
