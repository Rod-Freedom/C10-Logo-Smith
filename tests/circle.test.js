import Logo from "../utils/logo.js";
import Circle from "../utils/circle.js";

describe('Logo', () => {
    describe('Circle instance', () => {
        it('should be an instance of the Logo class', () => {
            const newCircle = new Circle({});

            expect(newCircle).toBeInstanceOf(Logo);
        });
    });

    describe('Circle methods', () => {
        it('should inherit several methods from the Logo class', () => {
            const newLogo = new Logo({});
            const newCircle = new Circle({});
    
            expect(newCircle.bgColorForge).toBe(newLogo.bgColorForge);
            expect(newCircle.fontForge).toBe(newLogo.fontForge);
            expect(newCircle.textElForge).toBe(newLogo.textElForge);
            expect(newCircle.gradientElForge).toBe(newLogo.gradientElForge);
            expect(newCircle.setColors).toBe(newLogo.setColors);
        });
    });
});

describe('Circle class', () => {
    describe('properties', () => {
        it('should create a new property called shadow which value depends on the bgColor property', () => {
            // Any other bg color than 'none' should render the shadow element.
            const colors = ['beige', 'red', 'blue', 'green', 'steel', 'pink', 'yellow', 'purple', 'deepblue', 'orange', 'grey', 'sand'];
            const selected = colors[Math.floor(Math.random() * colors.length)];
            const params = { bgColor: selected };
            const expectedVal = { element: '<rect class="cls-5" x="726.62" y="580.89" width="1058.81" height="1350.27" transform="translate(-520.26 1256.02) rotate(-45)"/>', values: 'x1="427.58" y1="427.58" x2="986.25" y2="986.25" gradientTransform="translate(1256.02 -452.56) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'};
            
            // Only when 'none' is selected no shadow element should be rendered.
            const selected2 = 'none';
            const params2 = { bgColor: selected2 };
            const expectedVal2 = { element: '', values: ''};
            
            const newCircle = new Circle(params);
            const newCircle2 = new Circle(params2);

            expect(newCircle.shadow).toEqual(expectedVal);
            expect(newCircle2.shadow).toEqual(expectedVal2);
        })
    });
    
    describe('methods', () => {
        describe('figureForge method', () => {
            it('should morph the figureForge method from the Logo class', () => {
                const newLogo = new Logo({});
                const newCircle = new Circle({});
        
                expect(newCircle.figureForge).not.toEqual(newLogo.figureForge);
            });
            
            it('should return a specific circle element for the svg', () => {
                const expectedEl = '<circle class="cls-1" cx="777.3" cy="777.3" r="478.9"/>';
                const newCircle = new Circle({});
        
                expect(newCircle.figureForge()).toBe(expectedEl);
            });
        });
    });
});