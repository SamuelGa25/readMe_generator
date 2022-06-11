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
        type:"input",
        message:"How is the app used?",
        name: "usage"
    },{
        //
        type: "", 
        message: "",
        name:""
    },{
        //
        type: "", 
        message: "",
        name:""
    },{
        //
        type: "", 
        message: "",
        name:""
    },{
        //
        type: "", 
        message: "",
        name:""
    },{
        //
        type: "", 
        message: "",
        name:""
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err){
        console.log(fileName);
        console.log(name);
        
    })
}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
