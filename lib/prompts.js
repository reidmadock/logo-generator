const inquirer = require('inquirer');
const Square = require('./square');
const Circle = require('./circle');
const Triangle = require('./triangle');
const { outputSvg } = require('./writeFile');

function run() {
    const shapes = ['Circle', 'Square', 'Triangle'];

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
            message: 'Enter desired text color, by keyword or by hex code.',
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
            message: 'Enter desired shape color, by keyword or by hex code.',
        },
        ])
        .then((answers) => {
            let {logoText, textColor, shape, shapeColor} = answers;

            if (shape == 'Circle') {
                return new Circle(logoText, textColor, shapeColor);
            } 
            if (shape == 'Square') {
                return new Square(logoText, textColor, shapeColor);
            }
            if (shape == 'Triangle') {
                return new Triangle(logoText, textColor, shapeColor);  
            }
        })
        .then((data) => {
            outputSvg('./logo.svg', data.render());
        })
}

module.exports = run;