#! /usr/bin/env node
import inquirer from "inquirer";
//Declare a Constant "answer" and assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the Word: "
    }
]);
const word = answer.sentence.trim().split(" ");
// print the Array of words to the console
console.log(word);
//print the word count of the sentence to the console
console.log(`Your Sentence Word Count is ${word.length}`);
