/* step 3: Declaring and initalizing humanScore and computerScore as 0 first */
  let humanScore = 0;
  let computerScore = 0;


/* Step 1: logic implementation for computer choice */
function getComputerChoice()
{
    let choice = ['rock','paper','scissors'];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}
// console.log('Computer choice is',getComputerChoice());

/* Step 2: logic to get human choice */
function getHumanChoice()
{
    let input = prompt('Enter your choice among rock, paper or scissors').toLowerCase();
    if(input == 'rock'|| input == 'paper' || input =='scissors')
        return input;
    else{
        console.log("It's an invalid choice");
        return null;
    }
}

// console.log('Your selection is',getHumanChoice());

/* Step 4: game logic to play single round */


function playRound (humanChoice, computerChoice)
{

    
    if(humanChoice === null){
        console.log('Invalid chocie!, no round to be played');
        return;
    }
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == computerChoice)
    {
        console.log("It's a Tie!");
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper')
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Score: Your score is ${humanScore}, Computer score is ${computerScore}`); 

/* step 5: logic to play entire game */

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice)
{

    
    if(humanChoice === null){
        console.log('Invalid chocie!, no round to be played');
        return;
    }
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice == computerChoice)
    {
        console.log("It's a Tie!");
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper')
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    
}

  for(let i = 0; i <5; i++ )
  { 
    const humanSelection =getHumanChoice();
    const computerSelection =getComputerChoice();
    console.log(`Round ${i+1}`)
    playRound(humanSelection, computerSelection);
    console.log(`Score: Your score is ${humanScore}, Computer score is ${computerScore}`); 

  }

  // To declare final winner

    if(humanScore > computerScore)
    {
        console.log(`Congratulation! you won game. Final score: You score ${humanScore} , computer score ${computerScore}`);
    }
    else if(computerScore > humanScore)
    {
        console.log(`Sorry you lose the game. Final score: You score ${humanScore} , computer score ${computerScore}`);
    }
    else {
        console.log(`The game is tied, Final score: You score ${humanScore} , computer score ${computerScore}`);
    }

}
playGame();


