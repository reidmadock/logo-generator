const inquirer = require('inquirer');
const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');
const { outputSvg } = require('./writeFile');
// const output = require('./output');

const shapes = ['Circle', 'Square', 'Triangle'];
/* TODO: 
- add functionality to inq to support hex values for colors
- add tests for hex values
- clean up SVG output code
*/
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
            let {logoText, textColor, shape, shapeColor} = answers;
            console.log(answers);
            if (shape == 'Circle') {
                let test = new Circle(logoText, textColor, shapeColor);
                console.log(test.render());    
                return test;
            } 
            if (shape == 'Square') {
                let test = new Square(logoText, textColor, shapeColor);
                console.log(test.render());
                return test;            
            }
            if (shape == 'Triangle') {
                let test = new Triangle(logoText, textColor, shapeColor);
                console.log(test.render());
                return test;  
            }
        })
        .then((data) => {
            outputSvg('./logo.svg', data.render());
        })
}

module.exports = run;