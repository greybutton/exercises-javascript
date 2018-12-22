const assert = require('power-assert');
const normalizeUrl = require(__dirname);

assert(normalizeUrl('yandex.ru') === 'https://yandex.ru');
assert(normalizeUrl('https://yandex.ru') === 'https://yandex.ru');
