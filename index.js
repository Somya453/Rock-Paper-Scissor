
let rock = 0;
let paper = 1;
let scissor=2;

const player=0;

const computer = Math.floor(Math.random() * 3);

let result = "";
if (player === computer) {
  console.log("It's a tie!");
} else if (
  (player === 0 && computer === 2) || // Rock beats Scissors
  (player === 1 && computer === 0) || // Paper beats Rock
  (player === 2 && computer === 1)    // Scissors beats Paper
) {
  console.log("The player won!");
} else {
  console.log("The computer won!");
}
