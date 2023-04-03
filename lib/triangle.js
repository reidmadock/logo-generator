const Shape = require('./shape.js');
/* The triangle class will need to override renderTextEl, since it needs to offset text lower than the other classes */
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
        this.shapeType = "Triangle";
    }

    renderShape() {
        return `<polyline points="150 0 25 200 275 200 150 0" stroke="none" fill="${this.shapeColor}"/>`
    }

    /* Overriden renderTextEl to account for traingles offset */
    renderTextEl() {
        return `<text x="150" y="130" text-anchor="middle">
        ${this.text}
    </text>`;
    }

    /* Override renderStyleEl cause Triangle needs smaller text */
    renderStyleEl() {
        return `<style>
            <![CDATA[
              text{
                dominant-baseline: middle;
                font: 60px Verdana, Helvetica, Arial, sans-serif;
                fill: ${this.textColor};
              }
            ]]>
        </style>`;
    }

    render() {
        return `<svg width="300" height="200">
    ${this.renderShape()}
        
    ${this.renderTextEl()}
        
    ${this.renderStyleEl()}
    </svg>`
    }
}

module.exports = Triangle;