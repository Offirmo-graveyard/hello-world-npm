import * as _ from 'lodash';
const default_template = _.template('hello, ${ target } :-(');
export default function hello(target = 'World') {
    console.log(default_template({ target }));
}
//# sourceMappingURL=index.js.map