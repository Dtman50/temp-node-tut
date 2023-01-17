// CommonJS, EVERY FILE IS A MODULE (by default)
// MODULES - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('Darius')
sayHi(names.john)
sayHi(names.peter)