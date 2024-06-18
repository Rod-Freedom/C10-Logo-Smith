import Logo from "./logo.js";

export default class Circle extends Logo {
    constructor (obj) {
        super(obj);
        this.shadow = this.bgColor !== 'none' ? 
            { element: '<rect class="cls-5" x="726.62" y="580.89" width="1058.81" height="1350.27" transform="translate(-520.26 1256.02) rotate(-45)"/>', values: 'x1="427.58" y1="427.58" x2="986.25" y2="986.25" gradientTransform="translate(1256.02 -452.56) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'}
            : { element: '', values: 'x1="427.58" y1="427.58" x2="986.25" y2="986.25" gradientTransform="translate(1256.02 -452.56) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'};
    }

    figureForge () {
        return '<circle class="cls-1" cx="777.3" cy="777.3" r="478.9"/>'
    }
}