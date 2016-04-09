console.log('HEIST - A GAME OF MEMORY');

// Match user input to combinations. If all is true, player passes stage.
// New levels are created as player completes level.

var gamePlay = {
  level1: [2, 4, 8, 9, 3],
  playerName: '',
  playerInput: [],
  currentLevel: 1,
}

console.log(gamePlay.level1);

// script/timer.js
beginTimer();



var displayNumber = '';
var playerInput = [];
var currentLevel = 1;
var winner = true;

// Match each user input to combinations.
function checkForWin() {
  if (playerInput.length > 0) {
    for (var i = 0; i < playerInput.length; i++) {
      if (Number(playerInput[i]) === gamePlay.level1[i]) {
        winner = true;
        console.log(winner);
      } else {
        winner = false;
        console.log(winner);
      }
    }
  }
}

// function checkForWin() {
//   for (var i = 0; i < gamePlay.level1.length; i ++) {
//     if (gamePlay.level1[i] === Number(playerInput[i])) {
//       console.log('Winner');
//     } else {
//       console.log('Try again');
//     }
//   }
// }

function createLevels(currentLevel) {
  // If playerInput == gamePlay.level1
    // 1. Create new level, i.e. gamePlay.level2
    // 2. Create new array of random numbers ++1 in gamePlay.level2
  var newLevel = 'level' + (currentLevel + 1);
  console.log(newLevel);
}



// while (gamePlay.level1.length < 5) {
//   var randomNum = Math.floor(Math.random()*10);
//   gamePlay.level1.push(randomNum);
// }
// console.log(gamePlay);
