import Logo from "./logo.js";

export default class Square extends Logo {
    constructor (obj) {
        super(obj);
        this.shadow = this.bgColor !== 'none' ? 
            { element: '<rect class="cls-5" x="576" y="580.89" width="1358.81" height="1350.27" transform="translate(-520.26 1256.02) rotate(-45)"/>', values: 'x1="778.63" y1="778.63" x2="1337.3" y2="1337.3" gradientTransform="translate(1256.02 -1301.02) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'}
            : { element: '', values: ''};
    }

    figureForge () {
        return `<rect class="cls-1" x="298.4" y="298.4" width="957.8" height="957.8" rx="90" />`
    }
}