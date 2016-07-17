#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec `dirname $0`/../node_modules/.bin/ts-node "$0" "$@"

/// <reference path="../node_modules/@types/node/index.d.ts" />

import hello from '../src'

hello()
hello('Yves')
