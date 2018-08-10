"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shakestream;

var _jsTape = _interopRequireDefault(require("@aureooms/js-tape"));

var _shaketape = _interopRequireDefault(require("./shaketape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function shakestream(_x, _x2) {
  return _shakestream.apply(this, arguments);
}

function _shakestream() {
  _shakestream = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(inputStream, outputStream) {
    var inputCharacterTape;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputCharacterTape = _jsTape.default.fromReadStream(inputStream);
            _context.next = 3;
            return (0, _shaketape.default)(inputCharacterTape, outputStream);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _shakestream.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXN0cmVhbS5qcyJdLCJuYW1lcyI6WyJzaGFrZXN0cmVhbSIsImlucHV0U3RyZWFtIiwib3V0cHV0U3RyZWFtIiwiaW5wdXRDaGFyYWN0ZXJUYXBlIiwidGFwZSIsImZyb21SZWFkU3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O1NBRThCQSxXOzs7Ozs7OzBCQUFmLGlCQUE2QkMsV0FBN0IsRUFBMkNDLFlBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQQyxZQUFBQSxrQkFGTyxHQUVjQyxnQkFBS0MsY0FBTCxDQUFxQkosV0FBckIsQ0FGZDtBQUFBO0FBQUEsbUJBSVAsd0JBQVdFLGtCQUFYLEVBQWdDRCxZQUFoQyxDQUpPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGFwZSBmcm9tICdAYXVyZW9vbXMvanMtdGFwZScgO1xuaW1wb3J0IHNoYWtldGFwZSBmcm9tICcuL3NoYWtldGFwZScgO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzaGFrZXN0cmVhbSAoIGlucHV0U3RyZWFtICwgb3V0cHV0U3RyZWFtICkge1xuXG4gIGNvbnN0IGlucHV0Q2hhcmFjdGVyVGFwZSA9IHRhcGUuZnJvbVJlYWRTdHJlYW0oIGlucHV0U3RyZWFtICk7XG5cbiAgYXdhaXQgc2hha2V0YXBlKCBpbnB1dENoYXJhY3RlclRhcGUgLCBvdXRwdXRTdHJlYW0gKSA7XG5cbn1cbiJdfQ==