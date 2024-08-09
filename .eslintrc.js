const os = require('os');

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: 'airbnb',
  ignorePatterns: ['node_modules/', 'build/'],
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
      },
    ],
    'react/jsx-indent': ['error', 2], // Adjust '2' to match your preferred indentation level
    'max-len': ['error', { code: 250 }], // Adjust '100' to match your preferred line length
    'jsx-a11y/click-events-have-key-events': 'off', // Changed from 0 to 'off' for consistency
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'linebreak-style': ['error', os.EOL === '\r\n' ? 'windows' : 'unix'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': [
      'warn',
      {
        assignment: true,
        declaration: true,
        return: true,
      },
    ],
  },
};
