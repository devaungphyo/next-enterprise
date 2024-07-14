module.exports = {
    singleQuote: true,
    endOfLine: 'auto',
    plugins: [
        'prettier-plugin-tailwindcss',
        'prettier-plugin-organize-imports',
    ],
    tailwindFunctions: ['clsx', 'cn', 'twMerge'],
};