let numKeyBtn = document.getElementsByClassName('calKeyNumWrapper')[0];
var output = document.getElementById("scrTopLeft");
let currNum;

xStackDisp = document.getElementById("xStack");
yStackDisp = document.getElementById("yStack");
zStackDisp = document.getElementById("zStack");
wStackDisp = document.getElementById("wStack");

enterBtn = document.getElementById("ENTER");

let calSTack = [];
calSTack[0] = "";

let inpSTack = [];
inpSTack[0] = "";

// Initialize RPN Mode




function pushStack () {

    calSTack.push(currNum);
    
    let ArrLen = calSTack.length;

    console.log(ArrLen);

    if (ArrLen == 2) {

        xStackDisp.innerHTML = calSTack[1];
        yStackDisp.innerHTML = " .";
        zStackDisp.innerHTML = " .";
        wStackDisp.innerHTML = " .";

        //calSTack.pop();
        console.log("Im in if statement 1")

    } else if (ArrLen == 3) {

        xStackDisp.innerHTML = calSTack[2];
        yStackDisp.innerHTML = calSTack[1];
        zStackDisp.innerHTML = " ";
        wStackDisp.innerHTML = " ";

        console.log("Im in if statement 2")

    } else if (ArrLen == 4) {

        xStackDisp.innerHTML = calSTack[3];
        yStackDisp.innerHTML = calSTack[2];
        zStackDisp.innerHTML = calSTack[1];
        wStackDisp.innerHTML = " ";

        console.log("Im in if statement 3")

    } else if (ArrLen >= 5) {

        xStackDisp.innerHTML = calSTack[ArrLen-1];
        yStackDisp.innerHTML = calSTack[ArrLen-2];
        zStackDisp.innerHTML = calSTack[ArrLen-3];
        wStackDisp.innerHTML = calSTack[ArrLen-4];

        console.log("Im in if statement 4")

    }

    console.log(calSTack[1]);

    console.log(calSTack);

    inpSTack = [];
    inpSTack[0] = "";
}


function captUserInput (event) {

    // Get tagname of nummber key div that fired the event
    let numKey = event.target.id;

    console.log(numKey)

    if (numKey == "zeroNum") {

        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "0";
        inpSTack.push(currNum);

    } else if (numKey == "oneNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "1";
        inpSTack.push(currNum);

    } else if (numKey == "twoNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "2";
        inpSTack.push(currNum);

    } else if (numKey == "threeNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "3";
        inpSTack.push(currNum);

    } else if (numKey == "fourNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "4";
        inpSTack.push(currNum);

    } else if (numKey == "fiveNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "5";
        inpSTack.push(currNum);

    } else if (numKey == "sixNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "6";
        inpSTack.push(currNum);

    } else if (numKey == "sevenNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "7";
        inpSTack.push(currNum);

    } else if (numKey == "eightNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "8";
        inpSTack.push(currNum);

    } else if (numKey == "nineNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "9";
        inpSTack.push(currNum);
        
    } else if (numKey == "dotNum") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + ".";
        inpSTack.push(currNum);

    } else {

    }

    console.log(inpSTack);

    output.innerHTML = currNum;
}


// Event Listeners

numKeyBtn.addEventListener("click",captUserInput);


enterBtn.addEventListener("click",pushStack);