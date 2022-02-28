// Functions for implementing Rock, Paper, Scissors game.

// Declare global variable
let playerSelection;
let computerSelection;
let playerStatus;
let playerScore = 0;
let computerScore = 0;

let counter;

// Clean string function
function capitalise(str){
    let part1
    let part2
    let cleanString

    str = str.trim()

    part1 = str.substring(0,1)
    part1 = part1.toUpperCase()
    part2 = str.substring(1,str.length)
    part2 = part2.toLowerCase()
    cleanString = part1 + part2

    return cleanString;
}


// Function for computer to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    // Declare the three variables
    let Rock
    let Paper
    let Scissors
    let compDecision

    // Assign Random numbers to variables
    Rock = Math.floor(Math.random() * 500)
    Paper = Math.floor(Math.random() * 500)
    Scissors = Math.floor(Math.random() * 500)

    // Select computer decision by finding the variable with the smallest value
    const arr = [Rock, Paper, Scissors]
    const min = Math.min(...arr)

    if (Rock === min) {
        compDecision = "Rock"
    }
    else if (Paper === min) {
        compDecision = "Paper"
    }
    else if (Scissors === min) {
        compDecision = "Scissors"
    }
    else {
        //something went wrong
        alert("Something went wrong")
    }

    console.log("Computer chose : "+ compDecision)

    computerSelection = compDecision;

    return compDecision;
}


// Function for deciding between playerSelection, computerSelection to determine winner of round.
function playRound(playerSel, computerSel) {

    let roundWinner

    // Select round decision based on game rules
    if ( playerSel === "Paper" && computerSel === "Rock" ) {
        roundWinner = "You Win! Paper beats Rock"
    }
    else if ( playerSel === "Rock" && computerSel === "Paper" ) {
        roundWinner = "You Lose! Paper beats Rock"
    }
    else if ( playerSel === "Paper" && computerSel === "Scissors" ) {
        roundWinner = "You Lose! Scissors beats Paper"
    }
    else if ( playerSel === "Scissors" && computerSel === "Paper" ) {
        roundWinner = "You Win! Scissors beats Paper"
    }
    else if ( playerSel === "Scissors" && computerSel === "Rock" ) {
        roundWinner = "You Lose! Rock beats Scissors"
    }
    else if ( playerSel === "Rock" && computerSel === "Scissors" ) {
        roundWinner = "You Win! Rock beats Scissors"
    }
    else if ( playerSel === "Rock" && computerSel === "Rock" ) {
        roundWinner = "It's a Draw! Rock equals Rock"
    }
    else if ( playerSel === "Paper" && computerSel === "Paper" ) {
        roundWinner = "It's a Draw! Paper equals Paper"
    }
    else if ( playerSel === "Scissors" && computerSel === "Scissors" ) {
        roundWinner = "It's a Draw! Scissors equals Scissors"
    }
    return roundWinner;
}

function updateScore(gameResult) {

    //Increment scores
    if (gameResult.search("Win") >= 1) {
        //Win was found in result string Increment player's score
        playerScore++
    }
    else if (gameResult.search("Lose") >= 1) {
        //Lose was found in result string Increment computer's score
        computerScore++
    }
    else if (gameResult.search("Draw") >= 1) {
        computerScore++
        playerScore++
    }
    else {
        //Something wrong happened
    }

    currentScore = "SCORE: Player: "+playerScore + " and Computer: "+computerScore

}


// Map out hide/unhide screen event listiners

function hideScreen(scn) {

    if(scn.style.display === 'none'){
        //do nothing
    } else {
        scn.style.display = 'none';
    }
}

function unHideScreen(scn1) {

    if(scn1.style.display === 'flex'){
       //do nothing
    } else {
        scn1.style.display = 'flex';
    }
}

// Test setting palyer name in score screen

function setPlayerName(pName) {
    document.getElementsByClassName('player-name')[0].innerHTML = "&nbsp;" + pName;
}

// Game engine control functions on button click

function getPlayerChoice(plChoice) {

    let pChoice = 0

    if (plChoice === document.getElementsByClassName('clickRock')[0]) {
        
        //Hide the other buttons
        hideScreen(document.getElementsByClassName('clickPaper')[0]);
        hideScreen(document.getElementsByClassName('clickScissors')[0]);
        hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

        //Set player choice and confirm player choice

        pChoice = "Rock";

        document.getElementsByClassName('player-choice-text')[0].innerHTML = pChoice;

    } else if (plChoice === document.getElementsByClassName('clickPaper')[0]) {
        
        //Hide the other buttons
        hideScreen(document.getElementsByClassName('clickRock')[0]);
        hideScreen(document.getElementsByClassName('clickScissors')[0]);
        hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

        //Set player choice and confirm player choice

        pChoice = "Paper";

        document.getElementsByClassName('player-choice-text')[0].innerHTML = pChoice;

    } else if (plChoice === document.getElementsByClassName('clickScissors')[0]) {
        
        //Hide the other buttons
        hideScreen(document.getElementsByClassName('clickRock')[0]);
        hideScreen(document.getElementsByClassName('clickPaper')[0]);
        hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

        //Set player choice and confirm player choice

        pChoice = "Scissors";

        document.getElementsByClassName('player-choice-text')[0].innerHTML = pChoice;
        
        
    } else {
        // Something went wrong 
    }

    hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);
    
    // Time delay and advertise player selection

        setTimeout(function() {
            //your code to be executed after 5 second
            unHideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
            hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
        
            setTimeout(function() {
                //your code to be executed after 5 second
                hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
                hideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
            
                setTimeout(function() {
                    //your code to be executed after 5 second
                    unHideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
                    unHideScreen(document.getElementsByClassName('comp-choice')[0]);
                    hideScreen(document.getElementsByClassName('pl-msg-choice')[0]);

                }, 1000);
            }, 1000);
    
        }, 500);

        
    playerSelection = pChoice;

    console.log(playerStatus);

    return;
}


function getCompChoice() {
    let compChoice

    compChoice = computerPlay();

    // Time delay and advertise player selection

        setTimeout(function() {
            //your code to be executed after 5 second

                unHideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
                hideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
                
            
                setTimeout(function() {
                    //your code to be executed after 5 second
                    unHideScreen(document.getElementsByClassName('game-bottom1-cont')[0]);
                    hideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
                    hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
                
                }, 2000);
    
        }, 1000);

        
    playerSelection = pChoice;

    console.log(playerStatus);

    return;
}


function resetRound () {
    // Reset message prompt for user to make new selection
    unHideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);
    hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
    hideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
    hideScreen(document.getElementsByClassName('cp-msg-choice')[0]);
    hideScreen(document.getElementsByClassName('roundResult')[0]);
    hideScreen(document.getElementsByClassName('game-bottom1-cont')[0]);

    //Unhide user choices and default computer choice
    unHideScreen(document.getElementsByClassName('comp-choice')[0]);
    unHideScreen(document.getElementsByClassName('clickRock')[0]);
    unHideScreen(document.getElementsByClassName('clickPaper')[0]);
    unHideScreen(document.getElementsByClassName('clickScissors')[0]);
}


// WORK ON THIS GAME LOGIC
// Game function

function startGame() {
    // Set up initital game screen & start game
    setPlayerName(document.getElementById('playerName').value);
    unHideScreen(document.getElementsByClassName('gridWrapper-cont')[0]);
    hideScreen(document.getElementsByClassName('body-sc1pre-cont')[0]);
    hideScreen(document.getElementsByClassName('comp-choice')[0]);
    hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
    hideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
    hideScreen(document.getElementsByClassName('cp-msg-choice')[0]);
    hideScreen(document.getElementsByClassName('roundResult')[0]);
    hideScreen(document.getElementsByClassName('game-bottom1-cont')[0]);
    hideScreen(document.getElementsByClassName('game-bottom2-cont')[0]);
    hideScreen(document.getElementsByClassName('game-bottom2')[0]);


    counter = 0;
}

function playGame(){
    // Prep for the playRound Function
    let roundRes;
    let roundScr;
    let finalResult;

    roundRes = playRound(playerSelection, computerSelection);
    console.log(roundRes)

    roundScr = updateScore(roundRes);
    console.log(roundScr)

    if (counter < 5) {

        // Show final score

        document.getElementsByClassName('roundResult')[0].innerHTML = roundRes;

        // Delay for 4sec
        setTimeout(function() {
            unHideScreen(document.getElementsByClassName('roundResult')[0]);
            hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);
            
            setTimeout(function() {
                hideScreen(document.getElementsByClassName('roundResult')[0]);

                setTimeout(function() {
                    unHideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);
                    hideScreen(document.getElementsByClassName('roundResult')[0]);
    
                }, 500);
            }, 2000);
    
        }, 500);

        counter++;
        console.log(counter);
        resetRound();

    } else {
        // Decide the final result

        if (playerScore > computerScore) {
            finalResult = "You win!"
        } else if (playerScore < computerScore) {
            finalResult = "You Lose!"
        }

        // Show final score

        document.getElementsByClassName('roundResult')[0].innerHTML = finalResult;

        // Delay for 3sec
        setTimeout(function() {
            //your code to be executed after 5 second
            unHideScreen(document.getElementsByClassName('roundResult')[0]);
            hideScreen(document.getElementsByClassName('game-bottom1')[0]);
            hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

            setTimeout(function() {
                unHideScreen(document.getElementsByClassName('roundResult')[0]);
                hideScreen(document.getElementsByClassName('game-bottom1')[0]);
                hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

                setTimeout(function() {
                    unHideScreen(document.getElementsByClassName('roundResult')[0]);
                    hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);
                    hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);

                }, 2000);
            }, 2000);
    
        }, 1000);
        
        console.log(finalResult);
        
        console.log(counter);
        unHideScreen(document.getElementsByClassName('game-bottom1-cont')[0]);
        unHideScreen(document.getElementsByClassName('game-bottom1')[0]);
        unHideScreen(document.getElementsByClassName('game-bottom2-cont')[0]);
        unHideScreen(document.getElementsByClassName('game-bottom2')[0]);
        unHideScreen(document.getElementsByClassName('roundResult')[0]);
    }

    return counter;

}

function endGame () {
    
    // Move to last screen
    hideScreen(document.getElementsByClassName('gridWrapper-cont')[0]);
    unHideScreen(document.getElementsByClassName('body-sc3-cont')[0]);
}

function goToWelcomeScr () {
    hideScreen(document.getElementsByClassName('body-sc3-cont')[0]);
    unHideScreen(document.getElementsByClassName('body-sc1-cont')[0]);
}