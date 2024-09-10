// import libraries
import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// save user input
const hue = argv[2];
const luminosity = argv[3];

// random color generator based on user input
const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

// create a color chalk
const blockColor = chalk.hex(color);

// generate a block template

const blockTemplate = `
             ###############################
             ###############################
             ###############################
             #####                     #####
             #####       ${color}       #####
             #####                     #####
             ###############################
             ###############################
             ###############################
            `;

console.log(blockColor(blockTemplate));
