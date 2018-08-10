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
  regeneratorRuntime.mark(function _callee14(iterator) {
    var dflt,
        x,
        _args14 = arguments;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            dflt = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : undefined;
            _context14.next = 3;
            return iterator.next();

          case 3:
            x = _context14.sent;

            if (!x.done) {
              _context14.next = 10;
              break;
            }

            if (!(dflt === undefined)) {
              _context14.next = 9;
              break;
            }

            throw new _jsItertools.StopIteration();

          case 9:
            return _context14.abrupt("return", dflt);

          case 10:
            return _context14.abrupt("return", x.value);

          case 11:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this);
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
    "starts-with-*": recurse('anything', 'starts-with-*'),
    "starts-with-[": recurse('anything', 'starts-with-['),
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
        var it, othercmd, cmd, optstar, args, cmdargs, arg_i, _arg_i$children, group, tail, _group$children, _open, arg, _close, hasoptargs, _ctx$variables$get, _ctx$variables$get2, nargs, expandsto;

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

                if (!(!hasoptargs && ctx.variables.has(cmd))) {
                  _context4.next = 31;
                  break;
                }

                // too hard to parse opt args currently
                _ctx$variables$get = ctx.variables.get(cmd), _ctx$variables$get2 = _slicedToArray(_ctx$variables$get, 2), nargs = _ctx$variables$get2[0], expandsto = _ctx$variables$get2[1];

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
      regeneratorRuntime.mark(function _callee5(tree, match, ctx) {
        var it, ifcmd, variable, flag, block1, endif, _endif$children, _else, block2, _fi;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                it = iter(tree.children);
                _context5.next = 3;
                return next(it);

              case 3:
                ifcmd = _context5.sent;
                // \if...
                variable = ifcmd.buffer.substr(3);

                if (!ctx.variables.has(variable)) {
                  _context5.next = 27;
                  break;
                }

                flag = ctx.variables.get(variable);
                _context5.next = 9;
                return next(it);

              case 9:
                block1 = _context5.sent;

                if (!flag) {
                  _context5.next = 14;
                  break;
                }

                return _context5.abrupt("return", t(block1, match, ctx));

              case 14:
                _context5.t0 = _jsGrammar.ast;
                _context5.next = 17;
                return next(it);

              case 17:
                _context5.t1 = _context5.sent;
                _context5.next = 20;
                return _context5.t0.materialize.call(_context5.t0, _context5.t1);

              case 20:
                endif = _context5.sent;

                if (!(endif.production === "elsefi")) {
                  _context5.next = 26;
                  break;
                }

                _endif$children = _slicedToArray(endif.children, 3), _else = _endif$children[0], block2 = _endif$children[1], _fi = _endif$children[2];
                return _context5.abrupt("return", t(block2, match, ctx));

              case 26:
                return _context5.abrupt("return", empty);

              case 27:
                return _context5.abrupt("return", {
                  'type': 'node',
                  'nonterminal': 'something-else',
                  'production': 'ifcmd',
                  'children': chain([[ifcmd], m(it, match, ctx)])
                });

              case 28:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function ifcmd(_x8, _x9, _x10) {
        return _ifcmd.apply(this, arguments);
      };
    }(),
    "falsecmd": function () {
      var _falsecmd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(tree, _, ctx) {
        var falsecmd, buffer, variable;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return next(iter(tree.children));

              case 2:
                falsecmd = _context6.sent;
                buffer = falsecmd.buffer;
                variable = buffer.substring(1, buffer.length - 5);
                ctx.variables.set(variable, false);
                return _context6.abrupt("return", empty);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function falsecmd(_x11, _x12, _x13) {
        return _falsecmd.apply(this, arguments);
      };
    }(),
    "truecmd": function () {
      var _truecmd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(tree, _, ctx) {
        var truecmd, buffer, variable;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return next(iter(tree.children));

              case 2:
                truecmd = _context7.sent;
                buffer = truecmd.buffer;
                variable = buffer.substring(1, buffer.length - 4);
                ctx.variables.set(variable, true);
                return _context7.abrupt("return", empty);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function truecmd(_x14, _x15, _x16) {
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
      regeneratorRuntime.mark(function _callee8(tree, match, _ref3) {
        var variables, it, othercmd, cmd, anything, blob;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                variables = _ref3.variables;
                it = iter(tree.children);
                _context8.next = 4;
                return next(it);

              case 4:
                _context8.next = 6;
                return next(it);

              case 6:
                othercmd = _context8.sent;
                cmd = othercmd.buffer;
                _context8.next = 10;
                return next(it);

              case 10:
                _context8.next = 12;
                return next(it);

              case 12:
                anything = _context8.sent;
                _context8.next = 15;
                return _jsGrammar.ast.materialize(anything);

              case 15:
                blob = _context8.sent;
                variables.set(cmd, [0, blob]);
                _context8.next = 19;
                return next(it);

              case 19:
                return _context8.abrupt("return", empty);

              case 20:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function def(_x17, _x18, _x19) {
        return _def.apply(this, arguments);
      };
    }(),
    "newcommand": function () {
      var _newcommand = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(tree, match, ctx) {
        var it, cmddef;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                it = iter(tree.children);
                _context9.next = 3;
                return next(it);

              case 3:
                _context9.next = 5;
                return next(it);

              case 5:
                cmddef = _context9.sent;
                return _context9.abrupt("return", t(cmddef, match, ctx));

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function newcommand(_x20, _x21, _x22) {
        return _newcommand.apply(this, arguments);
      };
    }(),
    "\n": function _(tree) {
      return tree;
    },
    "arg": function () {
      var _arg = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(tree, match, _ref4) {
        var args, variables, arg, i, subtree;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                args = _ref4.args, variables = _ref4.variables;
                _context10.next = 3;
                return next(iter(tree.children));

              case 3:
                arg = _context10.sent;

                if (!(args.length < 2)) {
                  _context10.next = 6;
                  break;
                }

                throw new Error("Requesting ".concat(arg.buffer, " but got no arguments in context."));

              case 6:
                i = parseInt(arg.buffer.substr(1), 10) - 1; // #arg

                if (!(i >= args[1].length)) {
                  _context10.next = 9;
                  break;
                }

                throw new Error("Requesting ".concat(arg.buffer, " but only got ").concat(args[1].length, " arguments."));

              case 9:
                subtree = args[1][i]; // arg

                return _context10.abrupt("return", t(subtree, match, {
                  args: args[0],
                  variables: variables
                }));

              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function arg(_x23, _x24, _x25) {
        return _arg.apply(this, arguments);
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
      regeneratorRuntime.mark(function _callee11(tree, _, _ref5) {
        var variables, it, othercmd, cmd, cmddefargs, nargs, it2, text, anything, blob;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                variables = _ref5.variables;
                it = iter(tree.children);
                _context11.next = 4;
                return next(it);

              case 4:
                _context11.next = 6;
                return next(it);

              case 6:
                othercmd = _context11.sent;
                cmd = othercmd.buffer;
                _context11.next = 10;
                return next(it);

              case 10:
                _context11.next = 12;
                return next(it);

              case 12:
                cmddefargs = _context11.sent;
                nargs = 0;

                if (!(cmddefargs.production === 'yes')) {
                  _context11.next = 24;
                  break;
                }

                it2 = iter(cmddefargs.children);
                _context11.next = 18;
                return next(it2);

              case 18:
                _context11.next = 20;
                return next(it2);

              case 20:
                text = _context11.sent;
                nargs = parseInt(text.buffer, 10);
                _context11.next = 24;
                return next(it2);

              case 24:
                _context11.next = 26;
                return next(it);

              case 26:
                _context11.next = 28;
                return next(it);

              case 28:
                anything = _context11.sent;
                _context11.next = 31;
                return _jsGrammar.ast.materialize(anything);

              case 31:
                blob = _context11.sent;
                variables.set(cmd, [nargs, blob]);
                _context11.next = 35;
                return next(it);

              case 35:
                return _context11.abrupt("return", empty);

              case 36:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function cmdXAnything(_x26, _x27, _x28) {
        return _cmdXAnything.apply(this, arguments);
      };
    }(),
    "cmd[x]{anything}": function () {
      var _cmdXAnything2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(tree, _, _ref6) {
        var variables, it, othercmd, cmd, cmddefargs, nargs, it2, text, anything, blob;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                variables = _ref6.variables;
                it = iter(tree.children);
                _context12.next = 4;
                return next(it);

              case 4:
                othercmd = _context12.sent;
                cmd = othercmd.buffer;
                _context12.next = 8;
                return next(it);

              case 8:
                cmddefargs = _context12.sent;
                nargs = 0;

                if (!(cmddefargs.production === 'yes')) {
                  _context12.next = 20;
                  break;
                }

                it2 = iter(cmddefargs.children);
                _context12.next = 14;
                return next(it2);

              case 14:
                _context12.next = 16;
                return next(it2);

              case 16:
                text = _context12.sent;
                nargs = parseInt(text.buffer, 10);
                _context12.next = 20;
                return next(it2);

              case 20:
                _context12.next = 22;
                return next(it);

              case 22:
                _context12.next = 24;
                return next(it);

              case 24:
                anything = _context12.sent;
                _context12.next = 27;
                return _jsGrammar.ast.materialize(anything);

              case 27:
                blob = _context12.sent;
                variables.set(cmd, [nargs, blob]);
                _context12.next = 31;
                return next(it);

              case 31:
                return _context12.abrupt("return", empty);

              case 32:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function cmdXAnything(_x29, _x30, _x31) {
        return _cmdXAnything2.apply(this, arguments);
      };
    }(),
    "*cmd[x]{anything}": function () {
      var _cmdXAnything3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(tree, _, _ref7) {
        var variables, it, othercmd, cmd, cmddefargs, nargs, it2, text, anything, blob;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                variables = _ref7.variables;
                // do not know what to do with '*' at the moment
                it = iter(tree.children);
                _context13.next = 4;
                return next(it);

              case 4:
                _context13.next = 6;
                return next(it);

              case 6:
                othercmd = _context13.sent;
                cmd = othercmd.buffer;
                _context13.next = 10;
                return next(it);

              case 10:
                cmddefargs = _context13.sent;
                nargs = 0;

                if (!(cmddefargs.production === 'yes')) {
                  _context13.next = 22;
                  break;
                }

                it2 = iter(cmddefargs.children);
                _context13.next = 16;
                return next(it2);

              case 16:
                _context13.next = 18;
                return next(it2);

              case 18:
                text = _context13.sent;
                nargs = parseInt(text.buffer, 10);
                _context13.next = 22;
                return next(it2);

              case 22:
                _context13.next = 24;
                return next(it);

              case 24:
                _context13.next = 26;
                return next(it);

              case 26:
                anything = _context13.sent;
                _context13.next = 29;
                return _jsGrammar.ast.materialize(anything);

              case 29:
                blob = _context13.sent;
                variables.set(cmd, [nargs, blob]);
                _context13.next = 33;
                return next(it);

              case 33:
                return _context13.abrupt("return", empty);

              case 34:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function cmdXAnything(_x32, _x33, _x34) {
        return _cmdXAnything3.apply(this, arguments);
      };
    }()
  },
  "cmddefargs": {
    "yes": err("cmddefargs", "yes"),
    "no": err("cmddefargs", "no")
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZXIuanMiXSwibmFtZXMiOlsiaXRlciIsIm9iamVjdCIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJpdGVyYXRvciIsIm5leHQiLCJkZmx0IiwidW5kZWZpbmVkIiwieCIsImRvbmUiLCJTdG9wSXRlcmF0aW9uIiwidmFsdWUiLCJjaGFpbiIsIml0ZXJhYmxlcyIsIml0ZXJhYmxlIiwiaXRlbSIsImVtcHR5IiwiZXJyIiwibm9udGVybWluYWwiLCJwcm9kdWN0aW9uIiwiRXJyb3IiLCJ0IiwiYXN0IiwidHJhbnNmb3JtIiwibSIsImNoaWxkcmVuIiwibWF0Y2giLCJjdHgiLCJjbWFwIiwiY2hpbGQiLCJyZWN1cnNlIiwidHJlZSIsInR5cGUiLCJpdCIsIm90aGVyY21kIiwiY21kIiwiYnVmZmVyIiwibWF0ZXJpYWxpemUiLCJvcHRzdGFyIiwiYXJncyIsImNtZGFyZ3MiLCJhcmdfaSIsImdyb3VwIiwidGFpbCIsIl9vcGVuIiwiYXJnIiwiX2Nsb3NlIiwicHVzaCIsImhhc29wdGFyZ3MiLCJ2YXJpYWJsZXMiLCJoYXMiLCJnZXQiLCJuYXJncyIsImV4cGFuZHN0byIsImxlbmd0aCIsImlmY21kIiwidmFyaWFibGUiLCJzdWJzdHIiLCJmbGFnIiwiYmxvY2sxIiwiZW5kaWYiLCJfZWxzZSIsImJsb2NrMiIsIl9maSIsIl8iLCJmYWxzZWNtZCIsInN1YnN0cmluZyIsInNldCIsInRydWVjbWQiLCJhbnl0aGluZyIsImJsb2IiLCJjbWRkZWYiLCJpIiwicGFyc2VJbnQiLCJzdWJ0cmVlIiwiY21kZGVmYXJncyIsIml0MiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsU0FBU0EsSUFBVCxDQUFnQkMsTUFBaEIsRUFBeUI7QUFDdkI7QUFDQSxNQUFLQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsYUFBUixDQUFYLEVBQW9DLE9BQU9GLE1BQU0s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QXBRSztBQXlRYixhQUFXO0FBQ1QsY0FBV2EsT0FBTyxDQUFDLFNBQUQsRUFBWSxRQUFaLENBRFQ7QUFFVCxnQkFBYUEsT0FBTyxDQUFDLFNBQUQsRUFBWSxVQUFaLENBRlg7QUFHVCxXQUFRO0FBQUEsYUFBTWQsS0FBTjtBQUFBO0FBSEMsR0F6UUU7QUErUWIsY0FBWTtBQUNWLGdCQUFhYyxPQUFPLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FEVjtBQUVWLG9DQUFpQ0EsT0FBTyxDQUFDLFVBQUQsRUFBYSw4QkFBYixDQUY5QjtBQUdWLHVCQUFvQkEsT0FBTyxDQUFDLFVBQUQsRUFBYSxpQkFBYixDQUhqQjtBQUlWLGVBQVk7QUFBQSxhQUFNZCxLQUFOO0FBQUE7QUFKRixHQS9RQztBQXNSYix3QkFBc0I7QUFDcEIsZ0JBQWFjLE9BQU8sQ0FBQyxvQkFBRCxFQUF1QixVQUF2QixDQURBO0FBRXBCLG9DQUFpQ0EsT0FBTyxDQUFDLG9CQUFELEVBQXVCLDhCQUF2QixDQUZwQjtBQUdwQixlQUFZO0FBQUEsYUFBTWQsS0FBTjtBQUFBO0FBSFE7QUF0UlQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3BJdGVyYXRpb24gfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBhc3QgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuXG4vLyBUT0RPIGNyZWF0ZSBsaWJyYXJ5IHdpdGggdGhvc2VcbmZ1bmN0aW9uIGl0ZXIgKCBvYmplY3QgKSB7XG4gIC8vIG1heWJlIHdlIGRvIG5vdCBldmVuIG5lZWQgdGhlIHNlY29uZCBjYXNlXG4gIGlmICggb2JqZWN0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSApIHJldHVybiBvYmplY3RbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkgO1xuICBlbHNlIHJldHVybiBvYmplY3RbU3ltYm9sLml0ZXJhdG9yXSgpIDtcbn1cblxuLy8gVE9ETyBjcmVhdGUgbGlicmFyeSB3aXRoIHRob3NlXG5hc3luYyBmdW5jdGlvbiBuZXh0ICggaXRlcmF0b3IgLCBkZmx0ID0gdW5kZWZpbmVkICkge1xuXG4gIGNvbnN0IHggPSBhd2FpdCBpdGVyYXRvci5uZXh0KCApIDtcblxuICBpZiAoIHguZG9uZSApIHtcbiAgICBpZiAoIGRmbHQgPT09IHVuZGVmaW5lZCApIHRocm93IG5ldyBTdG9wSXRlcmF0aW9uKCkgO1xuICAgIGVsc2UgcmV0dXJuIGRmbHQgO1xuICB9XG5cbiAgcmV0dXJuIHgudmFsdWUgO1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uKiBjaGFpbiAoIGl0ZXJhYmxlcyApIHtcblxuICBmb3IgKCBjb25zdCBpdGVyYWJsZSBvZiBpdGVyYWJsZXMgKSB7XG4gICAgaWYgKCBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdICkgeWllbGQqIGl0ZXJhYmxlIDtcbiAgICBlbHNlIGZvciBhd2FpdCAoIGNvbnN0IGl0ZW0gb2YgaXRlcmFibGUgKSB5aWVsZCBpdGVtIDtcbiAgfVxuXG59XG5cblxuY29uc3QgZW1wdHkgPSB7XG4gICd0eXBlJyA6ICdub2RlJyAsXG4gICdub250ZXJtaW5hbCcgOiAnZW1wdHknICxcbiAgJ3Byb2R1Y3Rpb24nIDogJ21haW4nICxcbiAgJ2NoaWxkcmVuJyA6IFtdICxcbn0gO1xuXG5jb25zdCBlcnIgPSAoIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbiApID0+ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGAke25vbnRlcm1pbmFsfS4ke3Byb2R1Y3Rpb259IHNob3VsZCBoYXZlIGJlZW4gaGFuZGxlZCBiZWZvcmVgKTtcbn0gO1xuXG5jb25zdCB0ID0gYXN0LnRyYW5zZm9ybSA7XG5jb25zdCBtID0gKCBjaGlsZHJlbiAsIG1hdGNoICwgY3R4ICkgPT4gYXN0LmNtYXAoIGFzeW5jIGNoaWxkID0+IGF3YWl0IHQoIGNoaWxkICwgbWF0Y2ggLCBjdHggKSAsIGNoaWxkcmVuICkgO1xuXG5jb25zdCByZWN1cnNlID0gKCBub250ZXJtaW5hbCAsIHByb2R1Y3Rpb24gKSA9PiAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+ICh7XG4gIFwidHlwZVwiIDogXCJub2RlXCIgLFxuICBub250ZXJtaW5hbCAsXG4gIHByb2R1Y3Rpb24gLFxuICBcImNoaWxkcmVuXCIgOiBhc3QuY21hcCggYXN5bmMgeCA9PiB4LnR5cGUgPT09ICdsZWFmJyA/IHggOiBhd2FpdCB0KCB4ICwgbWF0Y2ggLCBjdHggKSAsIHRyZWUuY2hpbGRyZW4gKSAsXG59KSA7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIFwiZG9jdW1lbnRcIiA6IHtcbiAgICBcImNvbnRlbnRzXCIgOiByZWN1cnNlKCAnZG9jdW1lbnQnICwgJ2NvbnRlbnRzJyApICxcbiAgfSAsXG5cbiAgXCJhbnl0aGluZ1wiIDoge1xuICAgIFwic3RhcnRzLXdpdGgtb3RoZXJjbWRcIiA6IHJlY3Vyc2UoICdhbnl0aGluZycgLCAnc3RhcnRzLXdpdGgtb3RoZXJjbWQnICkgLFxuICAgIFwic3RhcnRzLXdpdGgtKlwiIDogcmVjdXJzZSggJ2FueXRoaW5nJyAsICdzdGFydHMtd2l0aC0qJyApICxcbiAgICBcInN0YXJ0cy13aXRoLVtcIiA6IHJlY3Vyc2UoICdhbnl0aGluZycgLCAnc3RhcnRzLXdpdGgtWycgKSAsXG4gICAgXCJzdGFydHMtd2l0aC1dXCIgOiByZWN1cnNlKCAnYW55dGhpbmcnICwgJ3N0YXJ0cy13aXRoLV0nICkgLFxuICAgIFwic3RhcnRzLXdpdGgtYS1ncm91cFwiIDogcmVjdXJzZSggJ2FueXRoaW5nJyAsICdzdGFydHMtd2l0aC1hLWdyb3VwJyApICxcbiAgICBcInN0YXJ0cy13aXRoLXNvbWV0aGluZy1lbHNlXCIgOiByZWN1cnNlKCAnYW55dGhpbmcnICwgJ3N0YXJ0cy13aXRoLXNvbWV0aGluZy1lbHNlJyApICxcbiAgICBcImVuZFwiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcblxuICBcImFueXRoaW5nLWJ1dC1dXCIgOiB7XG4gICAgXCJzdGFydHMtd2l0aC1vdGhlcmNtZFwiIDogcmVjdXJzZSggJ2FueXRoaW5nLWJ1dC1dJyAsICdzdGFydHMtd2l0aC1vdGhlcmNtZCcgKSAsXG4gICAgXCJzdGFydHMtd2l0aC0qXCIgOiByZWN1cnNlKCAnYW55dGhpbmcnICwgJ3N0YXJ0cy13aXRoLSonICkgLFxuICAgIFwic3RhcnRzLXdpdGgtW1wiIDogcmVjdXJzZSggJ2FueXRoaW5nJyAsICdzdGFydHMtd2l0aC1bJyApICxcbiAgICBcInN0YXJ0cy13aXRoLWEtZ3JvdXBcIiA6IHJlY3Vyc2UoICdhbnl0aGluZy1idXQtXScgLCAnc3RhcnRzLXdpdGgtYS1ncm91cCcgKSAsXG4gICAgXCJzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZVwiIDogcmVjdXJzZSggJ2FueXRoaW5nLWJ1dC1dJyAsICdzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZScgKSAsXG4gICAgXCJlbmRcIiA6ICgpID0+IGVtcHR5ICxcbiAgfSAsXG5cbiAgXCJncm91cFwiIDoge1xuICAgIFwiZ3JvdXBcIiA6IHJlY3Vyc2UoJ2dyb3VwJywgJ2dyb3VwJykgLFxuICB9ICxcblxuICBcIm9wdGdyb3VwXCIgOiB7XG4gICAgXCJncm91cFwiIDogcmVjdXJzZSgnb3B0Z3JvdXAnLCAnZ3JvdXAnKSAsXG4gIH0gLFxuXG4gIFwib3RoZXJjbWRcIiA6IHtcblxuICAgIFwib3RoZXJjbWRcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG5cbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG5cbiAgICAgIGNvbnN0IG90aGVyY21kID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgbGV0IGNtZCA9IG90aGVyY21kLmJ1ZmZlcjtcblxuICAgICAgY29uc3Qgb3B0c3RhciA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhd2FpdCBuZXh0KGl0KSk7XG4gICAgICBpZiAoIG9wdHN0YXIucHJvZHVjdGlvbiA9PT0gJ3llcycgKSBjbWQgKz0gJyonO1xuXG4gICAgICBjb25zdCBhcmdzID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGF3YWl0IG5leHQoaXQpKTtcbiAgICAgIGNvbnN0IGNtZGFyZ3MgPSBbXTtcbiAgICAgIGxldCBhcmdfaSA9IGFyZ3NcbiAgICAgIHdoaWxlICggYXJnX2kucHJvZHVjdGlvbiA9PT0gJ25vcm1hbCcgKSB7XG5cdGNvbnN0IFsgZ3JvdXAgLCB0YWlsIF0gPSBhcmdfaS5jaGlsZHJlbiA7XG5cdGNvbnN0IFsgX29wZW4gLCBhcmcgLCBfY2xvc2UgXSA9IGdyb3VwLmNoaWxkcmVuIDtcblx0Y21kYXJncy5wdXNoKGFyZykgO1xuXHRhcmdfaSA9IHRhaWwgO1xuICAgICAgfVxuICAgICAgY29uc3QgaGFzb3B0YXJncyA9IGFyZ19pLnByb2R1Y3Rpb24gPT09ICdvcHRpb25hbCcgO1xuICAgICAgaWYgKCFoYXNvcHRhcmdzICYmIGN0eC52YXJpYWJsZXMuaGFzKGNtZCkpIHtcblx0Ly8gdG9vIGhhcmQgdG8gcGFyc2Ugb3B0IGFyZ3MgY3VycmVudGx5XG5cdGNvbnN0IFsgbmFyZ3MgLCBleHBhbmRzdG8gXSA9IGN0eC52YXJpYWJsZXMuZ2V0KGNtZCkgO1xuXHRpZiAoY21kYXJncy5sZW5ndGggIT09IG5hcmdzKSB0aHJvdyBuZXcgRXJyb3IoYENvbW1hbmQgJHtjbWR9IGlzIGRlZmluZWQgd2l0aCAke25hcmdzfSBhcmd1bWVudHMgYnV0ICR7Y21kYXJncy5sZW5ndGh9IHdlcmUgZ2l2ZW4uYCkgO1xuXHRyZXR1cm4gdCggZXhwYW5kc3RvICwgbWF0Y2ggLCB7IHZhcmlhYmxlczogY3R4LnZhcmlhYmxlcyAsIGFyZ3M6IFsgY3R4LmFyZ3MgLCBjbWRhcmdzIF0gfSApIDtcbiAgICAgIH1cbiAgICAgIGVsc2UgcmV0dXJuIHtcblx0J3R5cGUnIDogJ25vZGUnICxcblx0J25vbnRlcm1pbmFsJyA6ICdvdGhlcmNtZCcgLFxuXHQncHJvZHVjdGlvbicgOiAnb3RoZXJjbWQnICxcblx0J2NoaWxkcmVuJyA6IGNoYWluKCBbIFsgb3RoZXJjbWQgLCBvcHRzdGFyIF0gLCBtKFthcmdzXSwgbWF0Y2gsIGN0eCkgXSApICxcbiAgICAgIH0gO1xuICAgIH0gLFxuXG4gIH0gLFxuXG4gIFwiKlwiIDoge1xuICAgIFwiKlwiIDogdHJlZSA9PiB0cmVlICxcbiAgfSAsXG5cbiAgXCJbXCIgOiB7XG4gICAgXCJbXCIgOiB0cmVlID0+IHRyZWUgLFxuICB9ICxcblxuICBcIl1cIiA6IHtcbiAgICBcIl1cIiA6IHRyZWUgPT4gdHJlZSAsXG4gIH0gLFxuXG4gIFwic29tZXRoaW5nLWVsc2VcIiA6IHtcblxuICAgIFwidGV4dFwiIDogdHJlZSA9PiB0cmVlICxcblxuICAgIFwibmV3aWZcIjogKCkgPT4gZW1wdHkgLFxuXG4gICAgXCJpZmNtZFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcblxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcblxuICAgICAgY29uc3QgaWZjbWQgPSBhd2FpdCBuZXh0KGl0KSA7IC8vIFxcaWYuLi5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gaWZjbWQuYnVmZmVyLnN1YnN0cigzKTtcblxuICAgICAgaWYgKGN0eC52YXJpYWJsZXMuaGFzKHZhcmlhYmxlKSkge1xuXHRjb25zdCBmbGFnID0gY3R4LnZhcmlhYmxlcy5nZXQodmFyaWFibGUpO1xuXHRjb25zdCBibG9jazEgPSBhd2FpdCBuZXh0KGl0KSA7XG5cdGlmIChmbGFnKSByZXR1cm4gdCggYmxvY2sxICwgbWF0Y2ggLCBjdHggKSA7XG5cdGVsc2Uge1xuXHQgIGNvbnN0IGVuZGlmID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGF3YWl0IG5leHQoaXQpKSA7XG5cdCAgaWYgKCBlbmRpZi5wcm9kdWN0aW9uID09PSBcImVsc2VmaVwiICkge1xuXHQgICAgY29uc3QgWyBfZWxzZSAsIGJsb2NrMiAsIF9maSBdID0gZW5kaWYuY2hpbGRyZW4gO1xuXHQgICAgcmV0dXJuIHQoIGJsb2NrMiAsIG1hdGNoICwgY3R4ICkgO1xuXHQgIH1cblx0ICBlbHNlIHJldHVybiBlbXB0eSA7XG5cdH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcblx0J3R5cGUnIDogJ25vZGUnICxcblx0J25vbnRlcm1pbmFsJyA6ICdzb21ldGhpbmctZWxzZScgLFxuXHQncHJvZHVjdGlvbicgOiAnaWZjbWQnICxcblx0J2NoaWxkcmVuJyA6IGNoYWluKCBbIFsgaWZjbWQgXSAsIG0oIGl0ICwgbWF0Y2ggLCBjdHggKSBdICkgLFxuICAgICAgfSA7XG5cbiAgICB9ICxcblxuICAgIFwiZmFsc2VjbWRcIiA6IGFzeW5jICggdHJlZSAsIF8gLCBjdHggKSA9PiB7XG4gICAgICBjb25zdCBmYWxzZWNtZCA9IGF3YWl0IG5leHQoaXRlcih0cmVlLmNoaWxkcmVuKSkgO1xuICAgICAgY29uc3QgYnVmZmVyID0gZmFsc2VjbWQuYnVmZmVyO1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBidWZmZXIuc3Vic3RyaW5nKDEsIGJ1ZmZlci5sZW5ndGgtNSk7XG4gICAgICBjdHgudmFyaWFibGVzLnNldCh2YXJpYWJsZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0gLFxuXG4gICAgXCJ0cnVlY21kXCIgOiBhc3luYyAoIHRyZWUgLCBfICwgY3R4ICkgPT4ge1xuICAgICAgY29uc3QgdHJ1ZWNtZCA9IGF3YWl0IG5leHQoaXRlcih0cmVlLmNoaWxkcmVuKSkgO1xuICAgICAgY29uc3QgYnVmZmVyID0gdHJ1ZWNtZC5idWZmZXI7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMSwgYnVmZmVyLmxlbmd0aC00KTtcbiAgICAgIGN0eC52YXJpYWJsZXMuc2V0KHZhcmlhYmxlLCB0cnVlKTtcbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcblxuICAgIFwiY29tbWVudFwiOiAoICkgPT4gKHtcbiAgICAgICd0eXBlJyA6ICdsZWFmJyAsXG4gICAgICAndGVybWluYWwnIDogJ2NvbW1lbnQnICxcbiAgICAgICdidWZmZXInIDogJyUnICxcbiAgICB9KSAsXG5cbiAgICBcImRlZlwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIHsgdmFyaWFibGVzIH0gKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCkgOyAvLyBcXGRlZlxuICAgICAgY29uc3Qgb3RoZXJjbWQgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGNtZCA9IG90aGVyY21kLmJ1ZmZlciA7XG4gICAgICBhd2FpdCBuZXh0KGl0KSA7IC8vIHtcbiAgICAgIGNvbnN0IGFueXRoaW5nID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZykgO1xuICAgICAgdmFyaWFibGVzLnNldChjbWQsIFswLCBibG9iXSk7XG4gICAgICBhd2FpdCBuZXh0KGl0KSA7IC8vIH1cbiAgICAgIHJldHVybiBlbXB0eSA7XG4gICAgfSAsXG5cbiAgICBcIm5ld2NvbW1hbmRcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCkgOyAvLyBcXG5ld2NvbW1hbmRcbiAgICAgIGNvbnN0IGNtZGRlZiA9IGF3YWl0IG5leHQoaXQpIDtcbiAgICAgIHJldHVybiB0KCBjbWRkZWYgLCBtYXRjaCAsIGN0eCApIDtcbiAgICB9ICxcblxuICAgIFwiXFxuXCIgOiB0cmVlID0+IHRyZWUgLFxuXG4gICAgXCJhcmdcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCB7IGFyZ3MgLCB2YXJpYWJsZXMgfSApID0+IHtcbiAgICAgIGNvbnN0IGFyZyA9IGF3YWl0IG5leHQoaXRlcih0cmVlLmNoaWxkcmVuKSkgO1xuICAgICAgaWYgKCBhcmdzLmxlbmd0aCA8IDIgKSB0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3RpbmcgJHthcmcuYnVmZmVyfSBidXQgZ290IG5vIGFyZ3VtZW50cyBpbiBjb250ZXh0LmApIDtcbiAgICAgIGNvbnN0IGkgPSBwYXJzZUludChhcmcuYnVmZmVyLnN1YnN0cigxKSwgMTApIC0gMTsgLy8gI2FyZ1xuICAgICAgaWYgKCBpID49IGFyZ3NbMV0ubGVuZ3RoICkgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0aW5nICR7YXJnLmJ1ZmZlcn0gYnV0IG9ubHkgZ290ICR7YXJnc1sxXS5sZW5ndGh9IGFyZ3VtZW50cy5gKSA7XG4gICAgICBjb25zdCBzdWJ0cmVlID0gYXJnc1sxXVtpXSA7IC8vIGFyZ1xuICAgICAgcmV0dXJuIHQoIHN1YnRyZWUgLCBtYXRjaCAsIHsgYXJnczogYXJnc1swXSAsIHZhcmlhYmxlcyB9ICkgO1xuICAgIH0gLFxuXG4gICAgXCIkXCIgOiB0cmVlID0+IHRyZWUgLFxuXG4gICAgXCJtYXRoXCIgOiByZWN1cnNlKCdzb21ldGhpbmctZWxzZScsICdtYXRoJykgLFxuICAgIFwibWF0aGVudlwiIDogcmVjdXJzZSgnc29tZXRoaW5nLWVsc2UnLCAnbWF0aGVudicpICxcblxuICB9ICxcblxuICBcImVuZGlmXCI6IHtcbiAgICBcImVsc2VmaVwiIDogcmVjdXJzZSggJ2VuZGlmJywgJ2Vsc2VmaScgKSAsXG4gICAgXCJmaVwiIDogdHJlZSA9PiB0cmVlICxcbiAgfSAsXG5cbiAgXCJjbWRkZWZcIiA6IHtcblxuICAgIFwie2NtZH1beF17YW55dGhpbmd9XCI6IGFzeW5jICggdHJlZSAsIF8gLCB7IHZhcmlhYmxlcyB9ICkgPT4ge1xuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB7XG4gICAgICBjb25zdCBvdGhlcmNtZCA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgY21kID0gb3RoZXJjbWQuYnVmZmVyO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIH1cbiAgICAgIGNvbnN0IGNtZGRlZmFyZ3MgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIGxldCBuYXJncyA9IDA7XG4gICAgICBpZiAoY21kZGVmYXJncy5wcm9kdWN0aW9uID09PSAneWVzJykge1xuXHRjb25zdCBpdDIgPSBpdGVyKGNtZGRlZmFyZ3MuY2hpbGRyZW4pO1xuXHRhd2FpdCBuZXh0KGl0MikgOyAvLyBbXG5cdGNvbnN0IHRleHQgPSBhd2FpdCBuZXh0KGl0MikgO1xuXHRuYXJncyA9IHBhcnNlSW50KHRleHQuYnVmZmVyLCAxMCk7XG5cdGF3YWl0IG5leHQoaXQyKSA7IC8vIF1cbiAgICAgIH1cbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB7XG4gICAgICBjb25zdCBhbnl0aGluZyA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZykgO1xuICAgICAgdmFyaWFibGVzLnNldChjbWQsIFsgbmFyZ3MgLCBibG9iIF0pO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIH1cbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcblxuICAgIFwiY21kW3hde2FueXRoaW5nfVwiOiBhc3luYyAoIHRyZWUgLCBfICwgeyB2YXJpYWJsZXMgfSApID0+IHtcbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG4gICAgICBjb25zdCBvdGhlcmNtZCA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgY21kID0gb3RoZXJjbWQuYnVmZmVyO1xuICAgICAgY29uc3QgY21kZGVmYXJncyA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgbGV0IG5hcmdzID0gMDtcbiAgICAgIGlmIChjbWRkZWZhcmdzLnByb2R1Y3Rpb24gPT09ICd5ZXMnKSB7XG5cdGNvbnN0IGl0MiA9IGl0ZXIoY21kZGVmYXJncy5jaGlsZHJlbik7XG5cdGF3YWl0IG5leHQoaXQyKSA7IC8vIFtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IG5leHQoaXQyKSA7XG5cdG5hcmdzID0gcGFyc2VJbnQodGV4dC5idWZmZXIsIDEwKTtcblx0YXdhaXQgbmV4dChpdDIpIDsgLy8gXVxuICAgICAgfVxuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIHtcbiAgICAgIGNvbnN0IGFueXRoaW5nID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGFueXRoaW5nKSA7XG4gICAgICB2YXJpYWJsZXMuc2V0KGNtZCwgWyBuYXJncyAsIGJsb2IgXSk7XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8gfVxuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0gLFxuXG4gICAgXCIqY21kW3hde2FueXRoaW5nfVwiOiBhc3luYyAoIHRyZWUgLCBfICwgeyB2YXJpYWJsZXMgfSApID0+IHtcbiAgICAgIC8vIGRvIG5vdCBrbm93IHdoYXQgdG8gZG8gd2l0aCAnKicgYXQgdGhlIG1vbWVudFxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyAqXG4gICAgICBjb25zdCBvdGhlcmNtZCA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgY21kID0gb3RoZXJjbWQuYnVmZmVyO1xuICAgICAgY29uc3QgY21kZGVmYXJncyA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgbGV0IG5hcmdzID0gMDtcbiAgICAgIGlmIChjbWRkZWZhcmdzLnByb2R1Y3Rpb24gPT09ICd5ZXMnKSB7XG5cdGNvbnN0IGl0MiA9IGl0ZXIoY21kZGVmYXJncy5jaGlsZHJlbik7XG5cdGF3YWl0IG5leHQoaXQyKSA7IC8vIFtcblx0Y29uc3QgdGV4dCA9IGF3YWl0IG5leHQoaXQyKSA7XG5cdG5hcmdzID0gcGFyc2VJbnQodGV4dC5idWZmZXIsIDEwKTtcblx0YXdhaXQgbmV4dChpdDIpIDsgLy8gXVxuICAgICAgfVxuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIHtcbiAgICAgIGNvbnN0IGFueXRoaW5nID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGFueXRoaW5nKSA7XG4gICAgICB2YXJpYWJsZXMuc2V0KGNtZCwgWyBuYXJncyAsIGJsb2IgXSk7XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8gfVxuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0gLFxuXG4gIH0gLFxuXG4gIFwiY21kZGVmYXJnc1wiOiB7XG4gICAgXCJ5ZXNcIiA6IGVyciggXCJjbWRkZWZhcmdzXCIgLCBcInllc1wiICkgLFxuICAgIFwibm9cIiA6IGVyciggXCJjbWRkZWZhcmdzXCIgLCBcIm5vXCIgKSAsXG4gIH0gLFxuXG4gIFwiY21kKlwiOiB7XG4gICAgXCJ5ZXNcIiA6IGVyciggXCJjbWQqXCIgLCBcInllc1wiICkgLFxuICAgIFwibm9cIiA6IGVyciggXCJjbWQqXCIgLCBcIm5vXCIgKSAsXG4gIH0gLFxuXG4gIFwiY21kYXJnc1wiOiB7XG4gICAgXCJub3JtYWxcIiA6IHJlY3Vyc2UoJ2NtZGFyZ3MnLCAnbm9ybWFsJykgLFxuICAgIFwib3B0aW9uYWxcIiA6IHJlY3Vyc2UoJ2NtZGFyZ3MnLCAnb3B0aW9uYWwnKSAsXG4gICAgXCJlbmRcIiA6ICgpID0+IGVtcHR5ICxcbiAgfSAsXG5cbiAgXCJjbWRhZnRlclwiOiB7XG4gICAgXCJvdGhlcmNtZFwiIDogcmVjdXJzZSgnY21kYWZ0ZXInLCAnb3RoZXJjbWQnICkgLFxuICAgIFwic29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZ1wiIDogcmVjdXJzZSgnY21kYWZ0ZXInLCAnc29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZycgKSAsXG4gICAgXCJdLXRoZW4tYW55dGhpbmdcIiA6IHJlY3Vyc2UoJ2NtZGFmdGVyJywgJ10tdGhlbi1hbnl0aGluZycgKSAsXG4gICAgXCJub3RoaW5nXCIgOiAoKSA9PiBlbXB0eSAsXG4gIH0gLFxuXG4gIFwiY21kYWZ0ZXItYnV0LW5vdC1dXCI6IHtcbiAgICBcIm90aGVyY21kXCIgOiByZWN1cnNlKCdjbWRhZnRlci1idXQtbm90LV0nLCAnb3RoZXJjbWQnICkgLFxuICAgIFwic29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZ1wiIDogcmVjdXJzZSgnY21kYWZ0ZXItYnV0LW5vdC1dJywgJ3NvbWV0aGluZy1lbHNlLXRoZW4tYW55dGhpbmcnICkgLFxuICAgIFwibm90aGluZ1wiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcblxufSA7XG4iXX0=