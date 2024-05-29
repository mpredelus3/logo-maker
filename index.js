const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes') // links the classes to the index

const questions = [ // creates an array of questions to select in command line
    {
        type: "input",
        name: "text",
        message: "Choose 3 letters to display"
        // TODO -->add choice hexidecimal number or color keyword 

    },
    {
        type: "input",
        name: "textColor",
        message: "What color will the text in the shape be?"
                // TODO -->add choice hexidecimal number or color keyword 
        
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape.",
        choices: ["circle", "square", "triangle"]

    },
    {
        type: "",
        name: "",
        message: ""

    }
]