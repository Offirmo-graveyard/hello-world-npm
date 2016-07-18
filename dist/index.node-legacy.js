'use strict';

var _ = require('lodash');

var default_template = _.template('hello, ${ target } :-(');
function hello() {
    var target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

    console.log(default_template({ target: target }));
}

module.exports = hello;
//# sourceMappingURL=index.node-legacy.js.map
