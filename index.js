 // TODO: Include packages needed for this application

const inquirer = require('inquirer'); //requires the nmp package including modules
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log("Welcome to the README generator!");


// TODO: Create an array of questions for user input
const questions = [
    //title of the project
    {
        type: "input", 
        message: "What is the name of the project?",
        name: "Title"

    },{
      //description of project  
        type: "input",
        message: "What is the project about?",
        name: "Description"
    },{
        //table of contents 
        type:"input",
        message:"Table of content",
        name:"Table of Content"
    },{
        //Install
        type:"input",
        message:"What does the user needs to install to run the app?",
        name:"installation"
    },{
        //usage
        type: 'checkbox',
        name: 'Languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },{
        //
        type: 'input',
        name: 'contribution',
        message: 'What is your name?'
    },{
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
    },{
        //
        type: 'input',
        name: 'Email',
        message: 'What is you Email address?. (Required)'
    },{
        //
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err){
        console.log(fileName);
        console.log(data);

        if (err){
            return console.log(err);
        }else{
            console.log("completed!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        //writing on the read.me file.
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })

}
// Function call to initialize app
init();
