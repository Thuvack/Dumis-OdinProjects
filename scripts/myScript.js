
let myPad = document.querySelector(".sketchPad");
let cellArray = [];
let clickTracker = 0;
let padSize = 100 * 100;

function sketchPadInit () {

    for (let i = 0; i < padSize; i++) {
        let div_name = "Cell_"+i;
        let div = document.createElement(div_name);
    
        // Add class to new div
        div.classList.add("sketchPadCell");
    
        // Add div name in an array
        cellArray.push(div);

        // Append div in DOM
        myPad.append(div);
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
    }``

    console.log(clickTracker);
}

// Function to drawpad
function drawPad (event) {
    
    // Get tagname of div that fired the event
    let div_name = event.target.tagName;
   
    //Select div in DOM
    let padCell = document.querySelector(div_name);

    // Apply class to the selected div
    padCell.classList.add("sketchPadCellOn");

}

// Initialise sketchpad
sketchPadInit();

// Add onclick event listener
myPad.addEventListener("click", drawToggle);

