import * as _ from 'lodash';
console.log(`[hello-world-emo] Hello from ${__filename}`);
const default_template = _.template('hello, ${ target } :-(');
export default function hello(target = 'World') {
    console.log(default_template({ target }));
}
//# sourceMappingURL=index.js.map