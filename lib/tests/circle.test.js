// Circle Constructor is imported.
const Circle = require('../circle.js');

// Testing suite for Circle is created.
describe('Circle', () => {
// A test is created to check the trimmed result of render().
    describe('render', () => {
        it('Should output a viable .svg string', () => {
            const result = `<?xml version="1.0" encoding="utf-8"?>
            <!-- Autogenerated -->
            <svg width="300" height="200">
                <circle cx="150" cy="100" r="100" stroke="none" fill="black"/>
            
            <text x="150" y="105" text-anchor="middle" style="dominant-baseline:middle;font:74px serif;fill:red">
                RTM
            </text>
            </svg>`;
            const inputs = ['RTM','red','black'];
            const circle = new Circle(inputs[0],inputs[1],inputs[2]);
            //formatting is whack because of template literals, only compare based on VALUE
            expect(circle.render().trim).toEqual(result.trim);
        });
        it('Should handle hex values', () => {
            const result = `<?xml version="1.0" encoding="utf-8"?>
            <!-- Autogenerated -->
            <svg width="300" height="200">
                <circle cx="150" cy="100" r="100" stroke="none" fill="#f5428d"/>
            
            <text x="150" y="105" text-anchor="middle" style="dominant-baseline:middle;font:74px serif;fill:#42f5d4">
                RTM
            </text>
            </svg>`;
            const inputs = ['RTM','f5428d','42f5d4'];
            const circle = new Circle(inputs[0],inputs[1],inputs[2]);
            //formatting is whack because of template literals, only compare based on VALUE
            expect(circle.render().trim).toEqual(result.trim);
        });
    });
});