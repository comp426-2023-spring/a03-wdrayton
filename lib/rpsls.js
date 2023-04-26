// const ROCK = 'rock';
// const SCISSORS = 'scissors';
// const PAPER = 'paper';
// const SPOCK = 'spock';
// const LIZARD = 'lizard';
// const OPTIONS = {
//     1: ROCK,
//     2: SCISSORS,
//     3: PAPER,
//     4: SPOCK,
//     5: LIZARD
// };

// let gameRules = {
//     ROCK: {
//         ROCK: 'draw',
//         SCISSORS: 'lose',
//         PAPER: 'win',
//         SPOCK: 'win',
//         LIZARD: 'lose'
//     },
//     PAPER: {
//         PAPER: 'draw',
//         ROCK: 'lose',
//         SCISSORS: 'win',
//         LIZARD: 'win',
//         SPOCK: 'lose'
//     },
//     SCISSORS: {
//         SCISSORS: 'draw',
//         PAPER: 'lose',
//         ROCK: 'win',
//         LIZARD: 'lose',
//         SPOCK: 'win'
//     },
//     LIZARD: {
//         SCISSORS: 'win',
//         PAPER: 'lose',
//         ROCK: 'win',
//         LIZARD: 'draw',
//         SPOCK: 'lose'
//     },
//     SPOCK: {
//         SCISSORS: 'lose',
//         PAPER: 'win',
//         ROCK: 'lose',
//         LIZARD: 'win',
//         SPOCK: 'draw'
//     }
// }

// function rps(shot) {
//     if (shot == null) {
//         shot = Math.floor((Math.random() * 3) + 1)
//         return(JSON.stringify({player : shot}))
//     }

//     if (OPTIONS[shot] > 3) {
//         return(console.error(shot + " is out of range"))
//     }

//     shot = shot.toLowerCase()
//     let cpu = Math.floor((Math.random() * 3) + 1)
//     switch(gameRules[cpu][shot]) {
//         case 'win': 
//             return(JSON.stringify({player : shot, opponent : cpu, result : win}))
//         case 'lose':
//             return(JSON.stringify({player : shot, opponent : cpu, result : lose}))
//         case 'draw':
//             return(JSON.stringify({player : shot, opponent : cpu, result : draw}))
//     }   

// }


// module.exports = { playRound, computerPlay };

// function rpsls(shot) {
//     if (shot == null) {
//         shot = Math.floor((Math.random() * 5) + 1);
//     }

//     shot = shot.toLowerCase()
//     let cpu = Math.floor((Math.random() * 5) + 1)
//     switch(gameRules[cpu][shot]) {
//         case 'win': 
//             return(JSON.stringify({player : shot, opponent : cpu, result : win}))
//         case 'lose':
//             return(JSON.stringify({player : shot, opponent : cpu, result : lose}))
//         case 'draw':
//             return(JSON.stringify({player : shot, opponent : cpu, result : draw}))
//     } 
// }

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const outcomes = {
  rock: { beats: ['scissors', 'lizard'] },
  paper: { beats: ['rock', 'spock'] },
  scissors: { beats: ['paper', 'lizard'] },
  lizard: { beats: ['paper', 'spock'] },
  spock: { beats: ['rock', 'scissors'] },
};

function playRPS() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'playerChoice',
        message: 'Choose your weapon:',
        choices,
      },
    ])
    .then(({ playerChoice }) => {
      const playerWins =
        outcomes[playerChoice].beats.includes(computerChoice);

      console.log(`You chose ${playerChoice}, and the computer chose ${computerChoice}.`);

      if (playerWins) {
        console.log('You win!');
      } else if (computerChoice === playerChoice) {
        console.log('It\'s a tie!');
      } else {
        console.log('The computer wins!');
      }
    });
}

function playRPSLS() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'playerChoice',
        message: 'Choose your weapon:',
        choices,
      },
    ])
    .then(({ playerChoice }) => {
      const playerWins =
        outcomes[playerChoice].beats.includes(computerChoice);

      console.log(`You chose ${playerChoice}, and the computer chose ${computerChoice}.`);

      if (playerWins) {
        console.log('You win!');
      } else if (computerChoice === playerChoice) {
        console.log('It\'s a tie!');
      } else {
        console.log('The computer wins!');
      }
    });
}

program
  .command('rps')
  .description('Play rock-paper-scissors')
  .action(playRPS);

program
  .command('rpsls')
  .description('Play rock-paper-scissors-lizard-spock')
  .action(playRPSLS);

program.parse(process.argv);
