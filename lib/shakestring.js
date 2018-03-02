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

var _decorate = require('./decorate');

var _shake = require('./shake');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shakestring(string, out) {
  const table = _jsGrammar.ll1.compile(0, _grammar.grammar);
  const mystream = stream.fromiterable((0, _tokens.tokens)(string));
  const ast = _jsGrammar.ll1.parse(0, _grammar.grammar, table, mystream);
  (0, _decorate.decorate)((0, _jsItertools.iter)(mytokens), ast);
  (0, _shake.shake)(out, ast, new Map(), []);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXN0cmluZy5qcyJdLCJuYW1lcyI6WyJzaGFrZXN0cmluZyIsInN0cmVhbSIsInN0cmluZyIsIm91dCIsInRhYmxlIiwiY29tcGlsZSIsIm15c3RyZWFtIiwiZnJvbWl0ZXJhYmxlIiwiYXN0IiwicGFyc2UiLCJteXRva2VucyIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRZ0JBLFcsR0FBQUEsVzs7QUFSaEI7O0FBQ0E7O0FBQ0E7O0lBQVlDLE07O0FBQ1o7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxTQUFTRCxXQUFULENBQXVCRSxNQUF2QixFQUFnQ0MsR0FBaEMsRUFBc0M7QUFDM0MsUUFBTUMsUUFBUSxlQUFJQyxPQUFKLENBQVksQ0FBWixtQkFBZDtBQUNBLFFBQU1DLFdBQVdMLE9BQU9NLFlBQVAsQ0FBb0Isb0JBQU9MLE1BQVAsQ0FBcEIsQ0FBakI7QUFDQSxRQUFNTSxNQUFNLGVBQUlDLEtBQUosQ0FBVSxDQUFWLG9CQUFzQkwsS0FBdEIsRUFBNkJFLFFBQTdCLENBQVo7QUFDQSwwQkFBUyx1QkFBS0ksUUFBTCxDQUFULEVBQXlCRixHQUF6QjtBQUNBLG9CQUFNTCxHQUFOLEVBQVdLLEdBQVgsRUFBZ0IsSUFBSUcsR0FBSixFQUFoQixFQUEyQixFQUEzQjtBQUNEIiwiZmlsZSI6InNoYWtlc3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciAsIGxpc3QgLCBtYXAgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBsbDEgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuaW1wb3J0ICogYXMgc3RyZWFtIGZyb20gJ0BhdXJlb29tcy9qcy1zdHJlYW0nIDtcbmltcG9ydCB7IHRva2VucyB9IGZyb20gJy4vdG9rZW5zJyA7XG5pbXBvcnQgeyBncmFtbWFyIH0gZnJvbSAnLi9ncmFtbWFyJyA7XG5pbXBvcnQgeyBkZWNvcmF0ZSB9IGZyb20gJy4vZGVjb3JhdGUnIDtcbmltcG9ydCB7IHNoYWtlIH0gZnJvbSAnLi9zaGFrZScgO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hha2VzdHJpbmcgKCBzdHJpbmcgLCBvdXQgKSB7XG4gIGNvbnN0IHRhYmxlID0gbGwxLmNvbXBpbGUoMCwgZ3JhbW1hcik7XG4gIGNvbnN0IG15c3RyZWFtID0gc3RyZWFtLmZyb21pdGVyYWJsZSh0b2tlbnMoc3RyaW5nKSk7XG4gIGNvbnN0IGFzdCA9IGxsMS5wYXJzZSgwLCBncmFtbWFyLCB0YWJsZSwgbXlzdHJlYW0pO1xuICBkZWNvcmF0ZShpdGVyKG15dG9rZW5zKSwgYXN0KTtcbiAgc2hha2Uob3V0LCBhc3QsIG5ldyBNYXAoKSwgW10pO1xufVxuIl19