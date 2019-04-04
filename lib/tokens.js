"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tokens;

var _Position = _interopRequireDefault(require("./Position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function _asyncGeneratorDelegate(inner, awaitWrap) { var iter = {}, waiting = false; function pump(key, value) { waiting = true; value = new Promise(function (resolve) { resolve(inner[key](value)); }); return { done: false, value: awaitWrap(value) }; } ; if (typeof Symbol === "function" && Symbol.iterator) { iter[Symbol.iterator] = function () { return this; }; } iter.next = function (value) { if (waiting) { waiting = false; return value; } return pump("next", value); }; if (typeof inner["throw"] === "function") { iter["throw"] = function (value) { if (waiting) { waiting = false; throw value; } return pump("throw", value); }; } if (typeof inner["return"] === "function") { iter["return"] = function (value) { return pump("return", value); }; } return iter; }

var FIRST_LINE = 1;
var FIRST_POSITION = 1;

function _tokens(_x) {
  return _tokens2.apply(this, arguments);
}

function _tokens2() {
  _tokens2 = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(tape) {
    var line, position, buffer, flush, c, cmd, d, cmdtype, _d;

    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            line = FIRST_LINE;
            position = FIRST_POSITION;
            buffer = '';
            flush =
            /*#__PURE__*/
            regeneratorRuntime.mark(function flush() {
              return regeneratorRuntime.wrap(function flush$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(buffer !== '')) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 3;
                      return ['text', buffer, new _Position["default"](line, position)];

                    case 3:
                      position += buffer.length;
                      buffer = '';

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, flush);
            });

          case 4:
            if (!true) {
              _context2.next = 87;
              break;
            }

            _context2.next = 7;
            return _awaitAsyncGenerator(tape.read());

          case 7:
            c = _context2.sent;

            if (!(c === tape.eof)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("break", 87);

          case 10:
            if (!(c === '\\')) {
              _context2.next = 42;
              break;
            }

            cmd = '\\';

          case 12:
            if (!true) {
              _context2.next = 26;
              break;
            }

            _context2.next = 15;
            return _awaitAsyncGenerator(tape.read());

          case 15:
            d = _context2.sent;

            if (!(d === tape.eof)) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("break", 26);

          case 18:
            if (!(d >= 'a' && d <= 'z' || d >= 'A' && d <= 'Z')) {
              _context2.next = 22;
              break;
            }

            cmd += d;
            _context2.next = 24;
            break;

          case 22:
            if (cmd === '\\') cmd += d;else tape.unread(d);
            return _context2.abrupt("break", 26);

          case 24:
            _context2.next = 12;
            break;

          case 26:
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t0", 27);

          case 27:
            cmdtype = 'othercmd';
            _context2.t1 = cmd;
            _context2.next = _context2.t1 === '\\newif' ? 31 : _context2.t1 === '\\else' ? 31 : _context2.t1 === '\\def' ? 31 : _context2.t1 === '\\newcommand' ? 31 : _context2.t1 === '\\renewcommand' ? 31 : _context2.t1 === '\\newenvironment' ? 31 : _context2.t1 === '\\renewenvironment' ? 31 : _context2.t1 === '\\begin' ? 31 : _context2.t1 === '\\end' ? 31 : _context2.t1 === '\\fi' ? 31 : _context2.t1 === '\\(' ? 33 : _context2.t1 === '\\)' ? 33 : _context2.t1 === '\\[' ? 33 : _context2.t1 === '\\]' ? 33 : 35;
            break;

          case 31:
            cmdtype = cmd.substr(1); // remove the leading backslash

            return _context2.abrupt("break", 37);

          case 33:
            cmdtype = cmd;
            return _context2.abrupt("break", 37);

          case 35:
            if (cmd.substr(0, 3) === '\\if' && cmd !== '\\iff') cmdtype = 'ifcmd';else if (cmd.substr(cmd.length - 5, 5) === 'false') cmdtype = 'falsecmd';else if (cmd.substr(cmd.length - 4, 4) === 'true') cmdtype = 'truecmd';
            return _context2.abrupt("break", 37);

          case 37:
            _context2.next = 39;
            return [cmdtype, cmd, new _Position["default"](line, position)];

          case 39:
            if (cmd === '\\\n') {
              ++line;
              position = FIRST_POSITION;
            } else {
              position += cmd.length;
            }

            _context2.next = 85;
            break;

          case 42:
            _context2.t2 = c;
            _context2.next = _context2.t2 === '0' ? 45 : _context2.t2 === '1' ? 45 : _context2.t2 === '2' ? 45 : _context2.t2 === '3' ? 45 : _context2.t2 === '4' ? 45 : _context2.t2 === '5' ? 45 : _context2.t2 === '6' ? 45 : _context2.t2 === '7' ? 45 : _context2.t2 === '8' ? 45 : _context2.t2 === '9' ? 45 : _context2.t2 === '#' ? 50 : _context2.t2 === '{' ? 50 : _context2.t2 === '}' ? 50 : _context2.t2 === '[' ? 50 : _context2.t2 === ']' ? 50 : _context2.t2 === '*' ? 50 : _context2.t2 === '$' ? 50 : _context2.t2 === ' ' ? 50 : _context2.t2 === '\n' ? 55 : _context2.t2 === '%' ? 61 : 83;
            break;

          case 45:
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t3", 46);

          case 46:
            _context2.next = 48;
            return ['digit', c, new _Position["default"](line, position)];

          case 48:
            ++position;
            return _context2.abrupt("break", 85);

          case 50:
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t4", 51);

          case 51:
            _context2.next = 53;
            return [c, c, new _Position["default"](line, position)];

          case 53:
            ++position;
            return _context2.abrupt("break", 85);

          case 55:
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t5", 56);

          case 56:
            _context2.next = 58;
            return [c, c, new _Position["default"](line, position)];

          case 58:
            ++line;
            position = FIRST_POSITION;
            return _context2.abrupt("break", 85);

          case 61:
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t6", 62);

          case 62:
            buffer = '%';
            _d = '';

          case 64:
            if (!true) {
              _context2.next = 73;
              break;
            }

            _context2.next = 67;
            return _awaitAsyncGenerator(tape.read());

          case 67:
            _d = _context2.sent;

            if (!(_d === tape.eof || _d === '\n')) {
              _context2.next = 70;
              break;
            }

            return _context2.abrupt("break", 73);

          case 70:
            buffer += _d;
            _context2.next = 64;
            break;

          case 73:
            _context2.next = 75;
            return ['comment', buffer, new _Position["default"](line, position)];

          case 75:
            position += buffer.length;
            buffer = '';

            if (!(_d === '\n')) {
              _context2.next = 82;
              break;
            }

            _context2.next = 80;
            return ['\n', '\n', new _Position["default"](line, position)];

          case 80:
            ++line;
            position = FIRST_POSITION;

          case 82:
            return _context2.abrupt("break", 85);

          case 83:
            buffer += c;
            return _context2.abrupt("break", 85);

          case 85:
            _context2.next = 4;
            break;

          case 87:
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t7", 88);

          case 88:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _tokens2.apply(this, arguments);
}

function tokens(_x2) {
  return _tokens3.apply(this, arguments);
}

function _tokens3() {
  _tokens3 = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(tape) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, _value2, _value3, terminal, buffer, position;

    return regeneratorRuntime.wrap(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context3.prev = 2;
            _iterator = _asyncIterator(_tokens(tape));

          case 4:
            _context3.next = 6;
            return _awaitAsyncGenerator(_iterator.next());

          case 6:
            _step = _context3.sent;
            _iteratorNormalCompletion = _step.done;
            _context3.next = 10;
            return _awaitAsyncGenerator(_step.value);

          case 10:
            _value = _context3.sent;

            if (_iteratorNormalCompletion) {
              _context3.next = 18;
              break;
            }

            _value2 = _value, _value3 = _slicedToArray(_value2, 3), terminal = _value3[0], buffer = _value3[1], position = _value3[2];
            _context3.next = 15;
            return {
              'type': 'leaf',
              terminal: terminal,
              buffer: buffer,
              position: position
            };

          case 15:
            _iteratorNormalCompletion = true;
            _context3.next = 4;
            break;

          case 18:
            _context3.next = 24;
            break;

          case 20:
            _context3.prev = 20;
            _context3.t0 = _context3["catch"](2);
            _didIteratorError = true;
            _iteratorError = _context3.t0;

          case 24:
            _context3.prev = 24;
            _context3.prev = 25;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context3.next = 29;
              break;
            }

            _context3.next = 29;
            return _awaitAsyncGenerator(_iterator["return"]());

          case 29:
            _context3.prev = 29;

            if (!_didIteratorError) {
              _context3.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context3.finish(29);

          case 33:
            return _context3.finish(24);

          case 34:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee2, null, [[2, 20, 24, 34], [25,, 29, 33]]);
  }));
  return _tokens3.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbnMuanMiXSwibmFtZXMiOlsiRklSU1RfTElORSIsIkZJUlNUX1BPU0lUSU9OIiwiX3Rva2VucyIsInRhcGUiLCJsaW5lIiwicG9zaXRpb24iLCJidWZmZXIiLCJmbHVzaCIsIlBvc2l0aW9uIiwibGVuZ3RoIiwicmVhZCIsImMiLCJlb2YiLCJjbWQiLCJkIiwidW5yZWFkIiwiY21kdHlwZSIsInN1YnN0ciIsInRva2VucyIsInRlcm1pbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLENBQXZCOztTQUVnQkMsTzs7Ozs7OzswQkFBaEIsaUJBQTBCQyxJQUExQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU1DLFlBQUFBLElBRk4sR0FFYUosVUFGYjtBQUdNSyxZQUFBQSxRQUhOLEdBR2lCSixjQUhqQjtBQUtNSyxZQUFBQSxNQUxOLEdBS2UsRUFMZjtBQU9RQyxZQUFBQSxLQVBSO0FBQUE7QUFBQSxvQ0FPZ0IsU0FBUkEsS0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ1BELE1BQU0sS0FBSyxFQURKO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRVYsNkJBQU0sQ0FBRSxNQUFGLEVBQVdBLE1BQVgsRUFBb0IsSUFBSUUsb0JBQUosQ0FBYUosSUFBYixFQUFtQkMsUUFBbkIsQ0FBcEIsQ0FBTjs7QUFGVTtBQUdWQSxzQkFBQUEsUUFBUSxJQUFJQyxNQUFNLENBQUNHLE1BQW5CO0FBQ0FILHNCQUFBQSxNQUFNLEdBQUcsRUFBVDs7QUFKVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVJDLEtBQVE7QUFBQSxhQVBoQjs7QUFBQTtBQUFBLGlCQWVVLElBZlY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3Q0FpQm9CSixJQUFJLENBQUNPLElBQUwsRUFqQnBCOztBQUFB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QUFIVztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc2l0aW9uIGZyb20gJy4vUG9zaXRpb24nIDtcblxuY29uc3QgRklSU1RfTElORSA9IDE7XG5jb25zdCBGSVJTVF9QT1NJVElPTiA9IDE7XG5cbmFzeW5jIGZ1bmN0aW9uKiBfdG9rZW5zICggdGFwZSApIHtcblxuICBsZXQgbGluZSA9IEZJUlNUX0xJTkUgO1xuICBsZXQgcG9zaXRpb24gPSBGSVJTVF9QT1NJVElPTjtcblxuICBsZXQgYnVmZmVyID0gJyc7XG5cbiAgY29uc3QgZmx1c2ggPSBmdW5jdGlvbiogKCkge1xuICAgIGlmICggYnVmZmVyICE9PSAnJyApIHtcbiAgICAgIHlpZWxkIFsgJ3RleHQnICwgYnVmZmVyICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgIHBvc2l0aW9uICs9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICBidWZmZXIgPSAnJztcbiAgICB9XG4gIH0gO1xuXG4gIHdoaWxlICggdHJ1ZSApIHtcblxuICAgIGNvbnN0IGMgPSBhd2FpdCB0YXBlLnJlYWQoKTtcblxuICAgIGlmICggYyA9PT0gdGFwZS5lb2YgKSBicmVhayA7XG5cbiAgICBpZiAoIGMgPT09ICdcXFxcJyApIHtcbiAgICAgIGxldCBjbWQgPSAnXFxcXCcgO1xuICAgICAgd2hpbGUgKCB0cnVlICkgeyAvLyByZWFkIGNvbW1hbmRcblxuXHRjb25zdCBkID0gYXdhaXQgdGFwZS5yZWFkKCk7XG5cblx0aWYgKCBkID09PSB0YXBlLmVvZiApIGJyZWFrIDtcblxuXHQvLyBodHRwOi8vd3d3LnRleC5hYy51ay9GQVEtd2hhdG1hY3Jvcy5odG1sXG5cdGlmICggKCBkID49ICdhJyAmJiBkIDw9ICd6JyApIHx8ICggZCA+PSAnQScgJiYgZCA8PSAnWicgKSApIGNtZCArPSBkO1xuXHRlbHNlIHtcblx0ICBpZiAoIGNtZCA9PT0gJ1xcXFwnICkgY21kICs9IGQ7XG5cdCAgZWxzZSB0YXBlLnVucmVhZChkKTtcblx0ICBicmVhaztcblx0fVxuICAgICAgfVxuXG4gICAgICB5aWVsZCogZmx1c2goKTtcblxuICAgICAgbGV0IGNtZHR5cGUgPSAnb3RoZXJjbWQnIDtcblxuICAgICAgc3dpdGNoICggY21kICkge1xuXG5cdGNhc2UgJ1xcXFxuZXdpZic6XG5cdGNhc2UgJ1xcXFxlbHNlJzpcblx0Y2FzZSAnXFxcXGRlZic6XG5cdGNhc2UgJ1xcXFxuZXdjb21tYW5kJzpcblx0Y2FzZSAnXFxcXHJlbmV3Y29tbWFuZCc6XG5cdGNhc2UgJ1xcXFxuZXdlbnZpcm9ubWVudCc6XG5cdGNhc2UgJ1xcXFxyZW5ld2Vudmlyb25tZW50Jzpcblx0Y2FzZSAnXFxcXGJlZ2luJzpcblx0Y2FzZSAnXFxcXGVuZCc6XG5cdGNhc2UgJ1xcXFxmaSc6XG5cdCAgY21kdHlwZSA9IGNtZC5zdWJzdHIoMSk7IC8vIHJlbW92ZSB0aGUgbGVhZGluZyBiYWNrc2xhc2hcblx0ICBicmVhaztcblxuXHRjYXNlICdcXFxcKCc6XG5cdGNhc2UgJ1xcXFwpJzpcblx0Y2FzZSAnXFxcXFsnOlxuXHRjYXNlICdcXFxcXSc6XG5cdCAgY21kdHlwZSA9IGNtZDtcblx0ICBicmVhaztcblxuXHRkZWZhdWx0OlxuXHQgIGlmICggY21kLnN1YnN0cigwLDMpID09PSAnXFxcXGlmJyAmJiBjbWQgIT09ICdcXFxcaWZmJyApIGNtZHR5cGUgPSAnaWZjbWQnIDtcblx0ICBlbHNlIGlmIChjbWQuc3Vic3RyKGNtZC5sZW5ndGgtNSwgNSkgPT09ICdmYWxzZScgKSBjbWR0eXBlID0gJ2ZhbHNlY21kJyA7XG5cdCAgZWxzZSBpZiAoY21kLnN1YnN0cihjbWQubGVuZ3RoLTQsIDQpID09PSAndHJ1ZScgKSBjbWR0eXBlID0gJ3RydWVjbWQnIDtcblx0ICBicmVhaztcblxuICAgICAgfVxuXG4gICAgICB5aWVsZCBbIGNtZHR5cGUgLCBjbWQgLCBuZXcgUG9zaXRpb24obGluZSwgcG9zaXRpb24pIF0gO1xuXG4gICAgICBpZiAoIGNtZCA9PT0gJ1xcXFxcXG4nICkge1xuXHQrK2xpbmU7XG5cdHBvc2l0aW9uID0gRklSU1RfUE9TSVRJT047XG4gICAgICB9XG4gICAgICBlbHNlIHtcblx0cG9zaXRpb24gKz0gY21kLmxlbmd0aDtcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN3aXRjaCAoIGMgKSB7XG5cblx0Y2FzZSAnMCc6XG5cdGNhc2UgJzEnOlxuXHRjYXNlICcyJzpcblx0Y2FzZSAnMyc6XG5cdGNhc2UgJzQnOlxuXHRjYXNlICc1Jzpcblx0Y2FzZSAnNic6XG5cdGNhc2UgJzcnOlxuXHRjYXNlICc4Jzpcblx0Y2FzZSAnOSc6XG5cdCAgeWllbGQqIGZsdXNoKCk7XG5cdCAgeWllbGQgWyAnZGlnaXQnICwgYyAsIG5ldyBQb3NpdGlvbihsaW5lLCBwb3NpdGlvbikgXSA7XG5cdCAgKytwb3NpdGlvbjtcblx0ICBicmVhaztcblxuXHRjYXNlICcjJzpcblx0Y2FzZSAneyc6XG5cdGNhc2UgJ30nOlxuXHRjYXNlICdbJzpcblx0Y2FzZSAnXSc6XG5cdGNhc2UgJyonOlxuXHRjYXNlICckJzpcblx0Y2FzZSAnICc6XG5cdCAgeWllbGQqIGZsdXNoKCk7XG5cdCAgeWllbGQgWyBjICwgYyAsIG5ldyBQb3NpdGlvbihsaW5lLCBwb3NpdGlvbikgXSA7XG5cdCAgKytwb3NpdGlvbjtcblx0ICBicmVhaztcblxuXHRjYXNlICdcXG4nOlxuXHQgIHlpZWxkKiBmbHVzaCgpO1xuXHQgIHlpZWxkIFsgYyAsIGMgLCBuZXcgUG9zaXRpb24obGluZSwgcG9zaXRpb24pIF0gO1xuXHQgICsrbGluZTtcblx0ICBwb3NpdGlvbiA9IEZJUlNUX1BPU0lUSU9OO1xuXHQgIGJyZWFrO1xuXG5cdGNhc2UgJyUnOlxuXHQgIHlpZWxkKiBmbHVzaCgpO1xuXHQgIGJ1ZmZlciA9ICclJztcblx0ICBsZXQgZCA9ICcnO1xuXHQgIHdoaWxlICggdHJ1ZSApIHtcblx0ICAgIGQgPSBhd2FpdCB0YXBlLnJlYWQoKTtcblx0ICAgIGlmICggZCA9PT0gdGFwZS5lb2YgfHwgZCA9PT0gJ1xcbicgKSBicmVhayA7XG5cdCAgICBidWZmZXIgKz0gZCA7XG5cdCAgfVxuXHQgIHlpZWxkIFsgJ2NvbW1lbnQnICwgYnVmZmVyICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcblx0ICBwb3NpdGlvbiArPSBidWZmZXIubGVuZ3RoO1xuXHQgIGJ1ZmZlciA9ICcnO1xuXHQgIGlmICggZCA9PT0gJ1xcbicgKSB7XG5cdCAgICB5aWVsZCBbICdcXG4nICwgJ1xcbicgLCBuZXcgUG9zaXRpb24obGluZSwgcG9zaXRpb24pIF0gO1xuXHQgICAgKytsaW5lO1xuXHQgICAgcG9zaXRpb24gPSBGSVJTVF9QT1NJVElPTjtcblx0ICB9XG5cdCAgYnJlYWs7XG5cblx0ZGVmYXVsdDpcblx0ICBidWZmZXIgKz0gYyA7XG5cdCAgYnJlYWs7XG5cdH1cblxuICAgIH1cblxuICB9XG5cbiAgeWllbGQqIGZsdXNoKCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24qIHRva2VucyAoIHRhcGUgKSB7XG5cbiAgZm9yIGF3YWl0ICggY29uc3QgWyB0ZXJtaW5hbCAsIGJ1ZmZlciAsIHBvc2l0aW9uIF0gb2YgX3Rva2Vucyh0YXBlKSApIHtcbiAgICB5aWVsZCB7XG4gICAgICAndHlwZScgOiAnbGVhZicgLFxuICAgICAgdGVybWluYWwgLFxuICAgICAgYnVmZmVyICxcbiAgICAgIHBvc2l0aW9uICxcbiAgICB9XG4gIH1cbn1cbiJdfQ==