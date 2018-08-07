"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokens;

var _Position = _interopRequireDefault(require("./Position"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _AwaitValue(value) { this.wrapped = value; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

function _asyncGeneratorDelegate(inner, awaitWrap) { var iter = {}, waiting = false; function pump(key, value) { waiting = true; value = new Promise(function (resolve) { resolve(inner[key](value)); }); return { done: false, value: awaitWrap(value) }; } ; if (typeof Symbol === "function" && Symbol.iterator) { iter[Symbol.iterator] = function () { return this; }; } iter.next = function (value) { if (waiting) { waiting = false; return value; } return pump("next", value); }; if (typeof inner.throw === "function") { iter.throw = function (value) { if (waiting) { waiting = false; throw value; } return pump("throw", value); }; } if (typeof inner.return === "function") { iter.return = function (value) { return pump("return", value); }; } return iter; }

var FIRST_LINE = 1;
var FIRST_POSITION = 1;

function _tokens(_x) {
  return _tokens2.apply(this, arguments);
}

function _tokens2() {
  _tokens2 = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(tape) {
    var line, position, buffer, flush, c, cmd, d, cmdtype, arg, _d, _d2;

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
                      return ['text', buffer, new _Position.default(line, position)];

                    case 3:
                      position += buffer.length;
                      buffer = '';

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, flush, this);
            });

          case 4:
            if (!true) {
              _context2.next = 137;
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

            return _context2.abrupt("break", 137);

          case 10:
            if (!(c === '\\')) {
              _context2.next = 34;
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
            if (cmd.substr(0, 3) === '\\if') cmdtype = 'ifcmd';else if (cmd.substr(cmd.length - 5, 5) === 'false') cmdtype = 'falsecmd';else if (cmd.substr(cmd.length - 4, 4) === 'true') cmdtype = 'truecmd';else if (cmd === '\\newif') cmdtype = 'newif';else if (cmd === '\\else') cmdtype = 'else';else if (cmd === '\\def') cmdtype = 'def';else if (cmd === '\\newcommand') cmdtype = 'newcommand';else if (cmd === '\\fi') cmdtype = 'fi';else if (cmd === '\\(') cmdtype = '\\(';else if (cmd === '\\)') cmdtype = '\\)';else if (cmd === '\\[') cmdtype = '\\[';else if (cmd === '\\]') cmdtype = '\\]';
            _context2.next = 31;
            return [cmdtype, cmd, new _Position.default(line, position)];

          case 31:
            if (cmd === '\\\n') {
              ++line;
              position = FIRST_POSITION;
            } else {
              position += cmd.length;
            }

            _context2.next = 135;
            break;

          case 34:
            if (!(c === '#')) {
              _context2.next = 60;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t1", 36);

          case 36:
            // read arg number
            arg = '#';

          case 37:
            if (!true) {
              _context2.next = 53;
              break;
            }

            _context2.next = 40;
            return _awaitAsyncGenerator(tape.read());

          case 40:
            _d = _context2.sent;

            if (!(_d === tape.eof)) {
              _context2.next = 45;
              break;
            }

            return _context2.abrupt("break", 53);

          case 45:
            if (!(_d >= '0' && _d <= '9')) {
              _context2.next = 49;
              break;
            }

            arg += _d;
            _context2.next = 51;
            break;

          case 49:
            tape.unread(_d);
            return _context2.abrupt("break", 53);

          case 51:
            _context2.next = 37;
            break;

          case 53:
            if (!(arg === '#')) {
              _context2.next = 55;
              break;
            }

            throw new Error('Incomplete #');

          case 55:
            _context2.next = 57;
            return ['arg', arg, new _Position.default(line, position)];

          case 57:
            position += arg.length;
            _context2.next = 135;
            break;

          case 60:
            if (!(c === '{')) {
              _context2.next = 67;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t2", 62);

          case 62:
            _context2.next = 64;
            return ['{', '{', new _Position.default(line, position)];

          case 64:
            ++position;
            _context2.next = 135;
            break;

          case 67:
            if (!(c === '}')) {
              _context2.next = 74;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t3", 69);

          case 69:
            _context2.next = 71;
            return ['}', '}', new _Position.default(line, position)];

          case 71:
            ++position;
            _context2.next = 135;
            break;

          case 74:
            if (!(c === '[')) {
              _context2.next = 81;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t4", 76);

          case 76:
            _context2.next = 78;
            return ['[', '[', new _Position.default(line, position)];

          case 78:
            ++position;
            _context2.next = 135;
            break;

          case 81:
            if (!(c === ']')) {
              _context2.next = 88;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t5", 83);

          case 83:
            _context2.next = 85;
            return [']', ']', new _Position.default(line, position)];

          case 85:
            ++position;
            _context2.next = 135;
            break;

          case 88:
            if (!(c === '*')) {
              _context2.next = 95;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t6", 90);

          case 90:
            _context2.next = 92;
            return ['*', '*', new _Position.default(line, position)];

          case 92:
            ++position;
            _context2.next = 135;
            break;

          case 95:
            if (!(c === '$')) {
              _context2.next = 102;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t7", 97);

          case 97:
            _context2.next = 99;
            return ['$', '$', new _Position.default(line, position)];

          case 99:
            ++position;
            _context2.next = 135;
            break;

          case 102:
            if (!(c === '\n')) {
              _context2.next = 110;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t8", 104);

          case 104:
            _context2.next = 106;
            return ['\n', '\n', new _Position.default(line, position)];

          case 106:
            ++line;
            position = FIRST_POSITION;
            _context2.next = 135;
            break;

          case 110:
            if (!(c === '%')) {
              _context2.next = 134;
              break;
            }

            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t9", 112);

          case 112:
            buffer = '%';
            _d2 = '';

          case 114:
            if (!true) {
              _context2.next = 123;
              break;
            }

            _context2.next = 117;
            return _awaitAsyncGenerator(tape.read());

          case 117:
            _d2 = _context2.sent;

            if (!(_d2 === tape.eof || _d2 === '\n')) {
              _context2.next = 120;
              break;
            }

            return _context2.abrupt("break", 123);

          case 120:
            buffer += _d2;
            _context2.next = 114;
            break;

          case 123:
            _context2.next = 125;
            return ['comment', buffer, new _Position.default(line, position)];

          case 125:
            position += buffer.length;
            buffer = '';

            if (!(_d2 === '\n')) {
              _context2.next = 132;
              break;
            }

            _context2.next = 130;
            return ['\n', '\n', new _Position.default(line, position)];

          case 130:
            ++line;
            position = FIRST_POSITION;

          case 132:
            _context2.next = 135;
            break;

          case 134:
            buffer += c;

          case 135:
            _context2.next = 4;
            break;

          case 137:
            return _context2.delegateYield(_asyncGeneratorDelegate(_asyncIterator(flush()), _awaitAsyncGenerator), "t10", 138);

          case 138:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, this);
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

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context3.next = 29;
              break;
            }

            _context3.next = 29;
            return _awaitAsyncGenerator(_iterator.return());

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
    }, _callee2, this, [[2, 20, 24, 34], [25,, 29, 33]]);
  }));
  return _tokens3.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbnMuanMiXSwibmFtZXMiOlsiRklSU1RfTElORSIsIkZJUlNUX1BPU0lUSU9OIiwiX3Rva2VucyIsInRhcGUiLCJsaW5lIiwicG9zaXRpb24iLCJidWZmZXIiLCJmbHVzaCIsIlBvc2l0aW9uIiwibGVuZ3RoIiwicmVhZCIsImMiLCJlb2YiLCJjbWQiLCJkIiwidW5yZWFkIiwiY21kdHlwZSIsInN1YnN0ciIsImFyZyIsIkVycm9yIiwidG9rZW5zIiwidGVybWluYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FBbkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsQ0FBdkI7O1NBRWdCQyxPOzs7Ozs7OzBCQUFoQixpQkFBMEJDLElBQTFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTUMsWUFBQUEsSUFGTixHQUVhSixVQUZiO0FBR01LLFlBQUFBLFFBSE4sR0FHaUJKLGNBSGpCO0FBS01LLFlBQUFBLE1BTE4sR0FLZSxFQUxmO0FBT1FDLFlBQUFBLEtBUFI7QUFBQTtBQUFBLG9DQU9nQixTQUFSQSxLQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFDUEQsTUFBTSxLQUFLLEVBREo7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFFViw2QkFBTSxDQUFFLE1BQUYsRUFBV0EsTUFBWCxFQUFvQixJQUFJRSxpQkFBSixDQUFhSixJQUFiLEVBQW1CQyxRQUFuQixDQUFwQixDQUFOOztBQUZVO0FBR1ZBLHNCQUFBQSxRQUFRLElBQUlDLE1BQU0sQ0FBQ0csTUFBbkI7QUFDQUgsc0JBQUFBLE1BQU0sR0FBRyxFQUFUOztBQUpVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUkMsS0FBUTtBQUFBLGFBUGhCOztBQUFBO0FBQUEsaUJBZVUsSUFmVjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdDQWlCb0JKLElBQUksQ0FBQ08sSUFB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cnQgUG9zaXRpb24gZnJvbSAnLi9Qb3NpdGlvbicgO1xuXG5jb25zdCBGSVJTVF9MSU5FID0gMTtcbmNvbnN0IEZJUlNUX1BPU0lUSU9OID0gMTtcblxuYXN5bmMgZnVuY3Rpb24qIF90b2tlbnMgKCB0YXBlICkge1xuXG4gIGxldCBsaW5lID0gRklSU1RfTElORSA7XG4gIGxldCBwb3NpdGlvbiA9IEZJUlNUX1BPU0lUSU9OO1xuXG4gIGxldCBidWZmZXIgPSAnJztcblxuICBjb25zdCBmbHVzaCA9IGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKCBidWZmZXIgIT09ICcnICkge1xuICAgICAgeWllbGQgWyAndGV4dCcgLCBidWZmZXIgLCBuZXcgUG9zaXRpb24obGluZSwgcG9zaXRpb24pIF0gO1xuICAgICAgcG9zaXRpb24gKz0gYnVmZmVyLmxlbmd0aDtcbiAgICAgIGJ1ZmZlciA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlICggdHJ1ZSApIHtcblxuICAgIGNvbnN0IGMgPSBhd2FpdCB0YXBlLnJlYWQoKTtcblxuICAgIGlmICggYyA9PT0gdGFwZS5lb2YgKSBicmVhayA7XG5cbiAgICBpZiAoIGMgPT09ICdcXFxcJyApIHtcbiAgICAgIGxldCBjbWQgPSAnXFxcXCcgO1xuICAgICAgd2hpbGUgKCB0cnVlICkgeyAvLyByZWFkIGNvbW1hbmRcblxuXHRjb25zdCBkID0gYXdhaXQgdGFwZS5yZWFkKCk7XG5cblx0aWYgKCBkID09PSB0YXBlLmVvZiApIGJyZWFrIDtcblxuXHQvLyBodHRwOi8vd3d3LnRleC5hYy51ay9GQVEtd2hhdG1hY3Jvcy5odG1sXG5cdGlmICggKCBkID49ICdhJyAmJiBkIDw9ICd6JyApIHx8ICggZCA+PSAnQScgJiYgZCA8PSAnWicgKSApIGNtZCArPSBkO1xuXHRlbHNlIHtcblx0ICBpZiAoIGNtZCA9PT0gJ1xcXFwnICkgY21kICs9IGQ7XG5cdCAgZWxzZSB0YXBlLnVucmVhZChkKTtcblx0ICBicmVhaztcblx0fVxuICAgICAgfVxuXG4gICAgICB5aWVsZCogZmx1c2goKTtcblxuICAgICAgbGV0IGNtZHR5cGUgPSAnb3RoZXJjbWQnIDtcblxuICAgICAgaWYgKCBjbWQuc3Vic3RyKDAsMykgPT09ICdcXFxcaWYnICkgY21kdHlwZSA9ICdpZmNtZCcgO1xuXG4gICAgICBlbHNlIGlmIChjbWQuc3Vic3RyKGNtZC5sZW5ndGgtNSwgNSkgPT09ICdmYWxzZScgKSBjbWR0eXBlID0gJ2ZhbHNlY21kJyA7XG5cbiAgICAgIGVsc2UgaWYgKGNtZC5zdWJzdHIoY21kLmxlbmd0aC00LCA0KSA9PT0gJ3RydWUnICkgY21kdHlwZSA9ICd0cnVlY21kJyA7XG5cbiAgICAgIGVsc2UgaWYgKCBjbWQgPT09ICdcXFxcbmV3aWYnICkgY21kdHlwZSA9ICduZXdpZicgO1xuXG4gICAgICBlbHNlIGlmICggY21kID09PSAnXFxcXGVsc2UnICkgY21kdHlwZSA9ICdlbHNlJyA7XG5cbiAgICAgIGVsc2UgaWYgKCBjbWQgPT09ICdcXFxcZGVmJyApIGNtZHR5cGUgPSAnZGVmJyA7XG5cbiAgICAgIGVsc2UgaWYgKCBjbWQgPT09ICdcXFxcbmV3Y29tbWFuZCcgKSBjbWR0eXBlID0gJ25ld2NvbW1hbmQnIDtcblxuICAgICAgZWxzZSBpZiAoIGNtZCA9PT0gJ1xcXFxmaScgKSBjbWR0eXBlID0gJ2ZpJyA7XG5cbiAgICAgIGVsc2UgaWYgKCBjbWQgPT09ICdcXFxcKCcgKSBjbWR0eXBlID0gJ1xcXFwoJyA7XG5cbiAgICAgIGVsc2UgaWYgKCBjbWQgPT09ICdcXFxcKScgKSBjbWR0eXBlID0gJ1xcXFwpJyA7XG5cbiAgICAgIGVsc2UgaWYgKCBjbWQgPT09ICdcXFxcWycgKSBjbWR0eXBlID0gJ1xcXFxbJyA7XG5cbiAgICAgIGVsc2UgaWYgKCBjbWQgPT09ICdcXFxcXScgKSBjbWR0eXBlID0gJ1xcXFxdJyA7XG5cbiAgICAgIHlpZWxkIFsgY21kdHlwZSAsIGNtZCAsIG5ldyBQb3NpdGlvbihsaW5lLCBwb3NpdGlvbikgXSA7XG4gICAgICBpZiAoIGNtZCA9PT0gJ1xcXFxcXG4nICkge1xuXHQrK2xpbmU7XG5cdHBvc2l0aW9uID0gRklSU1RfUE9TSVRJT047XG4gICAgICB9XG4gICAgICBlbHNlIHtcblx0cG9zaXRpb24gKz0gY21kLmxlbmd0aDtcbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIGlmICggYyA9PT0gJyMnICkge1xuICAgICAgeWllbGQqIGZsdXNoKCk7XG5cbiAgICAgIC8vIHJlYWQgYXJnIG51bWJlclxuICAgICAgbGV0IGFyZyA9ICcjJyA7XG4gICAgICB3aGlsZSAoIHRydWUgKSB7XG5cdGNvbnN0IGQgPSBhd2FpdCB0YXBlLnJlYWQoKTtcblx0aWYgKCBkID09PSB0YXBlLmVvZiApIGJyZWFrIDtcblx0ZWxzZSBpZiAoIGQgPj0gJzAnICYmIGQgPD0gJzknICkgYXJnICs9IGQ7XG5cdGVsc2Uge1xuXHQgIHRhcGUudW5yZWFkKGQpO1xuXHQgIGJyZWFrO1xuXHR9XG4gICAgICB9XG4gICAgICBpZiAoIGFyZyA9PT0gJyMnICkgdGhyb3cgbmV3IEVycm9yKCdJbmNvbXBsZXRlICMnKSA7XG4gICAgICB5aWVsZCBbICdhcmcnICwgYXJnICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgIHBvc2l0aW9uICs9IGFyZy5sZW5ndGg7XG4gICAgfVxuICAgIGVsc2UgaWYgKCBjID09PSAneycgKSB7XG4gICAgICB5aWVsZCogZmx1c2goKTtcbiAgICAgIHlpZWxkIFsgJ3snICwgJ3snICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgICsrcG9zaXRpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKCBjID09PSAnfScgKSB7XG4gICAgICB5aWVsZCogZmx1c2goKTtcbiAgICAgIHlpZWxkIFsgJ30nICwgJ30nICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgICsrcG9zaXRpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKCBjID09PSAnWycgKSB7XG4gICAgICB5aWVsZCogZmx1c2goKTtcbiAgICAgIHlpZWxkIFsgJ1snICwgJ1snICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgICsrcG9zaXRpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKCBjID09PSAnXScgKSB7XG4gICAgICB5aWVsZCogZmx1c2goKTtcbiAgICAgIHlpZWxkIFsgJ10nICwgJ10nICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgICsrcG9zaXRpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKCBjID09PSAnKicgKSB7XG4gICAgICB5aWVsZCogZmx1c2goKTtcbiAgICAgIHlpZWxkIFsgJyonICwgJyonICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgICsrcG9zaXRpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKCBjID09PSAnJCcgKSB7XG4gICAgICB5aWVsZCogZmx1c2goKTtcbiAgICAgIHlpZWxkIFsgJyQnICwgJyQnICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgICsrcG9zaXRpb247XG4gICAgfVxuICAgIGVsc2UgaWYgKCBjID09PSAnXFxuJyApIHtcbiAgICAgIHlpZWxkKiBmbHVzaCgpO1xuICAgICAgeWllbGQgWyAnXFxuJyAsICdcXG4nICwgbmV3IFBvc2l0aW9uKGxpbmUsIHBvc2l0aW9uKSBdIDtcbiAgICAgICsrbGluZTtcbiAgICAgIHBvc2l0aW9uID0gRklSU1RfUE9TSVRJT047XG4gICAgfVxuICAgIGVsc2UgaWYgKCBjID09PSAnJScpIHtcbiAgICAgIHlpZWxkKiBmbHVzaCgpO1xuICAgICAgYnVmZmVyID0gJyUnO1xuICAgICAgbGV0IGQgPSAnJztcbiAgICAgIHdoaWxlICggdHJ1ZSApIHtcblx0ZCA9IGF3YWl0IHRhcGUucmVhZCgpO1xuXHRpZiAoIGQgPT09IHRhcGUuZW9mIHx8IGQgPT09ICdcXG4nICkgYnJlYWsgO1xuXHRidWZmZXIgKz0gZCA7XG4gICAgICB9XG4gICAgICB5aWVsZCBbICdjb21tZW50JyAsIGJ1ZmZlciAsIG5ldyBQb3NpdGlvbihsaW5lLCBwb3NpdGlvbikgXSA7XG4gICAgICBwb3NpdGlvbiArPSBidWZmZXIubGVuZ3RoO1xuICAgICAgYnVmZmVyID0gJyc7XG4gICAgICBpZiAoIGQgPT09ICdcXG4nICkge1xuXHR5aWVsZCBbICdcXG4nICwgJ1xcbicgLCBuZXcgUG9zaXRpb24obGluZSwgcG9zaXRpb24pIF0gO1xuXHQrK2xpbmU7XG4gICAgICAgIHBvc2l0aW9uID0gRklSU1RfUE9TSVRJT047XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYnVmZmVyICs9IGMgO1xuICAgIH1cbiAgfVxuXG4gIHlpZWxkKiBmbHVzaCgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKiB0b2tlbnMgKCB0YXBlICkge1xuXG4gIGZvciBhd2FpdCAoIGNvbnN0IFsgdGVybWluYWwgLCBidWZmZXIgLCBwb3NpdGlvbiBdIG9mIF90b2tlbnModGFwZSkgKSB7XG4gICAgeWllbGQge1xuICAgICAgJ3R5cGUnIDogJ2xlYWYnICxcbiAgICAgIHRlcm1pbmFsICxcbiAgICAgIGJ1ZmZlciAsXG4gICAgICBwb3NpdGlvbiAsXG4gICAgfVxuICB9XG59XG4iXX0=