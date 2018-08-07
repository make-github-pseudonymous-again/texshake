"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shaketape;

var _jsGrammar = require("@aureooms/js-grammar");

var _jsStream = _interopRequireDefault(require("@aureooms/js-stream"));

var _tokens = _interopRequireDefault(require("./tokens"));

var _grammar = _interopRequireDefault(require("./grammar"));

var _shaker = _interopRequireDefault(require("./shaker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function shaketape(_x, _x2) {
  return _shaketape.apply(this, arguments);
}

function _shaketape() {
  _shaketape = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(inputTape, outputStream) {
    var parser, inputTokens, inputTokensTape, tree, ctx, transformed, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, leaf;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            parser = _jsGrammar.ll1.from(_grammar.default);
            inputTokens = (0, _tokens.default)(inputTape);
            inputTokensTape = _jsStream.default.fromAsyncIterable(inputTokens);
            _context.next = 5;
            return parser.parse(inputTokensTape);

          case 5:
            tree = _context.sent;
            ctx = {
              args: [],
              variables: new Map()
            };
            _context.next = 9;
            return _jsGrammar.ast.transform(tree, _shaker.default, ctx);

          case 9:
            transformed = _context.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 12;
            _iterator = _asyncIterator(_jsGrammar.ast.flatten(transformed));

          case 14:
            _context.next = 16;
            return _iterator.next();

          case 16:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 20;
            return _step.value;

          case 20:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 27;
              break;
            }

            leaf = _value;
            outputStream.write(leaf.buffer);

          case 24:
            _iteratorNormalCompletion = true;
            _context.next = 14;
            break;

          case 27:
            _context.next = 33;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](12);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 33:
            _context.prev = 33;
            _context.prev = 34;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 38;
              break;
            }

            _context.next = 38;
            return _iterator.return();

          case 38:
            _context.prev = 38;

            if (!_didIteratorError) {
              _context.next = 41;
              break;
            }

            throw _iteratorError;

          case 41:
            return _context.finish(38);

          case 42:
            return _context.finish(33);

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[12, 29, 33, 43], [34,, 38, 42]]);
  }));
  return _shaketape.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXRhcGUuanMiXSwibmFtZXMiOlsic2hha2V0YXBlIiwiaW5wdXRUYXBlIiwib3V0cHV0U3RyZWFtIiwicGFyc2VyIiwibGwxIiwiZnJvbSIsImdyYW1tYXIiLCJpbnB1dFRva2VucyIsImlucHV0VG9rZW5zVGFwZSIsInRhcGUiLCJmcm9tQXN5bmNJdGVyYWJsZSIsInBhcnNlIiwidHJlZSIsImN0eCIsImFyZ3MiLCJ2YXJpYWJsZXMiLCJNYXAiLCJhc3QiLCJ0cmFuc2Zvcm0iLCJzaGFrZXIiLCJ0cmFuc2Zvcm1lZCIsImZsYXR0ZW4iLCJsZWFmIiwid3JpdGUiLCJidWZmZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztTQUU4QkEsUzs7Ozs7OzswQkFBZixpQkFBMkJDLFNBQTNCLEVBQXVDQyxZQUF2QztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVBDLFlBQUFBLE1BRk8sR0FFRUMsZUFBSUMsSUFBSixDQUFTQyxnQkFBVCxDQUZGO0FBR1BDLFlBQUFBLFdBSE8sR0FHTyxxQkFBT04sU0FBUCxDQUhQO0FBSVBPLFlBQUFBLGVBSk8sR0FJV0Msa0JBQUtDLGlCQUFMLENBQXVCSCxXQUF2QixDQUpYO0FBQUE7QUFBQSxtQkFLTUosTUFBTSxDQUFDUSxLQUFQLENBQWFILGVBQWIsQ0FMTjs7QUFBQTtBQUtQSSxZQUFBQSxJQUxPO0FBT1BDLFlBQUFBLEdBUE8sR0FPRDtBQUFFQyxjQUFBQSxJQUFJLEVBQUcsRUFBVDtBQUFlQyxjQUFBQSxTQUFTLEVBQUcsSUFBSUMsR0FBSjtBQUEzQixhQVBDO0FBQUE7QUFBQSxtQkFRYUMsZUFBSUMsU0FBSixDQUFlTixJQUFmLEVBQXNCTyxlQUF0QixFQUErQk4sR0FBL0IsQ0FSYjs7QUFBQTtBQVFQTyxZQUFBQSxXQVJPO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBVWFILGVBQUlJLE9BQUosQ0FBYUQsV0FBYixDQVZiOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUtFLFlBQUFBLElBVkw7QUFVMENwQixZQUFBQSxZQUFZLENBQUNxQixLQUFiLENBQW1CRCxJQUFJLENBQUNFLE1BQXhCOztBQVYxQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGwxICwgYXN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWdyYW1tYXInIDtcbmltcG9ydCB0YXBlIGZyb20gJ0BhdXJlb29tcy9qcy1zdHJlYW0nIDtcblxuaW1wb3J0IHRva2VucyBmcm9tICcuL3Rva2VucycgO1xuaW1wb3J0IGdyYW1tYXIgZnJvbSAnLi9ncmFtbWFyJyA7XG5pbXBvcnQgc2hha2VyIGZyb20gJy4vc2hha2VyJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNoYWtldGFwZSAoIGlucHV0VGFwZSAsIG91dHB1dFN0cmVhbSApIHtcblxuICBjb25zdCBwYXJzZXIgPSBsbDEuZnJvbShncmFtbWFyKTtcbiAgY29uc3QgaW5wdXRUb2tlbnMgPSB0b2tlbnMoaW5wdXRUYXBlKSA7XG4gIGNvbnN0IGlucHV0VG9rZW5zVGFwZSA9IHRhcGUuZnJvbUFzeW5jSXRlcmFibGUoaW5wdXRUb2tlbnMpO1xuICBjb25zdCB0cmVlID0gYXdhaXQgcGFyc2VyLnBhcnNlKGlucHV0VG9rZW5zVGFwZSkgO1xuXG4gIGNvbnN0IGN0eCA9IHsgYXJncyA6IFsgXSAsIHZhcmlhYmxlcyA6IG5ldyBNYXAoKSB9IDtcbiAgY29uc3QgdHJhbnNmb3JtZWQgPSBhd2FpdCBhc3QudHJhbnNmb3JtKCB0cmVlICwgc2hha2VyICwgY3R4ICkgO1xuXG4gIGZvciBhd2FpdCAoIGNvbnN0IGxlYWYgb2YgYXN0LmZsYXR0ZW4oIHRyYW5zZm9ybWVkICkgKSBvdXRwdXRTdHJlYW0ud3JpdGUobGVhZi5idWZmZXIpIDtcblxufVxuIl19