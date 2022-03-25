
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

        for (let i = 0; i < padSize; i++) {
            
            cellArray[i].addEventListener("mouseleave", function() {
            cellArray[i].style.background = "black";
            })
        
        }
        clickTracker = 1;

    } else {

        // TO FIX
        // This function should remove previously added event listeners

        for (let i = 0; i < padSize; i++) {
            
            cellArray[i].addEventListener("mouseleave", function() {
            cellArray[i].style.background = "burlywood";
            })
        
        }

        clickTracker = 0;
    }

    console.log(clickTracker);
}

// Initialise sketchpad
sketchPadInit();


// Add onclick event listener
myPad.addEventListener("click", drawToggle);