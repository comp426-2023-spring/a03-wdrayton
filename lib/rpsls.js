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

function playRPS(play) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const playerChoice = play;

  if (!playerChoice) {
    playerChoice = choices[Math.floor(Math.random() * choices.length)];
    return(JSON.stringify({player : playerChoice}));
  } else if (!choices.includes(playerChoice)) {
    console.error(`Invalid choice: ${playerChoice}. Available choices: ${choices.join(', ')}`);
    process.exit(1);
  }

  const playerWins = outcomes[playerChoice].beats.includes(computerChoice);

  console.log(`You chose ${playerChoice}, and the computer chose ${computerChoice}.`);

  if (playerWins) {
    return(JSON.stringify({player : playerChoice, opponent : computerChoice, result : win}))
  } else if (computerChoice === playerChoice) {
    return(JSON.stringify({player : shot, opponent : cpu, result : draw}))
  } else {
    return(JSON.stringify({player : playerChoice, opponent : computerChoice, result : lose}))
  }
}

function playRPSLS(play) {
    choices.splice(choices.indexOf('lizard'), 1);
    choices.splice(choices.indexOf('spock'), 1);
    outcomes.paper.beats.splice(outcomes.paper.beats.indexOf('spock'), 1);
    outcomes.scissors.beats.splice(outcomes.scissors.beats.indexOf('lizard'), 1);

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const playerChoice = play;
  
    if (!playerChoice) {
      playerChoice = choices[Math.floor(Math.random() * choices.length)];
      return(JSON.stringify({player : playerChoice}));
    } else if (!choices.includes(playerChoice)) {
      console.error(`Invalid choice: ${playerChoice}. Available choices: ${choices.join(', ')}`);
      process.exit(1);
    }
  
    const playerWins = outcomes[playerChoice].beats.includes(computerChoice);
  
    if (playerWins) {
        return(JSON.stringify({player : playerChoice, opponent : computerChoice, result : win}))
      } else if (computerChoice === playerChoice) {
        return(JSON.stringify({player : shot, opponent : cpu, result : draw}))
      } else {
        return(JSON.stringify({player : playerChoice, opponent : computerChoice, result : lose}))
    }
}

module.exports = {default: playRPS, playRPSLS};


  