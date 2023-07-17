const sumAll = function(arg1,arg2) {

    let startNum;
    let endNum;
    let sumNum = 0;
    let iter;

    console.log(typeof arg1);
    console.log(typeof arg2);


    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
        sumNum = "ERROR";
        console.log("Arg is not a number type");
    } else if ( Math.sign(arg1) === -1 || Math.sign(arg2) === -1 ){
        //Negative numbers
        sumNum = "ERROR";
        console.log("Arg is a negative number");
    } else {
       
        if (arg1 <= arg2 ) {
            startNum = arg1;
            endNum = arg2;
            iter = endNum - startNum;
    
        } else {
            startNum = arg2;
            endNum = arg1;
            iter = endNum - startNum;
        }
    
            for (let i = 0; i <= iter; i++) {
            
                sumNum = sumNum + startNum++;
            
            }
    }

    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
