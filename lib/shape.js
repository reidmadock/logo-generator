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

    setDimensions() {
        this.width = 300;
        this.height = 200;
    }

    getTextEl() {
        return `
        <text x="150" y="100" text-anchor="middle">
            ${this.text}
        </text>`;
    }

    getStyleEl() {
        return `
        <style>
            <![CDATA[
              text{
                dominant-baseline: middle;
                font: 48px Verdana, Helvetica, Arial, sans-serif;
                fill: ${this.textColor};
              }
            ]]>
        </style>`;
    }

    render() {

    }

}

module.exports = Shape;