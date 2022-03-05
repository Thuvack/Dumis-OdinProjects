// Functions for implementing Rock, Paper, Scissors game.


// Declare global variable
    let playerSelection;
    let computerSelection;
    let playerStatus;
    let playerScore;
    let computerScore;
    let finalResult;
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
    let resetGameBtn = document.getElementById('confirmEndGame');

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
    let form = document.querySelector(".scr2Form");
    let scrRes = document.querySelector(".resultScrn");

// Declare scorebars
    let pScoreBar1 = document.querySelector(".Pscore-bar1");
    let pScoreBar2 = document.querySelector(".Pscore-bar2");
    let pScoreBar3 = document.querySelector(".Pscore-bar3");
    let pScoreBar4 = document.querySelector(".Pscore-bar4");
    let pScoreBar5 = document.querySelector(".Pscore-bar5");

    let cScoreBar1 = document.querySelector(".Cscore-bar1");
    let cScoreBar2 = document.querySelector(".Cscore-bar2");
    let cScoreBar3 = document.querySelector(".Cscore-bar3");
    let cScoreBar4 = document.querySelector(".Cscore-bar4");
    let cScoreBar5 = document.querySelector(".Cscore-bar5");

// Game intialization functions    

    function initNewGame(){
        // Set playerName 
        playerName.innerHTML = "&nbsp;" + playerNameInput.value;

        // Reset player scores and roundCounter
        playerScore = 0;
        computerScore = 0;
        roundCounter = 0;

        // Clear score bars
        pScoreBar1.style.display = "none";
        pScoreBar2.style.display = "none";
        pScoreBar3.style.display = "none";
        pScoreBar4.style.display = "none";
        pScoreBar5.style.display = "none";

        cScoreBar1.style.display = "none";
        cScoreBar2.style.display = "none";
        cScoreBar3.style.display = "none";
        cScoreBar4.style.display = "none";
        cScoreBar5.style.display = "none";

        // Initiate round
         initNewRound();

        return;
    }

    function initNewRound(){

        // Hide clear and results screen
            scrRes.innerHTML = " ";
            scrRes.style.display = "none";

        // Hide game control buttons
            playRoundBtn.innerHTML = "Play Round";
            playAgainBtn.style.display = "none";
            quitGameBtn.style.display = "none";

        // Update score screen in game
            gamePlayerScore.innerHTML = playerScore;
            gameCompScore.innerHTML = computerScore;

        // Prompt player to play round
        // by writting the billboard without timer
            gameAdvert("Click one of the above button to play a turn");

        // Switch off welcome screen
            gameScreenWelcome.style.display = "none";

        // Start game screen
            gameScreenPlay.style.display = "flex";

        //unHide game choices
            rockBtn.style.display = "flex";
            paperBtn.style.display = "flex";
            scissorsBtn.style.display = "flex";
            emuBtn.style.display = "flex";

        // Listen for player choice
            rockBtn.addEventListener("click", rockSelected);
            paperBtn.addEventListener("click", paperSelected);
            scissorsBtn.addEventListener("click", scissorsSelected);

            console.log("Player choice event listeners enabled...");
        
        // Hide play round
            playRoundBtn.style.display = "none";

        console.log("Start screen initiated, starting game ...")
        
        // Start game
        playerStatus = "Ready";

        return;
    }

    function quitGame(){

            // Prompt player to play round
            // by writting the billboard without timer

                //setTimeout(gameWait,3000)
                gameAdvert("Click one of the above button to play a turn or to quit")
    
            //Hide game choices
                rockBtn.style.display = "none";
                paperBtn.style.display = "none";
                scissorsBtn.style.display = "none";
                emuBtn.style.display = "none";

                console.log("Hiding game buttons");

            // Show PlayAgain & quitGamebuttons
                playRoundBtn.style.display = "none";
                playAgainBtn.style.display = "flex";
                quitGameBtn.style.display = "flex";
                
    
        // Go to start screen
    }

// Player Selection functions

    function rockSelected(){

        //Hide the other buttons
        paperBtn.style.display = "none";
        scissorsBtn.style.display = "none";

        //Set player choice and confirm player choice
        playerSelection = "Rock";

        // Advertise player choice
        gameAdvert("You chose Rock");
        //setTimeout(function(){gameBillBoard.innerHTML = " ";}, 3000);

        // Unhide play game button
        playRoundBtn.style.display = "flex";

        // Prompt player to click start button to play round
        gameAdvert("Click button to play round");
        //setTimeout(() => gameBillBoard.innerHTML = " ", 3000);

        // unHide game control buttons
        playRoundBtn.style.display = "flex";

        playerStatus = "Played";

        /*   // Remove event listeners
            rockBtn.removeEventListener("click", rockSelected);
            paperBtn.removeEventListener("click", paperSelected);
            scissorsBtn.removeEventListener("click", scissorsSelected);
        */

        console.log("Player selected Rock")

    return;
    }

    function paperSelected(){

        //Hide the other buttons
        rockBtn.style.display = "none";
        scissorsBtn.style.display = "none";

        //Set player choice and confirm player choice
        playerSelection = "Paper";

        // Advertise player choice
        gameAdvert("You chose Paper");
        //setTimeout(function(){gameBillBoard.innerHTML = " ";}, 3000);
    
        // Unhide play game button
        playRoundBtn.style.display = "flex";

        // Prompt player to click start button to play round
        gameAdvert("Click button to play round");
        //setTimeout(() => gameBillBoard.innerHTML = " ", 3000);

        // unHide game control buttons
        playRoundBtn.style.display = "flex";

        playerStatus = "Played";

         /*   // Remove event listeners
            rockBtn.removeEventListener("click", rockSelected);
            paperBtn.removeEventListener("click", paperSelected);
            scissorsBtn.removeEventListener("click", scissorsSelected);
        */

        console.log("Player selected Paper")

    return;
    }

    function scissorsSelected(){

        //Hide the other buttons
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";

        //Set player choice and confirm player choice
        playerSelection = "Scissors";

        // Advertise player choice
        gameAdvert("You chose Scissors");
        //setTimeout(function(){gameBillBoard.innerHTML = " ";}, 3000);
    
        // Unhide play game button
        playRoundBtn.style.display = "flex";

        // Prompt player to click start button to play round
        gameAdvert("Click button to play round");
        //setTimeout(() => gameBillBoard.innerHTML = " ", 3000);

        // unHide game control buttons
        playRoundBtn.style.display = "flex";

        playerStatus = "Played";

       /*   // Remove event listeners
            rockBtn.removeEventListener("click", rockSelected);
            paperBtn.removeEventListener("click", paperSelected);
            scissorsBtn.removeEventListener("click", scissorsSelected);
        */
 
        console.log("Player selected Rock")

    return;
    }

// Function for computer to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    function computerPlay() {
        // Declare the three variables
        let randomNumber

        // Assign Random numbers to variables
        randomNumber = Math.floor(Math.random() * 3);

        console.log(randomNumber);

        if (randomNumber === 0) {
            compDecision = "Rock"
        }
        else if (randomNumber === 1) {
            compDecision = "Paper"
        }
        else if (randomNumber === 2) {
            compDecision = "Scissors"
        } else if (randomNumber === 3) {
            computerPlay();
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

        // Update player scoreing bars

        if (playerScore === 1) {
            pScoreBar1.style.display = "flex";
            pScoreBar2.style.display = "none";
            pScoreBar3.style.display = "none";
            pScoreBar4.style.display = "none";
            pScoreBar5.style.display = "none";                                  
        } else if (playerScore === 2) {
            pScoreBar1.style.display = "flex";
            pScoreBar2.style.display = "flex";
            pScoreBar3.style.display = "none";
            pScoreBar4.style.display = "none";
            pScoreBar5.style.display = "none";                                  
        } else if (playerScore === 3) {
            pScoreBar1.style.display = "flex";
            pScoreBar2.style.display = "flex";
            pScoreBar3.style.display = "flex";
            pScoreBar4.style.display = "none";
            pScoreBar5.style.display = "none";                                  
        } else if (playerScore === 4) {
            pScoreBar1.style.display = "flex";
            pScoreBar2.style.display = "flex";
            pScoreBar3.style.display = "flex";
            pScoreBar4.style.display = "flex";
            pScoreBar5.style.display = "none";                                  
        } else if (playerScore === 5) {
            pScoreBar1.style.display = "flex";
            pScoreBar2.style.display = "flex";
            pScoreBar3.style.display = "flex";
            pScoreBar4.style.display = "flex";
            pScoreBar5.style.display = "flex";                                  
        } else {
            //Something went wrong
            console.log("Something went wrong")
        }

        //Update computer scoring barsd

        if (computerScore === 1) {
            cScoreBar1.style.display = "flex";
            cScoreBar2.style.display = "none";
            cScoreBar3.style.display = "none";
            cScoreBar4.style.display = "none";
            cScoreBar5.style.display = "none";
        } else if (computerScore === 2) {
            cScoreBar1.style.display = "flex";
            cScoreBar2.style.display = "flex";
            cScoreBar3.style.display = "none";
            cScoreBar4.style.display = "none";
            cScoreBar5.style.display = "none";
        } else if (computerScore === 3) {
            cScoreBar1.style.display = "flex";
            cScoreBar2.style.display = "flex";
            cScoreBar3.style.display = "flex";
            cScoreBar4.style.display = "none";
            cScoreBar5.style.display = "none";
        } else if (computerScore === 4) {
            cScoreBar1.style.display = "flex";
            cScoreBar2.style.display = "flex";
            cScoreBar3.style.display = "flex";
            cScoreBar4.style.display = "flex";
            cScoreBar5.style.display = "none";
        } else if (computerScore === 5) {
            cScoreBar1.style.display = "flex";
            cScoreBar2.style.display = "flex";
            cScoreBar3.style.display = "flex";
            cScoreBar4.style.display = "flex";
            cScoreBar5.style.display = "flex";
        } else {
            //Something went wrong
            console.log("Something went wrong")
        }

        return currentScore;
    }


    function getCompChoice() {
        let compChoice

        compChoice = computerPlay();

        // Show comp choice
    
    /*
        if (computerSelection = "Rock") {

            emuBtn.innerHTML = "<img src="./images/I_Rock01.png"></img>";

        } else if (computerSelection = "Paper") {

            emuBtn.innerHTML = <img src="./images/Aufsatz.png"></img>;

        } else if (computerSelection = "Scissors") {

            emuBtn.innerHTML = <img src="./images/Rating-Christgau-choice-cut.png"></img>;

        } else {
            //Something went wrong
            console.log("Something went wrong")
        }
     */

        // Add time delay with empty call of advert function
        //msgAdvert("");
        
        // TO-DO: animate computer making a choice
        
        return compChoice;
    }

    function gameAdvert(gameMsg) {

        gameBillBoard.innerHTML = gameMsg;

        console.log("gameAdvert posted!")
        return;
    }

    function gameWait(){
        let wait = "";
        gameAdvert(wait);

        console.log("I waited")
        return;
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    function screenFinScore (arg1) {

        scrRes.style.display = "flex";

        let text = document.createTextNode(arg1);

        scrRes.appendChild(text);

        let container = document.querySelector('.scr3GridWrapper');

        container.appendChild(scrRes);

    }

// Game Engine 

function gameEngine() {
    // Prep for the playRound Function
        let roundRes;
        let roundScr;
        let roundNum = 2;  // This needs fixing with an if statement

        roundNum += roundCounter;

        playRoundBtn.innerHTML = "Play Round " + roundNum;

        console.log("Game engine started...");

        if (playerStatus === "Played" &&  roundCounter < 4) {
            
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

                // Reset playing screen by showing player choice
                    rockBtn.style.display = "flex";
                    paperBtn.style.display = "flex";
                    scissorsBtn.style.display = "flex";
                    emuBtn.style.display = "flex";

                // Hide game control buttons
                    playRoundBtn.style.display = "none";

                // Prompt player to play round
                // by writting the billboard without timer
                    gameAdvert("Click one of the above button to play a turn");

                // Increment round counter   
                roundCounter++


            } else {
                
                //Play last round
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

                    // Decide the final result
                        if (playerScore > computerScore) {
                            finalResult = "You win!";
                            
                        } else if (playerScore < computerScore) {
                            finalResult = "You Lose!";
                            
                        } else if (playerScore = computerScore) {
                            finalResult = "Thats a draw!";
                        }

                        // Advertise final score
                        screenFinScore(finalResult);
                        console.log("Deciding final score: "+ finalResult)
                        //setTimeout(gameWait,3000);

                // Close out game

                        // remove playBtn click event listener
                        playRoundBtn.removeEventListener("click", gameWait);

                        quitGame(finalResult);
                }
    
    return;
}

// Listen for initGameBtn to load initialising game presets

form.addEventListener("submit", handleSubmit);

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
startGametBtn.addEventListener("click", initNewGame);

// Play 5 rounds
playRoundBtn.addEventListener("click", gameEngine);

// Listen for click events to play another round or to quit game
playAgainBtn.addEventListener("click", initNewGame);

quitGameBtn.addEventListener("click", function () {

    scrRes.style.display = "none";

    // Reset player scores and roundCounter
        playerScore = 0;
        computerScore = 0;
        roundCounter = 0;

     // Clear playerName 
        playerName.innerHTML = "&nbsp; ";
        playerNameInput = "";

        playerName.innerHTML = " "

     // Go to end screen
        scrRes.style.display = "none";
        gameScreenPlay.style.display = "none";
        gameScreenEnd.style.display = "flex";

});

resetGameBtn.addEventListener("click", function (){
    gameScreenEnd.style.display = "none";
    gameScreenStart.style.display = "flex";
});