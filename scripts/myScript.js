// Functions for implementing Rock, Paper, Scissors game.


// Declare global variable
let playerSelection;
let computerSelection;
let playerStatus;
let playerScore;
let computerScore;

let roundCounter;

// Declare playerName pointer
let playerName = document.getElementsByClassName('player-name')[0];
let playerNameInput = document.getElementById('playerName');
let gamePlayerScore = document.getElementsByClassName('player-score')[0];
let gameCompScore = document.getElementsByClassName('comp-score')[0];

// Declare game control buttons
let initGameBtn = document.getElementById('clickPlay');
let startGametBtn = document.getElementById('clickGameStart');

let playRoundBtn = document.getElementsByClassName('clickPlayRound')[0];
let playNexRoundtBtn = document.getElementsByClassName('clickPlayNextRound')[0];
let closeRoundBtn = document.getElementsByClassName('confirmEndGame')[0];

let playAgainBtn = document.getElementById('clickPlayAgain');
let quitGameBtn = document.getElementById('clickQuit');

// Declare game choice buttons
let rockBtn = document.getElementsByClassName('clickRock')[0];
let paperBtn = document.getElementsByClassName('clickPaper')[0];
let scissorsBtn = document.getElementsByClassName('clickScissors')[0];
let emuBtn = document.getElementsByClassName('comp-choice-play')[0];

// Declare screens
let gameScreenStart = document.getElementsByClassName('scr1GridWrapper-cont')[0];
let gameScreenWelcome = document.getElementsByClassName('scr2GridWrapper-cont')[0];
let gameScreenPlay = document.getElementsByClassName('scr3GridWrapper-cont')[0];
let gameScreenEnd = document.getElementsByClassName('scr4GridWrapper-cont')[0];

let gameBillBoard = document.getElementsByClassName('billBoard')[0];


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

    return currentScore;
}


function getCompChoice() {
    let compChoice

    compChoice = computerPlay();

    // Add time delay with empty call of advert function
    //msgAdvert("");
    
    // TO-DO: animate computer making a choice
    
    return compChoice;
}


// Game Engine 
// Listen for initGameBtn to load initialising game presets

initGameBtn.addEventListener("click", function (){
    // Transition to welcome screen
    // Hide screen2 & screen 3
    gameScreenPlay.style.display = "none";
    gameScreenStart.style.display = "none";
    gameScreenWelcome.style.display = "flex";

    console.log("initGameBtn clicked");
    return;
});

// Listen for startGametBtn to start initialising game presets 
startGametBtn.addEventListener("click", function(){
    // Set playerName 
    playerName.innerHTML = "&nbsp;" + playerNameInput.value;

    // Hide game control buttons
    playRoundBtn.style.display = "none";
    playNexRoundtBtn.style.display = "none";
    closeRoundBtn.style.display = "none";

    // Reset player scores and roundCounter
    playerScore = 0;
    computerScore = 0;
    roundCounter = 1;

    // Update score screen in game
    gamePlayerScore.innerHTML = playerScore;
    gameCompScore.innerHTML = computerScore;

    // Prompt player to play round
    // by writting the billboard without timer
    gameBillBoard.innerHTML = "Click one of the above button to play a turn"

    // Switch off welcome screen
    gameScreenWelcome.style.display = "none";

    // Start game screen
    gameScreenPlay.style.display = "flex";

    console.log("startGameBtn clicked");
    return;
});

// Listen for player choice
/// Listen for clickRock button
rockBtn.addEventListener("click", function(){

    //Hide the other buttons
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";

    //Set player choice and confirm player choice
    playerSelection = "Rock";

    // Advertise player choice
    gameBillBoard.innerHTML ="You chose Rock";
    //setTimeout(function(){gameBillBoard.innerHTML = " ";}, 3000);
   
    // Unhide play game button
    playRoundBtn.style.display = "flex";

    // Prompt player to click start button to play round
    gameBillBoard.innerHTML ="Click button to play round";
    //setTimeout(() => gameBillBoard.innerHTML = " ", 3000);

return;
});

// Listen for paperBtn click
paperBtn.addEventListener("click", function(){

    //Hide the other buttons
    rockBtn.style.display = "none";
    scissorsBtn.style.display = "none";

    //Set player choice and confirm player choice
    playerSelection = "Paper";

    // Advertise player choice
    gameBillBoard.innerHTML ="You chose Paper";
    //setTimeout(function(){gameBillBoard.innerHTML = " ";}, 3000);
   
    // Unhide play game button
    playRoundBtn.style.display = "flex";

    // Prompt player to click start button to play round
    gameBillBoard.innerHTML ="Click button to play round";
    //setTimeout(() => gameBillBoard.innerHTML = " ", 3000);

return;
});

// Listen for scissorsBtn click
scissorsBtn.addEventListener("click", function(){

    //Hide the other buttons
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";

    //Set player choice and confirm player choice
    playerSelection = "Scissors";

    // Advertise player choice
    gameBillBoard.innerHTML ="You chose Scissors";
    //setTimeout(function(){gameBillBoard.innerHTML = " ";}, 3000);
   
    // Unhide play game button
    playRoundBtn.style.display = "flex";

    // Prompt player to click start button to play round
    gameBillBoard.innerHTML ="Click button to play round";
    //setTimeout(() => gameBillBoard.innerHTML = " ", 3000);

return;
});

// Play round
playRoundBtn.addEventListener("click", function(){
    // Prep for the playRound Function
    let roundRes;
    let roundScr;
    let finalResult;

    // Get computer's random selection
       computerSelection = getCompChoice();

    // Call play round function
    roundRes = playRound(playerSelection, computerSelection);
    console.log(roundRes);

    // get Updated players scores
    roundScr = updateScore(roundRes);
    console.log(roundScr);

    // Update score screen in game
    gamePlayerScore.innerHTML = playerScore;
    gameCompScore.innerHTML = computerScore;

    // Advertise round result
    //msgAdvert(roundRes);

    // Start round counter and check that no more than 5 rounds have been played
    if (roundCounter < 5) {

        // Reset playing screen by showing player choice
        rockBtn.style.display = "flex";
        paperBtn.style.display = "flex";
        scissorsBtn.style.display = "flex";
        emuBtn.style.display = "flex";

        // Hide game control buttons
        playRoundBtn.style.display = "flex";

        // Prompt player to play round
        // by writting the billboard without timer
        gameBillBoard.innerHTML = "Click one of the above button to play a turn"

        console.log("Reset Round initiated");

        // Increment round counter
        roundCounter++;

    } else {
        // Once 5 rounds have been played, Decide the final result
        if (playerScore > computerScore) {
            finalResult = "You win!"
        } else if (playerScore < computerScore) {
            finalResult = "You Lose!"
        }

        // Advertise final score
        gameBillBoard.innerHTML = finalResult;

        //Hide game choices
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorsBtn.style.display = "none";
        emuBtn.style.display = "none";
        
        // Show end round button to accept final result
        
        playRoundBtn.style.display = "none";
        closeRoundBtn.style.display = "flex";

        console.log("Final Round reached go to end screen");
       
        // Clear roundCounter

        roundCounter = 1;
    }

    return;
});


// Listen for closeRoundBtn and transition to end screen
closeRoundBtn.addEventListener("click", function(){

    gameScreenPlay.style.diplay = "none"; // TO-DO why this is not taking effect
    closeRoundBtn.style.display = "none";
    gameScreenEnd.style.display = "flex";

    console.log("Close Round button clicked, go to end screen");
    return;
});

playAgainBtn.addEventListener("click", function(){
    // Hide screen4
    gameScreenEnd.style.display = "none";

    // Hide game control buttons
    playRoundBtn.style.display = "none";
    playNexRoundtBtn.style.display = "none";
    closeRoundBtn.style.display = "none";

        // Reset player scores and roundCounter
            playerScore = 0;
            computerScore = 0;
            roundCounter = 1;

        // Update score screen in game
            gamePlayerScore.innerHTML = playerScore;
            gameCompScore.innerHTML = computerScore;

        // Show game option buttons
            rockBtn.style.display = "flex";
            paperBtn.style.display = "flex";
            scissorsBtn.style.display = "flex";
            emuBtn.style.display = "flex";    

        // Prompt player to play round
        // by writting the billboard without timer
            gameBillBoard.innerHTML = "Click one of the above button to play a turn"

    // Switch off welcome screen
    gameScreenWelcome.style.display = "none";

    // Start game screen
    gameScreenPlay.style.display = "flex";

    console.log("playAgainBtn clicked");
    return;
});


quitGameBtn.addEventListener("click", function(){

    gameScreenPlay.style.diplay = "none"; // TO-DO why this is not taking effect
    
    // TRYING THIS Because above does not work
    // Construct screen 3 default before quiting

        // Clear playerName 
            playerName.innerHTML = "&nbsp; ";

        // show player & Comp options control buttons
        // Show game option buttons
            rockBtn.style.display = "flex";
            paperBtn.style.display = "flex";
            scissorsBtn.style.display = "flex";
            emuBtn.style.display = "flex"; 

        // Reset player scores and roundCounter
            playerScore = 0;
            computerScore = 0;
            roundCounter = 1;

        // Update score screen in game
            gamePlayerScore.innerHTML = playerScore;
            gameCompScore.innerHTML = computerScore;

        // Prompt player to play round
        // by writting the billboard without timer
            gameBillBoard.innerHTML = "Click one of the above button to play a turn"

    // REMOVE ABOVE AFTER TESTING

    // Go to start screen
    
    gameScreenEnd.style.display = "none";
    gameScreenStart.style.display = "flex";

});