#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"

const _ = require('lodash')
const fs = require('fs-extra')
const rollup = require('rollup')
const rollup_babel = require('rollup-plugin-babel')
const rollup_uglify = require('rollup-plugin-uglify')

const tsc = require('node-typescript-compiler')
const package = {
	json: require('../package.json')
}
const tsconfig = {
	json: require('../tsconfig.json')
}

const MODULE_NAME = _.snakeCase(package.json.name)

console.log(`* Building module ${MODULE_NAME}...`)

const rollup_bundles = [
	// node "stable" version
	{
		format: 'cjs', ext: '.node-stable.js', plugins: [],
		babelPresets: ['es2015-node-rollup'], babelPlugins: []
	},
	// all < stable
	{
		format: 'cjs', ext: '.node-legacy.js', plugins: [],
		babelPresets: ['es2015-rollup'], babelPlugins: []
	},
	// browser / other
	{
		format: 'umd', ext: '.umd.js', plugins: [],
		babelPresets: ['es2015-rollup', 'stage-1'], babelPlugins: [],
		moduleName: MODULE_NAME
	},
	{
		format: 'umd', ext: '.umd.min.js', plugins: [rollup_uglify()],
		babelPresets: ['es2015-rollup', 'stage-1'], babelPlugins: [],
		moduleName: MODULE_NAME, minify: true
	}
];


Promise.resolve()
.then(() => {
	// Clean up the output directory
	fs.emptyDirSync('dist')
})
.then(transpile_typescript_to_es6)
.then(transpile_es6_to_bundles)
.then(() => console.log('SUCCESS'), console.error)

function transpile_typescript_to_es6() {
	return tsc.compile({
		'project': '.'
	})
}

// Compile source code into a distributable format with Rollup+Babel
function transpile_es6_to_bundles() {
	const allBundles = rollup_bundles.map(config => {
		return rollup.rollup({
			entry: 'dist/es6/index.js',
			external: Object.keys(package.json.dependencies),
			plugins: [
				rollup_babel({
					babelrc: false,
					exclude: 'node_modules/**',
					presets: config.babelPresets,
					plugins: config.babelPlugins,
				})
			].concat(config.plugins),
		})
			.then(bundle => bundle.write({
				dest: `dist/${config.moduleName || 'index'}${config.ext}`,
				format: config.format,
				sourceMap: !config.minify,
				moduleName: config.moduleName,
			}))
	})
	return Promise.all(allBundles)
}
