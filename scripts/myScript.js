// Functions for implementing Rock, Paper, Scissors game.

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
    let playerSelection
    let computerSelection
    let playerScore = 0
    let computerScore = 0
    let gameResult
    let finalScore

    for (let i = 0; i < 5; i++) {
        //Get user input
        let myString = prompt("Enter a word");
        playerSelection = capitalise(myString)

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