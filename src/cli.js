#!/usr/bin/env node

import 'babel-polyfill' ;

import { shakestring } from './shakestring' ;

let content = '';
process.stdin.resume();
process.stdin.on('data', buf => { content += buf.toString(); });
process.stdin.on('end', () => { shakestring(content, process.stdout); });
