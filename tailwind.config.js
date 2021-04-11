module.exports = {
    darkMode: 'class', // This can be 'media' if preferred.
    // mode: 'jit',
    // purge: ['./src/**/*.svelte', './src/**/*.html', './public/**/*.html'],
    theme: {
        extend: {
            colors: {
                svelte: '#ff3e00',
                'kanban-blue': '#4680ff',
                'kanban-red': '#fb617f',
                'kanban-yellow': '#feb64d',
            },
        },
    },
    variants: {},
    plugins: [],
};
