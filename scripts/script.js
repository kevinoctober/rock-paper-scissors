const rockREx = /rock/i;
const paperREx = /paper/i;
const scissorsREx = /scissors/i;

let computerScore = 0;
let playerScore = 0;

// output a random choice (rock, paper, scissors)
function computerPlay(){
    const selection = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random() * 3);
    console.log("Computer: " + selection[compChoice]); //testing
    return selection[compChoice];
}

// prompt user to enter a choice, check for validity
function playerSelection(){
    let playerChoice = prompt("Enter your selection: rock | paper | scissors."); 
    if (!isValid(playerChoice)){
        alert("invalid input!");
        playerSelection();
    }
    console.log("Player: " + playerChoice); //testing
    return playerChoice;
}

// test validity of a string against regex
function isValid(str){
    return (rockREx.test(str) || paperREx.test(str) || scissorsREx.test(str));
}

// write a function that plays a single round. input parameters: playerselection,
    // and computerSelection. Output: eg) "you lose! Paper beats rock."
    // playerSelection should be case insensitive.
function playRound(playerSelection, compSelection){
    if (rockREx.test(playerSelection)){
        if (rockREx.test(compSelection)){
            return "It's a tie! Rock vs rock.";
        } else if (paperREx.test(compSelection)){
            return "You lose! Paper beats rock.";
        } else {
            return "You win! Rock beats scissors."
        }
    } else if (paperREx.test(playerSelection)){
        if (paperREx.test(compSelection)){
            return "It's a tie! Paper vs paper.";
        } else if (scissorsREx.test(compSelection)){
            return "You lose! Scissors beats paper.";
        } else {
            return "You win! Paper beats rock."
        }
    } else if (scissorsREx.test(playerSelection)){
        if (scissorsREx.test(compSelection)){
            return "It's a tie! Scissors vs scissors.";
        } else if (rockREx.test(compSelection)){
            return "You lose! Rock beats scissors.";
        } else {
            return "You win! Scissors beats paper."
        }
    }
}

// write function called game() to play five rounds, keep score and report the winner/loser

// TODO: edit playRound function to keep track of score

// test functions
//console.log(computerPlay());
//console.log(playerSelection());
console.log(playRound(playerSelection(), computerPlay()));
//console.log(isValid(playerSelection()));
