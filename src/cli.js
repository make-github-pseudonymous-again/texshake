#!/usr/bin/env node

import 'regenerator-runtime/runtime' ;


import fs from 'fs' ;

import shakestream from './shakestream' ;

// TODO get rid of this workaround
// process.stdin does not work at the moment (2018-08-07)
// see https://github.com/nodejs/node/issues/22044#issue-346143983
// and https://github.com/nodejs/node/issues/20503
const stdin = fs.createReadStream('/dev/stdin', { encoding : 'utf8'} ) ;
const stdout = process.stdout ;

shakestream(stdin, stdout)
  .catch( err => console.error(err) ) ;
