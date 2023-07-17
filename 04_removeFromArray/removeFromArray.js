const removeFromArray = function(arrayArg,...remArg) {

    let result;
    remArgArray = [];

    for (let i = 0; i < remArg.length; i++ ) {

        let j;

        j = arrayArg.indexOf(remArg[i]);
        
        if (j == -1) {

            console.log(remArg[i]+" is not in the array. Skipping");

        } else {

        arrayArg.splice(arrayArg.indexOf(remArg[i]), 1);

        }
    }

    return arrayArg;
};

// Do not edit below this line
module.exports = removeFromArray;
