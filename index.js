const inquirer = require('inquirer');
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes') // links the classes to the index

const questions = [ // creates an array of questions to select in command line
    {
        type: "input",
        name: "text",
        message: "Choose 3 letters to display"


    },
    {
        type: "input",
        name: "textColor",
        message: "What color will the text in the shape be?"
         

    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape between: circle, square, and triangle.",
        choices: ["circle", "square", "triangle"]

    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color will the shape be?"
        

    }
];

function writeToFile(fileName, data) { //creates file in file server and logs its completion in terminal
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Logo has been created.');;
    })
}

function generateSVG({ text, textColor, shape, shapeColor }) { //created a function to generate the file using switch/case with error for wrong input
    let shapeInstance;
    switch (shape) {
        case 'circle':
            shapeInstance = new Circle(text, textColor, shapeColor);
            break;
        case 'square':
            shapeInstance = new Square(text, textColor, shapeColor);
            break;
        case 'triangle':
            shapeInstance = new Triangle(text, textColor, shapeColor);
            break;
        default:
            throw new Error('Invalid shape type')
    }
    return shapeInstance.render();    
    
}

function init() { //uses inquirer to initialize the prompt and responses naming the newly created file
    inquirer.prompt(questions)
        .then((response) => {
            const svgContent = generateSVG(response);
            writeToFile('logo.svg', svgContent);
        });
}

init();