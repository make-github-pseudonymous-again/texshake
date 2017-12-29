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
  const mytokens = (0, _jsItertools.list)((0, _tokens.tokens)(string));
  const mystream = stream.fromiterable((0, _jsItertools.map)(([a, b]) => a, mytokens));
  const ast = _jsGrammar.ll1.parse(0, _grammar.grammar, table, mystream).children[0];
  (0, _decorate.decorate)((0, _jsItertools.iter)(mytokens), ast);
  (0, _shake.shake)(out, ast, new Map(), []);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXN0cmluZy5qcyJdLCJuYW1lcyI6WyJzaGFrZXN0cmluZyIsInN0cmVhbSIsInN0cmluZyIsIm91dCIsInRhYmxlIiwiY29tcGlsZSIsIm15dG9rZW5zIiwibXlzdHJlYW0iLCJmcm9taXRlcmFibGUiLCJhIiwiYiIsImFzdCIsInBhcnNlIiwiY2hpbGRyZW4iLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBUWdCQSxXLEdBQUFBLFc7O0FBUmhCOztBQUNBOztBQUNBOztJQUFZQyxNOztBQUNaOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRU8sU0FBU0QsV0FBVCxDQUF1QkUsTUFBdkIsRUFBZ0NDLEdBQWhDLEVBQXNDO0FBQzNDLFFBQU1DLFFBQVEsZUFBSUMsT0FBSixDQUFZLENBQVosbUJBQWQ7QUFDQSxRQUFNQyxXQUFXLHVCQUFLLG9CQUFPSixNQUFQLENBQUwsQ0FBakI7QUFDQSxRQUFNSyxXQUFXTixPQUFPTyxZQUFQLENBQW9CLHNCQUFJLENBQUMsQ0FBQ0MsQ0FBRCxFQUFHQyxDQUFILENBQUQsS0FBV0QsQ0FBZixFQUFrQkgsUUFBbEIsQ0FBcEIsQ0FBakI7QUFDQSxRQUFNSyxNQUFNLGVBQUlDLEtBQUosQ0FBVSxDQUFWLG9CQUFzQlIsS0FBdEIsRUFBNkJHLFFBQTdCLEVBQXVDTSxRQUF2QyxDQUFnRCxDQUFoRCxDQUFaO0FBQ0EsMEJBQVMsdUJBQUtQLFFBQUwsQ0FBVCxFQUF5QkssR0FBekI7QUFDQSxvQkFBTVIsR0FBTixFQUFXUSxHQUFYLEVBQWdCLElBQUlHLEdBQUosRUFBaEIsRUFBMkIsRUFBM0I7QUFDRCIsImZpbGUiOiJzaGFrZXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgLCBsaXN0ICwgbWFwIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuaW1wb3J0IHsgbGwxIH0gZnJvbSAnQGF1cmVvb21zL2pzLWdyYW1tYXInIDtcbmltcG9ydCAqIGFzIHN0cmVhbSBmcm9tICdAYXVyZW9vbXMvanMtc3RyZWFtJyA7XG5pbXBvcnQgeyB0b2tlbnMgfSBmcm9tICcuL3Rva2VucycgO1xuaW1wb3J0IHsgZ3JhbW1hciB9IGZyb20gJy4vZ3JhbW1hcicgO1xuaW1wb3J0IHsgZGVjb3JhdGUgfSBmcm9tICcuL2RlY29yYXRlJyA7XG5pbXBvcnQgeyBzaGFrZSB9IGZyb20gJy4vc2hha2UnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWtlc3RyaW5nICggc3RyaW5nICwgb3V0ICkge1xuICBjb25zdCB0YWJsZSA9IGxsMS5jb21waWxlKDAsIGdyYW1tYXIpO1xuICBjb25zdCBteXRva2VucyA9IGxpc3QodG9rZW5zKHN0cmluZykpO1xuICBjb25zdCBteXN0cmVhbSA9IHN0cmVhbS5mcm9taXRlcmFibGUobWFwKChbYSxiXSkgPT4gYSwgbXl0b2tlbnMpKTtcbiAgY29uc3QgYXN0ID0gbGwxLnBhcnNlKDAsIGdyYW1tYXIsIHRhYmxlLCBteXN0cmVhbSkuY2hpbGRyZW5bMF07XG4gIGRlY29yYXRlKGl0ZXIobXl0b2tlbnMpLCBhc3QpO1xuICBzaGFrZShvdXQsIGFzdCwgbmV3IE1hcCgpLCBbXSk7XG59XG4iXX0=