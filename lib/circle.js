const Shape = require('./shape.js');

class Circle extends Shape {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderShape() {
        return `<circle cx="150" cy="100" r="100" stroke="none" fill="${this.shapeColor}"/>`
    }

    // uses parent render() method

}

module.exports = Circle