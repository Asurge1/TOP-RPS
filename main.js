let compChoice = 0;
let playerChoice = 0;
let points = 0;
let match = 0;
let winningPoints = 5;

const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");
const round = document.querySelector(".round");
const result = document.querySelector(".result");
const verbose = document.querySelector(".verbose");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
		colorSwap(button);
		playRound(button.textContent);
  });
});

function colorSwap(e)
{
	let R = Math.random() * 255;
	let G = Math.random() * 255;
	let B = Math.random() * 255;
	let str = "rgb(" + R + " " + G + " " + B + ")";
	e.style.background = str;
}

function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}
function winLoseLogic(match) {
	if (match === -1 || match === 2) {
		round.textContent = "You lost this round";
		points--;
	}
	if (match === 1 || match === -2) {
		round.textContent = "You won this round";
		points++;
	}
	if (match === 0) {
		round.textContent = "This match was a draw";
	}
	return points;
}
function ChoiceToNum(choice) {
	switch (choice) {
		case 'Rock':
			choice = 0;
			break;
		case 'Paper':
			choice = 1;
			break;
		case 'Scissors':
			choice = 2;
			break;
		default:
			console.warn("Invalid choice: You must choose between Rock, Paper and Scissors (Or any word starting with R, P, S)");
			// playGame();
			return;
	}
	return choice;
}
function verboseChoices(choice) {
	switch (choice) {
		case 0:
			return "Rock"
			break;
		case 1:
			return "Paper"
			break;
		case 2:
			return "Scissors"
			break;
		default:
			console.error("Invalid input in verboseChoices, this should be impossible unless manually calling")
	}
}
function playRound(choice)
{
	compChoice = getComputerChoice();
	playerChoice = ChoiceToNum(choice);

	verbose.textContent = "The Player chose: " + verboseChoices(playerChoice) + " & the Computer chose: " + verboseChoices(compChoice);
	match++;
	winLoseLogic(playerChoice - compChoice)
	victoryLoss(points);
}
function playGame() {
	let res = '';
	for (let index = 0; index < 5; index++) {
		points += playRound();
	}
	if (points > 0) {
		res="Congrats, you won Rock, Paper, Scissors!";
	}
	if (points < 0) {
		res="Sorry, you lose.";
	}
	if (points === 0) {
		res="Sorry, this match ended in a draw.";
	}
	result.textContent = res;
}
function victoryLoss(result)
{

	score.textContent = "Current Score: " + points +  " Round: " + match;
	if(result === winningPoints)
	{
		score.textContent = "The Player wins with "  + result +  " points on round " + match;
		points = 0;
		match = 0;
	}
	if(result === -winningPoints)
	{
		score.textContent = "The Computer wins with "  + Math.abs(result) +  " points on round " + match;
		points = 0;
		match = 0;
	}
}