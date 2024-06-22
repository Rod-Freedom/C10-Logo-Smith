import logoForge from './utils/logoSmithy.js';
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs';
import { createSpinner } from 'nanospinner';
import chalkAnimation from 'chalk-animation';

const thanksFunc = (spinner) => {
    const thanks = `
            ......Thanks for using ${chalk.bold('Logo Smith')}......
            `;
    const logo = `

                    $$$$$$$$$$$$$$$$$$$$$$
                    $$$$$$$$$$$$$$$$$$$$$$
                    $$$$$$  ______  $$$$$$
                    $$$$$$  $$$$$$  $$$$$$
                    $$$$$$  $$$$$$  $$$$$$
                            $$$$$$        
                            $$$$$$        
                            $$$$$$        
                            $$$$$$        
                            $$$$$$        

    `;
    const inst = chalk.bold.magentaBright(`Please find your logo inside your_crafted_svg folder.\n`);
    
    spinner.success();
    console.log(inst);
    console.log(thanks);
    const neon = chalkAnimation.neon(logo);
    setTimeout(() => neon.stop(), 5000);
};

const inquirerFunc = () => {
    const validateFunc = function (input) {
        const done = this.async();
        
        if (input.length > 4) done(chalk.red('Your logo must be 1 to 4 characters long!'))
        else done(null, true)
    };
    
    const questions = [
        {
            type: 'input',
            message: `Type a few characters to display in your logo, like an acronym.\n  ${chalk.magenta.italic('It must be 1 to 4 characters long, and it can include symbols!')}\n`,
            name: 'text',
            validate: validateFunc,
        },
        {
            type: 'list',
            message: 'What shape would you like for your logo?\n',
            choices: ['circle', 'triangle', 'square'],
            name: 'figure',
        },
        {
            type: 'list',
            message: 'Choose a font for your logo.\n',
            choices: [
                { name: `Jersey 10 — ${chalk.italic('a matrix-like low-res font perfect for pixel-art lovers!')}`, value: 'jersey10' },
                { name: `Jersey 25 — ${chalk.italic('a little less pixelated, but just as cool.')}`, value: 'jersey25' },
                { name: `Roboto — ${chalk.italic('as simple as a transistor but with all the character of a software developer!')}`, value: 'roboto' },
                { name: `Roboto Italic — ${chalk.italic('more italic, more elegant.')}`, value: 'robotoItalic' },
                { name: `Roboto Mono — ${chalk.italic('same as Roboto, but more spacious.')}`, value: 'robotoMono' },
                { name: `Roboto Mono Italic — ${chalk.italic('more italic, more elegant.')}`, value: 'robotoMonoItalic' },
                { name: `IBM Plex Mono — ${chalk.italic('tailored for old-school developers, a sweet reminder of the 80s terminals.')}`, value: 'monoIBM' },
                { name: `IBM Plex Mono Italic — ${chalk.italic('italics\'s fans only.')}`, value: 'monoIBMitalic' },
                { name: `Lato Light — ${chalk.italic('crafted for a stylish and avant-garde development.')}`, value: 'latoLight' },
                { name: `Lato Bold — ${chalk.italic('feelin\' bold?')}`, value: 'latoBold' }
            ],
            name: 'font',
            loop:false,
        },
        {
            type: 'list',
            message: 'Select a color scheme for your logo.\n',
            choices: [
                { name: chalk.bgHex('#90374f').hex('#e5b7c4')(' Red '), value: 'red' },
                { name: chalk.bgHex('#efd159').hex('#fcf8e4')(' Yellow '), value: 'yellow' },
                { name: chalk.bgHex('#5b8ed0').hex('#cbdbf0')(' Blue '), value: 'blue' },
                { name: chalk.bgHex('#79b767').hex('#d4e8ce')(' Green '), value: 'green' },
                { name: chalk.bgHex('#e196e3').hex('#f5ddf6')(' Pink '), value: 'pink' },
                { name: chalk.bgHex('#88ccbf').hex('#d3efeb')(' Teal '), value: 'teal' },
                { name: chalk.bgHex('#97aada').hex('#dee4f3')(' Steel '), value: 'steel' },
                { name: chalk.bgHex('#e9787a').hex('#f8d4d5')(' Salmon '), value: 'salmon' },
                { name: chalk.bgHex('#433e4b').hex('#95919c')(' Dark '), value: 'dark' },
                { name: chalk.bgHex('#7a5294').hex('#c7a7dc')(' Purple '), value: 'purple' },
                { name: chalk.bgHex('#3d100e').hex('#bda3b3')(' Underworld '), value: 'underworld' },
            ],
            name: 'color',
            loop:false,
        },
        {
            type: 'list',
            message: `You can choose a background for your logo.\n  ${chalk.magenta.italic('Perfect for icons.')}\n`,
            choices: [
                { name: chalk.bgHex('#f9f6d7')(' Beige '), value: 'beige' },
                { name: chalk.bgHex('#b22f3f')(' Red '), value: 'red' },
                { name: chalk.bgHex('#375496')(' Blue '), value: 'blue' },
                { name: chalk.bgHex('#699e51')(' Green '), value: 'green' },
                { name: chalk.bgHex('#7d8490')(' Steel '), value: 'steel' },
                { name: chalk.bgHex('#b23a6a')(' Pink '), value: 'pink' },
                { name: chalk.bgHex('#f0dc6b')(' Yellow '), value: 'yellow' },
                { name: chalk.bgHex('#4f4288')(' Purple '), value: 'purple' },
                { name: chalk.bgHex('#4f4288')(' Deep Blue '), value: 'deepblue' },
                { name: chalk.bgHex('#ba5b3c')(' Orange '), value: 'orange' },
                { name: chalk.bgHex('#7c7a77')(' Grey '), value: 'grey' },
                { name: chalk.bgHex('#bdb4ad')(' Sand '), value: 'sand' },
                { name: ' None ', value: 'none' },
            ],
            name: 'bgColor',
            loop:false,
        },
    ];
    
    inquirer
        .prompt(questions)
        .then(answers => {
            const spinner = createSpinner('Run test');
            const content = logoForge(answers);
            let fileDir = `./your_crafted_svg/${answers.text}_LS.svg`;

            if(!fs.existsSync('./your_crafted_svg')) fs.mkdirSync('./your_crafted_svg')
            
            fs.writeFile(fileDir, content, err => {
                if (err) console.log('Sorry, something weird happened...')
                else thanksFunc(spinner)
            })
        })
        .catch(err => console.log('Sorry, something weird happened...'))
};

const startFunc = () => {
    console.log(chalk.italic(`
      Rod-Freedom presents
    `))
    const intro = `
           Logo Smith

    `;
    const neon = chalkAnimation.neon(intro);

    setTimeout(() => {
        neon.stop();
        inquirerFunc();
    }, 4000)
};

startFunc();