import Logo from "../utils/logo.js";
import Square from "../utils/square.js";

describe('Logo', () => {
    describe('Square instance', () => {
        it('should be an instance of the Logo class', () => {
            const newSquare = new Square({});

            expect(newSquare).toBeInstanceOf(Logo);
        });
    });

    describe('Square methods', () => {
        it('should inherit several methods from the Logo class', () => {
            const newLogo = new Logo({});
            const newSquare = new Square({});
    
            expect(newSquare.bgColorForge).toBe(newLogo.bgColorForge);
            expect(newSquare.fontForge).toBe(newLogo.fontForge);
            expect(newSquare.textElForge).toBe(newLogo.textElForge);
            expect(newSquare.gradientElForge).toBe(newLogo.gradientElForge);
            expect(newSquare.setColors).toBe(newLogo.setColors);
        });
    });
});

describe('Square class', () => {
    describe('properties', () => {
        it('should create a new property called shadow which value depends on the bgColor property', () => {
            // Any other bg color than 'none' should render the shadow element.
            const colors = ['beige', 'red', 'blue', 'green', 'steel', 'pink', 'yellow', 'purple', 'deepblue', 'orange', 'grey', 'sand'];
            const selected = colors[Math.floor(Math.random() * colors.length)];
            const params = { bgColor: selected };
            const expectedVal = { element: '<rect class="cls-5" x="576" y="580.89" width="1358.81" height="1350.27" transform="translate(-520.26 1256.02) rotate(-45)"/>', values: 'x1="778.63" y1="778.63" x2="1337.3" y2="1337.3" gradientTransform="translate(1256.02 -1301.02) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'};
            
            // Only when 'none' is selected no shadow element should be rendered.
            const selected2 = 'none';
            const params2 = { bgColor: selected2 };
            const expectedVal2 = { element: '', values: ''};
            
            const newSquare = new Square(params);
            const newSquare2 = new Square(params2);

            expect(newSquare.shadow).toEqual(expectedVal);
            expect(newSquare2.shadow).toEqual(expectedVal2);
        })
    });
    
    describe('methods', () => {
        describe('figureForge method', () => {
            it('should morph the figureForge method from the Logo class', () => {
                const newLogo = new Logo({});
                const newSquare = new Square({});
        
                expect(newSquare.figureForge).not.toEqual(newLogo.figureForge);
            });
            
            it('should return a specific circle element for the svg', () => {
                const expectedEl = `<rect class="cls-1" x="${777.3 - 478.9}" y="${777.3 - 478.9}" width="${478.9 * 2}" height="${478.9 * 2}" rx="90" />`;
                const newSquare = new Square({});
        
                expect(newSquare.figureForge()).toBe(expectedEl);
            });
        });
    });
});