'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// for diagnostic of which version was picked
/// <reference path="../node_modules/@types/node/index.d.ts" />
console.log(`[hello-world-emo] Hello from ${ __filename }`);
function hello() {
    let target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

    console.log(`hello, ${ target } :-(`);
}

exports.hello = hello;
//# sourceMappingURL=index.node-stable.js.map
