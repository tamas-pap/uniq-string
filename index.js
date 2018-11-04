const generate = require('nanoid/generate');

const uniqString = (length = 32, alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz') =>
  generate(alphabet, length);

module.exports = uniqString;
