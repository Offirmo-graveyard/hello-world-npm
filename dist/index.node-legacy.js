'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function hello() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';

    console.log('Hello, ' + target + ' :-(');
}

function goodbye() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';

    console.log('Goodbye, ' + target + ' :-(');
}

// for diagnostic of which version was picked
console.log('[hello-world-emo] Hello from ' + __filename);

exports.hello = hello;
exports.goodbye = goodbye;
//# sourceMappingURL=index.node-legacy.js.map
