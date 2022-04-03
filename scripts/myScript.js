
let myPad = document.querySelector(".sketchPad");
let myPadSize = document.getElementsByClassName('sketchPad')[0];
let newPadBtn = document.getElementById('clickNewPad');
let clearPadBtn = document.getElementById('clickResetPad');
let cellArray = [];
let cellDrawnArray = [];
let clickTracker = 0;
let padSize = 0;
let colSize = 50;

var slider = document.getElementById("myRange");
var output = document.getElementById("gridSlideTxt");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    let gridSize = this.value;
    gridSize = gridSize + " x " + gridSize;
    output.innerHTML = gridSize;
    colSize = this.value;
}

function sketchPadInit () {

    clearPad();

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

        sketchPadInit ();
    }

}


// Function to enable or disable drawing on mouseleave event

function drawToggle () {

    if (clickTracker == 0) {

        //Add eventlistener for Drawing sketchpad
        myPad.addEventListener("mouseover",drawPad);

        clickTracker = 1;

    } else {

        //Remove eventlistener for Drawing sketchpad
        myPad.removeEventListener("mouseover",drawPad);

        clickTracker = 0;
    }
    
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

    }

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

            // Remove div in DOM
            padCell.parentElement.removeChild(padCell);

        }

        cellArray = [];
        cellDrawnArray = [];

    } else {

    }
  
}

// Initialise sketchpad
newPadBtn.addEventListener("click",sketchPadInit)

// Add Toggle onclick event listener
myPad.addEventListener("click", drawToggle);

// Add Clear pad on Btn Click event listener
clearPadBtn.addEventListener("click", clearSketch);

