/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        // screens: {
        //     xss: '370px'
        // },
        extend: {
            backgroundImage: {
                rectangle2: "url('/my-project/src/assets/Rectangle_2.png')"
            },
            fontFamily: {
                kumbh: ['Kumbh Sans'],
                custom: ['Cheeseburger', 'Baron Kuffner'],
                montserrat: ['Montserrat']
            }
        }
    },
    plugins: []
};

