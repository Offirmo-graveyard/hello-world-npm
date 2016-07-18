'use strict';
console.log('Hello from hello-world-emo root index.js');

var NODE_MAJOR = parseInt(process.version.slice(1, process.version.indexOf('.'), 10));
console.log('NODE_MAJOR = ' + NODE_MAJOR);

if (NODE_MAJOR >= 4)
	module.exports = require('./dist/index.node-stable');
else
	module.exports = require('./dist/index.node-legacy');
