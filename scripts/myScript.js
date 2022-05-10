// This is an implementation of an RPN scientific calculator

// Calculator logo
calcLogo = document.getElementsByClassName('Logo-text3')[0];

// Screen display elements
var infixCapt = document.getElementById("scrTopLeftIn");
var output = document.getElementById("scrTopLeft");

screenTopDisp = document.getElementsByClassName('calScreenWrapper')[0];
numScreen = document.getElementById("scrTopLeftCont");
stackScreenDisp = document.getElementsByClassName('scrTopRightWrapper')[0];
stackScreenRgt = document.getElementById("scrTopRight");
stackScreenLBL = document.getElementById("scrTopRightLbl");
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
calFunctionKeysBtn = document.getElementsByClassName('calKeyFuncWrapper')[0];

// Calculator flags
let numCaptFlag = "Ready";
let shiftFlag = "Off";
let calMode = "RPN"

// Calculator stack in both RPN and Algebraic modes
let calSTack = [];
calSTack[0] = "";
calSTack.pop();

// Input stack in RPN mode
let inpSTack = [];
inpSTack[0] = "";

// Infix notation stack of user input in Algebraic mode
let inFixStack = [];

// Operator stack for shunting algorithm in Algebraic mode
let inFOpSTack = [];

// Postfix Notation stack
let posFixStack = [];

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
        stackScreenDisp.style.display = "none";
        stackScreenRgt.style.display = "none";
        stackScreenLBL.style.display = "none";

        screenTopDisp.style.gridTemplateAreas = '"scTopNum scTopNum" "scBotFunc scBotStack"';
        numScreen.style.width = "290px";

        shiftFlag = "Off";

    } else {

        calMode = "RPN"

        equalBtn.style.display = "none";
        enterBtn.style.display = "flex";
        calcLogo.style.display = "flex";
        stackScreenDisp.style.display = "flex";
        stackScreenRgt.style.display = "flex";
        stackScreenLBL.style.display = "flex";
        screenTopDisp.style.gridTemplateAreas = '"scTopNum scTopStack" "scBotFunc scBotStack"';
        numScreen.style.width = "200px";

    }
    
    clearStack();

    console.log(calMode)

}

// Function to display RPN Stack
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

// Push input number into stack
function pushStack () {

    // Check if user has input a number
    if (numCaptFlag == "Done") {

        // Push captured number into stack
        calSTack.push(currNum);

        // Clear current captured number from display
        output.innerHTML = "0";

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


// Function to capture user input into stack for both RPN & Algebraic modes
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

    } else if (numKey == "back") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        if (shiftFlag == "Off") {
            //Remove last element in string

            currNum = stackVal.substring(0,stackVal.length - 1);

        } else {
            // Clear stack and user input

            currNum = " ";
            shiftFlag = "Off"

        }
        
        inpSTack.push(currNum);

    } else if (numKey == "plusMinus") {

        let stackVal = inpSTack[0];
        inpSTack.pop();

        if (shiftFlag == "Off") {
            //+- Key

            currNum = stackVal + "-";

        } else {
            // pi key
            currNum = stackVal + "π";

            shiftFlag = "Off"

        }
        
        inpSTack.push(currNum);

    } else if (numKey == "sqrt") {
        
        let stackVal = inpSTack[0];
        inpSTack.pop();

        if (shiftFlag == "Off") {

            currNum = stackVal + "√";

        } else {

            currNum = stackVal + "^2";
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

// Function to calculate a mathematical operation between two numbers
function operate (arg1, arg2, opKey) {

    let numLeft = arg1;
    let numRight = arg2;
    let _operand = opKey;

    // Check if number is pi

    if (numLeft == "π") {

        numLeft = Math.PI;

    } else if (numRight == "π") {

        numRight = Math.PI;

    } else {
        // Do nothing
    }

    
    // Perform operations
    if (_operand == "divideK" || _operand == "÷" ) {

        opResult = parseFloat(numLeft)/parseFloat(numRight);

    } else if (_operand == "multiplyK" || _operand == "x") {

        opResult = parseFloat(numLeft)*parseFloat(numRight);

    } else if (_operand == "subtractK" || _operand == "-") {

        opResult = parseFloat(numLeft) - parseFloat(numRight);

    } else if (_operand == "addK" || _operand == "+") {

        opResult = parseFloat(numLeft)+parseFloat(numRight);

    } else if (_operand == "sqrt" || _operand == "√") { 

        if (shiftFlag == "Off") {

            opResult = Math.sqrt(numRight);

        } else {

            opResult = numRight*numRight;

        }
       

    } else if (_operand == "natE" || _operand == "e^x") { 
    
        if (shiftFlag == "Off") {

            opResult = Math.exp(numRight);

        } else {
            
            opResult = Math.pow(10,numRight);

        }
        

    } else if (_operand == "LN" || _operand == "Lin") { 
    
        if (shiftFlag == "Off") {

            opResult = Math.log(numRight);

        } else {

            opResult = Math.log10(numRight);

        }

    } else if (_operand == "Sin" || _operand == "SIN") { 

        if (shiftFlag == "Off") {

            opResult = Math.sin(numRight);

        } else {

            opResult = Math.asin(numRight);

        }

    } else if (_operand == "Cos" || _operand == "COS") { 
    
        if (shiftFlag == "Off") {

            opResult = Math.cos(numRight);

        } else {

            opResult = Math.acos(numRight);

        }

    } else if (_operand == "Tan" || _operand == "TAN") { 
    
        if (shiftFlag == "Off") {

            opResult = Math.tan(numRight);

        } else {

            opResult = Math.atan(numRight);

        }

    } else if (_operand == "yx" || _operand == "^") { 
    
        opResult = Math.pow(numLeft,numRight);

    } else if (_operand == "inv") { 
    
        if (shiftFlag == "Off") {
            // Find the inverse of the number

            opResult = 1/numRight;

        } else {
            // Covert number into percentage

            opResult = numRight/100;
            
        }

    } else if (_operand == "plusMinus") { 
    
        opResult = -1*numRight;

    } /* else if () { 
    
    }
    */ else {
        // Do nothing
    }

    // Check if the result has any decimals
    if (opResult % 1 != 0 ) {
        // If result has a decimal, fix to 2 positions

        opResult = opResult.toFixed(2);

    } else {

        // Do nothing
    }

    return opResult;
}

// Function to perform RPN operation
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

    let funcArray = ["sqrt", "natE", "LN", "SIN", "COS", "TAN", "inv", "plusMinus"];

    if (funcArray.includes(opKey)) {
        // Get the top number on stack and operate on
        let numRight = calSTack.pop();
        let numLeft = 0;

        operate (numLeft, numRight, opKey);

    } else {

        // Get the 2 numbers to be operated on from the stack
        let numRight = calSTack.pop();
        let numLeft = calSTack.pop();

        operate (numLeft, numRight, opKey);

    }
    // Push result into stack and display
    calSTack.push(opResult);

    output.innerHTML = opResult;

    // Update stack display
    dispSTack ();

    // Clear number input stack
    inpSTack = [];
    inpSTack[0] = "";

}


// ALGEBRAIC MODE Functions
// Function to assign operand precedence level following PEMDAS
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

    } else if (precArg == "√") {

        operandLevel = 6;

    }

     return;
}

// Functio to create infixque
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

// Function to convert infix stack to a postfix stack
function infToPosF () {

    let shuntLen = inFixStack.length;

    // Apply the shunting yard algorithm

    for (let i = 0; i < shuntLen; i++) {

        // While there are tokens to read
        while (inFixStack.length != 0) {
            // Read a token from inFixSTack
            let inFixToken = inFixStack.pop();

            if (isNaN(inFixToken)) {

                if (inFixToken == "(") {
                    // If its a left (Openning bracket), push into stack
                    inFOpSTack.push(inFixToken);

                } else if (inFixToken == ")") {

                    // While there is not a openning bracket at the top of the stack
                    while (inFOpSTack.Length !=0) {

                        let opSTackTop = inFOpSTack.pop();

                        if (opSTackTop != "(") {
                            // Pop operators from stack onto the output queue
                            posFixStack.push(opSTackTop);

                        } else {
                            // top of the stack is an opening bracket. Discard and move on.
                
                            break;
                        }

                    }

                } else {
            
                    // check that inFOpSTack is empty

                    if (inFOpSTack.length == 0) {

                        inFOpSTack.push(inFixToken);

                    } else {

                        //Pop inFOpSTack and assign precedence
                        let tempIFStr = inFixToken;
                        let tempPFStr = inFOpSTack.pop();

                        //If the top element in the op stack is a bracket, then push them back into stack 
                        if (tempPFStr == "(") {

                            inFOpSTack.push(tempPFStr);
                            inFOpSTack.push(tempIFStr);

                        } else {
                            // While there's an operator on top of operator stack with greater precedence:

                            let tempIFStrLv = 0;
                            let tempPFStrLv = 0;

                            // Assign Infix precedence
                            assignPrec (tempIFStr);

                            tempIFStrLv = operandLevel;

                            // Assign postFix precedence
                            assignPrec (tempPFStr);

                            tempPFStrLv = operandLevel;

                            // Reset operand Level
                            operandLevel = 0

                            // If the operator on top of operator stack has greater precedence:
                            // Pop operator from the stack onto output queue
                            if (tempPFStrLv > tempIFStrLv) {
                    
                                posFixStack.push(tempPFStr); 

                                inFOpSTack.push(tempIFStr);

                            } else {
                                // Else push the top operator back to stack and push new token into stack

                                inFOpSTack.push(tempPFStr);
                                inFOpSTack.push(tempIFStr); 

                            }
                        }
                    }
                }
            
            } else {
                // If its a number add it to the output queue
                posFixStack.push(inFixToken);

            }
        }

    }
    
    // While there are operators on the stack, pop them and push into output queue
    while (inFOpSTack.length !=0) {

            let opSTackTop = inFOpSTack.pop();

            posFixStack.push(opSTackTop);
    
    }

    // Reverse Postfix stack
    posFixStack = posFixStack.reverse();

}

// Function to solve an algebraic equation
function algSolver () {

    // Capture current input displayed
    let inFixStr = currNum;

    // Created infix notation stack
    infixQueRev (inFixStr);

    // Convert to postfix notation stack
    infToPosF ();

    // Solve postfix notation

    while (posFixStack.length != 0) {

        let postFixToken = posFixStack.pop();

        if (isNaN(postFixToken)) {
         /* If the token is not a number, then Get numbers to be operated 
            on from the calculator stack */

            let opKey = postFixToken;

            let funcArray = ["√", "e", "Lin", "Sin", "Cos", "Tan"];

            if (funcArray.includes(opKey)) { 

                let numRight = calSTack.pop();
    
                let numLeft = 0;

                operate (numLeft, numRight, opKey);

            } else {
    
                let numRight = calSTack.pop();
    
                let numLeft = calSTack.pop();

                operate (numLeft, numRight, opKey);

            }

            // Push result into stack and display
            calSTack.push(opResult);

        } else {
            // If token is a number, then push it into calculation stack
            calSTack.push(postFixToken);

        }

    }

    // Display final answer
    
    output.innerHTML = calSTack[0];

    
}


// Common functions for both modes

// Clear function
function clearStack () {

    // Clear number input stack
    inpSTack = [];
    inpSTack[0] = "";

    // Clear calculator stack
    calSTack = [];
    calSTack[0] = "";
    calSTack.pop();

    // Clear infix and postfix stacks
    inFixStack = [];
    inFixStack[0] = "";
    inFixStack.pop();
    
    inFOpSTack = [];
    inFOpSTack[0] = "";
    inFOpSTack.pop();

    posFixStack = [];
    posFixStack[0] = "";
    posFixStack.pop();

    // Clear stack displays
    xStackDisp.innerHTML = " ";
    yStackDisp.innerHTML = " ";
    zStackDisp.innerHTML = " ";
    wStackDisp.innerHTML = " ";

    // Check if the shift button is on

    if (shiftFlag == "On") {

        // Clear calculator display
        output.innerHTML = " ";
        infixCapt.innerHTML = " ";

        // Switch off function displays
        funcDisp1.style.display = "none";
        funcDisp2.style.display = "none";
        stackScreenDisp.style.display = "none";

        // Reset shift flag
        shiftFlag = "Off";

    } else {

        // Reset calculator display to zero
        output.innerHTML = 0;
        infixCapt.innerHTML = " ";

        // Switch off function displays
        funcDisp1.style.display = "flex";
        funcDisp2.style.display = "flex";
        stackScreenDisp.style.display = "flex";

    }
    

}


// Initiate calculator
initCalc ();

// Event Listeners
modeBtn.addEventListener("click",initCalc);

numKeyBtn.addEventListener("click",captUserInput);

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

calFunctionKeysBtn.addEventListener("click",(e)=>{
        
    if (calMode == "ALG") {
        
        let numKey = e.target.id;

        if (numKey == "equalNum") {
            // Update infix display to include "=" and then call algebraic solver
            infixCapt.innerHTML = currNum+" =";
            algSolver();

        } else {

            this.captUserInput(e);
        
        }

    } else {

        let numKey = e.target.id;

        if (numKey == "back") {
            // If its the back key then invoke capturing of user input

            this.captUserInput(e);

        } else if (numKey == "ENTER") {

            pushStack ();

        } else if (numKey == "plusMinus") {

            if (shiftFlag == "On") {
                // Its a number input for pi

                this.captUserInput(e);

            } else {
                // Its a +- operation
                this.opHandleRPN(e);
            }

        } else {

            this.opHandleRPN(e);

        }
    
    }

});