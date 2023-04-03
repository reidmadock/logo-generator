// Triangle Constructor is imported.
const Triangle = require('../triangle.js');

// Testing suite for Circle is created.
// Triangle also has coordinate offsets unique to it's class. Should test those overrides too just to be safe
// Triangle also has style unqiue to it's class
describe('Triangle', () => {
// A test is created to check the trimmed result of render().
    describe('renderTextEl', () => {
        it('Should output correct offset for textEl', () => {
            const result = `<text x="150" y="130" text-anchor="middle">
            APM
        </text>`
        const inputs = ['APM','white','blue'];
        const triangle = new Triangle(inputs[0],inputs[1],inputs[2]);
        expect(triangle.renderTextEl().trim).toEqual(result.trim)
        });
    });
    describe('renderStyleEl', () => {
        it('Should output correct style for Triangle class', () => {
            const result = `<style>
            <![CDATA[
              text{
                dominant-baseline: middle;
                font: 60px Verdana, Helvetica, Arial, sans-serif;
                fill: white;
              }
            ]]>
        </style>`
        const inputs = ['APM','white','blue'];
        const triangle = new Triangle(inputs[0],inputs[1],inputs[2]);
        expect(triangle.renderTextEl().trim).toEqual(result.trim)
        });
    });
    describe('render', () => {
        it('Should output a viable .svg string', () => {
            const result = `<svg width="300" height="200">
            <polyline points="150 0 25 200 275 200 150 0" stroke="none" fill="black"/>
            
            <text x="150" y="130" text-anchor="middle">
                RTM
            </text>
            
            <style>
                <![CDATA[
                text{
                    dominant-baseline: middle;
                    font: 60px Verdana, Helvetica, Arial, sans-serif;
                    fill: red;
                }
                ]]>
            </style>`;
            const inputs = ['RTM','red','black'];
            const triangle = new Triangle(inputs[0],inputs[1],inputs[2]);
            //formatting is whack because of template literals, only compare based on VALUE
            expect(triangle.render().trim).toEqual(result.trim);
        });
    });
});