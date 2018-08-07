"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Position =
/*#__PURE__*/
function () {
  function Position(line, position) {
    _classCallCheck(this, Position);

    this.line = line;
    this.position = position;
  }

  _createClass(Position, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.line, ":").concat(this.position);
    }
  }]);

  return Position;
}();

exports.default = Position;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qb3NpdGlvbi5qcyJdLCJuYW1lcyI6WyJQb3NpdGlvbiIsImxpbmUiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFxQkEsUTs7O0FBRW5CLG9CQUFjQyxJQUFkLEVBQXFCQyxRQUFyQixFQUFnQztBQUFBOztBQUM5QixTQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7OytCQUVZO0FBQ1gsdUJBQVUsS0FBS0QsSUFBZixjQUF1QixLQUFLQyxRQUE1QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb24ge1xuXG4gIGNvbnN0cnVjdG9yICggbGluZSAsIHBvc2l0aW9uICkge1xuICAgIHRoaXMubGluZSA9IGxpbmUgO1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbiA7XG4gIH1cblxuICB0b1N0cmluZyAoICkge1xuICAgIHJldHVybiBgJHt0aGlzLmxpbmV9OiR7dGhpcy5wb3NpdGlvbn1gIDtcbiAgfVxuXG59XG4iXX0=