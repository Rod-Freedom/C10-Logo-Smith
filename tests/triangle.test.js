import Logo from "../utils/logo.js";
import Triangle from "../utils/triangle.js";

describe('Logo', () => {
    describe('Triangle instance', () => {
        it('should be an instance of the Logo class', () => {
            const newTriangle = new Triangle({});

            expect(newTriangle).toBeInstanceOf(Logo);
        });
    });

    describe('Triangle methods', () => {
        it('should inherit several methods from the Logo class', () => {
            const newLogo = new Logo({});
            const newTriangle = new Triangle({});
    
            expect(newTriangle.bgColorForge).toBe(newLogo.bgColorForge);
            expect(newTriangle.fontForge).toBe(newLogo.fontForge);
            expect(newTriangle.textElForge).toBe(newLogo.textElForge);
            expect(newTriangle.gradientElForge).toBe(newLogo.gradientElForge);
            expect(newTriangle.setColors).toBe(newLogo.setColors);
        });
    });
});

describe('Triangle class', () => {
    describe('properties', () => {
        it('should create a new property called shadow which value depends on the bgColor property', () => {
            // Any other bg color than 'none' should render the shadow element.
            const colors = ['beige', 'red', 'blue', 'green', 'steel', 'pink', 'yellow', 'purple', 'deepblue', 'orange', 'grey', 'sand'];
            const selected = colors[Math.floor(Math.random() * colors.length)];
            const params = { bgColor: selected };
            const expectedVal = { element: '<rect class="cls-5" x="585.89" y="514.53" width="1026.53" height="1350.27" transform="translate(-513.36 1342.06) rotate(-52.66)"/>', values: 'x1="-38.86" y1="-23.93" x2="519.81" y2="534.73" gradientTransform="translate(1109.39 590.42) rotate(60.43) scale(1.39 1.19) skewX(27.16)"'};
            
            // Only when 'none' is selected no shadow element should be rendered.
            const selected2 = 'none';
            const params2 = { bgColor: selected2 };
            const expectedVal2 = { element: '', values: ''};
            
            const newTriangle = new Triangle(params);
            const newTriangle2 = new Triangle(params2);

            expect(newTriangle.shadow).toEqual(expectedVal);
            expect(newTriangle2.shadow).toEqual(expectedVal2);
        })
    });
    
    describe('methods', () => {
        describe('figureForge method', () => {
            it('should morph the figureForge method from the Logo class', () => {
                const newLogo = new Logo({});
                const newTriangle = new Triangle({});
        
                expect(newTriangle.figureForge).not.toEqual(newLogo.figureForge);
            });
            
            it('should return a specific circle element for the svg', () => {
                const expectedEl = `<path class="cls-1" d="
                    M689.33,349.47
                    l-435.37,754.08
                    c-39.1, 67.72, 9.77, 152.37, 87.97, 152.37
                    h870.74
                    c78.19, 0, 127.07-84.65, 87.97-152.37
                    l-435.37-754.08
                    c-39.1-67.72-136.84-67.72-175.94,0
                    Z
                "/>`;
                const newTriangle = new Triangle({});
        
                expect(newTriangle.figureForge()).toBe(expectedEl);
            });
        });
    });
});