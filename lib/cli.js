#!/usr/bin/env node
"use strict";

require("@babel/polyfill");

var _fs = _interopRequireDefault(require("fs"));

var _shakestream = _interopRequireDefault(require("./shakestream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// TODO get rid of this workaround
// process.stdin does not work at the moment (2018-08-07)
// see https://github.com/nodejs/node/issues/22044#issue-346143983
// and https://github.com/nodejs/node/issues/20503
var stdin = _fs["default"].createReadStream('/dev/stdin', {
  encoding: 'utf8'
});

var stdout = process.stdout;
(0, _shakestream["default"])(stdin, stdout)["catch"](function (err) {
  return console.error(err);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkuanMiXSwibmFtZXMiOlsic3RkaW4iLCJmcyIsImNyZWF0ZVJlYWRTdHJlYW0iLCJlbmNvZGluZyIsInN0ZG91dCIsInByb2Nlc3MiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxlQUFHQyxnQkFBSCxDQUFvQixZQUFwQixFQUFrQztBQUFFQyxFQUFBQSxRQUFRLEVBQUc7QUFBYixDQUFsQyxDQUFkOztBQUNBLElBQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDRCxNQUF2QjtBQUVBLDZCQUFZSixLQUFaLEVBQW1CSSxNQUFuQixXQUNVLFVBQUFFLEdBQUc7QUFBQSxTQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZCxDQUFKO0FBQUEsQ0FEYiIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnIDtcblxuaW1wb3J0IGZzIGZyb20gJ2ZzJyA7XG5cbmltcG9ydCBzaGFrZXN0cmVhbSBmcm9tICcuL3NoYWtlc3RyZWFtJyA7XG5cbi8vIFRPRE8gZ2V0IHJpZCBvZiB0aGlzIHdvcmthcm91bmRcbi8vIHByb2Nlc3Muc3RkaW4gZG9lcyBub3Qgd29yayBhdCB0aGUgbW9tZW50ICgyMDE4LTA4LTA3KVxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMjIwNDQjaXNzdWUtMzQ2MTQzOTgzXG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy8yMDUwM1xuY29uc3Qgc3RkaW4gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKCcvZGV2L3N0ZGluJywgeyBlbmNvZGluZyA6ICd1dGY4J30gKSA7XG5jb25zdCBzdGRvdXQgPSBwcm9jZXNzLnN0ZG91dCA7XG5cbnNoYWtlc3RyZWFtKHN0ZGluLCBzdGRvdXQpXG4gIC5jYXRjaCggZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSApIDtcbiJdfQ==