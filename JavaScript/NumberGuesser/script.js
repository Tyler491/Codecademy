let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//This function generates a random number between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

//This function takes a human guess, a computer guess, and a number to see which guess is closer
//In the case of a tie the human wins
//The function returns true if the human wins and false if the computer wins
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if (humanGuess < 0 || humanGuess > 9) alert('Invalid guess');
    return (getAbsoluteDistance(secretTarget, humanGuess) <= getAbsoluteDistance(secretTarget, computerGuess)) ? true : false;
}

//Helper function for compareGuess, this just returns the absolute distance between two numbers (the Delta)
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

//updateScore will update the global variables humanScore or computer score
//A string is passed in to the winner parameter, if the string is 'human' the humanscore is increased by one
//If the string is 'computer' then the coputer score is increased by one
//There is no return value of this function
const updateScore = (winner) => (winner === 'human') ? humanScore++ : (winner === 'computer') ? computerScore++ : null;

//This function increases the global variable currentRoundNumber by 1 every time it is called, there is no return value
const advanceRound = () => currentRoundNumber++;