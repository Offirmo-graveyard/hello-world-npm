// this file should work with current node stable (v4 on 2016/07/12)

///////////////////////////////////////////////////////

const spawn = require('child_process').spawn
const _ = require('lodash')

///////////////////////////////////////////////////////

const executable = './node_modules/typescript/bin/tsc'
const params = [ '--help' ]
const options = {
	timeout: 5000,
	env: process.env,
	encoding: 'utf8'
}
///////////////////////////////////////////////////////

module.exports = {
	compile
}

///////////////////////////////////////////////////////
const radix = 'tsc'

function compile(files, options) {
	options = options || {}
	return new Promise((resolve, reject) => {
		const options_as_array = _.flatten(_.map(options, (value, key) => {
			if (value === false)
				return []
			if (value === true)
				return [ `--${key}` ]
			return [ `--${key}`, value ]
		}))
		const params = options_as_array.concat(files)

		var stdout = ''
		var stderr = ''
		console.log(`Spawn : spawning ${executable}`, params);
		const spawn_instance = spawn(executable, params, options);

		function fail(reason) {
			const err = new Error(reason)
			err.stdout = stdout
			err.stderr = stderr
			console.error(err)
			reject(err)
		}

		// listen to events
		spawn_instance.on('error', err => {
			fail(`Spawn : got err event : ${err}`)
		});

		spawn_instance.on('disconnect', () => {
			console.log(`Spawn : got disconnect`)
		});

		spawn_instance.on('exit', (code, signal) => {
			if (code === 0)
				resolve(stdout)
			else
				fail(`Spawn : got event exit with error code "${code}" & signal "${signal}"`)
		});

		spawn_instance.on('close', (code, signal) => {
			if (code === 0)
				resolve(stdout)
			else
				fail(`Spawn : got event close with error code "${code}" & signal "${signal}"`)
		});

		spawn_instance.stdin.on('data', data => {
			console.log(`Spawn : got stdin data event : "${data}"`)
		});
		spawn_instance.stdin.on('error', error => {
			fail(`Spawn : got stdin error event : "${error}"`)
		});

		spawn_instance.stdout.on('data', data => {
			_.split(data, '\n').forEach(line => console.log(radix + ' > ' + line))
			stdout += data
		});
		spawn_instance.stdout.on('error', error => {
			fail(`Spawn : got stdout error event : "${error}"`)
		});

		spawn_instance.stderr.on('data', data => {
			_.split(data, '\n').forEach(line => console.log(radix + ' ! ' + line))
			stderr += data
		});
		spawn_instance.stderr.on('error', error => {
			fail(`Spawn : got stderr error event : "${error}"`)
		});
	})
}
