(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash')) :
    typeof define === 'function' && define.amd ? define(['lodash'], factory) :
    (global.hello_world_emo = factory(global._));
}(this, function (_) { 'use strict';

    var default_template = _.template('hello, ${ target } :-(');
    function hello() {
        var target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

        console.log(default_template({ target: target }));
    }

    return hello;

}));
//# sourceMappingURL=hello_world_emo.umd.js.map
