// Square Constructor is imported.
const Square = require('../square.js');

// Testing suite for square is created.
describe('Square', () => {
// A test is created to check the trimmed result of render().
    describe('render', () => {
        it('should take two numbers and add them together', () => {
            const result = `<svg width="300" height="200">
            <rect x="50" y="0" width="200" height="200" fill="black" stroke-width="3"/>
            
            <text x="150" y="100" text-anchor="middle">
                RTM
            </text>
            
            <style>
                <![CDATA[
                text{
                    dominant-baseline: middle;
                    font: 48px Verdana, Helvetica, Arial, sans-serif;
                    fill: red;
                }
                ]]>
            </style>`;
            const inputs = ['RTM','red','black'];
            const square = new Square(inputs[0],inputs[1],inputs[2]);
            //formatting is whack because of template literals, only compare based on VALUE
            expect(square.render().trim).toEqual(result.trim);
        });
    });
});