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
            if (cmd.substr(0, 3) === '\\if') cmdtype = 'ifcmd';else if (cmd.substr(cmd.length - 5, 5) === 'false') cmdtype = 'falsecmd';else if (cmd.substr(cmd.length - 4, 4) === 'true') cmdtype = 'truecmd';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbnMuanMiXSwibmFtZXMiOlsiRklSU1RfTElORSIsIkZJUlNUX1BPU0lUSU9OIiwiX3Rva2VucyIsInRhcGUiLCJsaW5lIiwicG9zaXRpb24iLCJidWZmZXIiLCJmbHVzaCIsIlBvc2l0aW9uIiwibGVuZ3RoIiwicmVhZCIsImMiLCJlb2YiLCJjbWQiLCJkIiwidW5yZWFkIiwiY21kdHlwZSIsInN1YnN0ciIsInRva2VucyIsInRlcm1pbmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLENBQXZCOztTQUVnQkMsTzs7Ozs7OzswQkFBaEIsaUJBQTBCQyxJQUExQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU1DLFlBQUFBLElBRk4sR0FFYUosVUFGYjtBQUdNSyxZQUFBQSxRQUhOLEdBR2lCSixjQUhqQjtBQUtNSyxZQUFBQSxNQUxOLEdBS2UsRUFMZjtBQU9RQyxZQUFBQSxLQVBSO0FBQUE7QUFBQSxvQ0FPZ0IsU0FBUkEsS0FBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ1BELE1BQU0sS0FBSyxFQURKO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBRVYsNkJBQU0sQ0FBRSxNQUFGLEVBQVdBLE1BQVgsRUFBb0IsSUFBSUUsb0JBQUosQ0FBYUosSUFBYixFQUFtQkMsUUFBbkIsQ0FBcEIsQ0FBTjs7QUFGVTtBQUdWQSxzQkFBQUEsUUFBUSxJQUFJQyxNQUFNLENBQUNHLE1BQW5CO0FBQ0FILHNCQUFBQSxNQUFNLEdBQUcsRUFBVDs7QUFKVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVJDLEtBQVE7QUFBQSxhQVBoQjs7QUFBQTtBQUFBLGlCQWVVLElBZlY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3Q0FpQm9CSixJQUFJLENBQUNPLElBQUwsRUFqQnBCOztBQUFB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QUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3NpdGlvbiBmcm9tICcuL1Bvc2l0aW9uJyA7XG5cbmNvbnN0IEZJUlNUX0xJTkUgPSAxO1xuY29uc3QgRklSU1RfUE9TSVRJT04gPSAxO1xuXG5hc3luYyBmdW5jdGlvbiogX3Rva2VucyAoIHRhcGUgKSB7XG5cbiAgbGV0IGxpbmUgPSBGSVJTVF9MSU5FIDtcbiAgbGV0IHBvc2l0aW9uID0gRklSU1RfUE9TSVRJT047XG5cbiAgbGV0IGJ1ZmZlciA9ICcnO1xuXG4gIGNvbnN0IGZsdXNoID0gZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoIGJ1ZmZlciAhPT0gJycgKSB7XG4gICAgICB5aWVsZCBbICd0ZXh0JyAsIGJ1ZmZlciAsIG5ldyBQb3NpdGlvbihsaW5lLCBwb3NpdGlvbikgXSA7XG4gICAgICBwb3NpdGlvbiArPSBidWZmZXIubGVuZ3RoO1xuICAgICAgYnVmZmVyID0gJyc7XG4gICAgfVxuICB9IDtcblxuICB3aGlsZSAoIHRydWUgKSB7XG5cbiAgICBjb25zdCBjID0gYXdhaXQgdGFwZS5yZWFkKCk7XG5cbiAgICBpZiAoIGMgPT09IHRhcGUuZW9mICkgYnJlYWsgO1xuXG4gICAgaWYgKCBjID09PSAnXFxcXCcgKSB7XG4gICAgICBsZXQgY21kID0gJ1xcXFwnIDtcbiAgICAgIHdoaWxlICggdHJ1ZSApIHsgLy8gcmVhZCBjb21tYW5kXG5cblx0Y29uc3QgZCA9IGF3YWl0IHRhcGUucmVhZCgpO1xuXG5cdGlmICggZCA9PT0gdGFwZS5lb2YgKSBicmVhayA7XG5cblx0Ly8gaHR0cDovL3d3dy50ZXguYWMudWsvRkFRLXdoYXRtYWNyb3MuaHRtbFxuXHRpZiAoICggZCA+PSAnYScgJiYgZCA8PSAneicgKSB8fCAoIGQgPj0gJ0EnICYmIGQgPD0gJ1onICkgKSBjbWQgKz0gZDtcblx0ZWxzZSB7XG5cdCAgaWYgKCBjbWQgPT09ICdcXFxcJyApIGNtZCArPSBkO1xuXHQgIGVsc2UgdGFwZS51bnJlYWQoZCk7XG5cdCAgYnJlYWs7XG5cdH1cbiAgICAgIH1cblxuICAgICAgeWllbGQqIGZsdXNoKCk7XG5cbiAgICAgIGxldCBjbWR0eXBlID0gJ290aGVyY21kJyA7XG5cbiAgICAgIHN3aXRjaCAoIGNtZCApIHtcblxuXHRjYXNlICdcXFxcbmV3aWYnOlxuXHRjYXNlICdcXFxcZWxzZSc6XG5cdGNhc2UgJ1xcXFxkZWYnOlxuXHRjYXNlICdcXFxcbmV3Y29tbWFuZCc6XG5cdGNhc2UgJ1xcXFxyZW5ld2NvbW1hbmQnOlxuXHRjYXNlICdcXFxcbmV3ZW52aXJvbm1lbnQnOlxuXHRjYXNlICdcXFxccmVuZXdlbnZpcm9ubWVudCc6XG5cdGNhc2UgJ1xcXFxiZWdpbic6XG5cdGNhc2UgJ1xcXFxlbmQnOlxuXHRjYXNlICdcXFxcZmknOlxuXHQgIGNtZHR5cGUgPSBjbWQuc3Vic3RyKDEpOyAvLyByZW1vdmUgdGhlIGxlYWRpbmcgYmFja3NsYXNoXG5cdCAgYnJlYWs7XG5cblx0Y2FzZSAnXFxcXCgnOlxuXHRjYXNlICdcXFxcKSc6XG5cdGNhc2UgJ1xcXFxbJzpcblx0Y2FzZSAnXFxcXF0nOlxuXHQgIGNtZHR5cGUgPSBjbWQ7XG5cdCAgYnJlYWs7XG5cblx0ZGVmYXVsdDpcblx0ICBpZiAoIGNtZC5zdWJzdHIoMCwzKSA9PT0gJ1xcXFxpZicgKSBjbWR0eXBlID0gJ2lmY21kJyA7XG5cdCAgZWxzZSBpZiAoY21kLnN1YnN0cihjbWQubGVuZ3RoLTUsIDUpID09PSAnZmFsc2UnICkgY21kdHlwZSA9ICdmYWxzZWNtZCcgO1xuXHQgIGVsc2UgaWYgKGNtZC5zdWJzdHIoY21kLmxlbmd0aC00LCA0KSA9PT0gJ3RydWUnICkgY21kdHlwZSA9ICd0cnVlY21kJyA7XG5cdCAgYnJlYWs7XG5cbiAgICAgIH1cblxuICAgICAgeWllbGQgWyBjbWR0eXBlICwgY21kICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcblxuICAgICAgaWYgKCBjbWQgPT09ICdcXFxcXFxuJyApIHtcblx0KytsaW5lO1xuXHRwb3NpdGlvbiA9IEZJUlNUX1BPU0lUSU9OO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG5cdHBvc2l0aW9uICs9IGNtZC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzd2l0Y2ggKCBjICkge1xuXG5cdGNhc2UgJzAnOlxuXHRjYXNlICcxJzpcblx0Y2FzZSAnMic6XG5cdGNhc2UgJzMnOlxuXHRjYXNlICc0Jzpcblx0Y2FzZSAnNSc6XG5cdGNhc2UgJzYnOlxuXHRjYXNlICc3Jzpcblx0Y2FzZSAnOCc6XG5cdGNhc2UgJzknOlxuXHQgIHlpZWxkKiBmbHVzaCgpO1xuXHQgIHlpZWxkIFsgJ2RpZ2l0JyAsIGMgLCBuZXcgUG9zaXRpb24obGluZSwgcG9zaXRpb24pIF0gO1xuXHQgICsrcG9zaXRpb247XG5cdCAgYnJlYWs7XG5cblx0Y2FzZSAnIyc6XG5cdGNhc2UgJ3snOlxuXHRjYXNlICd9Jzpcblx0Y2FzZSAnWyc6XG5cdGNhc2UgJ10nOlxuXHRjYXNlICcqJzpcblx0Y2FzZSAnJCc6XG5cdGNhc2UgJyAnOlxuXHQgIHlpZWxkKiBmbHVzaCgpO1xuXHQgIHlpZWxkIFsgYyAsIGMgLCBuZXcgUG9zaXRpb24obGluZSwgcG9zaXRpb24pIF0gO1xuXHQgICsrcG9zaXRpb247XG5cdCAgYnJlYWs7XG5cblx0Y2FzZSAnXFxuJzpcblx0ICB5aWVsZCogZmx1c2goKTtcblx0ICB5aWVsZCBbIGMgLCBjICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcblx0ICArK2xpbmU7XG5cdCAgcG9zaXRpb24gPSBGSVJTVF9QT1NJVElPTjtcblx0ICBicmVhaztcblxuXHRjYXNlICclJzpcblx0ICB5aWVsZCogZmx1c2goKTtcblx0ICBidWZmZXIgPSAnJSc7XG5cdCAgbGV0IGQgPSAnJztcblx0ICB3aGlsZSAoIHRydWUgKSB7XG5cdCAgICBkID0gYXdhaXQgdGFwZS5yZWFkKCk7XG5cdCAgICBpZiAoIGQgPT09IHRhcGUuZW9mIHx8IGQgPT09ICdcXG4nICkgYnJlYWsgO1xuXHQgICAgYnVmZmVyICs9IGQgO1xuXHQgIH1cblx0ICB5aWVsZCBbICdjb21tZW50JyAsIGJ1ZmZlciAsIG5ldyBQb3NpdGlvbihsaW5lLCBwb3NpdGlvbikgXSA7XG5cdCAgcG9zaXRpb24gKz0gYnVmZmVyLmxlbmd0aDtcblx0ICBidWZmZXIgPSAnJztcblx0ICBpZiAoIGQgPT09ICdcXG4nICkge1xuXHQgICAgeWllbGQgWyAnXFxuJyAsICdcXG4nICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcblx0ICAgICsrbGluZTtcblx0ICAgIHBvc2l0aW9uID0gRklSU1RfUE9TSVRJT047XG5cdCAgfVxuXHQgIGJyZWFrO1xuXG5cdGRlZmF1bHQ6XG5cdCAgYnVmZmVyICs9IGMgO1xuXHQgIGJyZWFrO1xuXHR9XG5cbiAgICB9XG5cbiAgfVxuXG4gIHlpZWxkKiBmbHVzaCgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKiB0b2tlbnMgKCB0YXBlICkge1xuXG4gIGZvciBhd2FpdCAoIGNvbnN0IFsgdGVybWluYWwgLCBidWZmZXIgLCBwb3NpdGlvbiBdIG9mIF90b2tlbnModGFwZSkgKSB7XG4gICAgeWllbGQge1xuICAgICAgJ3R5cGUnIDogJ2xlYWYnICxcbiAgICAgIHRlcm1pbmFsICxcbiAgICAgIGJ1ZmZlciAsXG4gICAgICBwb3NpdGlvbiAsXG4gICAgfVxuICB9XG59XG4iXX0=