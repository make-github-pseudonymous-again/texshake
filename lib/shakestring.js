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
  let tree = parser.parse(mystream);
  tree = _jsGrammar.ast.materialize(tree);

  const ctx = { args: [], variables: new Map() };
  const transformed = _jsGrammar.ast.transform(tree, _shake.shake, ctx);

  for (const leaf of _jsGrammar.ast.flatten(transformed)) out.write(leaf.buffer);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXN0cmluZy5qcyJdLCJuYW1lcyI6WyJzaGFrZXN0cmluZyIsInN0cmVhbSIsInN0cmluZyIsIm91dCIsInBhcnNlciIsImxsMSIsImZyb20iLCJHIiwibXlzdHJlYW0iLCJmcm9taXRlcmFibGUiLCJ0cmVlIiwicGFyc2UiLCJhc3QiLCJtYXRlcmlhbGl6ZSIsImN0eCIsImFyZ3MiLCJ2YXJpYWJsZXMiLCJNYXAiLCJ0cmFuc2Zvcm1lZCIsInRyYW5zZm9ybSIsInNoYWtlIiwibGVhZiIsImZsYXR0ZW4iLCJ3cml0ZSIsImJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFPZ0JBLFcsR0FBQUEsVzs7QUFQaEI7O0FBQ0E7O0FBQ0E7O0lBQVlDLE07O0FBQ1o7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxTQUFTRCxXQUFULENBQXVCRSxNQUF2QixFQUFnQ0MsR0FBaEMsRUFBc0M7O0FBRTNDLFFBQU1DLFNBQVNDLGVBQUlDLElBQUosQ0FBU0MsVUFBVCxDQUFmO0FBQ0EsUUFBTUMsV0FBV1AsT0FBT1EsWUFBUCxDQUFvQixvQkFBT1AsTUFBUCxDQUFwQixDQUFqQjtBQUNBLE1BQUlRLE9BQU9OLE9BQU9PLEtBQVAsQ0FBYUgsUUFBYixDQUFYO0FBQ0FFLFNBQU9FLGVBQUlDLFdBQUosQ0FBaUJILElBQWpCLENBQVA7O0FBRUEsUUFBTUksTUFBTSxFQUFFQyxNQUFPLEVBQVQsRUFBZUMsV0FBWSxJQUFJQyxHQUFKLEVBQTNCLEVBQVo7QUFDQSxRQUFNQyxjQUFjTixlQUFJTyxTQUFKLENBQWVULElBQWYsRUFBc0JVLFlBQXRCLEVBQThCTixHQUE5QixDQUFwQjs7QUFFQSxPQUFNLE1BQU1PLElBQVosSUFBb0JULGVBQUlVLE9BQUosQ0FBYUosV0FBYixDQUFwQixFQUFpRGYsSUFBSW9CLEtBQUosQ0FBVUYsS0FBS0csTUFBZjtBQUVsRCIsImZpbGUiOiJzaGFrZXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgLCBsaXN0ICwgbWFwIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuaW1wb3J0IHsgbGwxICwgYXN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWdyYW1tYXInIDtcbmltcG9ydCAqIGFzIHN0cmVhbSBmcm9tICdAYXVyZW9vbXMvanMtc3RyZWFtJyA7XG5pbXBvcnQgeyB0b2tlbnMgfSBmcm9tICcuL3Rva2VucycgO1xuaW1wb3J0IHsgRyB9IGZyb20gJy4vZ3JhbW1hcicgO1xuaW1wb3J0IHsgc2hha2UgfSBmcm9tICcuL3NoYWtlJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFrZXN0cmluZyAoIHN0cmluZyAsIG91dCApIHtcblxuICBjb25zdCBwYXJzZXIgPSBsbDEuZnJvbShHKTtcbiAgY29uc3QgbXlzdHJlYW0gPSBzdHJlYW0uZnJvbWl0ZXJhYmxlKHRva2VucyhzdHJpbmcpKTtcbiAgbGV0IHRyZWUgPSBwYXJzZXIucGFyc2UobXlzdHJlYW0pIDtcbiAgdHJlZSA9IGFzdC5tYXRlcmlhbGl6ZSggdHJlZSApIDtcblxuICBjb25zdCBjdHggPSB7IGFyZ3MgOiBbIF0gLCB2YXJpYWJsZXMgOiBuZXcgTWFwKCkgfSA7XG4gIGNvbnN0IHRyYW5zZm9ybWVkID0gYXN0LnRyYW5zZm9ybSggdHJlZSAsIHNoYWtlICwgY3R4ICkgO1xuXG4gIGZvciAoIGNvbnN0IGxlYWYgb2YgYXN0LmZsYXR0ZW4oIHRyYW5zZm9ybWVkICkgKSBvdXQud3JpdGUobGVhZi5idWZmZXIpIDtcblxufVxuIl19