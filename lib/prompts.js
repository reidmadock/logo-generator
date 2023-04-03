const inquirer = require('inquirer');
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

        })
}

module.exports = run;