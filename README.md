# Unique String

A unique string generator for Javascript based on [nanoid](https://github.com/ai/nanoid).

## Usage
```js
const uniqString = require('uniqString');

// Generate a 32 character long unique string using letters and numbers.
const string = uniqString();

// Generate a unique string with arbitrary length.
const string = uniqString(128);

// Generate a unique string with a custom alphabet.
const string = uniqString(32, 'abcdef123456');
```
