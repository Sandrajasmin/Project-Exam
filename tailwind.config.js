/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#012030',
                darkBlue: '#26528C',
                lightBlue: '#3C92A6',
                lightBeig: '#D9AB73',
                darkBrown: '#A67665',
                blue: '#13678A',
                bluegreen: '#45C4B0',
                green: '#9AEBA3',
                lightgreen: '#DAFDBA',
                darkgrey: '#554E4E',
                white: '#FFFFFF',
                lightgrey: '#E5E7EB'
            },
            fontFamily: {
                heading: ['Roboto', 'sans-serif'],
                subheading: ['Bitter', 'serif'],
                body: ['Raleway', 'sans-serif']
            },
            animation: {
                text: 'text 5s ease infinite'
            },
            keyframes: {
                bg: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/forms')]
};
