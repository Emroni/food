module.exports = {
    plugins: [],
    purge: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    variants: {
        backgroundColor: [
            'even',
            'focus',
            'group-hover',
            'hover',
            'responsive',
        ],
        display: [
            'group-hover',
            'hover',
            'responsive',
        ],
    },
}