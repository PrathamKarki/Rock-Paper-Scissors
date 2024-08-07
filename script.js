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
console.log('Computer choice is',getComputerChoice());

/* Step 2: logic to get human choice */
function getHumanChoice()
{
    let input = prompt('Enter your choice among rock, paper or scissors').toLowerCase();
    if(input == 'rock'|| input == 'paper' || input =='scissors')
        return input;
    else
        console.log("It's an invalid choice");
        return 'Invalid! choice';
}

console.log('Your selection is',getHumanChoice());