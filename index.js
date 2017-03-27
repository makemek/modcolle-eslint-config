'use strict'

module.exports = {
  'extends': 'eslint:recommended',
  'env': {
    'es6': true,
    'node': true
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'brace-style': [
      'error',
      '1tbs'
    ],
    'curly': [
      'error',
      'multi',
      'consistent'
    ],
    'comma-spacing': [
      'error',
      {'before': false, 'after': true}
    ],
    'strict': [
      'error',
      'global'
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-spacing': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-spread': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'dot-notation': 'error',
    'no-trailing-spaces': 'error',
    'no-tabs': 'error',
    'eol-last': 'error'
  }
}
