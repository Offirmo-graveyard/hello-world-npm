'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// for diagnostic of which version was picked
/// <reference path="../node_modules/@types/node/index.d.ts" />
console.log('[hello-world-emo] Hello from ' + __filename);
function hello() {
    var target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

    console.log('Hello, ' + target + ' :-(');
}

exports.hello = hello;
//# sourceMappingURL=index.node-legacy.js.map
