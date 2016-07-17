import * as _ from 'lodash'

// Use the ES delimiter as an alternative to the default "interpolate" delimiter.
const default_template = _.template('hello, ${ target }!')

export default function hello(target: string = 'World'): void
{
	console.log(default_template({target}))
}
