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

// Infix notation stack of user input in Algebraic mode
let inFixStack = [];

// Operator stack for shunting algorithm in Algebraic mode
let inFOpSTack = [];

// Postfix Notation stack
let posFixStack = [];

// Calculator variables
let currNum;
let inputNum;
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
        
        //currNum = inpSTack [0];

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

    console.log(numKey+" Was pressed");

    if (numKey == "zeroNum") {

        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("0");

            } else {
            
                inputNum = inputNum + "0";
                inFixStack.push(inputNum); 
            
            }
    
        } else {

            inFixStack.push("0");

        }


    } else if (numKey == "oneNum") {
     
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("1");

            } else {
            
                inputNum = inputNum + "1";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("1");

        }


    } else if (numKey == "twoNum") {
       
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("2");

            } else {
            
                inputNum = inputNum + "2";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("2");

        }


    } else if (numKey == "threeNum") {
       
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("3");

            } else {
            
                inputNum = inputNum + "3";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("3");

        }


    } else if (numKey == "fourNum") {
       
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("4");

            } else {
            
                inputNum = inputNum + "4";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("4");

        }

    } else if (numKey == "fiveNum") {
        
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("5");

            } else {
            
                inputNum = inputNum + "5";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("5");

        }

    } else if (numKey == "sixNum") {
        
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("6");

            } else {
            
                inputNum = inputNum + "6";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("6");

        }

    } else if (numKey == "sevenNum") {
       
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("7");

            } else {
            
                inputNum = inputNum + "7";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("7");

        }

    } else if (numKey == "eightNum") {
       
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("8");

            } else {
            
                inputNum = inputNum + "8";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("8");

        }

    } else if (numKey == "nineNum") {
        
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push("9");

            } else {
            
                inputNum = inputNum + "9";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("9");

        }
        
    } else if (numKey == "dotNum") {
        
        if (inFixStack.length !=0 && numCaptFlag == "Done") {

            let inputNum = inFixStack.pop();

            if (isNaN(inputNum)) {

                inFixStack.push(inputNum);
                inFixStack.push(".");

            } else {
            
                inputNum = inputNum + ".";
                inFixStack.push(inputNum);
            
            }

        } else {

            inFixStack.push("0.");

        }

    } else if (numKey == "divideK") {
       
        inFixStack.push("÷");


    } else if (numKey == "multiplyK") {
        
        inFixStack.push("x");

    } else if (numKey == "subtractK") {
       
        inFixStack.push("-");

    } else if (numKey == "addK") {
        
        inFixStack.push("+");

    } else if (numKey == "opBrac") {

        if (shiftFlag == "Off") {

            inFixStack.push("(");

        } else {

            inFixStack.push(")");

            shiftFlag = "Off"

        }

    } else if (numKey == "back") {

        if (shiftFlag == "Off") {
          
            let inputNum = inFixStack.pop();

            inputNum = inputNum.substring(0,inputNum.length - 1);

            inFixStack.push(inputNum);

        } else {
          
            inFixStack = [];

            shiftFlag = "Off"

        }

    } else if (numKey == "plusMinus") {

        if (shiftFlag == "Off") {
          
            inFixStack.push("±");

        } else {
        
            inFixStack.push("π");

            shiftFlag = "Off"

        }

    } else if (numKey == "sqrt") {

        if (shiftFlag == "Off") {

            inFixStack.push("√");

        } else {
            
            inFixStack.push("^");
            inFixStack.push("2");

            shiftFlag = "Off"
        }

    } else if (numKey == "SIN") {

        if (shiftFlag == "Off") {

            inFixStack.push("Sin");

        } else {

            inFixStack.push("ASin");

            shiftFlag = "Off"

        }

    } else if (numKey == "COS") {

        if (shiftFlag == "Off") {

            inFixStack.push("Cos");

        } else {

            inFixStack.push("ACos");

            shiftFlag = "Off"

        }

    } else if (numKey == "TAN") {

        if (shiftFlag == "Off") {

            inFixStack.push("Tan");

        } else {

            inFixStack.push("ATan");

            shiftFlag = "Off"

        }

    } else if (numKey == "inv") {

        if (shiftFlag == "Off") {

            inFixStack.push("^");
            inFixStack.push("-1");

        } else {

            inFixStack.push("%");

            shiftFlag = "Off"

        }

    } else if (numKey == "natE") {

        if (shiftFlag == "Off") {

            inFixStack.push("e");
            inFixStack.push("^");

        } else {

            inFixStack.push("10");
            inFixStack.push("^");

            shiftFlag = "Off"

        }

    } else if (numKey == "LN") { 
    
        if (shiftFlag == "Off") {

            inFixStack.push("Lin");

        } else {

            inFixStack.push("Log");

        }

    } else if (numKey == "yx") { 
    
        if (shiftFlag == "Off") {

            inFixStack.push("^");

        } else {

            inFixStack.push("^");

        }

    } else {

    }

    // Display captured number
    if (calMode == "RPN") {

        currNum = inFixStack.pop();

        inFixStack.push(currNum);

        output.innerHTML = currNum;

    } else {

        currNum = inFixStack.join("");

        currNum = currNum.replaceAll("±", "-");

        infixCapt.innerHTML = currNum;

    }

    // Set number capture flag to complete
    numCaptFlag = "Done";

    // Display the stack
    dispSTack ();
    
}

function checkSPecialConst (arg1) {

    if (arg1 == "π") {

        arg1 = Math.PI;
        arg1 = arg1.toFixed(3);

    } else if (arg1 == "e") {

        arg1 = Math.E;
        arg1 = arg1.toFixed(3);

    } else {
        // Do nothing
    }

    return arg1;

}

// Function to calculate a mathematical operation between two numbers
function operate (arg1, arg2, opKey) {

    let numLeft = arg1;
    let numRight = arg2;
    let _operand = opKey;

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

    } else if (_operand == "^" ) { 

            opResult = numLeft ** numRight;
            opResult = parseFloat(opResult);
       
    } else if (_operand == "natE") { 
    
        if (shiftFlag == "Off") {

            let eNumb = Math.E;
            
            opResult = eNumb ** numRight;
            opResult = parseFloat(opResult);

        } else {
            
            opResult = Math.pow(10,numRight);
            opResult = parseFloat(opResult);

        }
        

    } else if (_operand == "LN" || _operand == "Lin") { 
    
        if (shiftFlag == "Off") {

            opResult = Math.log(numRight);

        } else {

            opResult = Math.log10(numRight);
            
        }

    } else if (_operand == "Log") { 

            opResult = Math.log10(numRight);

    } else if (_operand == "Sin" || _operand == "SIN" || _operand == "ASin" ) { 

        // Handle arc unary function in Algebraic solver
        if (_operand == "ASin" || _operand == "ASIN") {

            opResult = Math.acos(numRight);
            opResult = parseFloat(opResult);

        } else {
            
            // Handle unary function in both Algebraic and RPN mode
            if (shiftFlag == "Off") {

                opResult = Math.sin(numRight);
                opResult = parseFloat(opResult);

            } else {

                opResult = Math.asin(numRight);
                opResult = parseFloat(opResult);

            }
        }

    } else if (_operand == "Cos" || _operand == "COS" || _operand == "ACos" ) { 
    
        // Handle arc unary function in Algebraic solver
        if (_operand == "ACos" || _operand == "ACOS") {

            opResult = Math.acos(numRight);
            opResult = parseFloat(opResult);

        } else {
        
            // Handle unary function in both Algebraic and RPN mode
            if (shiftFlag == "Off") {

                opResult = Math.cos(numRight);
                opResult = parseFloat(opResult);

            } else {

                opResult = Math.acos(numRight);
                opResult = parseFloat(opResult);

            }
        }

    } else if (_operand == "Tan" || _operand == "TAN" || _operand == "ATan" ) { 
    
        // Handle arc unary function in Algebraic solver
        if (_operand == "ATan" || _operand == "ATAN") {

            opResult = Math.atan(numRight);
            opResult = parseFloat(opResult);

        } else {

            // Handle unary function in both Algebraic and RPN mode
            if (shiftFlag == "Off") {

                opResult = Math.tan(numRight);
                opResult = parseFloat(opResult);

            } else {

                opResult = Math.atan(numRight);
                opResult = parseFloat(opResult);

            }
        }

    } else if (_operand == "yx" || _operand == "^") { 
    
        opResult = numLeft ** numRight;

    } else if (_operand == "inv") { 
    
        if (shiftFlag == "Off") {
            // Find the inverse of the number
            opResult = 1/numRight;

        } else {
            // Convert number into percentage
            opResult = numRight/100;
            
        }

    } else if (_operand == "%") { 
    
            // Convert number into percentage
            opResult = numRight/100;

    } else if (_operand == "plusMinus" || _operand == "±" ) { 
    
        opResult = -1*numRight;

    } else {
        // Do nothing
    }

    console.log(opResult);

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

    console.log(calSTack);

    // Check if user is done entering number 
    if (numCaptFlag == "Done") {

        // Push number that has been captured into stack
        calSTack.push(currNum);

        currNum = " ";

        // Unset number capture flag
        numCaptFlag = "Ready";

    } else {

        // Operate numbers in the existing stack
    }
    
    // Get tagname of nummber key div that fired the event
    let opKey = event.target.id;

    let funcArray = ["sqrt", "natE", "LN", "SIN", "COS", "TAN", "inv", "plusMinus"];

    if (funcArray.includes(opKey)) {

        console.log("Performing a unary operation");

        console.log(calSTack);

        // Get the top number on stack and operate on
        let numRight = calSTack.pop();
        let numLeft = 0;

        // Check if number is a special constant
        numRight = checkSPecialConst(numRight);

        console.log("Performing a Unary function operation")
        console.log("numLeft :"+numLeft);
        console.log("numRight :"+numRight);
        console.log("_operand :"+opKey);

        operate (numLeft, numRight, opKey);

    } else {

        console.log(calSTack);
        
        // Get the 2 numbers to be operated on from the stack
        let numRight = calSTack.pop();
        let numLeft = calSTack.pop();

        // Check if number is a special constant
        numLeft = checkSPecialConst(numLeft);
        numRight = checkSPecialConst(numRight);

        console.log("Performing a two number operation")
        console.log("numLeft :"+numLeft);
        console.log("numRight :"+numRight);
        console.log("_operand :"+opKey);

        operate (numLeft, numRight, opKey);

    }
    // Push result into stack and display
    calSTack.push(opResult);

    console.log(calSTack);

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

        operandLevel = 2;

    } else if (precArg == "+") {

        operandLevel = 3;

    } else if (precArg == "÷") { 

        operandLevel = 4;

    } else if (precArg == "x" || precArg == "±") { 

        operandLevel = 5;

    } else if ( precArg == "√" || precArg == "%" ) { 
        // Unary functions
        operandLevel = 6;

    } else if ( precArg == "Sin" || precArg == "Cos" || precArg == "Tan" ) { 
        // Unary functions
        operandLevel = 6;

    } else if ( precArg == "ASin" || precArg == "ACos" || precArg == "ATan" ) { 
        // Unary functions
        operandLevel = 6;

    } else if (precArg == "^") {

        operandLevel = 7;

    } else if (precArg == "e" || precArg == "π" ) {

        operandLevel = 8;

    }  else {
        // Do nothing
    }

     return;
}


// Function to convert infix stack to a postfix stack
function infToPosF () {

    //Reverse stack
    inFixStack = inFixStack.reverse();

    let shuntLen = inFixStack.length;

    // Apply the shunting yard algorithm

    for (let i = 0; i < shuntLen; i++) {

        // While there are tokens to read
        while (inFixStack.length != 0) {
            // Read a token from inFixSTack
            let inFixToken = inFixStack.pop();

            if (isNaN(inFixToken)) {

                if (inFixToken == "(") {
                    // If its a left (Openning bracket),just push into stack
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

                } else if (inFixToken == "±") {
                    // If its a ±, then swap wih token on top of stack 

                    let opSTackTop = inFOpSTack.pop();

                    if (isNaN(opSTackTop)) {
                        // DOnt swap
                        inFOpSTack.push(opSTackTop);    
                        inFOpSTack.push(inFixToken);
                    
                    } else {
                        // Swap
                        inFOpSTack.push(inFixToken);
                        inFOpSTack.push(opSTackTop);
                    
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

                            console.log("Element on top of stack is :"+tempPFStr+" and Assigned Level :"+tempPFStrLv);

                            console.log("Element on to be queued is :"+tempIFStr+" and Assigned Level :"+tempIFStrLv);

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
                // If its a number check for juxstaposed multiplication

                let opSTackTop = inFixStack.pop();

                let funcArray = ["√", "e", "Lin", "Log", "Sin", "Cos", "Tan",
                             "ASin", "ACos", "ATan", "%", "("];

                if (opSTackTop == null) {
                    // Push back into stack
                    posFixStack.push(inFixToken);

                } else if (funcArray.includes(opSTackTop)) {
                    // Correct for juxstaposed multiplication
                    inFixStack.push(opSTackTop);
                    inFixStack.push("x");
                    inFixStack.push(inFixToken);

                } else {
                    // Push number into postFix stack
                    inFixStack.push(opSTackTop);
                    posFixStack.push(inFixToken);

                }

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

    // Convert to postfix notation stack
    infToPosF ();

    // Solve postfix notation
    while (posFixStack.length != 0) {

        // Check stacks
        console.log("posFixStack :");
        console.log(posFixStack);

        console.log("calSTack :");
        console.log(calSTack);

        let postFixToken = posFixStack.pop();

        if (isNaN(postFixToken)) {
         /* If the token is not a number, then Get numbers to be operated 
            on from the calculator stack */

            let opKey = postFixToken;

            let funcArray = ["√", "Lin", "Log", "Sin", "Cos", "Tan",
                             "ASin", "ACos", "ATan", "%", "±"];

            let constArray = ["e", "π"];

            if (funcArray.includes(opKey)) { 

                let numRight = calSTack.pop();

                numRight = checkSPecialConst(numRight);
    
                let numLeft = 0;

                console.log("Performing a Unary function operation")
                console.log("numLeft :"+numLeft);
                console.log("numRight :"+numRight);
                console.log("_operand :"+opKey);

                operate (numLeft, numRight, opKey);

                // Push result into stack and display
                calSTack.push(opResult);

            } else if (constArray.includes(opKey)) { 

               let specialNum = checkSPecialConst(postFixToken);

               posFixStack.push(specialNum);

            } else {

                let numRight = calSTack.pop();
    
                let numLeft = calSTack.pop();

                console.log("Performing a Two number operation")
                console.log("numLeft :"+numLeft);
                console.log("numRight :"+numRight);
                console.log("_operand :"+opKey);

                operate (numLeft, numRight, opKey);

                // Push result into stack and display
                calSTack.push(opResult);
            }

        } else {
            // If token is a number, then push it into calculation stack
            calSTack.push(postFixToken);

        }

    }

    // Display final answer 
    output.innerHTML = opResult;
    
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