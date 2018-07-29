'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shakestring = shakestring;

var _jsItertools = require('@aureooms/js-itertools');

var _jsGrammar = require('@aureooms/js-grammar');

var _jsStream = require('@aureooms/js-stream');

var stream = _interopRequireWildcard(_jsStream);

var _tokens = require('./tokens');

var _grammar = require('./grammar');

var _shake = require('./shake');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shakestring(string, out) {

  const parser = _jsGrammar.ll1.from(_grammar.G);
  const mystream = stream.fromiterable((0, _tokens.tokens)(string));
  const tree = parser.parse(mystream);

  const ctx = { args: [], variables: new Map() };
  const transformed = _jsGrammar.ast.transform(tree, _shake.shake, ctx);

  for (const leaf of _jsGrammar.ast.flatten(transformed)) out.write(leaf.buffer);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXN0cmluZy5qcyJdLCJuYW1lcyI6WyJzaGFrZXN0cmluZyIsInN0cmVhbSIsInN0cmluZyIsIm91dCIsInBhcnNlciIsImxsMSIsImZyb20iLCJHIiwibXlzdHJlYW0iLCJmcm9taXRlcmFibGUiLCJ0cmVlIiwicGFyc2UiLCJjdHgiLCJhcmdzIiwidmFyaWFibGVzIiwiTWFwIiwidHJhbnNmb3JtZWQiLCJhc3QiLCJ0cmFuc2Zvcm0iLCJzaGFrZSIsImxlYWYiLCJmbGF0dGVuIiwid3JpdGUiLCJidWZmZXIiXSwibWFwcGluZ3MiOiI7Ozs7O1FBT2dCQSxXLEdBQUFBLFc7O0FBUGhCOztBQUNBOztBQUNBOztJQUFZQyxNOztBQUNaOztBQUNBOztBQUNBOzs7O0FBRU8sU0FBU0QsV0FBVCxDQUF1QkUsTUFBdkIsRUFBZ0NDLEdBQWhDLEVBQXNDOztBQUUzQyxRQUFNQyxTQUFTQyxlQUFJQyxJQUFKLENBQVNDLFVBQVQsQ0FBZjtBQUNBLFFBQU1DLFdBQVdQLE9BQU9RLFlBQVAsQ0FBb0Isb0JBQU9QLE1BQVAsQ0FBcEIsQ0FBakI7QUFDQSxRQUFNUSxPQUFPTixPQUFPTyxLQUFQLENBQWFILFFBQWIsQ0FBYjs7QUFFQSxRQUFNSSxNQUFNLEVBQUVDLE1BQU8sRUFBVCxFQUFlQyxXQUFZLElBQUlDLEdBQUosRUFBM0IsRUFBWjtBQUNBLFFBQU1DLGNBQWNDLGVBQUlDLFNBQUosQ0FBZVIsSUFBZixFQUFzQlMsWUFBdEIsRUFBOEJQLEdBQTlCLENBQXBCOztBQUVBLE9BQU0sTUFBTVEsSUFBWixJQUFvQkgsZUFBSUksT0FBSixDQUFhTCxXQUFiLENBQXBCLEVBQWlEYixJQUFJbUIsS0FBSixDQUFVRixLQUFLRyxNQUFmO0FBRWxEIiwiZmlsZSI6InNoYWtlc3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciAsIGxpc3QgLCBtYXAgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBsbDEgLCBhc3QgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuaW1wb3J0ICogYXMgc3RyZWFtIGZyb20gJ0BhdXJlb29tcy9qcy1zdHJlYW0nIDtcbmltcG9ydCB7IHRva2VucyB9IGZyb20gJy4vdG9rZW5zJyA7XG5pbXBvcnQgeyBHIH0gZnJvbSAnLi9ncmFtbWFyJyA7XG5pbXBvcnQgeyBzaGFrZSB9IGZyb20gJy4vc2hha2UnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWtlc3RyaW5nICggc3RyaW5nICwgb3V0ICkge1xuXG4gIGNvbnN0IHBhcnNlciA9IGxsMS5mcm9tKEcpO1xuICBjb25zdCBteXN0cmVhbSA9IHN0cmVhbS5mcm9taXRlcmFibGUodG9rZW5zKHN0cmluZykpO1xuICBjb25zdCB0cmVlID0gcGFyc2VyLnBhcnNlKG15c3RyZWFtKSA7XG5cbiAgY29uc3QgY3R4ID0geyBhcmdzIDogWyBdICwgdmFyaWFibGVzIDogbmV3IE1hcCgpIH0gO1xuICBjb25zdCB0cmFuc2Zvcm1lZCA9IGFzdC50cmFuc2Zvcm0oIHRyZWUgLCBzaGFrZSAsIGN0eCApIDtcblxuICBmb3IgKCBjb25zdCBsZWFmIG9mIGFzdC5mbGF0dGVuKCB0cmFuc2Zvcm1lZCApICkgb3V0LndyaXRlKGxlYWYuYnVmZmVyKSA7XG5cbn1cbiJdfQ==