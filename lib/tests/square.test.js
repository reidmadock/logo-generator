// Square Constructor is imported.
const Square = require('../square.js');

// Testing suite for Square is created.
describe('Square', () => {
// A test is created to check the trimmed result of render().
    describe('render', () => {
        it('Should output a viable .svg string', () => {
            const result = `<svg width="300" height="200">
            <rect x="50" y="0" width="200" height="200" fill="black"/>
            
            <text x="150" y="100" text-anchor="middle">
                RTM
            </text>
            
            <style>
                <![CDATA[
                text{
                    dominant-baseline: middle;
                    font: 74px Verdana, Helvetica, Arial, sans-serif;
                    fill: red;
                }
                ]]>
            </style>`;
            const inputs = ['RTM','red','black'];
            const square = new Square(inputs[0],inputs[1],inputs[2]);
            //formatting is whack because of template literals, only compare based on VALUE
            expect(square.render().trim).toEqual(result.trim);
        });
        it('Should handle hex codes', () => {
            const result = `<svg width="300" height="200">
            <rect x="50" y="0" width="200" height="200" fill="#f5428d"/>
            
            <text x="150" y="100" text-anchor="middle">
                RTM
            </text>
            
            <style>
                <![CDATA[
                text{
                    dominant-baseline: middle;
                    font: 74px Verdana, Helvetica, Arial, sans-serif;
                    fill: #42f5d4;
                }
                ]]>
            </style>`;
            const inputs = ['RTM','f5428d','42f5d4'];
            const square = new Square(inputs[0],inputs[1],inputs[2]);
            //formatting is whack because of template literals, only compare based on VALUE
            expect(square.render().trim).toEqual(result.trim);
        });
    });
});