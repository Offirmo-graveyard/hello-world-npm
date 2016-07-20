'use strict';

// for diagnostic of which version was picked
console.log(`[hello-world-emo] Hello from ${ __filename }`);
function hello() {
    let target = arguments.length <= 0 || arguments[0] === undefined ? 'World' : arguments[0];

    console.log(`hello, ${ target } :-(`);
}

module.exports = hello;
//# sourceMappingURL=index.node-stable.js.map
