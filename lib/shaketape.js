"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shaketape;

var _jsGrammar = require("@aureooms/js-grammar");

var _jsTape = _interopRequireDefault(require("@aureooms/js-tape"));

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
    var parser, inputTokens, inputTokensTape, tree, ctx, transformed, flattened, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, leaf;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            parser = _jsGrammar.ll1.from(_grammar.default);
            inputTokens = (0, _tokens.default)(inputTape);
            inputTokensTape = _jsTape.default.fromAsyncIterable(inputTokens);
            tree = parser.parse(inputTokensTape);
            ctx = {
              args: [],
              variables: new Map()
            };
            _context.next = 7;
            return _jsGrammar.ast.transform(tree, _shaker.default, ctx);

          case 7:
            transformed = _context.sent;
            flattened = _jsGrammar.ast.flatten(transformed);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 11;
            _iterator = _asyncIterator(flattened);

          case 13:
            _context.next = 15;
            return _iterator.next();

          case 15:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 19;
            return _step.value;

          case 19:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 28;
              break;
            }

            leaf = _value;

            if (!(leaf.terminal === _grammar.default.eof)) {
              _context.next = 24;
              break;
            }

            return _context.abrupt("break", 28);

          case 24:
            outputStream.write(leaf.buffer);

          case 25:
            _iteratorNormalCompletion = true;
            _context.next = 13;
            break;

          case 28:
            _context.next = 34;
            break;

          case 30:
            _context.prev = 30;
            _context.t0 = _context["catch"](11);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 34:
            _context.prev = 34;
            _context.prev = 35;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 39;
              break;
            }

            _context.next = 39;
            return _iterator.return();

          case 39:
            _context.prev = 39;

            if (!_didIteratorError) {
              _context.next = 42;
              break;
            }

            throw _iteratorError;

          case 42:
            return _context.finish(39);

          case 43:
            return _context.finish(34);

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[11, 30, 34, 44], [35,, 39, 43]]);
  }));
  return _shaketape.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXRhcGUuanMiXSwibmFtZXMiOlsic2hha2V0YXBlIiwiaW5wdXRUYXBlIiwib3V0cHV0U3RyZWFtIiwicGFyc2VyIiwibGwxIiwiZnJvbSIsImdyYW1tYXIiLCJpbnB1dFRva2VucyIsImlucHV0VG9rZW5zVGFwZSIsInRhcGUiLCJmcm9tQXN5bmNJdGVyYWJsZSIsInRyZWUiLCJwYXJzZSIsImN0eCIsImFyZ3MiLCJ2YXJpYWJsZXMiLCJNYXAiLCJhc3QiLCJ0cmFuc2Zvcm0iLCJzaGFrZXIiLCJ0cmFuc2Zvcm1lZCIsImZsYXR0ZW5lZCIsImZsYXR0ZW4iLCJsZWFmIiwidGVybWluYWwiLCJlb2YiLCJ3cml0ZSIsImJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O1NBRThCQSxTOzs7Ozs7OzBCQUFmLGlCQUEyQkMsU0FBM0IsRUFBdUNDLFlBQXZDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUEMsWUFBQUEsTUFGTyxHQUVFQyxlQUFJQyxJQUFKLENBQVNDLGdCQUFULENBRkY7QUFHUEMsWUFBQUEsV0FITyxHQUdPLHFCQUFPTixTQUFQLENBSFA7QUFJUE8sWUFBQUEsZUFKTyxHQUlXQyxnQkFBS0MsaUJBQUwsQ0FBdUJILFdBQXZCLENBSlg7QUFLUEksWUFBQUEsSUFMTyxHQUtBUixNQUFNLENBQUNTLEtBQVAsQ0FBYUosZUFBYixDQUxBO0FBT1BLLFlBQUFBLEdBUE8sR0FPRDtBQUFFQyxjQUFBQSxJQUFJLEVBQUcsRUFBVDtBQUFlQyxjQUFBQSxTQUFTLEVBQUcsSUFBSUMsR0FBSjtBQUEzQixhQVBDO0FBQUE7QUFBQSxtQkFRYUMsZUFBSUMsU0FBSixDQUFlUCxJQUFmLEVBQXNCUSxlQUF0QixFQUErQk4sR0FBL0IsQ0FSYjs7QUFBQTtBQVFQTyxZQUFBQSxXQVJPO0FBU1BDLFlBQUFBLFNBVE8sR0FTS0osZUFBSUssT0FBSixDQUFhRixXQUFiLENBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FXYUMsU0FYYjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdLRSxZQUFBQSxJQVhMOztBQUFBLGtCQVlOQSxJQUFJLENBQUNDLFFBQUwsS0FBa0JsQixpQkFBUW1CLEdBWnBCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBYVh2QixZQUFBQSxZQUFZLENBQUN3QixLQUFiLENBQW1CSCxJQUFJLENBQUNJLE1BQXhCOztBQWJXO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsbDEgLCBhc3QgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuaW1wb3J0IHRhcGUgZnJvbSAnQGF1cmVvb21zL2pzLXRhcGUnIDtcblxuaW1wb3J0IHRva2VucyBmcm9tICcuL3Rva2VucycgO1xuaW1wb3J0IGdyYW1tYXIgZnJvbSAnLi9ncmFtbWFyJyA7XG5pbXBvcnQgc2hha2VyIGZyb20gJy4vc2hha2VyJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNoYWtldGFwZSAoIGlucHV0VGFwZSAsIG91dHB1dFN0cmVhbSApIHtcblxuICBjb25zdCBwYXJzZXIgPSBsbDEuZnJvbShncmFtbWFyKTtcbiAgY29uc3QgaW5wdXRUb2tlbnMgPSB0b2tlbnMoaW5wdXRUYXBlKSA7XG4gIGNvbnN0IGlucHV0VG9rZW5zVGFwZSA9IHRhcGUuZnJvbUFzeW5jSXRlcmFibGUoaW5wdXRUb2tlbnMpO1xuICBjb25zdCB0cmVlID0gcGFyc2VyLnBhcnNlKGlucHV0VG9rZW5zVGFwZSkgO1xuXG4gIGNvbnN0IGN0eCA9IHsgYXJncyA6IFsgXSAsIHZhcmlhYmxlcyA6IG5ldyBNYXAoKSB9IDtcbiAgY29uc3QgdHJhbnNmb3JtZWQgPSBhd2FpdCBhc3QudHJhbnNmb3JtKCB0cmVlICwgc2hha2VyICwgY3R4ICkgO1xuICBjb25zdCBmbGF0dGVuZWQgPSBhc3QuZmxhdHRlbiggdHJhbnNmb3JtZWQgKSA7XG5cbiAgZm9yIGF3YWl0ICggY29uc3QgbGVhZiBvZiBmbGF0dGVuZWQgKSB7XG4gICAgaWYgKCBsZWFmLnRlcm1pbmFsID09PSBncmFtbWFyLmVvZiApIGJyZWFrIDtcbiAgICBvdXRwdXRTdHJlYW0ud3JpdGUobGVhZi5idWZmZXIpIDtcbiAgfVxuXG59XG4iXX0=