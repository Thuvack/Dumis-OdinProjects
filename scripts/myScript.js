/* Shunting yard Algorithm

    While there are tokens to read:
        Read a toke
            If its a number add it to the output queue
            If its an operator

                While there's an operator on top of operator stack with greater precedence:
                    Pop operators from the stack onto output queue

                Push current operator onto stack

            If its a left (Openning bracket), push into stack
            If its a right (Closing bracket):
                While there is not a left bracket at the top of the stack
                    Pop operators from stack onto the output queue

                Pop the left bracket from stack and discard

    While there are operators on the stack, pop them and push into output queue

    */
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
let calMode = "RPN"

// Calculator stacks
let calSTack = [];
calSTack[0] = "";
calSTack.pop();

let inpSTack = [];
inpSTack[0] = "";

let inFixStack = [];

let postFixSTack = [];

let opSTack = [];

let inFOpSTack = [];


// Calculator variables
let currNum;
let opResult;

let operandLevel = 0;

let postFixString = "";


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

function assignPrec (precArg) {

    if (precArg == "-") {

        operandLevel = 1;

    } else if (precArg == "+") {

        operandLevel = 2;

    } else if (precArg == "÷") { 

        operandLevel = 3;

    } else if (precArg == "x") { 

        operandLevel = 4;

    } else if (precArg == "^") { 

        operandLevel = 5;

    }

     return;
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


function infixQueRev (inFixStr) {

    let inFixStrLen = inFixStr.length;

    // Push infix input into infix stack in reverse order
    for (let i = 0; i < inFixStrLen; i++) {

        let startPos = inFixStrLen - i - 1;
        let endPos = inFixStrLen - i;

        let strExtract = inFixStr.substring(startPos, endPos);

        if (isNaN(strExtract)) {
            // If the extracted string is not a number just push into stack
            inFixStack.push(strExtract);

        } else {

            if (inFixStack.length == 0) {
                // If inFixStack is empty then just the number into stack
                inFixStack.push(strExtract);

            } else {
                // If InFixStack is not empty, then pop and check if is number
                let tempStr = inFixStack.pop();

                if (isNaN(tempStr)) {
                    // If not a number then push back to stack and push latest extract
                    inFixStack.push(tempStr);
                    inFixStack.push(strExtract);
                } else {
                    // If its a number then concatenate and push into stack
                    strExtract = strExtract + tempStr;
                    inFixStack.push(strExtract);

                }

            }

        }

    }

}


function algSolver () {

    let inFixStr = currNum;

    infixQueRev (inFixStr);

    let shuntLen = inFixStack.length;

    // Log stacks
    console.log(inFixStack);
    console.log(inFOpSTack);
    console.log(opSTack);
    console.log(calSTack);

    // Apply shunting yard algorithm and separate operands from numbers
    /* 
    While there are tokens to read:
        Read a toke
            If its a number add it to the output queue
            If its an operator

                While there's an operator on top of operator stack with greater precedence:
                    Pop operators from the stack onto output queue

                Push current operator onto stack

            If its a left (Openning bracket), push into stack
            If its a right (Closing bracket):
                While there is not a left bracket at the top of the stack
                    Pop operators from stack onto the output queue

                Pop the left bracket from stack and discard

    While there are operators on the stack, pop them and push into output queue

    */

    for (let i = 0; i < shuntLen; i++) {

        // While there are tokens to read
        while (inFixStack.length != 0) {

            console.log("In 1st while loop, inFixStack :" +inFixStack.length);
            // Read a token from inFixSTack
            let inFixToken = inFixStack.pop();

            if (isNaN(inFixToken)) {

                if (inFixToken == "(") {
                    // If its a left (Openning bracket), push into stack
                    inFOpSTack.push(inFixToken);

                    console.log("Part 1: Adding "+inFixToken+" to inFoPStack");
                    console.log(inFOpSTack);
                    console.log(opSTack);
                    console.log(calSTack);

                } else if (inFixToken == ")") {

                    let opSTackTop = inFOpSTack.pop();

                    // While there is not a left bracket at the top of the stack
                    while ( opSTack.Length !=0) {

                        console.log("Part 2: Adding "+opSTackTop+" to oPStack");
                        console.log(inFOpSTack);
                        console.log(opSTack);
                        console.log(calSTack);

                        if ( opSTackTop != "(") {
                            // Pop operators from stack onto the output queue
                            opSTack.push(opSTackTop);

                            opSTackTop = inFOpSTack.pop();

                        } else {
                            break;
                        }

                    }

                } else {
            
                    // check that inFOpSTack is empty

                    if (inFOpSTack.length == 0) {

                        inFOpSTack.push(inFixToken);

                        console.log("Part 3: Adding "+inFixToken+" to inFoPStack");
                        console.log(inFOpSTack);
                        console.log(opSTack);
                        console.log(calSTack);

                    } else {

                        //Pop postFixSTack and assign precedence
                        let tempIFStr = inFixToken;
                        let tempPFStr = inFOpSTack.pop();


                        if (tempPFStr == "(") {

                            inFOpSTack.push(tempPFStr);
                            inFOpSTack.push(inFixToken);

                            console.log("Part 4: Adding "+inFixToken+" to inFoPStack");
                            console.log(inFOpSTack);
                            console.log(opSTack);
                            console.log(calSTack);

                        } else {

                            // THEIS SECTION NEEDS REVISITING

                            let tempIFStrLv = 0;
                            let tempPFStrLv = 0;

                            // Assign Infix precedence
                            assignPrec (tempIFStr);

                            tempIFStrLv = operandLevel;

                            // Assign postFix precedence
                            assignPrec (tempPFStrLv);

                            tempPFStrLv = operandLevel;

                            // Reset operand Level
                            operandLevel = 0

                            // If the operator on top of operator stack has greater precedence:
                            // Pop operator from the stack onto output queue
                            if (tempPFStrLv > tempIFStrLv) {
                    
                                opSTack.push(tempIFStr); 

                                inFOpSTack.push(tempPFStr);

                                console.log("Part 5: Adding "+tempIFStr+" (higher precedence) to oPStack and "+tempPFStr+" (Lower precedence) to inFOpSTack");
                                console.log(inFOpSTack);
                                console.log(opSTack);
                                console.log(calSTack);

                            } else {
                
                                opSTack.push(tempIFStr); 

                                inFOpSTack.push(tempPFStr);

                                console.log("Part 6: Adding "+ tempIFStr+" (higher precedence) to oPStack and "+tempPFStr+" (Lower precedence) to inFOpSTack");
                                console.log(inFOpSTack);
                                console.log(opSTack);
                                console.log(calSTack);

                            }

                        }
                    
                    }
                    
                }
            
            } else {
                // If its a number add it to the output queue
                calSTack.push(inFixToken);

                console.log("Part 7: Adding "+inFixToken+" to calStack");
                console.log(inFOpSTack);
                console.log(opSTack);
                console.log(calSTack);

            }
        
        }

        console.log("Leaving 1st while loop :");

    }
    
    // While there are operators on the stack, pop them and push into output queue
    while (inFOpSTack.length !=0) {

            let opSTackTop = inFOpSTack.pop();

            /*
            if (opSTackTop != "(") {

                opSTack.push(opSTackTop);

            } else {


            }  */

            opSTack.push(opSTackTop);

            console.log("In 2nd while loop and adding "+opSTackTop+" to opSTack");
            console.log(inFOpSTack);
            console.log(opSTack);
            console.log(calSTack);
    
    }
    
    // Log stacks before reversing
    console.log(inFixStack);
    console.log(inFOpSTack);
    console.log("Stacks before reversing");
    console.log(opSTack);
    console.log(calSTack);

    // Reverse stacks
    opSTack = opSTack.reverse();

    calSTack = calSTack.reverse();

    // Log stacks
    console.log("Stacks before reversing");
    console.log(opSTack);
    console.log(calSTack);
    
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


equalBtn.addEventListener("click",algSolver);