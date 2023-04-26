#!/usr/bin/env node
import {minimist} from 'minimist'
//import {playRPSLS} from "/lib/rpsls.js"

const args = minimist(process.argv.slice(2));

if (args.h != null) {
    console.log("Usage: node-rpsls [SHOT]\n")
    console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n")
    console.log("  -h, --help      display this help message and exit\n")
    console.log("  -r, --rules     display the rules and exit\n\n")
    console.log("Examples:\n")
    console.log("  node-rpsls        Return JSON with single player RPSLS result.\n")
    console.log("                    e.g. {player:rock}\n")
    console.log("  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n")
    console.log("                    e.g {player:rock,opponent:Spock,result:lose}\n")
}

if (args.r != null) {
    console.log("Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n")
    console.log("  - Scissors CUTS Paper\n")
    console.log("  - Paper COVERS Rock\n")
    console.log("  - Rock SMOOSHES Lizard\n")
    console.log("  - Lizard POISONS Spock\n")
    console.log("  - Spock SMASHES Scissors\n")
    console.log("  - Scissors DECAPITATES Lizard\n")
    console.log("  - Lizard EATS Paper\n")
    console.log("  - Paper DISPROVES Spock\n")
    console.log("  - Spock VAPORIZES Rock\n")
    console.log("  - Rock CRUSHES Scissors\n")
}

playRPSLS(args[1])