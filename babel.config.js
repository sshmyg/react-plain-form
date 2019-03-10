module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],

    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        ['@babel/plugin-proposal-class-properties', { 'loose': false }]
    ],

    env: {
        development: {
            plugins: []
        },

        production: {
            plugins: [
                'transform-react-remove-prop-types',
                '@babel/plugin-transform-react-constant-elements',
                '@babel/plugin-transform-react-inline-elements'
            ]
        }
    }
};
