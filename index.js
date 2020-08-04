const myModule = require("./module");
const chalk = require("chalk");
const faveFood = myModule.faveFood;

for (i=0; i < faveFood.length; i++) {
    console.log(chalk.magentaBright.bgCyan(faveFood[i]));
};
