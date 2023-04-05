const Shape = require('./shape.js');

class Square extends Shape {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderShape() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`
    }

    // uses parent render() method

}

module.exports = Square;