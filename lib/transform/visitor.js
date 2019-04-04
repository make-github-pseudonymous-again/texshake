"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsGrammar = require("@aureooms/js-grammar");

var _grammar = _interopRequireDefault(require("../grammar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var t = _jsGrammar.ast.transform;
var cmap = _jsGrammar.ast.cmap;

var recurse = function recurse(nonterminal, production) {
  return function (tree, match, ctx) {
    return {
      "type": "node",
      nonterminal: nonterminal,
      production: production,
      "children": cmap(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(x) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(x.type === 'leaf')) {
                    _context.next = 4;
                    break;
                  }

                  _context.t0 = x;
                  _context.next = 7;
                  break;

                case 4:
                  _context.next = 6;
                  return t(x, match, ctx);

                case 6:
                  _context.t0 = _context.sent;

                case 7:
                  return _context.abrupt("return", _context.t0);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), tree.children)
    };
  };
}; // move to @js-grammar/ast.visitor


function generateVisitor(grammar) {
  var transform = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = grammar.productions.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          nonterminal = _step$value[0],
          productions = _step$value[1];

      var nonterminalTransform = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = productions.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var production = _step2.value;
          nonterminalTransform[production] = recurse(nonterminal, production);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      transform[nonterminal] = nonterminalTransform;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return transform;
}

var _default = generateVisitor(_grammar["default"]);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vdmlzaXRvci5qcyJdLCJuYW1lcyI6WyJ0IiwiYXN0IiwidHJhbnNmb3JtIiwiY21hcCIsInJlY3Vyc2UiLCJub250ZXJtaW5hbCIsInByb2R1Y3Rpb24iLCJ0cmVlIiwibWF0Y2giLCJjdHgiLCJ4IiwidHlwZSIsImNoaWxkcmVuIiwiZ2VuZXJhdGVWaXNpdG9yIiwiZ3JhbW1hciIsInByb2R1Y3Rpb25zIiwiZW50cmllcyIsIm5vbnRlcm1pbmFsVHJhbnNmb3JtIiwia2V5cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsQ0FBQyxHQUFHQyxlQUFJQyxTQUFkO0FBQ0EsSUFBTUMsSUFBSSxHQUFHRixlQUFJRSxJQUFqQjs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFFQyxXQUFGLEVBQWdCQyxVQUFoQjtBQUFBLFNBQWdDLFVBQUVDLElBQUYsRUFBU0MsS0FBVCxFQUFpQkMsR0FBakI7QUFBQSxXQUEyQjtBQUN6RSxjQUFTLE1BRGdFO0FBRXpFSixNQUFBQSxXQUFXLEVBQVhBLFdBRnlFO0FBR3pFQyxNQUFBQSxVQUFVLEVBQVZBLFVBSHlFO0FBSXpFLGtCQUFhSCxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBRSxpQkFBTU8sQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQVdBLENBQUMsQ0FBQ0MsSUFBRixLQUFXLE1BQXRCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdDQUErQkQsQ0FBL0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx5QkFBeUNWLENBQUMsQ0FBRVUsQ0FBRixFQUFNRixLQUFOLEVBQWNDLEdBQWQsQ0FBMUM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBa0VGLElBQUksQ0FBQ0ssUUFBdkU7QUFKd0QsS0FBM0I7QUFBQSxHQUFoQztBQUFBLENBQWhCLEMsQ0FRQTs7O0FBQ0EsU0FBU0MsZUFBVCxDQUEyQkMsT0FBM0IsRUFBcUM7QUFFbkMsTUFBTVosU0FBUyxHQUFHLEVBQWxCO0FBRm1DO0FBQUE7QUFBQTs7QUFBQTtBQUluQyx5QkFBNkNZLE9BQU8sQ0FBQ0MsV0FBUixDQUFvQkMsT0FBcEIsRUFBN0MsOEhBQTZFO0FBQUE7QUFBQSxVQUEvRFgsV0FBK0Q7QUFBQSxVQUFqRFUsV0FBaUQ7O0FBQzNFLFVBQU1FLG9CQUFvQixHQUFHLEVBQTdCO0FBRDJFO0FBQUE7QUFBQTs7QUFBQTtBQUczRSw4QkFBMEJGLFdBQVcsQ0FBQ0csSUFBWixFQUExQixtSUFBK0M7QUFBQSxjQUFuQ1osVUFBbUM7QUFDN0NXLFVBQUFBLG9CQUFvQixDQUFDWCxVQUFELENBQXBCLEdBQW1DRixPQUFPLENBQUVDLFdBQUYsRUFBZ0JDLFVBQWhCLENBQTFDO0FBQ0Q7QUFMMEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPM0VKLE1BQUFBLFNBQVMsQ0FBQ0csV0FBRCxDQUFULEdBQXlCWSxvQkFBekI7QUFDRDtBQVprQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNuQyxTQUFPZixTQUFQO0FBRUQ7O2VBRWNXLGVBQWUsQ0FBRUMsbUJBQUYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzdCB9IGZyb20gJ0BhdXJlb29tcy9qcy1ncmFtbWFyJyA7XG5cbmltcG9ydCBncmFtbWFyIGZyb20gJy4uL2dyYW1tYXInIDtcblxuY29uc3QgdCA9IGFzdC50cmFuc2Zvcm0gO1xuY29uc3QgY21hcCA9IGFzdC5jbWFwIDtcbmNvbnN0IHJlY3Vyc2UgPSAoIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbiApID0+ICggdHJlZSAsIG1hdGNoICwgY3R4ICkgPT4gKHtcbiAgXCJ0eXBlXCIgOiBcIm5vZGVcIiAsXG4gIG5vbnRlcm1pbmFsICxcbiAgcHJvZHVjdGlvbiAsXG4gIFwiY2hpbGRyZW5cIiA6IGNtYXAoIGFzeW5jIHggPT4geC50eXBlID09PSAnbGVhZicgPyB4IDogYXdhaXQgdCggeCAsIG1hdGNoICwgY3R4ICkgLCB0cmVlLmNoaWxkcmVuICkgLFxufSkgO1xuXG5cbi8vIG1vdmUgdG8gQGpzLWdyYW1tYXIvYXN0LnZpc2l0b3JcbmZ1bmN0aW9uIGdlbmVyYXRlVmlzaXRvciAoIGdyYW1tYXIgKSB7XG5cbiAgY29uc3QgdHJhbnNmb3JtID0geyB9IDtcblxuICBmb3IgKCBjb25zdCBbIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbnMgXSBvZiBncmFtbWFyLnByb2R1Y3Rpb25zLmVudHJpZXMoKSApIHtcbiAgICBjb25zdCBub250ZXJtaW5hbFRyYW5zZm9ybSA9IHsgfSA7XG5cbiAgICBmb3IgKCBjb25zdCBwcm9kdWN0aW9uIG9mIHByb2R1Y3Rpb25zLmtleXMoKSApIHtcbiAgICAgIG5vbnRlcm1pbmFsVHJhbnNmb3JtW3Byb2R1Y3Rpb25dID0gcmVjdXJzZSggbm9udGVybWluYWwgLCBwcm9kdWN0aW9uICkgO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybVtub250ZXJtaW5hbF0gPSBub250ZXJtaW5hbFRyYW5zZm9ybSA7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtIDtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVZpc2l0b3IoIGdyYW1tYXIgKSA7XG4iXX0=