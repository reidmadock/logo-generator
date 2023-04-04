/* all shapes:
- share a width of 300 and a hieght of 200 
- need a text property
- need a text color property
- need a shape color property
*/

class Shape {

    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    setDimensions() {{}
        this.width = 300;
        this.height = 200;
    }

    renderShape() {
        return '';
    }

    renderTextEl() {
        return `<text x="150" y="105" text-anchor="middle">
            ${this.text}
        </text>`;
    }

    renderStyleEl() {
        return `<style>
            <![CDATA[
              text{
                dominant-baseline: middle;
                font: 74px Verdana, Helvetica, Arial, sans-serif;
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

module.exports = Shape;