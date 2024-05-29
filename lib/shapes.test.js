const { Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
    test('Circle renders correctly', () => {
        const circle = new Circle('ABC', 'red', 'blue');
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>
        </svg>`;
        expect(circle.render().replace(/\s+/g, '')).toBe(expectedSvg.replace(/\s+/g, ''));
    });

    test('Square renders correctly', () => {
        const square = new Square('XYZ', 'green', 'yellow');
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="50" width="150" height="150" fill="yellow" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">XYZ</text>
        </svg>`;
        expect(square.render().replace(/\s+/g, '')).toBe(expectedSvg.replace(/\s+/g, ''));
    });

    test('Triangle renders correctly', () => {
        const triangle = new Triangle('123', 'black', 'white');
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 250,190 50,190" fill="white" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">123</text>
        </svg>`;
        expect(triangle.render().replace(/\s+/g, '')).toBe(expectedSvg.replace(/\s+/g, ''));
    });
});
