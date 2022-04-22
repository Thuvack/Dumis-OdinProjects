let numKeyBtn = document.getElementsByClassName('calKeyNumWrapper')[0];
var output = document.getElementById("scrTopLeft");
let currNum;

xStackDisp = document.getElementById("xStack");
yStackDisp = document.getElementById("yStack");
zStackDisp = document.getElementById("zStack");
wStackDisp = document.getElementById("wStack");


equalBtn = document.getElementById("equalKey");

enterBtn = document.getElementById("ENTER");

clearBtn = document.getElementById("onK");

let operandTwoKeyBtn = document.getElementsByClassName('calKeyOp2Wrapper')[0];


let calSTack = [];
calSTack[0] = "";

let inpSTack = [];
inpSTack[0] = "";

let calMode = "RPN"

// Initialize RPN Mode

function initCalc () {

    if (calMode == "ALG") {

        enterBtn.style.display = "none";

    } else {

        equalBtn.style.display = "none";

    }
    

}

function dispSTack () {

    let ArrLen = calSTack.length;

    console.log(ArrLen);

    if (ArrLen == 2) {

        xStackDisp.innerHTML = calSTack[1];
        yStackDisp.innerHTML = " ";
        zStackDisp.innerHTML = " ";
        wStackDisp.innerHTML = " ";

    } else if (ArrLen == 3) {

        xStackDisp.innerHTML = calSTack[2];
        yStackDisp.innerHTML = calSTack[1];
        zStackDisp.innerHTML = " ";
        wStackDisp.innerHTML = " ";

    } else if (ArrLen == 4) {

        xStackDisp.innerHTML = calSTack[3];
        yStackDisp.innerHTML = calSTack[2];
        zStackDisp.innerHTML = calSTack[1];
        wStackDisp.innerHTML = " ";

    } else if (ArrLen >= 5) {

        xStackDisp.innerHTML = calSTack[ArrLen-1];
        yStackDisp.innerHTML = calSTack[ArrLen-2];
        zStackDisp.innerHTML = calSTack[ArrLen-3];
        wStackDisp.innerHTML = calSTack[ArrLen-4];

    } else {


    }

}


function pushStack () {

    if (calSTack.length <= 1) {

        calSTack.push(currNum);

    } else if (calSTack.length >= 2) {

        //calSTack.push(currNum);

    }
    
    dispSTack ();

    inpSTack = [];
    inpSTack[0] = "";
}


function captUserInput (event) {

    // Get tagname of nummber key div that fired the event
    let numKey = event.target.id;

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
    
    if (calSTack.length <= 1) {

        //calSTack.push(currNum);

    } else if (calSTack.length >= 2) {

        calSTack.push(currNum);

    }
    

    output.innerHTML = currNum;
}


function operate (event) {

    // Get tagname of nummber key div that fired the event
    let opKey = event.target.id;

    let numRight = calSTack.pop();
    let numLeft = calSTack.pop();

    if (opKey == "divideK") {

        let numDivident = numLeft/numRight;

        numDivident = numDivident.toFixed(2);

        calSTack.push(numDivident);

        output.innerHTML = numDivident;

    } else if (opKey == "multiplyK") {

        let numProduct = numLeft*numRight;

        calSTack.push(numProduct);

        output.innerHTML = numProduct;

    } else if (opKey == "subtractK") {

        let numDifference = numLeft - numRight;

        calSTack.push(numDifference);

        output.innerHTML = numDifference;

    } else if (opKey == "addK") {

        let numSum = parseInt(numLeft)+parseInt(numRight);

        calSTack.push(numSum);

        output.innerHTML = numSum;

    } else {


    }

    dispSTack ();

    inpSTack = [];
    inpSTack[0] = "";

}

function clearStack () {

    inpSTack = [];
    inpSTack[0] = "";

    calSTack = [];
    calSTack[0] = "";

    output.innerHTML = 0;

    xStackDisp.innerHTML = " ";
    yStackDisp.innerHTML = " ";
    zStackDisp.innerHTML = " ";
    wStackDisp.innerHTML = " ";

}

// Event Listeners

initCalc ();

numKeyBtn.addEventListener("click",captUserInput);

enterBtn.addEventListener("click",pushStack);

operandTwoKeyBtn.addEventListener("click",operate);

clearBtn.addEventListener("click",clearStack);