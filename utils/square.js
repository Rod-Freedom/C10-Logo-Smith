import Logo from "./logo.js";

export default class Square extends Logo {
    constructor (obj) {
        super(obj);
        this.shadow = this.bgColor !== 'none' ? 
            { element: '<rect class="cls-5" x="585.89" y="514.53" width="1026.53" height="1350.27" transform="translate(-513.36 1342.06) rotate(-52.66)"/>', values: 'x1="778.63" y1="778.63" x2="1337.3" y2="1337.3" gradientTransform="translate(1256.02 -1301.02) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'}
            : { element: '', values: 'x1="778.63" y1="778.63" x2="1337.3" y2="1337.3" gradientTransform="translate(1256.02 -1301.02) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'};
    }

    figureForge () {
        return `<rect class="cls-1" x="calc(777.3 - 478.9)" y="calc(777.3 - 478.9)" width="calc(478.9 * 2)" height="calc(478.9 * 2)" rx="90" />`
    }
}