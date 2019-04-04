"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shaketape;

var _jsGrammar = require("@aureooms/js-grammar");

var _jsTape = _interopRequireDefault(require("@aureooms/js-tape"));

var _tokens = _interopRequireDefault(require("./tokens"));

var _grammar = _interopRequireDefault(require("./grammar"));

var _shaker = _interopRequireDefault(require("./transform/shaker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function shaketape(_x, _x2) {
  return _shaketape.apply(this, arguments);
}

function _shaketape() {
  _shaketape = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(inputTape, outputStream) {
    var parser, inputTokens, inputTokensTape, tree, variables, ctx, transformed, flattened, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, leaf;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            parser = _jsGrammar.ll1.from(_grammar["default"]);
            inputTokens = (0, _tokens["default"])(inputTape);
            inputTokensTape = _jsTape["default"].fromAsyncIterable(inputTokens);
            tree = parser.parse(inputTokensTape);
            variables = new Map([['if', new Map([['true', true], ['false', false]])], ['cmd', new Map([])], ['env', new Map([])]]);
            ctx = {
              env: [],
              variables: variables,
              parser: parser
            };
            _context.next = 8;
            return _jsGrammar.ast.transform(tree, _shaker["default"], ctx);

          case 8:
            transformed = _context.sent;
            flattened = _jsGrammar.ast.flatten(transformed);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 12;
            _iterator = _asyncIterator(flattened);

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
              _context.next = 29;
              break;
            }

            leaf = _value;

            if (!(leaf.terminal === _grammar["default"].eof)) {
              _context.next = 25;
              break;
            }

            return _context.abrupt("break", 29);

          case 25:
            outputStream.write(leaf.buffer);

          case 26:
            _iteratorNormalCompletion = true;
            _context.next = 14;
            break;

          case 29:
            _context.next = 35;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](12);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 35:
            _context.prev = 35;
            _context.prev = 36;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 40;
              break;
            }

            _context.next = 40;
            return _iterator["return"]();

          case 40:
            _context.prev = 40;

            if (!_didIteratorError) {
              _context.next = 43;
              break;
            }

            throw _iteratorError;

          case 43:
            return _context.finish(40);

          case 44:
            return _context.finish(35);

          case 45:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[12, 31, 35, 45], [36,, 40, 44]]);
  }));
  return _shaketape.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXRhcGUuanMiXSwibmFtZXMiOlsic2hha2V0YXBlIiwiaW5wdXRUYXBlIiwib3V0cHV0U3RyZWFtIiwicGFyc2VyIiwibGwxIiwiZnJvbSIsImdyYW1tYXIiLCJpbnB1dFRva2VucyIsImlucHV0VG9rZW5zVGFwZSIsInRhcGUiLCJmcm9tQXN5bmNJdGVyYWJsZSIsInRyZWUiLCJwYXJzZSIsInZhcmlhYmxlcyIsIk1hcCIsImN0eCIsImVudiIsImFzdCIsInRyYW5zZm9ybSIsInNoYWtlciIsInRyYW5zZm9ybWVkIiwiZmxhdHRlbmVkIiwiZmxhdHRlbiIsImxlYWYiLCJ0ZXJtaW5hbCIsImVvZiIsIndyaXRlIiwiYnVmZmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7U0FFOEJBLFM7Ozs7Ozs7MEJBQWYsaUJBQTJCQyxTQUEzQixFQUF1Q0MsWUFBdkM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQQyxZQUFBQSxNQUZPLEdBRUVDLGVBQUlDLElBQUosQ0FBU0MsbUJBQVQsQ0FGRjtBQUdQQyxZQUFBQSxXQUhPLEdBR08sd0JBQU9OLFNBQVAsQ0FIUDtBQUlQTyxZQUFBQSxlQUpPLEdBSVdDLG1CQUFLQyxpQkFBTCxDQUF1QkgsV0FBdkIsQ0FKWDtBQUtQSSxZQUFBQSxJQUxPLEdBS0FSLE1BQU0sQ0FBQ1MsS0FBUCxDQUFhSixlQUFiLENBTEE7QUFPUEssWUFBQUEsU0FQTyxHQU9LLElBQUlDLEdBQUosQ0FBUSxDQUN4QixDQUFDLElBQUQsRUFBUSxJQUFJQSxHQUFKLENBQVEsQ0FDZCxDQUFDLE1BQUQsRUFBUyxJQUFULENBRGMsRUFFZCxDQUFDLE9BQUQsRUFBVSxLQUFWLENBRmMsQ0FBUixDQUFSLENBRHdCLEVBS3hCLENBQUMsS0FBRCxFQUFTLElBQUlBLEdBQUosQ0FBUSxFQUFSLENBQVQsQ0FMd0IsRUFPeEIsQ0FBQyxLQUFELEVBQVMsSUFBSUEsR0FBSixDQUFRLEVBQVIsQ0FBVCxDQVB3QixDQUFSLENBUEw7QUFrQlBDLFlBQUFBLEdBbEJPLEdBa0JEO0FBQ1ZDLGNBQUFBLEdBQUcsRUFBRyxFQURJO0FBRVZILGNBQUFBLFNBQVMsRUFBVEEsU0FGVTtBQUdWVixjQUFBQSxNQUFNLEVBQU5BO0FBSFUsYUFsQkM7QUFBQTtBQUFBLG1CQXdCYWMsZUFBSUMsU0FBSixDQUFlUCxJQUFmLEVBQXNCUSxrQkFBdEIsRUFBK0JKLEdBQS9CLENBeEJiOztBQUFBO0FBd0JQSyxZQUFBQSxXQXhCTztBQXlCUEMsWUFBQUEsU0F6Qk8sR0F5QktKLGVBQUlLLE9BQUosQ0FBYUYsV0FBYixDQXpCTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQTJCYUMsU0EzQmI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEyQktFLFlBQUFBLElBM0JMOztBQUFBLGtCQTRCTkEsSUFBSSxDQUFDQyxRQUFMLEtBQWtCbEIsb0JBQVFtQixHQTVCcEI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUE2Qlh2QixZQUFBQSxZQUFZLENBQUN3QixLQUFiLENBQW1CSCxJQUFJLENBQUNJLE1BQXhCOztBQTdCVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGwxICwgYXN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWdyYW1tYXInIDtcbmltcG9ydCB0YXBlIGZyb20gJ0BhdXJlb29tcy9qcy10YXBlJyA7XG5cbmltcG9ydCB0b2tlbnMgZnJvbSAnLi90b2tlbnMnIDtcbmltcG9ydCBncmFtbWFyIGZyb20gJy4vZ3JhbW1hcicgO1xuaW1wb3J0IHNoYWtlciBmcm9tICcuL3RyYW5zZm9ybS9zaGFrZXInIDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2hha2V0YXBlICggaW5wdXRUYXBlICwgb3V0cHV0U3RyZWFtICkge1xuXG4gIGNvbnN0IHBhcnNlciA9IGxsMS5mcm9tKGdyYW1tYXIpO1xuICBjb25zdCBpbnB1dFRva2VucyA9IHRva2VucyhpbnB1dFRhcGUpIDtcbiAgY29uc3QgaW5wdXRUb2tlbnNUYXBlID0gdGFwZS5mcm9tQXN5bmNJdGVyYWJsZShpbnB1dFRva2Vucyk7XG4gIGNvbnN0IHRyZWUgPSBwYXJzZXIucGFyc2UoaW5wdXRUb2tlbnNUYXBlKSA7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gbmV3IE1hcChbXG4gICAgWydpZicgLCBuZXcgTWFwKFtcbiAgICAgIFsndHJ1ZScsIHRydWVdLFxuICAgICAgWydmYWxzZScsIGZhbHNlXSxcbiAgICBdKV0sXG4gICAgWydjbWQnICwgbmV3IE1hcChbXG4gICAgXSldLFxuICAgIFsnZW52JyAsIG5ldyBNYXAoW1xuICAgIF0pXSxcbiAgXSkgO1xuXG4gIGNvbnN0IGN0eCA9IHtcbiAgICBlbnYgOiBbIF0gLFxuICAgIHZhcmlhYmxlcyAsXG4gICAgcGFyc2VyICxcbiAgfSA7XG5cbiAgY29uc3QgdHJhbnNmb3JtZWQgPSBhd2FpdCBhc3QudHJhbnNmb3JtKCB0cmVlICwgc2hha2VyICwgY3R4ICkgO1xuICBjb25zdCBmbGF0dGVuZWQgPSBhc3QuZmxhdHRlbiggdHJhbnNmb3JtZWQgKSA7XG5cbiAgZm9yIGF3YWl0ICggY29uc3QgbGVhZiBvZiBmbGF0dGVuZWQgKSB7XG4gICAgaWYgKCBsZWFmLnRlcm1pbmFsID09PSBncmFtbWFyLmVvZiApIGJyZWFrIDtcbiAgICBvdXRwdXRTdHJlYW0ud3JpdGUobGVhZi5idWZmZXIpIDtcbiAgfVxuXG59XG4iXX0=