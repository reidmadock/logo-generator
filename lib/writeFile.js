const fs = require('fs');

function outputSvg(filename, data) {
    fs.writeFile(filename, data, (err) => {
        err ? console.log(err) : console.log("Success!")
    });
}

module.exports = { outputSvg };