const inquirer = require('inquirer');
const Square = require('./square');
const Circle = require('./circle');
const Trianagle = require('./triangle');
// const output = require('./output');

const shapes = ['Circle', 'Square', 'Trianagle'];

function run() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'logoText',
            message: 'Enter up to three characters',
            validate(val) {
                if (val.length <= 3) {
                    return true;
                }
                return "Must be less than or equal to three characters"
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter desired text color',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Enter up to three characters',
            choices: shapes,
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter desired shape color',
        },
        ])
        .then((answers) => {
            let {text, textColor, shape, shapeColor} = answers;
            console.log(answers);
            if (shape == 'Circle') {
                let test = new Circle(text, textColor, shapeColor);
                console.log(test.render());    
            } 
            if (shape == 'Square') {
                let test = new Square(text, textColor, shapeColor);
                console.log(test.render());            }
            if (shape == 'Triangle') {
                let test = new Triangle(text, textColor, shapeColor);
                console.log(test.render());  
            }
        })
}

module.exports = run;