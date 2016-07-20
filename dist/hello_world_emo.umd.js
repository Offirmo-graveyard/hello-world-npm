(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.hello_world_emo = global.hello_world_emo || {})));
}(this, function (exports) { 'use strict';

    function hello() {
        var target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

        console.log('Hello, ' + target + ' :-(');
    }

    function goodbye() {
        var target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

        console.log('Goodbye, ' + target + ' :-(');
    }

    // for diagnostic of which version was picked
    /// <reference path="../node_modules/@types/node/index.d.ts" />
    console.log('[hello-world-emo] Hello from ' + __filename);

    exports.hello = hello;
    exports.goodbye = goodbye;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=hello_world_emo.umd.js.map
