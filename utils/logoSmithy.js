import Triangle from "./triangle.js";
import Circle from "./circle.js";
import Square from "./square.js";

export default ({ figure, ...answersObj }) => {
    let logoObj = {};

    switch (figure) {
        case 'circle':
            logoObj = new Circle(answersObj);
            break;
        case 'triangle':
            logoObj = new Triangle(answersObj);
            break;
        case 'square':
            logoObj = new Square(answersObj);
            break;
    }

    const bgColor = logoObj.bgColorForge();
    const font = logoObj.fontForge();
    const figureEl = logoObj.figureForge();
    const textEl = logoObj.textElForge();
    const gradientEl = logoObj.bgColor !== 'none' ? logoObj.gradientElForge() : '';
    const shadowEl = logoObj.shadow.element;
    const colors = logoObj.setColors();


    const code = `<?xml version="1.0" encoding="UTF-8"?>
    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1554.6 1554.6">
        <defs>
            
            <style>
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Jersey+10&family=Jersey+25&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
                .cls-1 {
                    fill: ${colors.fill};
                    stroke: ${colors.stroke};
                    stroke-miterlimit: 10;
                    stroke-width: 104.03px;
                }
                .cls-2 {
                    clip-path: url(#clippath);
                }
                .cls-3 {
                    letter-spacing: -.02em;
                }
                .cls-4 {
                    fill: none;
                }
                .cls-4, .cls-5, .cls-6 {
                    stroke-width: 0px;
                }
                .cls-5 {
                    fill: url(#linear-gradient);
                }
                .cls-6 {
                    fill: ${bgColor};
                }
                .cls-7 {
                    fill: #000000;
                    opacity: .2;
                }
                .cls-7, .cls-8 {
                    font-family: ${font.family};
                    font-size: ${font.size};
                    font-style: ${font.style};
                    font-weight: ${font.weight};
                    text-anchor: middle;
                }
                .cls-8 {
                    fill: ${colors.text};
                }
            </style>
            
            <clipPath id="clippath">
                <rect class="cls-4" width="1554.6" height="1554.6"/>
            </clipPath>
            
            ${gradientEl}
        </defs>
        
        <g id="Post">
            <g class="cls-2">
                <rect class="cls-6" width="1554.6" height="1554.6"/>
                ${shadowEl}
                ${figureEl}
                <text class="cls-7" transform="translate(30 30)">
                    ${textEl}
                </text>
                <text class="cls-8">
                    ${textEl}
                </text>
            </g>
        </g>
    </svg>`;

    return code
};