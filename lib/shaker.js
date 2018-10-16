"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsItertools = require("@aureooms/js-itertools");

var _jsGrammar = require("@aureooms/js-grammar");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _AwaitValue(value) { this.wrapped = value; }

function _asyncGeneratorDelegate(inner, awaitWrap) { var iter = {}, waiting = false; function pump(key, value) { waiting = true; value = new Promise(function (resolve) { resolve(inner[key](value)); }); return { done: false, value: awaitWrap(value) }; } ; if (typeof Symbol === "function" && Symbol.iterator) { iter[Symbol.iterator] = function () { return this; }; } iter.next = function (value) { if (waiting) { waiting = false; return value; } return pump("next", value); }; if (typeof inner.throw === "function") { iter.throw = function (value) { if (waiting) { waiting = false; throw value; } return pump("throw", value); }; } if (typeof inner.return === "function") { iter.return = function (value) { return pump("return", value); }; } return iter; }

function _asyncIterator(iterable) { var method; if (typeof Symbol === "function") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

// TODO create library with those
function iter(object) {
  // maybe we do not even need the second case
  if (object[Symbol.asyncIterator]) return object[Symbol.asyncIterator]();else return object[Symbol.iterator]();
} // TODO create library with those


function next(_x2) {
  return _next2.apply(this, arguments);
}

function _next2() {
  _next2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee19(iterator) {
    var dflt,
        x,
        _args19 = arguments;
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            dflt = _args19.length > 1 && _args19[1] !== undefined ? _args19[1] : undefined;
            _context19.next = 3;
            return iterator.next();

          case 3:
            x = _context19.sent;

            if (!x.done) {
              _context19.next = 10;
              break;
            }

            if (!(dflt === undefined)) {
              _context19.next = 9;
              break;
            }

            throw new _jsItertools.StopIteration();

          case 9:
            return _context19.abrupt("return", dflt);

          case 10:
            return _context19.abrupt("return", x.value);

          case 11:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19, this);
  }));
  return _next2.apply(this, arguments);
}

function chain(_x) {
  return _chain.apply(this, arguments);
}

function _chain() {
  _chain = _wrapAsyncGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(iterables) {
    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, iterable, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, item;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 3;
            _iterator2 = iterables[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 48;
              break;
            }

            iterable = _step2.value;

            if (!iterable[Symbol.iterator]) {
              _context.next = 11;
              break;
            }

            return _context.delegateYield(_asyncGeneratorDelegate(_asyncIterator(iterable), _awaitAsyncGenerator), "t0", 9);

          case 9:
            _context.next = 45;
            break;

          case 11:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 13;
            _iterator = _asyncIterator(iterable);

          case 15:
            _context.next = 17;
            return _awaitAsyncGenerator(_iterator.next());

          case 17:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 21;
            return _awaitAsyncGenerator(_step.value);

          case 21:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 29;
              break;
            }

            item = _value;
            _context.next = 26;
            return item;

          case 26:
            _iteratorNormalCompletion = true;
            _context.next = 15;
            break;

          case 29:
            _context.next = 35;
            break;

          case 31:
            _context.prev = 31;
            _context.t1 = _context["catch"](13);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 35:
            _context.prev = 35;
            _context.prev = 36;

            if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
              _context.next = 40;
              break;
            }

            _context.next = 40;
            return _awaitAsyncGenerator(_iterator.return());

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
            _iteratorNormalCompletion2 = true;
            _context.next = 5;
            break;

          case 48:
            _context.next = 54;
            break;

          case 50:
            _context.prev = 50;
            _context.t2 = _context["catch"](3);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t2;

          case 54:
            _context.prev = 54;
            _context.prev = 55;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 57:
            _context.prev = 57;

            if (!_didIteratorError2) {
              _context.next = 60;
              break;
            }

            throw _iteratorError2;

          case 60:
            return _context.finish(57);

          case 61:
            return _context.finish(54);

          case 62:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 50, 54, 62], [13, 31, 35, 45], [36,, 40, 44], [55,, 57, 61]]);
  }));
  return _chain.apply(this, arguments);
}

var empty = {
  'type': 'node',
  'nonterminal': 'empty',
  'production': 'main',
  'children': []
};

var err = function err(nonterminal, production) {
  return function () {
    throw new Error("".concat(nonterminal, ".").concat(production, " should have been handled before"));
  };
};

var t = _jsGrammar.ast.transform;

var m = function m(children, match, ctx) {
  return _jsGrammar.ast.cmap(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(child) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return t(child, match, ctx);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }(), children);
};

var recurse = function recurse(nonterminal, production) {
  return function (tree, match, ctx) {
    return {
      "type": "node",
      nonterminal: nonterminal,
      production: production,
      "children": _jsGrammar.ast.cmap(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(x) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(x.type === 'leaf')) {
                    _context3.next = 4;
                    break;
                  }

                  _context3.t0 = x;
                  _context3.next = 7;
                  break;

                case 4:
                  _context3.next = 6;
                  return t(x, match, ctx);

                case 6:
                  _context3.t0 = _context3.sent;

                case 7:
                  return _context3.abrupt("return", _context3.t0);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x4) {
          return _ref2.apply(this, arguments);
        };
      }(), tree.children)
    };
  };
};

var _default = {
  "document": {
    "contents": recurse('document', 'contents')
  },
  "anything": {
    "starts-with-othercmd": recurse('anything', 'starts-with-othercmd'),
    "starts-with-environment": recurse('anything', 'starts-with-environment'),
    "starts-with-*": recurse('anything', 'starts-with-*'),
    "starts-with-[": recurse('anything', 'starts-with-['),
    "starts-with-]": recurse('anything', 'starts-with-]'),
    "starts-with-a-group": recurse('anything', 'starts-with-a-group'),
    "starts-with-something-else": recurse('anything', 'starts-with-something-else'),
    "end": function end() {
      return empty;
    }
  },
  "anything-but-]": {
    "starts-with-othercmd": recurse('anything-but-]', 'starts-with-othercmd'),
    "starts-with-environment": recurse('anything-but-]', 'starts-with-environment'),
    "starts-with-*": recurse('anything-but-]', 'starts-with-*'),
    "starts-with-[": recurse('anything-but-]', 'starts-with-['),
    "starts-with-a-group": recurse('anything-but-]', 'starts-with-a-group'),
    "starts-with-something-else": recurse('anything-but-]', 'starts-with-something-else'),
    "end": function end() {
      return empty;
    }
  },
  "group": {
    "group": recurse('group', 'group')
  },
  "optgroup": {
    "group": recurse('optgroup', 'group')
  },
  "othercmd": {
    "othercmd": function () {
      var _othercmd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(tree, match, ctx) {
        var it, othercmd, cmd, optstar, args, cmdargs, arg_i, _arg_i$children, group, tail, _group$children, _open, arg, _close, hasoptargs, _ctx$variables$get$ge, _ctx$variables$get$ge2, nargs, defaultarg, expandsto;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                it = iter(tree.children);
                _context4.next = 3;
                return next(it);

              case 3:
                othercmd = _context4.sent;
                cmd = othercmd.buffer;
                _context4.t0 = _jsGrammar.ast;
                _context4.next = 8;
                return next(it);

              case 8:
                _context4.t1 = _context4.sent;
                _context4.next = 11;
                return _context4.t0.materialize.call(_context4.t0, _context4.t1);

              case 11:
                optstar = _context4.sent;
                if (optstar.production === 'yes') cmd += '*';
                _context4.t2 = _jsGrammar.ast;
                _context4.next = 16;
                return next(it);

              case 16:
                _context4.t3 = _context4.sent;
                _context4.next = 19;
                return _context4.t2.materialize.call(_context4.t2, _context4.t3);

              case 19:
                args = _context4.sent;
                cmdargs = [];
                arg_i = args;

                while (arg_i.production === 'normal') {
                  _arg_i$children = _slicedToArray(arg_i.children, 2), group = _arg_i$children[0], tail = _arg_i$children[1];
                  _group$children = _slicedToArray(group.children, 3), _open = _group$children[0], arg = _group$children[1], _close = _group$children[2];
                  cmdargs.push(arg);
                  arg_i = tail;
                }

                hasoptargs = arg_i.production === 'optional';

                if (!(!hasoptargs && ctx.variables.get('cmd').has(cmd))) {
                  _context4.next = 31;
                  break;
                }

                // too hard to parse opt args currently
                _ctx$variables$get$ge = ctx.variables.get('cmd').get(cmd), _ctx$variables$get$ge2 = _slicedToArray(_ctx$variables$get$ge, 3), nargs = _ctx$variables$get$ge2[0], defaultarg = _ctx$variables$get$ge2[1], expandsto = _ctx$variables$get$ge2[2];

                if (!(cmdargs.length !== nargs)) {
                  _context4.next = 28;
                  break;
                }

                throw new Error("Command ".concat(cmd, " is defined with ").concat(nargs, " arguments but ").concat(cmdargs.length, " were given."));

              case 28:
                return _context4.abrupt("return", t(expandsto, match, {
                  variables: ctx.variables,
                  args: [ctx.args, cmdargs]
                }));

              case 31:
                return _context4.abrupt("return", {
                  'type': 'node',
                  'nonterminal': 'othercmd',
                  'production': 'othercmd',
                  'children': chain([[othercmd, optstar], m([args], match, ctx)])
                });

              case 32:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function othercmd(_x5, _x6, _x7) {
        return _othercmd.apply(this, arguments);
      };
    }()
  },
  "begin-environment": {
    "begin-environment": function () {
      var _beginEnvironment = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(tree, match, ctx) {
        var it, begincmd, leftbracket, envtext, env, rightbracket, args, _ctx$variables$get$ge3, _ctx$variables$get$ge4, nargs, dfltarg, begin, end, cmdargs, arg_i, _arg_i$children2, optgroup, tail, _optgroup$children, _open, arg, _close, _arg_i$children3, group, _tail, _group$children2, _open2, _arg, _close2, complex;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                it = iter(tree.children);
                _context5.next = 3;
                return next(it);

              case 3:
                begincmd = _context5.sent;
                _context5.next = 6;
                return next(it);

              case 6:
                leftbracket = _context5.sent;
                _context5.next = 9;
                return next(it);

              case 9:
                envtext = _context5.sent;
                env = envtext.buffer;
                _context5.next = 13;
                return next(it);

              case 13:
                rightbracket = _context5.sent;
                _context5.t0 = _jsGrammar.ast;
                _context5.next = 17;
                return next(it);

              case 17:
                _context5.t1 = _context5.sent;
                _context5.next = 20;
                return _context5.t0.materialize.call(_context5.t0, _context5.t1);

              case 20:
                args = _context5.sent;

                if (!ctx.variables.get('env').has(env)) {
                  _context5.next = 40;
                  break;
                }

                _ctx$variables$get$ge3 = ctx.variables.get('env').get(env), _ctx$variables$get$ge4 = _slicedToArray(_ctx$variables$get$ge3, 4), nargs = _ctx$variables$get$ge4[0], dfltarg = _ctx$variables$get$ge4[1], begin = _ctx$variables$get$ge4[2], end = _ctx$variables$get$ge4[3];
                cmdargs = [];
                arg_i = args;

                if (!(arg_i.production === 'optional')) {
                  _context5.next = 33;
                  break;
                }

                if (!(dfltarg === null)) {
                  _context5.next = 28;
                  break;
                }

                throw new Error("Environment ".concat(env, " is not defined with a default argument."));

              case 28:
                _arg_i$children2 = _slicedToArray(arg_i.children, 2), optgroup = _arg_i$children2[0], tail = _arg_i$children2[1];
                _optgroup$children = _slicedToArray(optgroup.children, 3), _open = _optgroup$children[0], arg = _optgroup$children[1], _close = _optgroup$children[2];
                cmdargs.push(arg);
                _context5.next = 34;
                break;

              case 33:
                if (dfltarg !== null) cmdargs.push(dfltarg);

              case 34:
                while (arg_i.production === 'normal') {
                  _arg_i$children3 = _slicedToArray(arg_i.children, 2), group = _arg_i$children3[0], _tail = _arg_i$children3[1];
                  _group$children2 = _slicedToArray(group.children, 3), _open2 = _group$children2[0], _arg = _group$children2[1], _close2 = _group$children2[2];
                  cmdargs.push(_arg);
                  arg_i = _tail;
                }

                complex = arg_i.production === 'optional';

                if (complex) {
                  _context5.next = 40;
                  break;
                }

                if (!(cmdargs.length !== nargs)) {
                  _context5.next = 39;
                  break;
                }

                throw new Error("Environment ".concat(env, " is defined with ").concat(nargs, " arguments but ").concat(cmdargs.length, " were given."));

              case 39:
                return _context5.abrupt("return", t(begin, match, {
                  variables: ctx.variables,
                  args: [ctx.args, cmdargs]
                }));

              case 40:
                return _context5.abrupt("return", {
                  'type': 'node',
                  'nonterminal': 'othercmd',
                  'production': 'othercmd',
                  'children': chain([[begincmd, leftbracket, envtext, rightbracket], m([args], match, ctx)])
                });

              case 41:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function beginEnvironment(_x8, _x9, _x10) {
        return _beginEnvironment.apply(this, arguments);
      };
    }()
  },
  "end-environment": {
    "end-environment": function () {
      var _endEnvironment = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(tree, match, ctx) {
        var it, endcmd, leftbracket, envtext, env, rightbracket, _ctx$variables$get$ge5, _ctx$variables$get$ge6, nargs, defaultarg, begin, end;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                it = iter(tree.children);
                _context6.next = 3;
                return next(it);

              case 3:
                endcmd = _context6.sent;
                _context6.next = 6;
                return next(it);

              case 6:
                leftbracket = _context6.sent;
                _context6.next = 9;
                return next(it);

              case 9:
                envtext = _context6.sent;
                env = envtext.buffer;
                _context6.next = 13;
                return next(it);

              case 13:
                rightbracket = _context6.sent;

                if (!ctx.variables.get('env').has(env)) {
                  _context6.next = 19;
                  break;
                }

                _ctx$variables$get$ge5 = ctx.variables.get('env').get(env), _ctx$variables$get$ge6 = _slicedToArray(_ctx$variables$get$ge5, 4), nargs = _ctx$variables$get$ge6[0], defaultarg = _ctx$variables$get$ge6[1], begin = _ctx$variables$get$ge6[2], end = _ctx$variables$get$ge6[3];
                return _context6.abrupt("return", t(end, match, ctx));

              case 19:
                return _context6.abrupt("return", {
                  'type': 'node',
                  'nonterminal': 'othercmd',
                  'production': 'othercmd',
                  'children': chain([[endcmd, leftbracket, envtext, rightbracket]])
                });

              case 20:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function endEnvironment(_x11, _x12, _x13) {
        return _endEnvironment.apply(this, arguments);
      };
    }()
  },
  "*": {
    "*": function _(tree) {
      return tree;
    }
  },
  "[": {
    "[": function _(tree) {
      return tree;
    }
  },
  "]": {
    "]": function _(tree) {
      return tree;
    }
  },
  "something-else": {
    "text": function text(tree) {
      return tree;
    },
    "newif": function newif() {
      return empty;
    },
    "ifcmd": function () {
      var _ifcmd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(tree, match, ctx) {
        var it, ifcmd, variable, flag, block1, endif, _endif$children, _else, block2, _fi;

        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                it = iter(tree.children);
                _context7.next = 3;
                return next(it);

              case 3:
                ifcmd = _context7.sent;
                // \if...
                variable = ifcmd.buffer.substr(3);

                if (!ctx.variables.get('if').has(variable)) {
                  _context7.next = 27;
                  break;
                }

                flag = ctx.variables.get('if').get(variable);
                _context7.next = 9;
                return next(it);

              case 9:
                block1 = _context7.sent;

                if (!flag) {
                  _context7.next = 14;
                  break;
                }

                return _context7.abrupt("return", t(block1, match, ctx));

              case 14:
                _context7.t0 = _jsGrammar.ast;
                _context7.next = 17;
                return next(it);

              case 17:
                _context7.t1 = _context7.sent;
                _context7.next = 20;
                return _context7.t0.materialize.call(_context7.t0, _context7.t1);

              case 20:
                endif = _context7.sent;

                if (!(endif.production === "elsefi")) {
                  _context7.next = 26;
                  break;
                }

                _endif$children = _slicedToArray(endif.children, 3), _else = _endif$children[0], block2 = _endif$children[1], _fi = _endif$children[2];
                return _context7.abrupt("return", t(block2, match, ctx));

              case 26:
                return _context7.abrupt("return", empty);

              case 27:
                return _context7.abrupt("return", {
                  'type': 'node',
                  'nonterminal': 'something-else',
                  'production': 'ifcmd',
                  'children': chain([[ifcmd], m(it, match, ctx)])
                });

              case 28:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function ifcmd(_x14, _x15, _x16) {
        return _ifcmd.apply(this, arguments);
      };
    }(),
    "falsecmd": function () {
      var _falsecmd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(tree, _, ctx) {
        var falsecmd, buffer, variable;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return next(iter(tree.children));

              case 2:
                falsecmd = _context8.sent;
                buffer = falsecmd.buffer;
                variable = buffer.substring(1, buffer.length - 5);
                ctx.variables.get('if').set(variable, false);
                return _context8.abrupt("return", empty);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function falsecmd(_x17, _x18, _x19) {
        return _falsecmd.apply(this, arguments);
      };
    }(),
    "truecmd": function () {
      var _truecmd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(tree, _, ctx) {
        var truecmd, buffer, variable;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return next(iter(tree.children));

              case 2:
                truecmd = _context9.sent;
                buffer = truecmd.buffer;
                variable = buffer.substring(1, buffer.length - 4);
                ctx.variables.get('if').set(variable, true);
                return _context9.abrupt("return", empty);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function truecmd(_x20, _x21, _x22) {
        return _truecmd.apply(this, arguments);
      };
    }(),
    "comment": function comment() {
      return {
        'type': 'leaf',
        'terminal': 'comment',
        'buffer': '%'
      };
    },
    "def": function () {
      var _def = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(tree, match, _ref3) {
        var variables, it, othercmd, cmd, anything, blob;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                variables = _ref3.variables;
                it = iter(tree.children);
                _context10.next = 4;
                return next(it);

              case 4:
                _context10.next = 6;
                return next(it);

              case 6:
                othercmd = _context10.sent;
                cmd = othercmd.buffer;
                _context10.next = 10;
                return next(it);

              case 10:
                _context10.next = 12;
                return next(it);

              case 12:
                anything = _context10.sent;
                _context10.next = 15;
                return _jsGrammar.ast.materialize(anything);

              case 15:
                blob = _context10.sent;
                variables.get('cmd').set(cmd, [0, null, blob]);
                _context10.next = 19;
                return next(it);

              case 19:
                return _context10.abrupt("return", empty);

              case 20:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function def(_x23, _x24, _x25) {
        return _def.apply(this, arguments);
      };
    }(),
    "newcommand": function () {
      var _newcommand = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(tree, match, ctx) {
        var it, cmddef;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                it = iter(tree.children);
                _context11.next = 3;
                return next(it);

              case 3:
                _context11.next = 5;
                return next(it);

              case 5:
                cmddef = _context11.sent;
                return _context11.abrupt("return", t(cmddef, match, ctx));

              case 7:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function newcommand(_x26, _x27, _x28) {
        return _newcommand.apply(this, arguments);
      };
    }(),
    "newenvironment": function () {
      var _newenvironment = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(tree, match, ctx) {
        var it, envdef;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                it = iter(tree.children);
                _context12.next = 3;
                return next(it);

              case 3:
                _context12.next = 5;
                return next(it);

              case 5:
                envdef = _context12.sent;
                return _context12.abrupt("return", t(envdef, match, ctx));

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function newenvironment(_x29, _x30, _x31) {
        return _newenvironment.apply(this, arguments);
      };
    }(),
    "renewenvironment": function () {
      var _renewenvironment = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(tree, match, ctx) {
        var it, envdef;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                it = iter(tree.children);
                _context13.next = 3;
                return next(it);

              case 3:
                _context13.next = 5;
                return next(it);

              case 5:
                envdef = _context13.sent;
                return _context13.abrupt("return", t(envdef, match, ctx));

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function renewenvironment(_x32, _x33, _x34) {
        return _renewenvironment.apply(this, arguments);
      };
    }(),
    "\n": function _(tree) {
      return tree;
    },
    "arg": function () {
      var _arg2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(tree, match, _ref4) {
        var args, variables, arg, i, subtree;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                args = _ref4.args, variables = _ref4.variables;
                _context14.next = 3;
                return next(iter(tree.children));

              case 3:
                arg = _context14.sent;

                if (!(args.length < 2)) {
                  _context14.next = 6;
                  break;
                }

                throw new Error("Requesting ".concat(arg.buffer, " but got no arguments in context."));

              case 6:
                i = parseInt(arg.buffer.substr(1), 10) - 1; // #arg

                if (!(i >= args[1].length)) {
                  _context14.next = 9;
                  break;
                }

                throw new Error("Requesting ".concat(arg.buffer, " but only got ").concat(args[1].length, " arguments."));

              case 9:
                subtree = args[1][i]; // arg

                return _context14.abrupt("return", t(subtree, match, {
                  args: args[0],
                  variables: variables
                }));

              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function arg(_x35, _x36, _x37) {
        return _arg2.apply(this, arguments);
      };
    }(),
    "$": function $(tree) {
      return tree;
    },
    "math": recurse('something-else', 'math'),
    "mathenv": recurse('something-else', 'mathenv')
  },
  "endif": {
    "elsefi": recurse('endif', 'elsefi'),
    "fi": function fi(tree) {
      return tree;
    }
  },
  "cmddef": {
    "{cmd}[x]{anything}": function () {
      var _cmdXAnything = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15(tree, _, _ref5) {
        var variables, it, othercmd, cmd, cmddefargs, nargs, it2, text, anything, blob;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                variables = _ref5.variables;
                it = iter(tree.children);
                _context15.next = 4;
                return next(it);

              case 4:
                _context15.next = 6;
                return next(it);

              case 6:
                othercmd = _context15.sent;
                cmd = othercmd.buffer;
                _context15.next = 10;
                return next(it);

              case 10:
                _context15.next = 12;
                return next(it);

              case 12:
                cmddefargs = _context15.sent;
                nargs = 0;

                if (!(cmddefargs.production === 'yes')) {
                  _context15.next = 24;
                  break;
                }

                it2 = iter(cmddefargs.children);
                _context15.next = 18;
                return next(it2);

              case 18:
                _context15.next = 20;
                return next(it2);

              case 20:
                text = _context15.sent;
                nargs = parseInt(text.buffer, 10);
                _context15.next = 24;
                return next(it2);

              case 24:
                _context15.next = 26;
                return next(it);

              case 26:
                _context15.next = 28;
                return next(it);

              case 28:
                anything = _context15.sent;
                _context15.next = 31;
                return _jsGrammar.ast.materialize(anything);

              case 31:
                blob = _context15.sent;
                variables.get('cmd').set(cmd, [nargs, null, blob]);
                _context15.next = 35;
                return next(it);

              case 35:
                return _context15.abrupt("return", empty);

              case 36:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function cmdXAnything(_x38, _x39, _x40) {
        return _cmdXAnything.apply(this, arguments);
      };
    }(),
    "cmd[x]{anything}": function () {
      var _cmdXAnything2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee16(tree, _, _ref6) {
        var variables, it, othercmd, cmd, cmddefargs, nargs, it2, text, anything, blob;
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                variables = _ref6.variables;
                it = iter(tree.children);
                _context16.next = 4;
                return next(it);

              case 4:
                othercmd = _context16.sent;
                cmd = othercmd.buffer;
                _context16.next = 8;
                return next(it);

              case 8:
                cmddefargs = _context16.sent;
                nargs = 0;

                if (!(cmddefargs.production === 'yes')) {
                  _context16.next = 20;
                  break;
                }

                it2 = iter(cmddefargs.children);
                _context16.next = 14;
                return next(it2);

              case 14:
                _context16.next = 16;
                return next(it2);

              case 16:
                text = _context16.sent;
                nargs = parseInt(text.buffer, 10);
                _context16.next = 20;
                return next(it2);

              case 20:
                _context16.next = 22;
                return next(it);

              case 22:
                _context16.next = 24;
                return next(it);

              case 24:
                anything = _context16.sent;
                _context16.next = 27;
                return _jsGrammar.ast.materialize(anything);

              case 27:
                blob = _context16.sent;
                variables.get('cmd').set(cmd, [nargs, null, blob]);
                _context16.next = 31;
                return next(it);

              case 31:
                return _context16.abrupt("return", empty);

              case 32:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function cmdXAnything(_x41, _x42, _x43) {
        return _cmdXAnything2.apply(this, arguments);
      };
    }(),
    "*cmd[x]{anything}": function () {
      var _cmdXAnything3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17(tree, _, _ref7) {
        var variables, it, othercmd, cmd, cmddefargs, nargs, it2, text, anything, blob;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                variables = _ref7.variables;
                // do not know what to do with '*' at the moment
                // see https://tex.stackexchange.com/questions/1050/whats-the-difference-between-newcommand-and-newcommand
                it = iter(tree.children);
                _context17.next = 4;
                return next(it);

              case 4:
                _context17.next = 6;
                return next(it);

              case 6:
                othercmd = _context17.sent;
                cmd = othercmd.buffer;
                _context17.next = 10;
                return next(it);

              case 10:
                cmddefargs = _context17.sent;
                nargs = 0;

                if (!(cmddefargs.production === 'yes')) {
                  _context17.next = 22;
                  break;
                }

                it2 = iter(cmddefargs.children);
                _context17.next = 16;
                return next(it2);

              case 16:
                _context17.next = 18;
                return next(it2);

              case 18:
                text = _context17.sent;
                nargs = parseInt(text.buffer, 10);
                _context17.next = 22;
                return next(it2);

              case 22:
                _context17.next = 24;
                return next(it);

              case 24:
                _context17.next = 26;
                return next(it);

              case 26:
                anything = _context17.sent;
                _context17.next = 29;
                return _jsGrammar.ast.materialize(anything);

              case 29:
                blob = _context17.sent;
                variables.get('cmd').set(cmd, [nargs, null, blob]);
                _context17.next = 33;
                return next(it);

              case 33:
                return _context17.abrupt("return", empty);

              case 34:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function cmdXAnything(_x44, _x45, _x46) {
        return _cmdXAnything3.apply(this, arguments);
      };
    }()
  },
  "cmddefargs": {
    "yes": err("cmddefargs", "yes"),
    "no": err("cmddefargs", "no")
  },
  "environment-definition": {
    "{envname}[nargs][default]{begin}{end}": function () {
      var _envnameNargsDefaultBeginEnd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18(tree, _, _ref8) {
        var variables, it, envtext, env, args, nargs, dfltarg, it2, text, dflt, it3, anything3, anything1, begin, anything2, end;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                variables = _ref8.variables;
                // do not know what to do with '*' at the moment
                // see https://tex.stackexchange.com/questions/1050/whats-the-difference-between-newcommand-and-newcommand
                it = iter(tree.children); //await next(it); // *

                _context18.next = 4;
                return next(it);

              case 4:
                _context18.next = 6;
                return next(it);

              case 6:
                envtext = _context18.sent;
                env = envtext.buffer;
                _context18.next = 10;
                return next(it);

              case 10:
                _context18.next = 12;
                return next(it);

              case 12:
                args = _context18.sent;
                // [nargs][default]
                nargs = 0;
                dfltarg = null;

                if (!(args.production === 'yes')) {
                  _context18.next = 40;
                  break;
                }

                it2 = iter(args.children);
                _context18.next = 19;
                return next(it2);

              case 19:
                _context18.next = 21;
                return next(it2);

              case 21:
                text = _context18.sent;
                nargs = parseInt(text.buffer, 10);
                _context18.next = 25;
                return next(it2);

              case 25:
                _context18.next = 27;
                return next(it2);

              case 27:
                dflt = _context18.sent;

                if (!(dflt.production === 'yes')) {
                  _context18.next = 40;
                  break;
                }

                it3 = iter(dflt.children);
                _context18.next = 32;
                return next(it3);

              case 32:
                _context18.next = 34;
                return next(it3);

              case 34:
                anything3 = _context18.sent;
                _context18.next = 37;
                return _jsGrammar.ast.materialize(anything3);

              case 37:
                dfltarg = _context18.sent;
                _context18.next = 40;
                return next(it3);

              case 40:
                _context18.next = 42;
                return next(it);

              case 42:
                _context18.next = 44;
                return next(it);

              case 44:
                anything1 = _context18.sent;
                _context18.next = 47;
                return _jsGrammar.ast.materialize(anything1);

              case 47:
                begin = _context18.sent;
                _context18.next = 50;
                return next(it);

              case 50:
                _context18.next = 52;
                return next(it);

              case 52:
                _context18.next = 54;
                return next(it);

              case 54:
                anything2 = _context18.sent;
                _context18.next = 57;
                return _jsGrammar.ast.materialize(anything2);

              case 57:
                end = _context18.sent;
                _context18.next = 60;
                return next(it);

              case 60:
                // }
                variables.get('env').set(env, [nargs, dfltarg, begin, end]);
                return _context18.abrupt("return", empty);

              case 62:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function envnameNargsDefaultBeginEnd(_x47, _x48, _x49) {
        return _envnameNargsDefaultBeginEnd.apply(this, arguments);
      };
    }(),
    //"{envname}[nargs][default]{begin}{end}" : recurse( 'environment-definition' , '{envname}[nargs][default]{begin}{end}' ) ,
    "*{envname}[nargs][default]{begin}{end}": recurse('environment-definition', '*{envname}[nargs][default]{begin}{end}')
  },
  "arguments-for-environment-definition": {
    "yes": recurse('arguments-for-environment-definition', 'yes'),
    "no": function no() {
      return empty;
    }
  },
  "default-argument-for-environment-definition": {
    "yes": recurse('default-argument-for-environment-definition', 'yes'),
    "no": function no() {
      return empty;
    }
  },
  //"envdef" : {
  //"{envname}[nargs][default]{begin}{end}": async ( tree , _ , { variables } ) => {
  //do not know what to do with '*' at the moment
  //const it = iter(tree.children) ;
  //await next(it); // *
  //const envtext = await next(it);
  //const env = envtext.buffer;
  //const envdefargs = await next(it);
  //let nargs = 0;
  //let defaultarg = null;
  //if (envdefargs.production === 'yes') {
  //const it2 = iter(envdefargs.children);
  //await next(it2) ; // [
  //const text = await next(it2) ;
  //nargs = parseInt(text.buffer, 10);
  //await next(it2) ; // ]
  //const envdefdefault = await next(it2) ;
  //if (envdefdefault.production === 'yes') {
  //const it3 = iter(envdefdefault.children);
  //await next(it3) ; // [
  //const defaultargtree = await next(it2) ;
  //defaultarg = await ast.materialize(defaultargtree) ;
  //await next(it3) ; // ]
  //}
  //}
  //await next(it); // {
  //const begintree = await next(it);
  //const begin = await ast.materialize(begintree) ;
  //await next(it); // }
  //await next(it); // {
  //const endtree = await next(it);
  //const end = await ast.materialize(endtree) ;
  //variables.get('env').set(env, [ nargs , defaultarg , begin , end ]);
  //await next(it); // }
  //return empty;
  //} ,
  //"*{envname}[nargs][default]{begin}{end}": recurse("envdef", "*{envname}[nargs][default]{begin}{end}"),
  //} ,
  //"envdefargs": {
  //"yes" : recurse( "envdefargs" , "yes" ) ,
  //"no" : recurse( "envdefargs" , "no" ) ,
  //} ,
  //"envdefdefault": {
  //"yes" : recurse( "envdefdefault" , "yes" ) ,
  //"no" : recurse( "envdefdefault" , "no" ) ,
  //} ,
  "cmd*": {
    "yes": err("cmd*", "yes"),
    "no": err("cmd*", "no")
  },
  "cmdargs": {
    "normal": recurse('cmdargs', 'normal'),
    "optional": recurse('cmdargs', 'optional'),
    "end": function end() {
      return empty;
    }
  },
  "cmdafter": {
    "othercmd": recurse('cmdafter', 'othercmd'),
    "something-else-then-anything": recurse('cmdafter', 'something-else-then-anything'),
    "]-then-anything": recurse('cmdafter', ']-then-anything'),
    "nothing": function nothing() {
      return empty;
    }
  },
  "cmdafter-but-not-]": {
    "othercmd": recurse('cmdafter-but-not-]', 'othercmd'),
    "something-else-then-anything": recurse('cmdafter-but-not-]', 'something-else-then-anything'),
    "nothing": function nothing() {
      return empty;
    }
  }
};
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXIuanMiXSwibmFtZXMiOlsiaXRlciIsIm9iamVjdCIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJpdGVyYXRvciIsIm5leHQiLCJkZmx0IiwidW5kZWZpbmVkIiwieCIsImRvbmUiLCJTdG9wSXRlcmF0aW9uIiwidmFsdWUiLCJjaGFpbiIsIml0ZXJhYmxlcyIsIml0ZXJhYmxlIiwiaXRlbSIsImVtcHR5IiwiZXJyIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uIiwiRXJyb3IiLCJ0IiwiYXN0IiwidHJhbnNmb3JtIiwibSIsImNoaWxkcmVuIiwibWF0Y2giLCJjdHgiLCJjbWFwIiwiY2hpbGQiLCJyZWN1cnNlIiwidHJlZSIsInR5cGUiLCJpdCIsIm90aGVyY21kIiwiY21kIiwiYnVmZmVyIiwibWF0ZXJpYWxpemUiLCJvcHRzdGFyIiwiYXJncyIsImNtZGFyZ3MiLCJhcmdfaSIsImdyb3VwIiwidGFpbCIsIl9vcGVuIiwiYXJnIiwiX2Nsb3NlIiwicHVzaCIsImhhc29wdGFyZ3MiLCJ2YXJpYWJsZXMiLCJnZXQiLCJoYXMiLCJuYXJncyIsImRlZmF1bHRhcmciLCJleHBhbmRzdG8iLCJsZW5ndGgiLCJiZWdpbmNtZCIsImxlZnRicmFja2V0IiwiZW52dGV4dCIsImVudiIsInJpZ2h0YnJhY2tldCIsImRmbHRhcmciLCJiZWdpbiIsImVuZCIsIm9wdGdyb3VwIiwiY29tcGxleCIsImVuZGNtZCIsImlmY21kIiwidmFyaWFibGUiLCJzdWJzdHIiLCJmbGFnIiwiYmxvY2sxIiwiZW5kaWYiLCJfZWxzZSIsImJsb2NrMiIsIl9maSIsIl8iLCJmYWxzZWNtZCIsInN1YnN0cmluZyIsInNldCIsInRydWVjbWQiLCJhbnl0aGluZyIsImJsb2IiLCJjbWRkZWYiLCJlbnZkZWYiLCJpIiwicGFyc2VJbnQiLCJzdWJ0cmVlIiwiY21kZGVmYXJncyIsIml0MiIsInRleHQiLCJpdDMiLCJhbnl0aGluZzMiLCJhbnl0aGluZzEiLCJhbnl0aGlu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R0FBRyxDQUFFLE1BQUYsRUFBVyxLQUFYLENBREw7QUFFTixVQUFPQSxHQUFHLENBQUUsTUFBRixFQUFXLElBQVg7QUFGSixHQTNjSztBQWdkYixhQUFXO0FBQ1QsY0FBV2EsT0FBTyxDQUFDLFNBQUQsRUFBWSxRQUFaLENBRFQ7QUFFVCxnQkFBYUEsT0FBTyxDQUFDLFNBQUQsRUFBWSxVQUFaLENBRlg7QUFHVCxXQUFRO0FBQUEsYUFBTWQsS0FBTjtBQUFBO0FBSEMsR0FoZEU7QUFzZGIsY0FBWTtBQUNWLGdCQUFhYyxPQUFPLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FEVjtBQUVWLG9DQUFpQ0EsT0FBTyxDQUFDLFVBQUQsRUFBYSw4QkFBYixDQUY5QjtBQUdWLHVCQUFvQkEsT0FBTyxDQUFDLFVBQUQsRUFBYSxpQkFBYixDQUhqQjtBQUlWLGVBQVk7QUFBQSxhQUFNZCxLQUFOO0FBQUE7QUFKRixHQXRkQztBQTZkYix3QkFBc0I7QUFDcEIsZ0JBQWFjLE9BQU8sQ0FBQyxvQkFBRCxFQUF1QixVQUF2QixDQURBO0FBRXBCLG9DQUFpQ0EsT0FBTyxDQUFDLG9CQUFELEVBQXVCLDhCQUF2QixDQUZwQjtBQUdwQixlQUFZO0FBQUEsYUFBTWQsS0FBTjtBQUFBO0FBSFE7QUE3ZFQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3BJdGVyYXRpb24gfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBhc3QgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuXG4vLyBUT0RPIGNyZWF0ZSBsaWJyYXJ5IHdpdGggdGhvc2VcbmZ1bmN0aW9uIGl0ZXIgKCBvYmplY3QgKSB7XG4gIC8vIG1heWJlIHdlIGRvIG5vdCBldmVuIG5lZWQgdGhlIHNlY29uZCBjYXNlXG4gIGlmICggb2JqZWN0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSApIHJldHVybiBvYmplY3RbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgO1xuICBlbHNlIHJldHVybiBvYmplY3RbU3ltYm9sLml0ZXJhdG9yXSgpIDtcbn1cblxuLy8gVE9ETyBjcmVhdGUgbGlicmFyeSB3aXRoIHRob3NlXG5hc3luYyBmdW5jdGlvbiBuZXh0ICggaXRlcmF0b3IgLCBkZmx0ID0gdW5kZWZpbmVkICkge1xuXG4gIGNvbnN0IHggPSBhd2FpdCBpdGVyYXRvci5uZXh0KCApIDtcblxuICBpZiAoIHguZG9uZSApIHtcbiAgICBpZiAoIGRmbHQgPT09IHVuZGVmaW5lZCApIHRocm93IG5ldyBTdG9wSXRlcmF0aW9uKCkgO1xuICAgIGVsc2UgcmV0dXJuIGRmbHQgO1xuICB9XG5cbiAgcmV0dXJuIHgudmFsdWUgO1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uKiBjaGFpbiAoIGl0ZXJhYmxlcyApIHtcblxuICBmb3IgKCBjb25zdCBpdGVyYWJsZSBvZiBpdGVyYWJsZXMgKSB7XG4gICAgaWYgKCBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdICkgeWllbGQqIGl0ZXJhYmxlIDtcbiAgICBlbHNlIGZvciBhd2FpdCAoIGNvbnN0IGl0ZW0gb2YgaXRlcmFibGUgKSB5aWVsZCBpdGVtIDtcbiAgfVxuXG59XG5cblxuY29uc3QgZW1wdHkgPSB7XG4gICd0eXBlJyA6ICdub2RlJyAsXG4gICdub250ZXJtaW5hbCcgOiAnZW1wdHknICxcbiAgJ3Byb2R1Y3Rpb24nIDogJ21haW4nICxcbiAgJ2NoaWxkcmVuJyA6IFtdICxcbn0gO1xuXG5jb25zdCBlcnIgPSAoIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbiApID0+ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGAke25vbnRlcm1pbmFsfS4ke3Byb2R1Y3Rpb259IHNob3VsZCBoYXZlIGJlZW4gaGFuZGxlZCBiZWZvcmVgKTtcbn0gO1xuXG5jb25zdCB0ID0gYXN0LnRyYW5zZm9ybSA7XG5jb25zdCBtID0gKCBjaGlsZHJlbiAsIG1hdGNoICwgY3R4ICkgPT4gYXN0LmNtYXAoIGFzeW5jIGNoaWxkID0+IGF3YWl0IHQoIGNoaWxkICwgbWF0Y2ggLCBjdHggKSAsIGNoaWxkcmVuICkgO1xuXG5jb25zdCByZWN1cnNlID0gKCBub250ZXJtaW5hbCAsIHByb2R1Y3Rpb24gKSA9PiAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+ICh7XG4gIFwidHlwZVwiIDogXCJub2RlXCIgLFxuICBub250ZXJtaW5hbCAsXG4gIHByb2R1Y3Rpb24gLFxuICBcImNoaWxkcmVuXCIgOiBhc3QuY21hcCggYXN5bmMgeCA9PiB4LnR5cGUgPT09ICdsZWFmJyA/IHggOiBhd2FpdCB0KCB4ICwgbWF0Y2ggLCBjdHggKSAsIHRyZWUuY2hpbGRyZW4gKSAsXG59KSA7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIFwiZG9jdW1lbnRcIiA6IHtcbiAgICBcImNvbnRlbnRzXCIgOiByZWN1cnNlKCAnZG9jdW1lbnQnICwgJ2NvbnRlbnRzJyApICxcbiAgfSAsXG5cbiAgXCJhbnl0aGluZ1wiIDoge1xuICAgIFwic3RhcnRzLXdpdGgtb3RoZXJjbWRcIiA6IHJlY3Vyc2UoICdhbnl0aGluZycgLCAnc3RhcnRzLXdpdGgtb3RoZXJjbWQnICkgLFxuICAgIFwic3RhcnRzLXdpdGgtZW52aXJvbm1lbnRcIiA6IHJlY3Vyc2UoICdhbnl0aGluZycgLCAnc3RhcnRzLXdpdGgtZW52aXJvbm1lbnQnICkgLFxuICAgIFwic3RhcnRzLXdpdGgtKlwiIDogcmVjdXJzZSggJ2FueXRoaW5nJyAsICdzdGFydHMtd2l0aC0qJyApICxcbiAgICBcInN0YXJ0cy13aXRoLVtcIiA6IHJlY3Vyc2UoICdhbnl0aGluZycgLCAnc3RhcnRzLXdpdGgtWycgKSAsXG4gICAgXCJzdGFydHMtd2l0aC1dXCIgOiByZWN1cnNlKCAnYW55dGhpbmcnICwgJ3N0YXJ0cy13aXRoLV0nICkgLFxuICAgIFwic3RhcnRzLXdpdGgtYS1ncm91cFwiIDogcmVjdXJzZSggJ2FueXRoaW5nJyAsICdzdGFydHMtd2l0aC1hLWdyb3VwJyApICxcbiAgICBcInN0YXJ0cy13aXRoLXNvbWV0aGluZy1lbHNlXCIgOiByZWN1cnNlKCAnYW55dGhpbmcnICwgJ3N0YXJ0cy13aXRoLXNvbWV0aGluZy1lbHNlJyApICxcbiAgICBcImVuZFwiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcblxuICBcImFueXRoaW5nLWJ1dC1dXCIgOiB7XG4gICAgXCJzdGFydHMtd2l0aC1vdGhlcmNtZFwiIDogcmVjdXJzZSggJ2FueXRoaW5nLWJ1dC1dJyAsICdzdGFydHMtd2l0aC1vdGhlcmNtZCcgKSAsXG4gICAgXCJzdGFydHMtd2l0aC1lbnZpcm9ubWVudFwiIDogcmVjdXJzZSggJ2FueXRoaW5nLWJ1dC1dJyAsICdzdGFydHMtd2l0aC1lbnZpcm9ubWVudCcgKSAsXG4gICAgXCJzdGFydHMtd2l0aC0qXCIgOiByZWN1cnNlKCAnYW55dGhpbmctYnV0LV0nICwgJ3N0YXJ0cy13aXRoLSonICkgLFxuICAgIFwic3RhcnRzLXdpdGgtW1wiIDogcmVjdXJzZSggJ2FueXRoaW5nLWJ1dC1dJyAsICdzdGFydHMtd2l0aC1bJyApICxcbiAgICBcInN0YXJ0cy13aXRoLWEtZ3JvdXBcIiA6IHJlY3Vyc2UoICdhbnl0aGluZy1idXQtXScgLCAnc3RhcnRzLXdpdGgtYS1ncm91cCcgKSAsXG4gICAgXCJzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZVwiIDogcmVjdXJzZSggJ2FueXRoaW5nLWJ1dC1dJyAsICdzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZScgKSAsXG4gICAgXCJlbmRcIiA6ICgpID0+IGVtcHR5ICxcbiAgfSAsXG5cbiAgXCJncm91cFwiIDoge1xuICAgIFwiZ3JvdXBcIiA6IHJlY3Vyc2UoJ2dyb3VwJywgJ2dyb3VwJykgLFxuICB9ICxcblxuICBcIm9wdGdyb3VwXCIgOiB7XG4gICAgXCJncm91cFwiIDogcmVjdXJzZSgnb3B0Z3JvdXAnLCAnZ3JvdXAnKSAsXG4gIH0gLFxuXG4gIFwib3RoZXJjbWRcIiA6IHtcblxuICAgIFwib3RoZXJjbWRcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG5cbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG5cbiAgICAgIGNvbnN0IG90aGVyY21kID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgbGV0IGNtZCA9IG90aGVyY21kLmJ1ZmZlcjtcblxuICAgICAgY29uc3Qgb3B0c3RhciA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhd2FpdCBuZXh0KGl0KSk7XG4gICAgICBpZiAoIG9wdHN0YXIucHJvZHVjdGlvbiA9PT0gJ3llcycgKSBjbWQgKz0gJyonO1xuXG4gICAgICBjb25zdCBhcmdzID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGF3YWl0IG5leHQoaXQpKTtcbiAgICAgIGNvbnN0IGNtZGFyZ3MgPSBbXTtcbiAgICAgIGxldCBhcmdfaSA9IGFyZ3NcbiAgICAgIHdoaWxlICggYXJnX2kucHJvZHVjdGlvbiA9PT0gJ25vcm1hbCcgKSB7XG5cdGNvbnN0IFsgZ3JvdXAgLCB0YWlsIF0gPSBhcmdfaS5jaGlsZHJlbiA7XG5cdGNvbnN0IFsgX29wZW4gLCBhcmcgLCBfY2xvc2UgXSA9IGdyb3VwLmNoaWxkcmVuIDtcblx0Y21kYXJncy5wdXNoKGFyZykgO1xuXHRhcmdfaSA9IHRhaWwgO1xuICAgICAgfVxuICAgICAgY29uc3QgaGFzb3B0YXJncyA9IGFyZ19pLnByb2R1Y3Rpb24gPT09ICdvcHRpb25hbCcgO1xuICAgICAgaWYgKCFoYXNvcHRhcmdzICYmIGN0eC52YXJpYWJsZXMuZ2V0KCdjbWQnKS5oYXMoY21kKSkge1xuXHQvLyB0b28gaGFyZCB0byBwYXJzZSBvcHQgYXJncyBjdXJyZW50bHlcblx0Y29uc3QgWyBuYXJncyAsIGRlZmF1bHRhcmcgLCBleHBhbmRzdG8gXSA9IGN0eC52YXJpYWJsZXMuZ2V0KCdjbWQnKS5nZXQoY21kKSA7XG5cdGlmIChjbWRhcmdzLmxlbmd0aCAhPT0gbmFyZ3MpIHRocm93IG5ldyBFcnJvcihgQ29tbWFuZCAke2NtZH0gaXMgZGVmaW5lZCB3aXRoICR7bmFyZ3N9IGFyZ3VtZW50cyBidXQgJHtjbWRhcmdzLmxlbmd0aH0gd2VyZSBnaXZlbi5gKSA7XG5cdHJldHVybiB0KCBleHBhbmRzdG8gLCBtYXRjaCAsIHsgdmFyaWFibGVzOiBjdHgudmFyaWFibGVzICwgYXJnczogWyBjdHguYXJncyAsIGNtZGFyZ3MgXSB9ICkgO1xuICAgICAgfVxuICAgICAgZWxzZSByZXR1cm4ge1xuXHQndHlwZScgOiAnbm9kZScgLFxuXHQnbm9udGVybWluYWwnIDogJ290aGVyY21kJyAsXG5cdCdwcm9kdWN0aW9uJyA6ICdvdGhlcmNtZCcgLFxuXHQnY2hpbGRyZW4nIDogY2hhaW4oIFsgWyBvdGhlcmNtZCAsIG9wdHN0YXIgXSAsIG0oW2FyZ3NdLCBtYXRjaCwgY3R4KSBdICkgLFxuICAgICAgfSA7XG4gICAgfSAsXG5cbiAgfSAsXG5cbiAgXCJiZWdpbi1lbnZpcm9ubWVudFwiIDoge1xuXG4gICAgXCJiZWdpbi1lbnZpcm9ubWVudFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcblxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcblxuICAgICAgY29uc3QgYmVnaW5jbWQgPSBhd2FpdCBuZXh0KGl0KSA7IC8vIFxcYmVnaW5cbiAgICAgIGNvbnN0IGxlZnRicmFja2V0ID0gYXdhaXQgbmV4dChpdCkgOyAvLyB7XG4gICAgICBjb25zdCBlbnZ0ZXh0ID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgY29uc3QgZW52ID0gZW52dGV4dC5idWZmZXIgO1xuICAgICAgY29uc3QgcmlnaHRicmFja2V0ID0gYXdhaXQgbmV4dChpdCkgOyAvLyB9XG5cbiAgICAgIGNvbnN0IGFyZ3MgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYXdhaXQgbmV4dChpdCkpO1xuXG4gICAgICBpZiAoIGN0eC52YXJpYWJsZXMuZ2V0KCdlbnYnKS5oYXMoZW52KSApIHtcblxuXHRjb25zdCBbIG5hcmdzICwgZGZsdGFyZyAsIGJlZ2luICwgZW5kIF0gPSBjdHgudmFyaWFibGVzLmdldCgnZW52JykuZ2V0KGVudikgO1xuXG5cdGNvbnN0IGNtZGFyZ3MgPSBbXTtcblx0bGV0IGFyZ19pID0gYXJnc1xuXHRpZiAoIGFyZ19pLnByb2R1Y3Rpb24gPT09ICdvcHRpb25hbCcgKSB7XG5cdCAgaWYgKGRmbHRhcmcgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcihgRW52aXJvbm1lbnQgJHtlbnZ9IGlzIG5vdCBkZWZpbmVkIHdpdGggYSBkZWZhdWx0IGFyZ3VtZW50LmApIDtcblx0ICBjb25zdCBbIG9wdGdyb3VwICwgdGFpbCBdID0gYXJnX2kuY2hpbGRyZW4gO1xuXHQgIGNvbnN0IFsgX29wZW4gLCBhcmcgLCBfY2xvc2UgXSA9IG9wdGdyb3VwLmNoaWxkcmVuIDtcblx0ICBjbWRhcmdzLnB1c2goYXJnKTtcblx0fVxuXHRlbHNlIGlmIChkZmx0YXJnICE9PSBudWxsKSBjbWRhcmdzLnB1c2goZGZsdGFyZykgO1xuXHR3aGlsZSAoIGFyZ19pLnByb2R1Y3Rpb24gPT09ICdub3JtYWwnICkge1xuXHQgIGNvbnN0IFsgZ3JvdXAgLCB0YWlsIF0gPSBhcmdfaS5jaGlsZHJlbiA7XG5cdCAgY29uc3QgWyBfb3BlbiAsIGFyZyAsIF9jbG9zZSBdID0gZ3JvdXAuY2hpbGRyZW4gO1xuXHQgIGNtZGFyZ3MucHVzaChhcmcpIDtcblx0ICBhcmdfaSA9IHRhaWwgO1xuXHR9XG5cblx0Y29uc3QgY29tcGxleCA9IGFyZ19pLnByb2R1Y3Rpb24gPT09ICdvcHRpb25hbCcgO1xuXHRpZiAoIWNvbXBsZXgpIHtcblx0ICAvLyBkbyBub3QgcGFyc2UgY29tcGxleCBzeW50YXhcblx0ICBpZiAoY21kYXJncy5sZW5ndGggIT09IG5hcmdzKVxuXHQgICAgdGhyb3cgbmV3IEVycm9yKGBFbnZpcm9ubWVudCAke2Vudn0gaXMgZGVmaW5lZCB3aXRoICR7bmFyZ3N9IGFyZ3VtZW50cyBidXQgJHtjbWRhcmdzLmxlbmd0aH0gd2VyZSBnaXZlbi5gKSA7XG5cdCAgcmV0dXJuIHQoIGJlZ2luICwgbWF0Y2ggLCB7IHZhcmlhYmxlczogY3R4LnZhcmlhYmxlcyAsIGFyZ3M6IFsgY3R4LmFyZ3MgLCBjbWRhcmdzIF0gfSApIDtcblx0fVxuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG5cdCd0eXBlJyA6ICdub2RlJyAsXG5cdCdub250ZXJtaW5hbCcgOiAnb3RoZXJjbWQnICxcblx0J3Byb2R1Y3Rpb24nIDogJ290aGVyY21kJyAsXG5cdCdjaGlsZHJlbicgOiBjaGFpbiggWyBbIGJlZ2luY21kICwgbGVmdGJyYWNrZXQgLCBlbnZ0ZXh0ICwgcmlnaHRicmFja2V0IF0gLCBtKFthcmdzXSwgbWF0Y2gsIGN0eCkgXSApICxcbiAgICAgIH0gO1xuXG4gICAgfSAsXG5cbiAgfSAsXG5cbiAgXCJlbmQtZW52aXJvbm1lbnRcIiA6IHtcblxuICAgIFwiZW5kLWVudmlyb25tZW50XCI6IGFzeW5jICggdHJlZSAsIG1hdGNoICwgY3R4ICkgPT4ge1xuXG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuXG4gICAgICBjb25zdCBlbmRjbWQgPSBhd2FpdCBuZXh0KGl0KSA7IC8vIFxcZW5kXG4gICAgICBjb25zdCBsZWZ0YnJhY2tldCA9IGF3YWl0IG5leHQoaXQpIDsgLy8ge1xuICAgICAgY29uc3QgZW52dGV4dCA9IGF3YWl0IG5leHQoaXQpIDtcbiAgICAgIGNvbnN0IGVudiA9IGVudnRleHQuYnVmZmVyIDtcbiAgICAgIGNvbnN0IHJpZ2h0YnJhY2tldCA9IGF3YWl0IG5leHQoaXQpIDsgLy8gfVxuXG4gICAgICBpZiAoY3R4LnZhcmlhYmxlcy5nZXQoJ2VudicpLmhhcyhlbnYpKSB7XG5cdGNvbnN0IFsgbmFyZ3MgLCBkZWZhdWx0YXJnICwgYmVnaW4gLCBlbmQgXSA9IGN0eC52YXJpYWJsZXMuZ2V0KCdlbnYnKS5nZXQoZW52KSA7XG5cdHJldHVybiB0KCBlbmQgLCBtYXRjaCAsIGN0eCApIDtcbiAgICAgIH1cbiAgICAgIGVsc2UgcmV0dXJuIHtcblx0J3R5cGUnIDogJ25vZGUnICxcblx0J25vbnRlcm1pbmFsJyA6ICdvdGhlcmNtZCcgLFxuXHQncHJvZHVjdGlvbicgOiAnb3RoZXJjbWQnICxcblx0J2NoaWxkcmVuJyA6IGNoYWluKCBbIFsgZW5kY21kICwgbGVmdGJyYWNrZXQgLCBlbnZ0ZXh0ICwgcmlnaHRicmFja2V0IF0gXSApICxcbiAgICAgIH0gO1xuICAgIH0gLFxuXG4gIH0gLFxuXG4gIFwiKlwiIDoge1xuICAgIFwiKlwiIDogdHJlZSA9PiB0cmVlICxcbiAgfSAsXG5cbiAgXCJbXCIgOiB7XG4gICAgXCJbXCIgOiB0cmVlID0+IHRyZWUgLFxuICB9ICxcblxuICBcIl1cIiA6IHtcbiAgICBcIl1cIiA6IHRyZWUgPT4gdHJlZSAsXG4gIH0gLFxuXG4gIFwic29tZXRoaW5nLWVsc2VcIiA6IHtcblxuICAgIFwidGV4dFwiIDogdHJlZSA9PiB0cmVlICxcblxuICAgIFwibmV3aWZcIjogKCkgPT4gZW1wdHkgLFxuXG4gICAgXCJpZmNtZFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcblxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcblxuICAgICAgY29uc3QgaWZjbWQgPSBhd2FpdCBuZXh0KGl0KSA7IC8vIFxcaWYuLi5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gaWZjbWQuYnVmZmVyLnN1YnN0cigzKTtcblxuICAgICAgaWYgKGN0eC52YXJpYWJsZXMuZ2V0KCdpZicpLmhhcyh2YXJpYWJsZSkpIHtcblx0Y29uc3QgZmxhZyA9IGN0eC52YXJpYWJsZXMuZ2V0KCdpZicpLmdldCh2YXJpYWJsZSk7XG5cdGNvbnN0IGJsb2NrMSA9IGF3YWl0IG5leHQoaXQpIDtcblx0aWYgKGZsYWcpIHJldHVybiB0KCBibG9jazEgLCBtYXRjaCAsIGN0eCApIDtcblx0ZWxzZSB7XG5cdCAgY29uc3QgZW5kaWYgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYXdhaXQgbmV4dChpdCkpIDtcblx0ICBpZiAoIGVuZGlmLnByb2R1Y3Rpb24gPT09IFwiZWxzZWZpXCIgKSB7XG5cdCAgICBjb25zdCBbIF9lbHNlICwgYmxvY2syICwgX2ZpIF0gPSBlbmRpZi5jaGlsZHJlbiA7XG5cdCAgICByZXR1cm4gdCggYmxvY2syICwgbWF0Y2ggLCBjdHggKSA7XG5cdCAgfVxuXHQgIGVsc2UgcmV0dXJuIGVtcHR5IDtcblx0fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuXHQndHlwZScgOiAnbm9kZScgLFxuXHQnbm9udGVybWluYWwnIDogJ3NvbWV0aGluZy1lbHNlJyAsXG5cdCdwcm9kdWN0aW9uJyA6ICdpZmNtZCcgLFxuXHQnY2hpbGRyZW4nIDogY2hhaW4oIFsgWyBpZmNtZCBdICwgbSggaXQgLCBtYXRjaCAsIGN0eCApIF0gKSAsXG4gICAgICB9IDtcblxuICAgIH0gLFxuXG4gICAgXCJmYWxzZWNtZFwiIDogYXN5bmMgKCB0cmVlICwgXyAsIGN0eCApID0+IHtcbiAgICAgIGNvbnN0IGZhbHNlY21kID0gYXdhaXQgbmV4dChpdGVyKHRyZWUuY2hpbGRyZW4pKSA7XG4gICAgICBjb25zdCBidWZmZXIgPSBmYWxzZWNtZC5idWZmZXI7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMSwgYnVmZmVyLmxlbmd0aC01KTtcbiAgICAgIGN0eC52YXJpYWJsZXMuZ2V0KCdpZicpLnNldCh2YXJpYWJsZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0gLFxuXG4gICAgXCJ0cnVlY21kXCIgOiBhc3luYyAoIHRyZWUgLCBfICwgY3R4ICkgPT4ge1xuICAgICAgY29uc3QgdHJ1ZWNtZCA9IGF3YWl0IG5leHQoaXRlcih0cmVlLmNoaWxkcmVuKSkgO1xuICAgICAgY29uc3QgYnVmZmVyID0gdHJ1ZWNtZC5idWZmZXI7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMSwgYnVmZmVyLmxlbmd0aC00KTtcbiAgICAgIGN0eC52YXJpYWJsZXMuZ2V0KCdpZicpLnNldCh2YXJpYWJsZSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSAsXG5cbiAgICBcImNvbW1lbnRcIjogKCApID0+ICh7XG4gICAgICAndHlwZScgOiAnbGVhZicgLFxuICAgICAgJ3Rlcm1pbmFsJyA6ICdjb21tZW50JyAsXG4gICAgICAnYnVmZmVyJyA6ICclJyAsXG4gICAgfSkgLFxuXG4gICAgXCJkZWZcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCB7IHZhcmlhYmxlcyB9ICkgPT4ge1xuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcbiAgICAgIGF3YWl0IG5leHQoaXQpIDsgLy8gXFxkZWZcbiAgICAgIGNvbnN0IG90aGVyY21kID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBjbWQgPSBvdGhlcmNtZC5idWZmZXIgO1xuICAgICAgYXdhaXQgbmV4dChpdCkgOyAvLyB7XG4gICAgICBjb25zdCBhbnl0aGluZyA9IGF3YWl0IG5leHQoaXQpIDtcbiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYW55dGhpbmcpIDtcbiAgICAgIHZhcmlhYmxlcy5nZXQoJ2NtZCcpLnNldChjbWQsIFswLCBudWxsLCBibG9iXSk7XG4gICAgICBhd2FpdCBuZXh0KGl0KSA7IC8vIH1cbiAgICAgIHJldHVybiBlbXB0eSA7XG4gICAgfSAsXG5cbiAgICBcIm5ld2NvbW1hbmRcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCkgOyAvLyBcXG5ld2NvbW1hbmRcbiAgICAgIGNvbnN0IGNtZGRlZiA9IGF3YWl0IG5leHQoaXQpIDtcbiAgICAgIHJldHVybiB0KCBjbWRkZWYgLCBtYXRjaCAsIGN0eCApIDtcbiAgICB9ICxcblxuICAgIFwibmV3ZW52aXJvbm1lbnRcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCkgOyAvLyBcXG5ld2Vudmlyb25tZW50XG4gICAgICBjb25zdCBlbnZkZWYgPSBhd2FpdCBuZXh0KGl0KSA7XG4gICAgICByZXR1cm4gdCggZW52ZGVmICwgbWF0Y2ggLCBjdHggKSA7XG4gICAgfSAsXG5cbiAgICBcInJlbmV3ZW52aXJvbm1lbnRcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCkgOyAvLyBcXHJlbmV3ZW52aXJvbm1lbnRcbiAgICAgIGNvbnN0IGVudmRlZiA9IGF3YWl0IG5leHQoaXQpIDtcbiAgICAgIHJldHVybiB0KCBlbnZkZWYgLCBtYXRjaCAsIGN0eCApIDtcbiAgICB9ICxcblxuICAgIFwiXFxuXCIgOiB0cmVlID0+IHRyZWUgLFxuXG4gICAgXCJhcmdcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCB7IGFyZ3MgLCB2YXJpYWJsZXMgfSApID0+IHtcbiAgICAgIGNvbnN0IGFyZyA9IGF3YWl0IG5leHQoaXRlcih0cmVlLmNoaWxkcmVuKSkgO1xuICAgICAgaWYgKCBhcmdzLmxlbmd0aCA8IDIgKSB0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3RpbmcgJHthcmcuYnVmZmVyfSBidXQgZ290IG5vIGFyZ3VtZW50cyBpbiBjb250ZXh0LmApIDtcbiAgICAgIGNvbnN0IGkgPSBwYXJzZUludChhcmcuYnVmZmVyLnN1YnN0cigxKSwgMTApIC0gMTsgLy8gI2FyZ1xuICAgICAgaWYgKCBpID49IGFyZ3NbMV0ubGVuZ3RoICkgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0aW5nICR7YXJnLmJ1ZmZlcn0gYnV0IG9ubHkgZ290ICR7YXJnc1sxXS5sZW5ndGh9IGFyZ3VtZW50cy5gKSA7XG4gICAgICBjb25zdCBzdWJ0cmVlID0gYXJnc1sxXVtpXSA7IC8vIGFyZ1xuICAgICAgcmV0dXJuIHQoIHN1YnRyZWUgLCBtYXRjaCAsIHsgYXJnczogYXJnc1swXSAsIHZhcmlhYmxlcyB9ICkgO1xuICAgIH0gLFxuXG4gICAgXCIkXCIgOiB0cmVlID0+IHRyZWUgLFxuXG4gICAgXCJtYXRoXCIgOiByZWN1cnNlKCdzb21ldGhpbmctZWxzZScsICdtYXRoJykgLFxuICAgIFwibWF0aGVudlwiIDogcmVjdXJzZSgnc29tZXRoaW5nLWVsc2UnLCAnbWF0aGVudicpICxcblxuICB9ICxcblxuICBcImVuZGlmXCI6IHtcbiAgICBcImVsc2VmaVwiIDogcmVjdXJzZSggJ2VuZGlmJywgJ2Vsc2VmaScgKSAsXG4gICAgXCJmaVwiIDogdHJlZSA9PiB0cmVlICxcbiAgfSAsXG5cbiAgXCJjbWRkZWZcIiA6IHtcblxuICAgIFwie2NtZH1beF17YW55dGhpbmd9XCI6IGFzeW5jICggdHJlZSAsIF8gLCB7IHZhcmlhYmxlcyB9ICkgPT4ge1xuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB7XG4gICAgICBjb25zdCBvdGhlcmNtZCA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgY21kID0gb3RoZXJjbWQuYnVmZmVyO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIH1cbiAgICAgIGNvbnN0IGNtZGRlZmFyZ3MgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIGxldCBuYXJncyA9IDA7XG4gICAgICBpZiAoY21kZGVmYXJncy5wcm9kdWN0aW9uID09PSAneWVzJykge1xuXHRjb25zdCBpdDIgPSBpdGVyKGNtZGRlZmFyZ3MuY2hpbGRyZW4pO1xuXHRhd2FpdCBuZXh0KGl0MikgOyAvLyBbXG5cdGNvbnN0IHRleHQgPSBhd2FpdCBuZXh0KGl0MikgO1xuXHRuYXJncyA9IHBhcnNlSW50KHRleHQuYnVmZmVyLCAxMCk7XG5cdGF3YWl0IG5leHQoaXQyKSA7IC8vIF1cbiAgICAgIH1cbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB7XG4gICAgICBjb25zdCBhbnl0aGluZyA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZykgO1xuICAgICAgdmFyaWFibGVzLmdldCgnY21kJykuc2V0KGNtZCwgWyBuYXJncyAsIG51bGwgLCBibG9iIF0pO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIH1cbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcblxuICAgIFwiY21kW3hde2FueXRoaW5nfVwiOiBhc3luYyAoIHRyZWUgLCBfICwgeyB2YXJpYWJsZXMgfSApID0+IHtcbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG4gICAgICBjb25zdCBvdGhlcmNtZCA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgY21kID0gb3RoZXJjbWQuYnVmZmVyO1xuICAgICAgY29uc3QgY21kZGVmYXJncyA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgbGV0IG5hcmdzID0gMDtcbiAgICAgIGlmIChjbWRkZWZhcmdzLnByb2R1Y3Rpb24gPT09ICd5ZXMnKSB7XG5cdGNvbnN0IGl0MiA9IGl0ZXIoY21kZGVmYXJncy5jaGlsZHJlbik7XG5cdGF3YWl0IG5leHQoaXQyKSA7IC8vIFtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IG5leHQoaXQyKSA7XG5cdG5hcmdzID0gcGFyc2VJbnQodGV4dC5idWZmZXIsIDEwKTtcblx0YXdhaXQgbmV4dChpdDIpIDsgLy8gXVxuICAgICAgfVxuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIHtcbiAgICAgIGNvbnN0IGFueXRoaW5nID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGFueXRoaW5nKSA7XG4gICAgICB2YXJpYWJsZXMuZ2V0KCdjbWQnKS5zZXQoY21kLCBbIG5hcmdzICwgbnVsbCAsYmxvYiBdKTtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB9XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSAsXG5cbiAgICBcIipjbWRbeF17YW55dGhpbmd9XCI6IGFzeW5jICggdHJlZSAsIF8gLCB7IHZhcmlhYmxlcyB9ICkgPT4ge1xuICAgICAgLy8gZG8gbm90IGtub3cgd2hhdCB0byBkbyB3aXRoICcqJyBhdCB0aGUgbW9tZW50XG4gICAgICAvLyBzZWUgaHR0cHM6Ly90ZXguc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzEwNTAvd2hhdHMtdGhlLWRpZmZlcmVuY2UtYmV0d2Vlbi1uZXdjb21tYW5kLWFuZC1uZXdjb21tYW5kXG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vICpcbiAgICAgIGNvbnN0IG90aGVyY21kID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBjbWQgPSBvdGhlcmNtZC5idWZmZXI7XG4gICAgICBjb25zdCBjbWRkZWZhcmdzID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBsZXQgbmFyZ3MgPSAwO1xuICAgICAgaWYgKGNtZGRlZmFyZ3MucHJvZHVjdGlvbiA9PT0gJ3llcycpIHtcblx0Y29uc3QgaXQyID0gaXRlcihjbWRkZWZhcmdzLmNoaWxkcmVuKTtcblx0YXdhaXQgbmV4dChpdDIpIDsgLy8gW1xuXHRjb25zdCB0ZXh0ID0gYXdhaXQgbmV4dChpdDIpIDtcblx0bmFyZ3MgPSBwYXJzZUludCh0ZXh0LmJ1ZmZlciwgMTApO1xuXHRhd2FpdCBuZXh0KGl0MikgOyAvLyBdXG4gICAgICB9XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8ge1xuICAgICAgY29uc3QgYW55dGhpbmcgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYW55dGhpbmcpIDtcbiAgICAgIHZhcmlhYmxlcy5nZXQoJ2NtZCcpLnNldChjbWQsIFsgbmFyZ3MgLCBudWxsICxibG9iIF0pO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIH1cbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcblxuICB9ICxcblxuICBcImNtZGRlZmFyZ3NcIjoge1xuICAgIFwieWVzXCIgOiBlcnIoIFwiY21kZGVmYXJnc1wiICwgXCJ5ZXNcIiApICxcbiAgICBcIm5vXCIgOiBlcnIoIFwiY21kZGVmYXJnc1wiICwgXCJub1wiICkgLFxuICB9ICxcblxuICBcImVudmlyb25tZW50LWRlZmluaXRpb25cIiA6IHtcbiAgICBcIntlbnZuYW1lfVtuYXJnc11bZGVmYXVsdF17YmVnaW59e2VuZH1cIiA6ICBhc3luYyAoIHRyZWUgLCBfICwgeyB2YXJpYWJsZXMgfSApID0+IHtcbiAgICAgIC8vIGRvIG5vdCBrbm93IHdoYXQgdG8gZG8gd2l0aCAnKicgYXQgdGhlIG1vbWVudFxuICAgICAgLy8gc2VlIGh0dHBzOi8vdGV4LnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8xMDUwL3doYXRzLXRoZS1kaWZmZXJlbmNlLWJldHdlZW4tbmV3Y29tbWFuZC1hbmQtbmV3Y29tbWFuZFxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcbiAgICAgIC8vYXdhaXQgbmV4dChpdCk7IC8vICpcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB7XG4gICAgICBjb25zdCBlbnZ0ZXh0ID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBlbnYgPSBlbnZ0ZXh0LmJ1ZmZlcjtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB9XG4gICAgICBjb25zdCBhcmdzID0gYXdhaXQgbmV4dChpdCk7IC8vIFtuYXJnc11bZGVmYXVsdF1cbiAgICAgIGxldCBuYXJncyA9IDA7XG4gICAgICBsZXQgZGZsdGFyZyA9IG51bGw7XG4gICAgICBpZiAoYXJncy5wcm9kdWN0aW9uID09PSAneWVzJykge1xuXHRjb25zdCBpdDIgPSBpdGVyKGFyZ3MuY2hpbGRyZW4pO1xuXHRhd2FpdCBuZXh0KGl0MikgOyAvLyBbXG5cdGNvbnN0IHRleHQgPSBhd2FpdCBuZXh0KGl0MikgO1xuXHRuYXJncyA9IHBhcnNlSW50KHRleHQuYnVmZmVyLCAxMCk7XG5cdGF3YWl0IG5leHQoaXQyKSA7IC8vIF1cblxuXHRjb25zdCBkZmx0ID0gYXdhaXQgbmV4dChpdDIpIDtcblx0aWYgKCBkZmx0LnByb2R1Y3Rpb24gPT09ICd5ZXMnICkge1xuXHQgIGNvbnN0IGl0MyA9IGl0ZXIoZGZsdC5jaGlsZHJlbik7XG5cdCAgYXdhaXQgbmV4dChpdDMpIDsgLy8gW1xuXHQgIGNvbnN0IGFueXRoaW5nMyA9IGF3YWl0IG5leHQoaXQzKTtcblx0ICBkZmx0YXJnID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGFueXRoaW5nMykgO1xuXHQgIGF3YWl0IG5leHQoaXQzKSA7IC8vIF1cblx0fVxuXG4gICAgICB9XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8ge1xuICAgICAgY29uc3QgYW55dGhpbmcxID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBiZWdpbiA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZzEpIDtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB9XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8ge1xuICAgICAgY29uc3QgYW55dGhpbmcyID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBlbmQgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYW55dGhpbmcyKSA7XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8gfVxuICAgICAgdmFyaWFibGVzLmdldCgnZW52Jykuc2V0KGVudiwgWyBuYXJncyAsIGRmbHRhcmcgLCBiZWdpbiAsIGVuZCBdKTtcbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcbiAgICAvL1wie2Vudm5hbWV9W25hcmdzXVtkZWZhdWx0XXtiZWdpbn17ZW5kfVwiIDogcmVjdXJzZSggJ2Vudmlyb25tZW50LWRlZmluaXRpb24nICwgJ3tlbnZuYW1lfVtuYXJnc11bZGVmYXVsdF17YmVnaW59e2VuZH0nICkgLFxuICAgIFwiKntlbnZuYW1lfVtuYXJnc11bZGVmYXVsdF17YmVnaW59e2VuZH1cIiA6IHJlY3Vyc2UoICdlbnZpcm9ubWVudC1kZWZpbml0aW9uJyAsICcqe2Vudm5hbWV9W25hcmdzXVtkZWZhdWx0XXtiZWdpbn17ZW5kfScgKSAsXG4gIH0gLFxuICBcImFyZ3VtZW50cy1mb3ItZW52aXJvbm1lbnQtZGVmaW5pdGlvblwiIDoge1xuICAgIFwieWVzXCIgOiByZWN1cnNlKCdhcmd1bWVudHMtZm9yLWVudmlyb25tZW50LWRlZmluaXRpb24nICwgJ3llcycgKSAsXG4gICAgXCJub1wiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcbiAgXCJkZWZhdWx0LWFyZ3VtZW50LWZvci1lbnZpcm9ubWVudC1kZWZpbml0aW9uXCIgOiB7XG4gICAgXCJ5ZXNcIiA6IHJlY3Vyc2UoJ2RlZmF1bHQtYXJndW1lbnQtZm9yLWVudmlyb25tZW50LWRlZmluaXRpb24nICwgJ3llcycgKSAsXG4gICAgXCJub1wiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcbiAgLy9cImVudmRlZlwiIDoge1xuICAgIC8vXCJ7ZW52bmFtZX1bbmFyZ3NdW2RlZmF1bHRde2JlZ2lufXtlbmR9XCI6IGFzeW5jICggdHJlZSAsIF8gLCB7IHZhcmlhYmxlcyB9ICkgPT4ge1xuICAgICAgIC8vZG8gbm90IGtub3cgd2hhdCB0byBkbyB3aXRoICcqJyBhdCB0aGUgbW9tZW50XG4gICAgICAvL2NvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG4gICAgICAvL2F3YWl0IG5leHQoaXQpOyAvLyAqXG4gICAgICAvL2NvbnN0IGVudnRleHQgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIC8vY29uc3QgZW52ID0gZW52dGV4dC5idWZmZXI7XG4gICAgICAvL2NvbnN0IGVudmRlZmFyZ3MgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIC8vbGV0IG5hcmdzID0gMDtcbiAgICAgIC8vbGV0IGRlZmF1bHRhcmcgPSBudWxsO1xuICAgICAgLy9pZiAoZW52ZGVmYXJncy5wcm9kdWN0aW9uID09PSAneWVzJykge1xuXHQvL2NvbnN0IGl0MiA9IGl0ZXIoZW52ZGVmYXJncy5jaGlsZHJlbik7XG5cdC8vYXdhaXQgbmV4dChpdDIpIDsgLy8gW1xuXHQvL2NvbnN0IHRleHQgPSBhd2FpdCBuZXh0KGl0MikgO1xuXHQvL25hcmdzID0gcGFyc2VJbnQodGV4dC5idWZmZXIsIDEwKTtcblx0Ly9hd2FpdCBuZXh0KGl0MikgOyAvLyBdXG5cdC8vY29uc3QgZW52ZGVmZGVmYXVsdCA9IGF3YWl0IG5leHQoaXQyKSA7XG5cdC8vaWYgKGVudmRlZmRlZmF1bHQucHJvZHVjdGlvbiA9PT0gJ3llcycpIHtcblx0ICAvL2NvbnN0IGl0MyA9IGl0ZXIoZW52ZGVmZGVmYXVsdC5jaGlsZHJlbik7XG5cdCAgLy9hd2FpdCBuZXh0KGl0MykgOyAvLyBbXG5cdCAgLy9jb25zdCBkZWZhdWx0YXJndHJlZSA9IGF3YWl0IG5leHQoaXQyKSA7XG5cdCAgLy9kZWZhdWx0YXJnID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGRlZmF1bHRhcmd0cmVlKSA7XG5cdCAgLy9hd2FpdCBuZXh0KGl0MykgOyAvLyBdXG5cdC8vfVxuICAgICAgLy99XG4gICAgICAvL2F3YWl0IG5leHQoaXQpOyAvLyB7XG4gICAgICAvL2NvbnN0IGJlZ2ludHJlZSA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgLy9jb25zdCBiZWdpbiA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShiZWdpbnRyZWUpIDtcbiAgICAgIC8vYXdhaXQgbmV4dChpdCk7IC8vIH1cbiAgICAgIC8vYXdhaXQgbmV4dChpdCk7IC8vIHtcbiAgICAgIC8vY29uc3QgZW5kdHJlZSA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgLy9jb25zdCBlbmQgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoZW5kdHJlZSkgO1xuICAgICAgLy92YXJpYWJsZXMuZ2V0KCdlbnYnKS5zZXQoZW52LCBbIG5hcmdzICwgZGVmYXVsdGFyZyAsIGJlZ2luICwgZW5kIF0pO1xuICAgICAgLy9hd2FpdCBuZXh0KGl0KTsgLy8gfVxuICAgICAgLy9yZXR1cm4gZW1wdHk7XG4gICAgLy99ICxcbiAgICAvL1wiKntlbnZuYW1lfVtuYXJnc11bZGVmYXVsdF17YmVnaW59e2VuZH1cIjogcmVjdXJzZShcImVudmRlZlwiLCBcIip7ZW52bmFtZX1bbmFyZ3NdW2RlZmF1bHRde2JlZ2lufXtlbmR9XCIpLFxuICAvL30gLFxuXG4gIC8vXCJlbnZkZWZhcmdzXCI6IHtcbiAgICAvL1wieWVzXCIgOiByZWN1cnNlKCBcImVudmRlZmFyZ3NcIiAsIFwieWVzXCIgKSAsXG4gICAgLy9cIm5vXCIgOiByZWN1cnNlKCBcImVudmRlZmFyZ3NcIiAsIFwibm9cIiApICxcbiAgLy99ICxcblxuICAvL1wiZW52ZGVmZGVmYXVsdFwiOiB7XG4gICAgLy9cInllc1wiIDogcmVjdXJzZSggXCJlbnZkZWZkZWZhdWx0XCIgLCBcInllc1wiICkgLFxuICAgIC8vXCJub1wiIDogcmVjdXJzZSggXCJlbnZkZWZkZWZhdWx0XCIgLCBcIm5vXCIgKSAsXG4gIC8vfSAsXG5cbiAgXCJjbWQqXCI6IHtcbiAgICBcInllc1wiIDogZXJyKCBcImNtZCpcIiAsIFwieWVzXCIgKSAsXG4gICAgXCJub1wiIDogZXJyKCBcImNtZCpcIiAsIFwibm9cIiApICxcbiAgfSAsXG5cbiAgXCJjbWRhcmdzXCI6IHtcbiAgICBcIm5vcm1hbFwiIDogcmVjdXJzZSgnY21kYXJncycsICdub3JtYWwnKSAsXG4gICAgXCJvcHRpb25hbFwiIDogcmVjdXJzZSgnY21kYXJncycsICdvcHRpb25hbCcpICxcbiAgICBcImVuZFwiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcblxuICBcImNtZGFmdGVyXCI6IHtcbiAgICBcIm90aGVyY21kXCIgOiByZWN1cnNlKCdjbWRhZnRlcicsICdvdGhlcmNtZCcgKSAsXG4gICAgXCJzb21ldGhpbmctZWxzZS10aGVuLWFueXRoaW5nXCIgOiByZWN1cnNlKCdjbWRhZnRlcicsICdzb21ldGhpbmctZWxzZS10aGVuLWFueXRoaW5nJyApICxcbiAgICBcIl0tdGhlbi1hbnl0aGluZ1wiIDogcmVjdXJzZSgnY21kYWZ0ZXInLCAnXS10aGVuLWFueXRoaW5nJyApICxcbiAgICBcIm5vdGhpbmdcIiA6ICgpID0+IGVtcHR5ICxcbiAgfSAsXG5cbiAgXCJjbWRhZnRlci1idXQtbm90LV1cIjoge1xuICAgIFwib3RoZXJjbWRcIiA6IHJlY3Vyc2UoJ2NtZGFmdGVyLWJ1dC1ub3QtXScsICdvdGhlcmNtZCcgKSAsXG4gICAgXCJzb21ldGhpbmctZWxzZS10aGVuLWFueXRoaW5nXCIgOiByZWN1cnNlKCdjbWRhZnRlci1idXQtbm90LV0nLCAnc29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZycgKSAsXG4gICAgXCJub3RoaW5nXCIgOiAoKSA9PiBlbXB0eSAsXG4gIH0gLFxuXG59IDtcbiJdfQ==