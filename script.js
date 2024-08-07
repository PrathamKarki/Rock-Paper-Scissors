/* Step 1: logic implementation for computer choice */
function getComputerChoice()
{
    let choice = ['rock','paper','scissors'];
    let randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;
}
console.log('Computer choice is',getComputerChoice());