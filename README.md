### Cabassa's Repo Link
- https://github.com/decpdx584/node_modules_practice

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
```bash
touch .gitignore
```
- then, in text editor, add "node_modules" to the new .gitignore so when you push your updates to your GitHub repo, the Node package (which can be substantial) are not included.

* Submit this assignment by making a pull request

## Starting a Node app with Express
* Create a new directory and go into it
```bash
mkdir my-express-app
cd my-express-app
```
* Initialize the directory as a node project
```bash
npm init -y
```
* Add an index.js and a .gitignore files to the project
```bash
touch index.js .gitignore
```
* Download Express package from NPM
```bash
npm i express
```
* Open project in your text editor
```bash
code .
```
* Check that the package.json is both present and contains the "express" dependency
* Add *node_modules* to the .gitignore before making your first push
* In index.js, require express, set instance of express, and tell the app which port to listen to
```javascript
const express = require('express');
const app = express();

app.listen(8000);
```
* Make a corresponding repo on Github, initiate your project as a git, make your first commit, and push to your new Github repo
```bash
git init
git status
git add .
git status
git commit -m "[express] Initiate new express app"
git clone "repo url"
git push -u origin master
```

## Stubbing out Express routes
* After the instance of express, in index.js, send some text to the home page:
```javascript
app.get('/', (req, res) => {
  res.send('You made it to the home route!');
});
```
The first argument is the url for your home page. To attach other pages,repeat the above step in the index.js with another url path of your choice leading to them.

## Views
Views are how we set paths not just to text but entire html pages.
* In root directory create a folder called "views" and create html files within it
```bash
mkdir views
touch index.html about.html
```
* In each html file, set up whatever you want the routes you're setting up in your .js to lead to
* Now, in index.js, change your route functions to res.sendFile() and don't forget to change the url paths to whatever you want to lead to(this is the home page):
```javascript
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/views/index.html');
});
```
*NOTICE* res.sendFile takes an absolute path as its argument, so __dirname+... is super helpful
*ANOTHER NOTICE* Make sure nodemon is running in the terminal for these pages to show up in your browser

## Template Engines (like EJS)
Let's use EJS to embed some JavaScript into the html, shall we?
* In your terminal, install EJS
```bash
npm i ejs
```
* Add an app.set statement about your routes in index.js
```javascript
app.set('view engine', 'ejs');
```
* Rename all .html files as .ejs
* Convert any res.sendFile routes to res.render statements
```javascript
app.get('/', function(req, res) {
  res.render('index.ejs');
});
```
Now that there's EJS on the scene, we can inject data (in the form of an object) into the res.render statements in our index.js...
```javascript
app.get('/', function(req, res) {
  res.render('index', {name: "Sterling Archer", age: 35});
});
```
... and now you can access data variables in the "html" of the .ejs...
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Home Page</title>
  </head>
  <body>
    <h1>Hello, <%= name %>!</h1>
  </body>
</html>
```

## Layouts!!!
Let's have some more fun bulding out your app with another node package: EJS Layouts.
* Install ejs layouts onto your project in terminal
```bash
npm i express-ejs-layouts
```
* In your inde.js require it and add it to the app
```javascript
var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.listen(8000)
```
* Add a layout.ejs to your views folder and give it a boilerplate html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Faves&Hates</title>
</head>
<body>
  <%- body %>
</body>
</html>
```
* Create a home.ejs in views and give it a homepage with some html
* In index.js, below the app.use statement (*middleware*), create the route to the home page
```javascript
app.get('/', function(req, res) {
  res.render('home');
});
```
WOOOO! You've successfully created a layout that directs traffic in your app!

## Controllers
Your app's getting pretty convoluted and that index.js is getting HELLA busy with all those routes to views😅 Let's throw some controllers in there to further separate concerns, shall we?
* Create a controllers folder in the project's root directory
* In that new folder create a new .js that will handle one branch's routes using the router() function:
```javascript
var express = require('express');
var router = express.Router();

router.get('/foods', function(req, res) {
  res.render('faves/foods', {title: 'Favorite Foods', foods: ['coconut', 'avocado']});
});

router.get('/animals', function(req, res) {
  res.render('faves/animals', {title: 'Favorite Animals', animals: ['sand crab', 'corny joke dog']})
});

module.exports = router;
```
* Back in index.js we need to add a middleware line to get these new routes working
```javascript
app.use('/faves', require('./controllers/faves'));
```
You just graduated to CONTROLLING your routes instead of stubbing them out manually!!! 🎊🎉🎊