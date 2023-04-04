// Circle Constructor is imported.
const Circle = require('../circle.js');

// Testing suite for Circle is created.
describe('Circle', () => {
// A test is created to check the trimmed result of render().
    describe('render', () => {
        it('Should output a viable .svg string', () => {
            const result = `<svg width="300" height="200">
            <circle cx="150" cy="100" r="100" stroke="none" fill="black"/>
            
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
            const circle = new Circle(inputs[0],inputs[1],inputs[2]);
            //formatting is whack because of template literals, only compare based on VALUE
            expect(circle.render().trim).toEqual(result.trim);
        });
    });
});