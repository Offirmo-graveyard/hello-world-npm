import * as _ from 'lodash'

const default_template = _.template('hello, ${ target } :-(')

export default function hello(target: string = 'World'): void
{
	console.log(default_template({target}))
}
