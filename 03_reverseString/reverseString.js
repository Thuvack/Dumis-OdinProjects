const reverseString = function (strArg) {

    let newStr;
    const strArray = [];
    const strLen = strArg.length;

    for (let i = 0; i <= strLen; i++){
        strArray.push(strArg.charAt(strLen - i));
    }

    strArray.shift();

    newStr = strArray.join("");

    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
