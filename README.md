# Node Modules Practice

1. Fork and clone this repo
2. Initialize node in your cloned repo so it becomes a node project!

## Make your own module

* create a node module that stores an array of your favorite foods
* mport that module into your index.js
* write code in your index.js so when you run your app, it loops through the array, printing all of your favorite foods to the console

```javascript
const myModule = require("./module");
const faveFood = myModule.faveFood;

for (i = 0; i < faveFood.length; i++) {
    console.log(faveFood[i]);
};
```

## Experiment with implementing a package

* Find a [npm](https://www.npmjs.com/) that looks interesting
- https://www.npmjs.com/package/chalk

* Experiment with incorporating it into this node project, just like we did with moment

```javascript
const myModule = require("./module");
const chalk = require("chalk");
const faveFood = myModule.faveFood;

for (i=0; i < faveFood.length; i++) {
    console.log(chalk.magentaBright.bgCyan(faveFood[i]));
};
```

## Add to your Node app instructions readme

* add notes about how to create and import node modules to your Node/Express app readme, along with instructions about adding a `.gitignore`
* paste the link to your repo in this the readme of this assignment

### Step One
* find the package you'd like to add
### Step Two
* install it into your node project from the command line as directed in the package's documentation instructions:
```bash
npm i chalk
```
### Step Three
* declare the chalk variable
```javascript
const chalk = require("chalk");
```
* add the package's syntax to your code to use it properly
```javascript
console.log(chalk.magentaBright.bgCyan(faveFood[i]));
```
### Step Four
* run the program in your terminal to view results
```bash
node index.js
```


## Finally, .gitignore and submit a PR!

* add a `.gitignore` to this assignment, so the `node_modules` folder doesn't upload to github
* Submit this assignment by making a pull request
