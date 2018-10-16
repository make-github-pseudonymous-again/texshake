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
    var parser, inputTokens, inputTokensTape, tree, variables, ctx, transformed, flattened, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, leaf;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            parser = _jsGrammar.ll1.from(_grammar.default);
            inputTokens = (0, _tokens.default)(inputTape);
            inputTokensTape = _jsTape.default.fromAsyncIterable(inputTokens);
            tree = parser.parse(inputTokensTape);
            variables = new Map([['if', new Map([['true', true], ['false', false]])], ['cmd', new Map([])], ['env', new Map([])]]);
            ctx = {
              args: [],
              variables: variables
            };
            _context.next = 8;
            return _jsGrammar.ast.transform(tree, _shaker.default, ctx);

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

            if (!(leaf.terminal === _grammar.default.eof)) {
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

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 40;
              break;
            }

            _context.next = 40;
            return _iterator.return();

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
    }, _callee, this, [[12, 31, 35, 45], [36,, 40, 44]]);
  }));
  return _shaketape.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXRhcGUuanMiXSwibmFtZXMiOlsic2hha2V0YXBlIiwiaW5wdXRUYXBlIiwib3V0cHV0U3RyZWFtIiwicGFyc2VyIiwibGwxIiwiZnJvbSIsImdyYW1tYXIiLCJpbnB1dFRva2VucyIsImlucHV0VG9rZW5zVGFwZSIsInRhcGUiLCJmcm9tQXN5bmNJdGVyYWJsZSIsInRyZWUiLCJwYXJzZSIsInZhcmlhYmxlcyIsIk1hcCIsImN0eCIsImFyZ3MiLCJhc3QiLCJ0cmFuc2Zvcm0iLCJzaGFrZXIiLCJ0cmFuc2Zvcm1lZCIsImZsYXR0ZW5lZCIsImZsYXR0ZW4iLCJsZWFmIiwidGVybWluYWwiLCJlb2YiLCJ3cml0ZSIsImJ1ZmZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O1NBRThCQSxTOzs7Ozs7OzBCQUFmLGlCQUEyQkMsU0FBM0IsRUFBdUNDLFlBQXZDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUEMsWUFBQUEsTUFGTyxHQUVFQyxlQUFJQyxJQUFKLENBQVNDLGdCQUFULENBRkY7QUFHUEMsWUFBQUEsV0FITyxHQUdPLHFCQUFPTixTQUFQLENBSFA7QUFJUE8sWUFBQUEsZUFKTyxHQUlXQyxnQkFBS0MsaUJBQUwsQ0FBdUJILFdBQXZCLENBSlg7QUFLUEksWUFBQUEsSUFMTyxHQUtBUixNQUFNLENBQUNTLEtBQVAsQ0FBYUosZUFBYixDQUxBO0FBT1BLLFlBQUFBLFNBUE8sR0FPSyxJQUFJQyxHQUFKLENBQVEsQ0FDeEIsQ0FBQyxJQUFELEVBQVEsSUFBSUEsR0FBSixDQUFRLENBQ2QsQ0FBQyxNQUFELEVBQVMsSUFBVCxDQURjLEVBRWQsQ0FBQyxPQUFELEVBQVUsS0FBVixDQUZjLENBQVIsQ0FBUixDQUR3QixFQUt4QixDQUFDLEtBQUQsRUFBUyxJQUFJQSxHQUFKLENBQVEsRUFBUixDQUFULENBTHdCLEVBT3hCLENBQUMsS0FBRCxFQUFTLElBQUlBLEdBQUosQ0FBUSxFQUFSLENBQVQsQ0FQd0IsQ0FBUixDQVBMO0FBa0JQQyxZQUFBQSxHQWxCTyxHQWtCRDtBQUNWQyxjQUFBQSxJQUFJLEVBQUcsRUFERztBQUVWSCxjQUFBQSxTQUFTLEVBQVRBO0FBRlUsYUFsQkM7QUFBQTtBQUFBLG1CQXVCYUksZUFBSUMsU0FBSixDQUFlUCxJQUFmLEVBQXNCUSxlQUF0QixFQUErQkosR0FBL0IsQ0F2QmI7O0FBQUE7QUF1QlBLLFlBQUFBLFdBdkJPO0FBd0JQQyxZQUFBQSxTQXhCTyxHQXdCS0osZUFBSUssT0FBSixDQUFhRixXQUFiLENBeEJMO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBMEJhQyxTQTFCYjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTBCS0UsWUFBQUEsSUExQkw7O0FBQUEsa0JBMkJOQSxJQUFJLENBQUNDLFFBQUwsS0FBa0JsQixpQkFBUW1CLEdBM0JwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQTRCWHZCLFlBQUFBLFlBQVksQ0FBQ3dCLEtBQWIsQ0FBbUJILElBQUksQ0FBQ0ksTUFBeEI7O0FBNUJXO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsbDEgLCBhc3QgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuaW1wb3J0IHRhcGUgZnJvbSAnQGF1cmVvb21zL2pzLXRhcGUnIDtcblxuaW1wb3J0IHRva2VucyBmcm9tICcuL3Rva2VucycgO1xuaW1wb3J0IGdyYW1tYXIgZnJvbSAnLi9ncmFtbWFyJyA7XG5pbXBvcnQgc2hha2VyIGZyb20gJy4vc2hha2VyJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHNoYWtldGFwZSAoIGlucHV0VGFwZSAsIG91dHB1dFN0cmVhbSApIHtcblxuICBjb25zdCBwYXJzZXIgPSBsbDEuZnJvbShncmFtbWFyKTtcbiAgY29uc3QgaW5wdXRUb2tlbnMgPSB0b2tlbnMoaW5wdXRUYXBlKSA7XG4gIGNvbnN0IGlucHV0VG9rZW5zVGFwZSA9IHRhcGUuZnJvbUFzeW5jSXRlcmFibGUoaW5wdXRUb2tlbnMpO1xuICBjb25zdCB0cmVlID0gcGFyc2VyLnBhcnNlKGlucHV0VG9rZW5zVGFwZSkgO1xuXG4gIGNvbnN0IHZhcmlhYmxlcyA9IG5ldyBNYXAoW1xuICAgIFsnaWYnICwgbmV3IE1hcChbXG4gICAgICBbJ3RydWUnLCB0cnVlXSxcbiAgICAgIFsnZmFsc2UnLCBmYWxzZV0sXG4gICAgXSldLFxuICAgIFsnY21kJyAsIG5ldyBNYXAoW1xuICAgIF0pXSxcbiAgICBbJ2VudicgLCBuZXcgTWFwKFtcbiAgICBdKV0sXG4gIF0pIDtcblxuICBjb25zdCBjdHggPSB7XG4gICAgYXJncyA6IFsgXSAsXG4gICAgdmFyaWFibGVzICxcbiAgfSA7XG5cbiAgY29uc3QgdHJhbnNmb3JtZWQgPSBhd2FpdCBhc3QudHJhbnNmb3JtKCB0cmVlICwgc2hha2VyICwgY3R4ICkgO1xuICBjb25zdCBmbGF0dGVuZWQgPSBhc3QuZmxhdHRlbiggdHJhbnNmb3JtZWQgKSA7XG5cbiAgZm9yIGF3YWl0ICggY29uc3QgbGVhZiBvZiBmbGF0dGVuZWQgKSB7XG4gICAgaWYgKCBsZWFmLnRlcm1pbmFsID09PSBncmFtbWFyLmVvZiApIGJyZWFrIDtcbiAgICBvdXRwdXRTdHJlYW0ud3JpdGUobGVhZi5idWZmZXIpIDtcbiAgfVxuXG59XG4iXX0=