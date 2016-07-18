'use strict';

var _ = require('lodash');

const default_template = _.template('hello, ${ target } :-(');
function hello() {
    let target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

    console.log(default_template({ target: target }));
}

module.exports = hello;
//# sourceMappingURL=index.node-stable.js.map
