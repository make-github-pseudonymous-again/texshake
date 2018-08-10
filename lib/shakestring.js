"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shakestring;

var _jsTape = _interopRequireDefault(require("@aureooms/js-tape"));

var _shaketape = _interopRequireDefault(require("./shaketape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function shakestring(_x, _x2) {
  return _shakestring.apply(this, arguments);
}

function _shakestring() {
  _shakestring = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(string, outputStream) {
    var inputCharacterTape;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputCharacterTape = _jsTape.default.fromString(string);
            _context.next = 3;
            return (0, _shaketape.default)(inputCharacterTape, outputStream);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _shakestring.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXN0cmluZy5qcyJdLCJuYW1lcyI6WyJzaGFrZXN0cmluZyIsInN0cmluZyIsIm91dHB1dFN0cmVhbSIsImlucHV0Q2hhcmFjdGVyVGFwZSIsInRhcGUiLCJmcm9tU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O1NBRThCQSxXOzs7Ozs7OzBCQUFmLGlCQUE2QkMsTUFBN0IsRUFBc0NDLFlBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQQyxZQUFBQSxrQkFGTyxHQUVjQyxnQkFBS0MsVUFBTCxDQUFpQkosTUFBakIsQ0FGZDtBQUFBO0FBQUEsbUJBSVAsd0JBQVdFLGtCQUFYLEVBQWdDRCxZQUFoQyxDQUpPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGFwZSBmcm9tICdAYXVyZW9vbXMvanMtdGFwZScgO1xuaW1wb3J0IHNoYWtldGFwZSBmcm9tICcuL3NoYWtldGFwZScgO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzaGFrZXN0cmluZyAoIHN0cmluZyAsIG91dHB1dFN0cmVhbSApIHtcblxuICBjb25zdCBpbnB1dENoYXJhY3RlclRhcGUgPSB0YXBlLmZyb21TdHJpbmcoIHN0cmluZyApIDtcblxuICBhd2FpdCBzaGFrZXRhcGUoIGlucHV0Q2hhcmFjdGVyVGFwZSAsIG91dHB1dFN0cmVhbSApIDtcblxufVxuIl19