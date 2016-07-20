(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.hello_world_emo = factory());
}(this, function () { 'use strict';

    // for diagnostic of which version was picked
    console.log('[hello-world-emo] Hello from ' + __filename);
    function hello() {
        var target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

        console.log('hello, ' + target + ' :-(');
    }

    return hello;

}));
//# sourceMappingURL=hello_world_emo.umd.js.map
