const Shape = require('./shape.js');

/* The triangle class will need to override renderTextEl, since it needs to offset text lower than the other classes */

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    renderShape() {
        return `<polyline points="150 0 25 200 275 200 150 0" stroke="none" fill="${this.shapeColor}"/>`
    }

    /* Overriden renderTextEl to account for traingles offset */
    renderTextEl() {
        return `
        <text x="150" y="130" text-anchor="middle" style="dominant-baseline:middle;font:60px serif;fill:${this.textColor}">
            ${this.text}
        </text>`;
    }

    // uses parent render() method

}

module.exports = Triangle;