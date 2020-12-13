module.exports = {
    plugins: [],
    purge: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}'
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