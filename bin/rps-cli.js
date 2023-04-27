#!/usr/bin/env node

import minimist from 'minimist'
import {playRPS} from "../lib/rpsls.js"

const args = minimist(process.argv.slice(2));

if (args.h != null) {
    console.log("Usage: node-rps [SHOT]\n")
    console.log("Play Rock Paper Scissors (RPS)\n\n")
    console.log("  -h, --help      display this help message and exit\n")
    console.log("  -r, --rules     display the rules and exit\n\n")
    console.log("Examples:\n")
    console.log("  node-rps        Return JSON with single player RPS result.\n")
    console.log("                  e.g. {player:rock}\n")
    console.log("  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n")
    console.log("                  e.g {player:rock,opponent:scissors,result:win}\n")
    process.exit(0)
}

if (args.r != null) {
    console.log("Rules for Rock Paper Scissors:\n\n")
    console.log("  - Scissors CUTS Paper\n")
    console.log("  - Paper COVERS Rock\n")
    console.log("  - Rock CRUSHES Scissors\n")
    process.exit(0)
}

console.log(playRPS(args[1]));