import Logo from "../utils/logo.js";

describe('Logo class', () => {
    describe('parameters', () => {
        it('should store the passed parameters as properties', () => {
            const params = {
                text: 'ROD1',
                bgColor: 'beige',
                font: 'jersey10',
                color: 'underworld',
            };
            const newLogo = new Logo(params);
            
            expect(newLogo.text).toBe(params.text);
            expect(newLogo.bgColor).toBe(params.bgColor);
            expect(newLogo.font).toBe(params.font);
            expect(newLogo.color).toBe(params.color);
        });
        
        it('should store the text property value as "LSM" when passed with an empty string or undefined as text value.', () => {
            const params = {};
            const newLogo = new Logo(params);
            
            const params2 = { text: '' };
            const newLogo2 = new Logo(params2);
            
            expect(newLogo.text).toBe('LSM');
            expect(newLogo2.text).toBe('LSM');
        });
    });

    describe('textPos property', () => {
        it('should asign a default value for "x" and "y" properties inside the textPos property', () => {
            const expectPos = { x: 'calc(1554.6/2)', y: '910.05' }
            const newLogo = new Logo({});

            expect(newLogo.textPos.x).toBe(expectPos.x);
            expect(newLogo.textPos.y).toBe(expectPos.y);
        });
    });

    describe('bgColorForge method', () => {
        it('should return the color code of the selected color', () => {
            const colorCodes = { beige: "#f9f6d7", red: "#b22f3f", blue: "#375496", green: "#699e51", steel: "#7d8490", pink: "#b23a6a", yellow: "#f0dc6b", purple: "#4f4288", deepblue: "#4f4288", orange: "#ba5b3c", grey: "#7c7a77", sand: "#bdb4ad", none: "rgba(0,0,0,0)", };
            const colors = ['beige', 'red', 'blue', 'green', 'steel', 'pink', 'yellow', 'purple', 'deepblue', 'orange', 'grey', 'sand', 'none'];
            const selected = colors[Math.floor(Math.random() * colors.length)];
            const params = { bgColor: selected };
            
            const newLogo = new Logo(params);
            
            expect(newLogo.bgColorForge()).toBe(colorCodes[selected]);
        });
    });
    
    describe('fontForge method', () => {
        it('should return the styles for the selected font', () => {
            const fontStyles = {
                jersey10: { family: '"Jersey 10", sans-serif', size: '470px', style: 'none', weight: '100' },
                jersey25: { family: '"Jersey 25", sans-serif', size: '470px', style: 'none', weight: '100' },
                robotoMono: { family: '"Roboto Mono", monospace', size: '350px', style: 'none', weight: '500' },
                robotoMonoItalic: { family: '"Roboto Mono", monospace', size: '350px', style: 'italic', weight: '500' },
                roboto: { family: '"Roboto", sans-serif', size: '350px', style: 'none', weight: '500' },
                robotoItalic: { family: '"Roboto", sans-serif', size: '350px', style: 'italic', weight: '500' },
                monoIBM: { family: '"IBM Plex Mono", monospace', size: '350px', style: 'none', weight: '900' },
                monoIBMitalic: { family: '"IBM Plex Mono", monospace', size: '350px', style: 'italic', weight: '900' },
                latoLight: { family: '"Lato", sans-serif', size: '400px', style: 'none', weight: '300' },
                latoBold: { family: '"Lato", sans-serif', size: '400px', style: 'none', weight: '700' },
            };
            const fonts = [ 'jersey10', 'jersey25', 'robotoMono', 'robotoMonoItalic', 'roboto', 'robotoItalic', 'monoIBM', 'monoIBMitalic', 'latoLight', 'latoBold' ];
            const selected = fonts[Math.floor(Math.random() * fonts.length)];
            const params = { font: selected };
            
            const newLogo = new Logo(params);

            expect(newLogo.fontForge()).toEqual(fontStyles[selected]);
        });
    });

    describe('figureForge method', () => {
        it('should throw an error because no form has been selected', () => {
            const newLogo = new Logo({});
            const err = new Error('No form has been chosen.');
    
            expect(newLogo.figureForge).toThrow(err);
        });
    });

    describe('textElForge method', () => {
        it('should return the text element for the SVG code', () => {
            const inputText = 'TesT';
            const expectPos = { x: 'calc(1554.6/2)', y: '910.05' }
            const expectedEl = `<tspan class="cls-3" x="${expectPos.x}" y="${expectPos.y}">${inputText}</tspan>`
            const params = { text: inputText };

            const newLogo = new Logo(params);

            expect(newLogo.textElForge()).toBe(expectedEl);
        });
    });
    
    describe('gradientElForge method', () => {
        it('should return the gradient element for the SVG code', () => {
            const testValues = '[values]';
            const expectedEl = `<linearGradient id="linear-gradient" ${testValues} gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#000000" stop-opacity=".8"/>
                <stop offset=".2" stop-color="rgba(0,0,0,.57)" stop-opacity=".57"/>
                <stop offset=".65" stop-color="rgba(0,0,0,.15)" stop-opacity=".15"/>
                <stop offset=".94" stop-color="#000000" stop-opacity="0"/>
            </linearGradient>`

            const newLogo = new Logo({});
            newLogo.shadow = { values: testValues };

            expect(newLogo.gradientElForge()).toBe(expectedEl);
        });
    });

    describe('setColors method', () => {
        it('should return the color codes for the selected color scheme', () => {
            const colorCodes = {
                red: { stroke: '#90374f', fill: '#bf4a6b', text: '#e5b7c4', },
                yellow: { stroke: '#efd159', fill: '#f2da7a', text: '#fcf8e4', },
                blue: { stroke: '#5b8ed0', fill: '#7ca5d9', text: '#cbdbf0', },
                green: { stroke: '#79b767', fill: '#94c585', text: '#d4e8ce', },
                pink: { stroke: '#e196e3', fill: '#e7abe9', text: '#f5ddf6', },
                teal: { stroke: '#88ccbf', fill: '#a0d6cc', text: '#d3efeb', },
                steel: { stroke: '#97aada', fill: '#acbbe1', text: '#dee4f3', },
                salmon: { stroke: '#e9787a', fill: '#ed9395', text: '#f8d4d5', },
                dark: { stroke: '#433e4b', fill: '#5a5264', text: '#95919c', },
                purple: { stroke: '#7a5294', fill: '#a26dc4', text: '#c7a7dc', },
                underworld: { stroke: '#3d100e', fill: '#591a42', text: '#bda3b3', },
            };
            const colorSchemes = [ 'red', 'yellow', 'blue', 'green', 'pink', 'teal', 'steel', 'salmon', 'dark', 'purple', 'underworld' ];
            const selected = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
            const params = { color: selected };
            
            const newLogo = new Logo(params);

            expect(newLogo.setColors()).toEqual(colorCodes[selected]);
        });
    });
});