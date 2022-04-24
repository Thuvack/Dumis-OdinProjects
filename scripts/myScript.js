// This is an implementation of an RPN scientific calculator

// Screen display elements
var infixCapt = document.getElementById("scrTopLeftIn");
var output = document.getElementById("scrTopLeft");

calcLogo = document.getElementsByClassName('Logo-text3')[0];

xStackDisp = document.getElementById("xStack");
yStackDisp = document.getElementById("yStack");
zStackDisp = document.getElementById("zStack");
wStackDisp = document.getElementById("wStack");

funcDisp1 = document.getElementById("scrBottomLeft");
funcDisp2 = document.getElementById("scrBottomRight");

// Define numeric button container
let numKeyBtn = document.getElementsByClassName('calKeyNumWrapper')[0];

// Operator buttons
let operandTwoKeyBtn = document.getElementsByClassName('calKeyOp2Wrapper')[0];

equalBtn = document.getElementById("equalKey");

enterBtn = document.getElementById("ENTER");

clearBtn = document.getElementById("onK");

shiftBtn = document.getElementById("shiftK");

modeBtn = document.getElementById("stdMode");

opBracBtn = document.getElementById("opBracKey");

// Scientific Operator buttons


// Calculator flags
let numCaptFlag = "Ready";
let shiftFlag = "Off";

let calSTack = [];
calSTack[0] = "";
calSTack.pop();

let inpSTack = [];
inpSTack[0] = "";

let calMode = "RPN"

let currNum;
let opResult;


// Initialize RPN Mode

function initCalc () {

    if (shiftFlag == "On") {

        calMode = "ALG";

        enterBtn.style.display = "none";
        equalBtn.style.display = "flex";
        calcLogo.style.display = "none";

        shiftFlag = "Off";

    } else {

        calMode = "RPN"

        equalBtn.style.display = "none";
        enterBtn.style.display = "flex";
        calcLogo.style.display = "flex";

    }
    
    clearStack();

    console.log(calMode)

}

function dispSTack () {

    // Display the latest 4 numbers in the stack
    let ArrLen = calSTack.length;

    if (ArrLen == 1) {

        xStackDisp.innerHTML = calSTack[0];
        yStackDisp.innerHTML = " ";
        zStackDisp.innerHTML = " ";
        wStackDisp.innerHTML = " ";

    } else if (ArrLen == 2) {

        xStackDisp.innerHTML = calSTack[1];
        yStackDisp.innerHTML = calSTack[0];
        zStackDisp.innerHTML = " ";
        wStackDisp.innerHTML = " ";

    } else if (ArrLen == 3) {

        xStackDisp.innerHTML = calSTack[2];
        yStackDisp.innerHTML = calSTack[1];
        zStackDisp.innerHTML = calSTack[0];
        wStackDisp.innerHTML = " ";

    } else if (ArrLen >= 4) {

        xStackDisp.innerHTML = calSTack[ArrLen-1];
        yStackDisp.innerHTML = calSTack[ArrLen-2];
        zStackDisp.innerHTML = calSTack[ArrLen-3];
        wStackDisp.innerHTML = calSTack[ArrLen-4];

    } else {

        // Do nothing

    }

}


function pushStack () {

    // Check if user has input a number
    if (numCaptFlag == "Done") {

        // Push captured number into stack
        calSTack.push(currNum);

        // Update stack display
        dispSTack ();

        // Reset input stack
        inpSTack = [];
        inpSTack[0] = "";

        // Unset number capture flag
        numCaptFlag = "Ready"

    } else {
        
        // DO nothing

    }
    
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

    } else if (numKey == "divideK") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "÷";
        inpSTack.push(currNum);

    } else if (numKey == "multiplyK") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "x";
        inpSTack.push(currNum);

    } else if (numKey == "subtractK") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "-";
        inpSTack.push(currNum);

    } else if (numKey == "addK") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        currNum = stackVal + "+";
        inpSTack.push(currNum);

    } else if (numKey == "opBrac") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        if (shiftFlag == "Off") {

            currNum = stackVal + "(";

        } else {

            currNum = stackVal + ")";
            shiftFlag = "Off"

        }
        
        inpSTack.push(currNum);

    } else {

    }

    // Display captured number
    if (calMode == "RPN") {

        output.innerHTML = currNum;

    } else {

        infixCapt.innerHTML = currNum;

    }
    

    // Set number capture flag to complete
    numCaptFlag = "Done";

    // Display the stack
    dispSTack ();
    
}

function operate (arg1, arg2, opKey) {

    let numLeft = arg1;
    let numRight = arg2;
    let _operand = opKey;

    // Perform operations
    if (_operand == "divideK") {

        opResult = parseFloat(numLeft)/parseFloat(numRight);

        opResult = opResult.toFixed(2);

    } else if (_operand == "multiplyK") {

        opResult = parseFloat(numLeft)*parseFloat(numRight);

        opResult = opResult.toFixed(2);

    } else if (_operand == "subtractK") {

        opResult = parseFloat(numLeft) - parseFloat(numRight);

        opResult = opResult.toFixed(2);

    } else if (_operand == "addK") {

        opResult = parseFloat(numLeft)+parseFloat(numRight);

        opResult = opResult.toFixed(2);

    } else {


    }

    return opResult;
}

function opHandleRPN (event) {

    // Check if user is done entering number 
    if (numCaptFlag == "Done") {

        // Push number that has been captured into stack
        calSTack.push(currNum);

        // Unset number capture flag
        numCaptFlag = "Ready";

    } else {

        // Operate numbers in the existing stack
    }
    
    // Get tagname of nummber key div that fired the event
    let opKey = event.target.id;

    // Get numbers to be operated on from the stack
    let numRight = calSTack.pop();
    let numLeft = calSTack.pop();

    operate (numLeft, numRight, opKey);

    // Push result into stack and display
    calSTack.push(opResult);

    output.innerHTML = opResult;

    // Update stack display
    dispSTack ();

    // Clear number input stack
    inpSTack = [];
    inpSTack[0] = "";

}

function clearStack () {

    // Clear number input stack
    inpSTack = [];
    inpSTack[0] = "";

    // Clear calculator stack
    calSTack = [];
    calSTack[0] = "";
    calSTack.pop();

    // Clear stack displays
    xStackDisp.innerHTML = " ";
    yStackDisp.innerHTML = " ";
    zStackDisp.innerHTML = " ";
    wStackDisp.innerHTML = " ";

    // Check if the shoft button is on

    if (shiftFlag == "On") {

        // Clear calculator display
        output.innerHTML = " ";
        infixCapt.innerHTML = " ";

        // Switch off function displays
        funcDisp1.style.display = "none";
        funcDisp2.style.display = "none";

        // Reset shift flag
        shiftFlag = "Off";

    } else {

        // Reset calculator display to zero
        output.innerHTML = 0;
        infixCapt.innerHTML = " ";

        // Switch off function displays
        funcDisp1.style.display = "flex";
        funcDisp2.style.display = "flex";

    }
    

}


// Initiate calculator
initCalc ();

// Event Listeners
modeBtn.addEventListener("click",initCalc);

numKeyBtn.addEventListener("click",captUserInput);

enterBtn.addEventListener("click",pushStack);

clearBtn.addEventListener("click",clearStack);

shiftBtn.addEventListener("click", ()=>{shiftFlag = "On";});

opBracBtn.addEventListener("click",(e)=>{
        
    if (calMode == "ALG") {

        this.captUserInput(e);

    } else {
        // Do nothing
    }

})

 operandTwoKeyBtn.addEventListener("click",(e)=>{
        
    if (calMode == "ALG") {

        this.captUserInput(e);

    } else {

        this.opHandleRPN(e);
    
    }

});

