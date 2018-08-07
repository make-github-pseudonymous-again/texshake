#!/usr/bin/env node
"use strict";

require("@babel/polyfill");

var _fs = _interopRequireDefault(require("fs"));

var _shakestream = _interopRequireDefault(require("./shakestream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO get rid of this workaround
// process.stdin does not work at the moment (2018-08-07)
// see https://github.com/nodejs/node/issues/22044#issue-346143983
// and https://github.com/nodejs/node/issues/20503
var stdin = _fs.default.createReadStream('/dev/stdin', {
  encoding: 'utf8'
});

var stdout = process.stdout;
(0, _shakestream.default)(stdin, stdout).catch(function (err) {
  return console.error(err);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jbGkuanMiXSwibmFtZXMiOlsic3RkaW4iLCJmcyIsImNyZWF0ZVJlYWRTdHJlYW0iLCJlbmNvZGluZyIsInN0ZG91dCIsInByb2Nlc3MiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOztBQUVBOztBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLFlBQUdDLGdCQUFILENBQW9CLFlBQXBCLEVBQWtDO0FBQUVDLEVBQUFBLFFBQVEsRUFBRztBQUFiLENBQWxDLENBQWQ7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHQyxPQUFPLENBQUNELE1BQXZCO0FBRUEsMEJBQVlKLEtBQVosRUFBbUJJLE1BQW5CLEVBQ0dFLEtBREgsQ0FDVSxVQUFBQyxHQUFHO0FBQUEsU0FBSUMsT0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQsQ0FBSjtBQUFBLENBRGIiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5cbmltcG9ydCAnQGJhYmVsL3BvbHlmaWxsJyA7XG5cbmltcG9ydCBmcyBmcm9tICdmcycgO1xuXG5pbXBvcnQgc2hha2VzdHJlYW0gZnJvbSAnLi9zaGFrZXN0cmVhbScgO1xuXG4vLyBUT0RPIGdldCByaWQgb2YgdGhpcyB3b3JrYXJvdW5kXG4vLyBwcm9jZXNzLnN0ZGluIGRvZXMgbm90IHdvcmsgYXQgdGhlIG1vbWVudCAoMjAxOC0wOC0wNylcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzIyMDQ0I2lzc3VlLTM0NjE0Mzk4M1xuLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMjA1MDNcbmNvbnN0IHN0ZGluID0gZnMuY3JlYXRlUmVhZFN0cmVhbSgnL2Rldi9zdGRpbicsIHsgZW5jb2RpbmcgOiAndXRmOCd9ICkgO1xuY29uc3Qgc3Rkb3V0ID0gcHJvY2Vzcy5zdGRvdXQgO1xuXG5zaGFrZXN0cmVhbShzdGRpbiwgc3Rkb3V0KVxuICAuY2F0Y2goIGVyciA9PiBjb25zb2xlLmVycm9yKGVycikgKSA7XG4iXX0=