/** @type {import('tailwindcss').Config} */
export default{
    content:['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme:{
        extend:{
            colors:{
                estrategika:{
                    cafe: '#6B4F3B',
                    azul: '#1F2A44',
                    negro: '#111111',
                }
            },
            keyframes:{
                'sticker-peel':{
                    '0%': {transform: 'rotateX(0deg)', opacity:0},
                    '100%': {transform: 'rotateX(-90deg)', opacity:1},
                },
            },
            animation: {
                'sticker-peel': 'sticker-peel 0.6s ease forwards',
            },
            
        },
    },
    plugins:[],
}