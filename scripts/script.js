const rockREx = /rock/i;
const paperREx = /paper/i;
const scissorsREx = /scissors/i;

let computerScore = 0;
let playerScore = 0;

// output a random choice (rock, paper, scissors)
function computerPlay(){
    const selection = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random() * 3);
    return selection[compChoice];
}

// prompt user to enter a choice, check for validity
function playerSelection(){
    const playerChoice = prompt("Enter your selection: rock | paper | scissors."); 
    if (!isValid(playerChoice)){
        alert("invalid input!");
        return playerSelection();
    }
    return playerChoice;
}

// test validity of a string against regex
function isValid(str){
    return (rockREx.test(str) || paperREx.test(str) || scissorsREx.test(str));
}

// function to display the current score
function displayScore(){
    return "Computer " + computerScore + " | " + playerScore + " Player";
}

// play a single round. 
function playRound(playerSelection, compSelection){
    if (rockREx.test(playerSelection)){
        if (rockREx.test(compSelection)){
            return "It's a tie! Rock vs rock.";
        } else if (paperREx.test(compSelection)){
            computerScore++;
            return "You lose! Paper beats rock.";
        } else {
            playerScore++;
            return "You win! Rock beats scissors."
        }
    } else if (paperREx.test(playerSelection)){
        if (paperREx.test(compSelection)){
            return "It's a tie! Paper vs paper.";
        } else if (scissorsREx.test(compSelection)){
            computerScore++;
            return "You lose! Scissors beats paper.";
        } else {
            playerScore++;
            return "You win! Paper beats rock."
        }
    } else if (scissorsREx.test(playerSelection)){
        if (scissorsREx.test(compSelection)){
            return "It's a tie! Scissors vs scissors.";
        } else if (rockREx.test(compSelection)){
            computerScore++;
            return "You lose! Rock beats scissors.";
        } else {
            playerScore++;
            return "You win! Scissors beats paper."
        }
    }
}

// play five rounds, keep score and report the winner/loser
function game(){
    const numRounds = 5;
    let result;
    for (i = 1; i <= numRounds; i++){
        console.log(playRound(playerSelection(), computerPlay()));
        console.log(displayScore());
    }
    if (playerScore > computerScore){
        result = "Player wins!";
    } else if (computerScore > playerScore){
        result = "Computer wins!";
    }
    else {
        result = "It's a tie.";
    }
    console.log("Game over. Final score:\n" + displayScore() + "\n" + result);
    console.log("\nRefresh to play again");
    return;
}

alert("This is a console game, please open the developer tools on your browser!");

game();
