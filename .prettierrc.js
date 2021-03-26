/* module.exports = {
    tabWidth: 4,
    semi: true,
    singleQuote: true,
};
 */

module.exports = {
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true,
    "bracketSpacing": true,
    "jsxBracketSameLine": true,
    "arrowParens": "always",
    "overrides": [
        {
            "files": "*.test.js",
            "options": {
                "semi": true
            }
        },
        {
            "files": ["*.html", "legacy/**/*.js/.*tsx"],
            "options": {
                "tabWidth": 4
            }
        },
        {
            "files": ".prettierrc",
            "options": { "parser": "json" }
        }
    ]
}