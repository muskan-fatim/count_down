#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let count = 100;
let coundition = true;
let start = await inquirer.prompt([{
        name: "start",
        type: "input",
        message: "presss enter to start a count down "
    }
]);
let time = setInterval(() => {
    count -= 1;
    console.log(count);
}, 1000);
while (coundition) {
    let stop = await inquirer.prompt([{
            name: "exit",
            type: "confirm",
            message: "when you want stop the count down press enter"
        }
    ]);
    if (stop.exit === true) {
        clearInterval(time);
        console.log(chalk.bgCyan(100 - count + " " + "secoonds"));
        coundition = false;
    }
}
if (count === 0) {
    clearInterval(time);
    console.log("Time up");
}
