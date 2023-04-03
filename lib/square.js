const Shape = require('./shape');

class Square extends Shape {

    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeType = "Square";
    }

    renderShape() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" stroke-width="3"/>`
    }

    render() {
        return `
    <svg width="300" height="200">
        ${renderShape()}
        
        ${this.renderTextEl()}
        
        ${this.renderStyleEl()}
    </svg>
        `
    }
}

module.exports = Square;