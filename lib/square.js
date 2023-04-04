const Shape = require('./shape.js');

class Square extends Shape {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeType = "Square";
    }

    renderShape() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`
    }

    render() {
        return `<svg width="300" height="200">
    ${this.renderShape()}
        
    ${this.renderTextEl()}
        
    ${this.renderStyleEl()}
    </svg>`
    }
}

module.exports = Square;