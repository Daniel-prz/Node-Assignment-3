"use strict";
import questionObject1 from "./questions/favoriteLanguage.js";
import questionObject2 from "./questions/bestLanguage.js";
import inquirer from "inquirer";
inquirer.prompt([questionObject1, questionObject2]).then((answers) => {
  console.log("Thanks for taking this survey!");
  console.log("Your favorite language: " + answers.favorite);
  console.log("The language you best understand: " + answers.best);
});
