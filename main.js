/*
Rock	Paper Scissors
0			1			2

Comp choice
	Pick 0, 1, 2
Player choice
	Request input
	Convert input to 0, 1, 2

Compare choices
	If === tie
	P - C	=	
	0	-	1	=	-1	Lose	
	0	-	2	=	-2	Win		
	1	-	0	=	1		Win		
	1	-	2	=	-1	Lose	
	2	-	0	=	2		Lose	
	2	-	1	=	1		Win		

	-1 or 2 is a loss
	-2 or 1 is a win
Return victor

*/
let compChoice = 0;
let playerChoice = 0;
let points = 0;
let match = 0;
function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}



function winLoseLogic(match) {
	if (match === -1 || match === 2) {
		console.log("You lost this round");
		points--;
	}
	if (match === 1 || match === -2) {
		console.log("You won this round");
		points++;
	}
	if (match === 0) {
		console.log("This match was a draw")
	}
	return points;
}
function ChoiceToNum(choice) {
	switch (choice) {
		case 'r':
			choice = 0;
			break;
		case 'p':
			choice = 1;
			break;
		case 's':
			choice = 2;
			break;
		default:
			console.warn("Invalid choice: You must choose between Rock, Paper and Scissors (Or any word starting with R, P, S)");
			playGame();
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
function playRound()
{
	compChoice = getComputerChoice();
	playerChoice = prompt("Please enter your hand for Rock, Paper, Scissors: ").toLowerCase()[0];

	playerChoice = ChoiceToNum(playerChoice);
	let choices = "The Player chose: " + verboseChoices(playerChoice) + " & the Computer chose: " + verboseChoices(compChoice);
	console.log(choices);

	gameResult = winLoseLogic(playerChoice - compChoice);

	return gameResult;
}
function playGame() {

	for (let index = 0; index < 5; index++) {
		points += playRound();
	}
	if(points > 0)
	{
		console.log("Congrats, you won Rock, Paper, Scissors!");
	}
	if(points < 0)
	{
		console.log("Sorry, you lose.");
	}
	if(points === 0)
	{
		console.log("Sorry, this match ended in a draw.");
	}
}

