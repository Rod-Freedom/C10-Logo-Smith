export default class Logo {
    constructor({ text, font, color, bgColor }) {
        this.text = !text || text.length < 1 ? 'LSM'
            : text.length > 4 ? text.slice(0, 4)
            : text;
        this.font = font;
        this.color = color;
        this.bgColor = bgColor;
        this.textPos = { x: 'calc(1554.6/2)', y: '910.05' };
    }

    bgColorForge () {
        const bgRel = {
            beige: "#f9f6d7",
            red: "#b22f3f",
            blue: "#375496",
            green: "#699e51",
            steel: "#7d8490",
            pink: "#b23a6a",
            yellow: "#f0dc6b",
            purple: "#4f4288",
            deepblue: "#4f4288",
            orange: "#ba5b3c",
            grey: "#7c7a77",
            sand: "#bdb4ad",
            none: "rgba(0,0,0,0)",
        };

        return bgRel[this.bgColor]
    }

    fontForge () {
        const fontRel = {
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

        return fontRel[this.font]
    }

    figureForge () {
        console.log('No form has been chosen.');
    }
    
    textElForge () {
        return `<tspan class="cls-3" x="${this.textPos.x}" y="${this.textPos.y}">${this.text}</tspan>`
    }

    gradientElForge () {
        return `<linearGradient id="linear-gradient" ${this.shadow.values} gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#000000" stop-opacity=".8"/>
                <stop offset=".2" stop-color="rgba(0,0,0,.57)" stop-opacity=".57"/>
                <stop offset=".65" stop-color="rgba(0,0,0,.15)" stop-opacity=".15"/>
                <stop offset=".94" stop-color="#000000" stop-opacity="0"/>
            </linearGradient>`
    }

    setColors () {
        const colorsRel = {
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

        return colorsRel[this.color]
    }
};