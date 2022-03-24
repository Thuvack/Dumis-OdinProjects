
let myPad = document.querySelector(".sketchPad");
let padSize = 100 * 100;

for(let i = 0; i < padSize; i++) {
    let div_name = "Cell_"+i;
    let div = document.createElement(div_name);
    div.classList.add("sketchPadCell");

    // Add event listener to change background
    div.addEventListener("mouseleave", function() {
        div.style.background = "black";
    })

    // Add event listener to switch on and off an event listener on click

    myPad.append(div);
}

// Add initialising function



// Add event listeners for each div



// Add sketchpad reset function