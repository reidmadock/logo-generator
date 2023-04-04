const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeType = "Circle";
    }

    renderShape() {
        return `<circle cx="150" cy="100" r="100" stroke="none" fill="${this.shapeColor}"/>`
    }

    // render() {
    //     return `<svg width="300" height="200">
    // ${this.renderShape()}
        
    // ${this.renderTextEl()}
        
    // ${this.renderStyleEl()}
    // </svg>`
    // }
}

module.exports = Circle