#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"
'use strict';

////////////////////////////////////////////////////////////

const hello = require('../../dist/index.node-stable').hello
const _ = require('lodash');
const vorpal = require('vorpal')();

////////////////////////////////////////////////////////////

const APP_ID = 'hello_world_emo';
vorpal.history(APP_ID);
vorpal.localStorage(APP_ID);

vorpal.delimiter('test>');

vorpal.log('Hello from vorpal !');

vorpal
.command('hello <target>', 'call module under test with target')
.action(function(args, callback) {
	hello(args.target)
	callback();
});

vorpal.show();

vorpal.ui.input('hello master');
