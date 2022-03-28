
let myPad = document.querySelector(".sketchPad");
let myPadSize = document.getElementsByClassName('sketchPad')[0];
let newPadBtn = document.getElementById('clickNewPad');
let clearPadBtn = document.getElementById('clickResetPad');
let cellArray = [];
let cellDrawnArray = [];
let clickTracker = 0;
let padSize = 0;

function sketchPadInit () {

    clearPad();

    let colSize = prompt("Enter sketch size in number of columns");

    if (colSize > 0 && colSize <= 100) {

        padSize = colSize * colSize;

        let sketchPadGrid = "repeat("+colSize+", auto)"
    
        myPadSize.style.gridTemplateColumns = sketchPadGrid;
        myPadSize.style.gridTemplateRows = sketchPadGrid;

        for (let i = 0; i < padSize; i++) {
            let div_name = "Cell_"+i;
            let div = document.createElement(div_name);
    
            // Add class to new div
            div.classList.add("sketchPadCell");

            // Add div tag name into array
            cellArray.push(div_name);

            // Append div in DOM
            myPad.append(div);
        }

    } else {

        //Call function to clear pad
        colSize = prompt("number of columns must be 100 or below");

        sketchPadInit ();
    }

    console.log("sketchpad Initialised");
}


// Function to enable or disable drawing on mouseleave event

function drawToggle () {

    if (clickTracker == 0) {

        // Draw sketchpad
        myPad.addEventListener("mouseover",drawPad);

        clickTracker = 1;

    } else {

        myPad.removeEventListener("mouseover",drawPad);

        clickTracker = 0;
    }

    console.log(clickTracker);
    
}

// Function to drawpad
function drawPad (event) {
    
    // Get tagname of div that fired the event
    let div_name = event.target.tagName;
   
     // Add div name in an array of drawn cells
     cellDrawnArray.push(div_name);

    //Select div in DOM
    let padCell = document.querySelector(div_name);

    // Change cell background to black
    padCell.style.background = "black";

}

// Function to clear sketch pad to clear only cells that were drawn
function clearSketch () {

    let cellArrayLen = cellArray.length;

    for (let i = 0; i < cellArrayLen; i++) {
     
        // Get tagname of div inside cellArray
        let div_name = cellDrawnArray[i];
   
        //Select div in DOM
        let padCell = document.querySelector(div_name);

        // change cell background to default
        padCell.style.background = "burlywood";

        console.log(padCell);

    }

console.log(cellArrayLen);

}


// Function to clear all divs in pad
function clearPad() {

    console.log("Clearing pad");

    let cellArrayLen = cellArray.length;

   if (cellArrayLen != 0) {

        for (let i = 0; i < cellArrayLen; i++) {
            // Get tagname of div inside cellArray
            let div_name = cellArray[i];

            //Select div in DOM
            let padCell = document.querySelector(div_name);

            // Append div in DOM
            // padCell.parentNode.removeChild(padCell);

            padCell.parentElement.removeChild(padCell);

        }

        cellArray = [];
        cellDrawnArray = [];

    } else {

    }
    
    console.log(cellArrayLen);
        
}

// Clear pad
//clearPad();

// Initialise sketchpad
newPadBtn.addEventListener("click",sketchPadInit)

// Add Toggle onclick event listener
myPad.addEventListener("click", drawToggle);

// Add Clear pad on Btn Click event listener
clearPadBtn.addEventListener("click", clearSketch);

