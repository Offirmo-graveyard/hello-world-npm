'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function hello(target = 'World') {
    console.log(`Hello, ${ target } :-(`);
}

function goodbye(target = 'World') {
    console.log(`Goodbye, ${ target } :-(`);
}

// for diagnostic of which version was picked
console.log(`[hello-world-emo] Hello from ${ __filename }`);

exports.hello = hello;
exports.goodbye = goodbye;
//# sourceMappingURL=index.node-stable.js.map
