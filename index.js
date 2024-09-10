import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor();
const blockColor = chalk.hex(randomColor);

const block = `
             ###############################
             ###############################
             ###############################
             #####                     #####
             #####       ${randomColor}       #####
             #####                     #####
             ###############################
             ###############################
             ###############################
            `;

console.log(block);
