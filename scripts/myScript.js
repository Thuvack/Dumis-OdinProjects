// Functions for implementing Rock, Paper, Scissors game.

// Declare global variable
let playerSelection
let playerStatus

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
    return compDecision;
}


// Function for deciding between playerSelection, computerSelection to determine winner of round.
function playRound(playerSelection, computerSelection) {

    let roundWinner

    // Select round decision based on game rules
    if ( playerSelection === "Paper" && computerSelection === "Rock" ) {
        roundWinner = "You Win! Paper beats Rock"
    }
    else if ( playerSelection === "Rock" && computerSelection === "Paper" ) {
        roundWinner = "You Lose! Paper beats Rock"
    }
    else if ( playerSelection === "Paper" && computerSelection === "Scissors" ) {
        roundWinner = "You Lose! Scissors beats Paper"
    }
    else if ( playerSelection === "Scissors" && computerSelection === "Paper" ) {
        roundWinner = "You Win! Scissors beats Paper"
    }
    else if ( playerSelection === "Scissors" && computerSelection === "Rock" ) {
        roundWinner = "You Lose! Rock beats Scissors"
    }
    else if ( playerSelection === "Rock" && computerSelection === "Scissors" ) {
        roundWinner = "You Win! Rock beats Scissors"
    }
    else if ( playerSelection === "Rock" && computerSelection === "Rock" ) {
        roundWinner = "It's a Draw! Rock equals Rock"
    }
    else if ( playerSelection === "Paper" && computerSelection === "Paper" ) {
        roundWinner = "It's a Draw! Paper equals Paper"
    }
    else if ( playerSelection === "Scissors" && computerSelection === "Scissors" ) {
        roundWinner = "It's a Draw! Scissors equals Scissors"
    }
    return roundWinner;
}


// Game function
function game(){
    // Prep for the playRound Function
    let computerSelection = 0
    let playerScore = 0
    let computerScore = 0
    let gameResult
    let finalScore

    for (let i = 0; i < 5; i++) {

        let playerSel = 0;

        //Get user input
       
        /*
        while (playerStatus === "Play") {
            //Delay unti player has played
            hideScreen(document.getElementsByClassName('comp-choice')[0]);
            hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
            hideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
            hideScreen(document.getElementsByClassName('cp-msg-choice')[0]);
            hideScreen(document.getElementsByClassName('roundResult')[0]);

            unHideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

            setInterval(playerStatus = "Played", 10000);
        }
        */

        console.log(playerSel);
        console.log(playerStatus);

        playerSel = playerSelection;

        playerStatus = "Played";

        //get computer to play
        computerSelection = computerPlay()

        //Play round of ROck, Paper, Scissors
        gameResult = playRound(playerSelection, computerSelection)

        //Increment scores
        if (gameResult.search("Win") >= 1) {
            //Win was found in result string Increment player's score
            playerScore++
            console.log(gameResult)
            console.log("Player score is: "+playerScore + " and Computer score is: "+computerScore)
        }
        else if (gameResult.search("Lose") >= 1) {
            //Lose was found in result string Increment computer's score
            computerScore++
            console.log(gameResult)
            console.log("Player score is: "+playerScore + " and Computer score is: "+computerScore)
        }
        else if (gameResult.search("Draw") >= 1) {
            computerScore++
            playerScore++

            console.log(gameResult)
            console.log("Player score is: "+playerScore + " and Computer score is: "+computerScore)
        }
        else {
            //Something wrong happened
            alert("Something bad happened")
            console.log("Something bad happened")
        }
    }

    finalScore = "FINAL SCORE: Player: "+playerScore + " and Computer: "+computerScore
    console.log("FINAL SCORE: Player: "+playerScore + " and Computer: "+computerScore)

    return finalScore;
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
    hideScreen(document.getElementsByClassName('game-bottom1')[0]);
    hideScreen(document.getElementsByClassName('game-bottom2')[0]);
}

function getPlayerChoice(plChoice) {

    let pChoice = 0

    console.log(plChoice)

    if (plChoice === document.getElementsByClassName('clickRock')[0]) {
        
        //Hide the other buttons
        hideScreen(document.getElementsByClassName('clickPaper')[0]);
        hideScreen(document.getElementsByClassName('clickScissors')[0]);
        hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

        //Set player choice and confirm player choice

        pChoice = "Rock";
        console.log(pChoice);

        document.getElementsByClassName('player-choice-text')[0].innerHTML = pChoice;

    } else if (plChoice === document.getElementsByClassName('clickPaper')[0]) {
        
        //Hide the other buttons
        hideScreen(document.getElementsByClassName('clickRock')[0]);
        hideScreen(document.getElementsByClassName('clickScissors')[0]);
        hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

        //Set player choice and confirm player choice

        pChoice = "Paper";
        console.log(pChoice);

        document.getElementsByClassName('player-choice-text')[0].innerHTML = pChoice;

    } else if (plChoice === document.getElementsByClassName('clickScissors')[0]) {
        
        //Hide the other buttons
        hideScreen(document.getElementsByClassName('clickRock')[0]);
        hideScreen(document.getElementsByClassName('clickPaper')[0]);
        hideScreen(document.getElementsByClassName('pl-msg-prompt')[0]);

        //Set player choice and confirm player choice

        pChoice = "Scissors";
        console.log(pChoice);

        document.getElementsByClassName('player-choice-text')[0].innerHTML = pChoice;
        
        
    } else {
        // Something went wrong 
    }


        setTimeout(function() {
            //your code to be executed after 5 second
            unHideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
            hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
        
            setTimeout(function() {
                //your code to be executed after 5 second
                unHideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
                hideScreen(document.getElementsByClassName('pl-msg-choice')[0]);
            
                setTimeout(function() {
                    //your code to be executed after 5 second
                    hideScreen(document.getElementsByClassName('cp-msg-prompt')[0]);
                    unHideScreen(document.getElementsByClassName('game-bottom1')[0]);
                }, 1000);
            }, 1000);
    
        }, 500);

        
    playerSelection = pChoice;

    playerStatus = "Play";

    console.log(playerStatus);

    return;
}

