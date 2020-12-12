module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    plugins: [],
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    variants: {
        backgroundColor: [
            'responsive',
            'even',
            'hover',
            'group-hover',
        ],
        display: [
            'responsive',
            'hover',
            'group-hover',
        ],
    },
}