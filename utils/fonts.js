export default () => {
    const fonts = `/* cyrillic-ext */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlR1jcoQPttoz6Pz.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                }
                /* cyrillic */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlR1hMoQPttoz6Pz.woff2) format('woff2');
                unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }
                /* vietnamese */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlR1j8oQPttoz6Pz.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
                }
                /* latin-ext */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlR1jsoQPttoz6Pz.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6sfjptAgt5VM-kVkqdyU8n1ioSJlR1gMoQPttozw.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* cyrillic-ext */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3pQPwl1FgsAXHNlYzg.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                }
                /* cyrillic */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3pQPwlRFgsAXHNlYzg.woff2) format('woff2');
                unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }
                /* vietnamese */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3pQPwl9FgsAXHNlYzg.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
                }
                /* latin-ext */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3pQPwl5FgsAXHNlYzg.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'IBM Plex Mono';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptAgt5VM-kVkqdyU8n3pQPwlBFgsAXHNk.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin-ext */
                @font-face {
                font-family: 'Jersey 10';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/jersey10/v2/GftH7vZKsggXMf9n_J5n8Zjh6V89SiX-.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'Jersey 10';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/jersey10/v2/GftH7vZKsggXMf9n_J5n_5jh6V89Sg.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin-ext */
                @font-face {
                font-family: 'Jersey 25';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/jersey25/v2/ll8-K2eeXj2tAs6F9BX4LooNvAwShS1i.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'Jersey 25';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/jersey25/v2/ll8-K2eeXj2tAs6F9BX4IIoNvAwShQ.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin-ext */
                @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin-ext */
                @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* cyrillic-ext */
                @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ACc3CsTYl4BOQ3o.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                }
                /* cyrillic */
                @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ACc-CsTYl4BOQ3o.woff2) format('woff2');
                unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }
                /* greek-ext */
                @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ACc2CsTYl4BOQ3o.woff2) format('woff2');
                unicode-range: U+1F00-1FFF;
                }
                /* greek */
                @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ACc5CsTYl4BOQ3o.woff2) format('woff2');
                unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
                }
                /* vietnamese */
                @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ACc1CsTYl4BOQ3o.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
                }
                /* latin-ext */
                @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ACc0CsTYl4BOQ3o.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOjCnqEu92Fr1Mu51S7ACc6CsTYl4BO.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* cyrillic-ext */
                @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                }
                /* cyrillic */
                @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2) format('woff2');
                unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }
                /* greek-ext */
                @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2) format('woff2');
                unicode-range: U+1F00-1FFF;
                }
                /* greek */
                @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2) format('woff2');
                unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
                }
                /* vietnamese */
                @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
                }
                /* latin-ext */
                @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* cyrillic-ext */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: italic;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x7DF4xlVMF-BfR8bXMIjhOm3CWWpCBC10HFw.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                }
                /* cyrillic */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: italic;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x7DF4xlVMF-BfR8bXMIjhOm3mWWpCBC10HFw.woff2) format('woff2');
                unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }
                /* greek */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: italic;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x7DF4xlVMF-BfR8bXMIjhOm36WWpCBC10HFw.woff2) format('woff2');
                unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
                }
                /* vietnamese */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: italic;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x7DF4xlVMF-BfR8bXMIjhOm3KWWpCBC10HFw.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
                }
                /* latin-ext */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: italic;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x7DF4xlVMF-BfR8bXMIjhOm3OWWpCBC10HFw.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: italic;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x7DF4xlVMF-BfR8bXMIjhOm32WWpCBC10.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* cyrillic-ext */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: normal;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x5DF4xlVMF-BfR8bXMIjhGq3-cXbKDO1w.woff2) format('woff2');
                unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                }
                /* cyrillic */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: normal;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x5DF4xlVMF-BfR8bXMIjhPq3-cXbKDO1w.woff2) format('woff2');
                unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                }
                /* greek */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: normal;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x5DF4xlVMF-BfR8bXMIjhIq3-cXbKDO1w.woff2) format('woff2');
                unicode-range: U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
                }
                /* vietnamese */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: normal;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x5DF4xlVMF-BfR8bXMIjhEq3-cXbKDO1w.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
                }
                /* latin-ext */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: normal;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x5DF4xlVMF-BfR8bXMIjhFq3-cXbKDO1w.woff2) format('woff2');
                unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                /* latin */
                @font-face {
                font-family: 'Roboto Mono';
                font-style: normal;
                font-weight: 100 700;
                font-display: swap;
                src: url(https://fonts.gstatic.com/s/robotomono/v23/L0x5DF4xlVMF-BfR8bXMIjhLq3-cXbKD.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
    `;

    return fonts
};