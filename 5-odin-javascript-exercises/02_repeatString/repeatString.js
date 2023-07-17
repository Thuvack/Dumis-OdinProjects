const repeatString = function(strArg,numRepeat) {
    
    const orinStr = strArg;

    if (numRepeat > 0) {

        for (let i=1; i < numRepeat; i++) {
            strArg = strArg + orinStr;
        }
    } else if (numRepeat == 0){
        strArg = "";
    } else {
        strArg = "ERROR";
    }
    return strArg;
};

// Do not edit below this line
module.exports = repeatString;
