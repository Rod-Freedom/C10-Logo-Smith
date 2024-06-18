import Logo from "./logo.js";

class Circle extends Logo {
    constructor (obj) {
        super(obj);
        this.shadow = this.bgColor !== 'none' ? 
            { element: '<rect class="cls-5" x="726.62" y="580.89" width="1058.81" height="1350.27" transform="translate(-520.26 1256.02) rotate(-45)"/>', values: 'x1="427.58" y1="427.58" x2="986.25" y2="986.25" gradientTransform="translate(1256.02 -452.56) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'}
            : { element: '', values: 'x1="427.58" y1="427.58" x2="986.25" y2="986.25" gradientTransform="translate(1256.02 -452.56) rotate(59.67) scale(1.4 1.22) skewX(26.1)"'};
    }

    formForge () {
        return '<circle class="cls-1" cx="777.3" cy="777.3" r="478.9"/>'
    }
}

const newLogo = new Circle({ text:'ROD1', bgColor: 'beige', font: 'jersey10', color: 'underworld', });
console.log(newLogo);
console.log(newLogo.fontForge())
console.log(newLogo.setColors());
console.log(newLogo.formForge());
console.log(newLogo.gradientForge());

// const newLogo = new Logo({ bgColor: 'beige', font: 'jersey10', color: 'underworld' });
// newLogo.fontForge()
// console.log(newLogo)
// console.log(newLogo.shadowForge())
// console.log(newLogo.setColors())

// inquirer
//     .prompt(
//         {
//             type: 'list',
//             message: 'Let\'s test this out Rod!\n',
//             choices: [
//                 { name: 'This is test one.', value: 'test1' },
//                 { name: 'This is test two.', value: 'test2' },
//                 { name: 'This is test three.', value: 'test3' },
//                 { name: 'This is test four.', value: 'test4' },
//                 { name: 'This is test five.', value: 'test5' },
//                 { name: 'This is test six.', value: 'test6' },
//             ],
//             name: 'test',
//         }
//     )
//     .then(answers => console.log(answers))

// console.log(new Logo({ color: "deepblue" }).bgForge())