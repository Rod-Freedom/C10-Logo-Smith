import Logo from "./logo.js";

class Triangle extends Logo {
    constructor (obj) {
        super(obj);
        this.textPos.y = '1040';
        this.shadow = this.bgColor !== 'none' ? 
            { element: '<rect class="cls-5" x="585.89" y="514.53" width="1026.53" height="1350.27" transform="translate(-513.36 1342.06) rotate(-52.66)"/>', values: 'x1="-38.86" y1="-23.93" x2="519.81" y2="534.73" gradientTransform="translate(1109.39 590.42) rotate(60.43) scale(1.39 1.19) skewX(27.16)"'}
            : { element: '', values: 'x1="-38.86" y1="-23.93" x2="519.81" y2="534.73" gradientTransform="translate(1109.39 590.42) rotate(60.43) scale(1.39 1.19) skewX(27.16)"'};
    }

    formForge () {
        return `<path class="cls-1" d="
    M689.33,349.47
    l-435.37,754.08
    c-39.1, 67.72, 9.77, 152.37, 87.97, 152.37
    h870.74
    c78.19, 0, 127.07-84.65, 87.97-152.37
    l-435.37-754.08
    c-39.1-67.72-136.84-67.72-175.94,0
    Z
"/>`
    }
}

const newLogo = new Triangle({ text:'ROD1', bgColor: 'beige', font: 'jersey10', color: 'underworld', });
console.log(newLogo);
console.log(newLogo.fontForge())
console.log(newLogo.setColors());
console.log(newLogo.formForge());
console.log(newLogo.gradientForge());
console.log(newLogo.textElForge());