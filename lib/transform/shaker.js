"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsItertools = require("@aureooms/js-itertools");

var _jsGrammar = require("@aureooms/js-grammar");

var _jsTape = _interopRequireDefault(require("@aureooms/js-tape"));

var _visitor = _interopRequireDefault(require("./visitor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume("next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen["return"] !== "function") { this["return"] = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype["throw"] = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype["return"] = function (arg) { return this._invoke("return", arg); };

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _AwaitValue(value) { this.wrapped = value; }

function _asyncGeneratorDelegate(inner, awaitWrap) { var iter = {}, waiting = false; function pump(key, value) { waiting = true; value = new Promise(function (resolve) { resolve(inner[key](value)); }); return { done: false, value: awaitWrap(value) }; } ; if (typeof Symbol === "function" && Symbol.iterator) { iter[Symbol.iterator] = function () { return this; }; } iter.next = function (value) { if (waiting) { waiting = false; return value; } return pump("next", value); }; if (typeof inner["throw"] === "function") { iter["throw"] = function (value) { if (waiting) { waiting = false; throw value; } return pump("throw", value); }; } if (typeof inner["return"] === "function") { iter["return"] = function (value) { return pump("return", value); }; } return iter; }

function _asyncIterator(iterable) { var method; if (typeof Symbol !== "undefined") { if (Symbol.asyncIterator) { method = iterable[Symbol.asyncIterator]; if (method != null) return method.call(iterable); } if (Symbol.iterator) { method = iterable[Symbol.iterator]; if (method != null) return method.call(iterable); } } throw new TypeError("Object is not async iterable"); }

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
  regeneratorRuntime.mark(function _callee20(iterator) {
    var dflt,
        x,
        _args20 = arguments;
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            dflt = _args20.length > 1 && _args20[1] !== undefined ? _args20[1] : undefined;
            _context20.next = 3;
            return iterator.next();

          case 3:
            x = _context20.sent;

            if (!x.done) {
              _context20.next = 10;
              break;
            }

            if (!(dflt === undefined)) {
              _context20.next = 9;
              break;
            }

            throw new _jsItertools.StopIteration();

          case 9:
            return _context20.abrupt("return", dflt);

          case 10:
            return _context20.abrupt("return", x.value);

          case 11:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
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

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 40;
              break;
            }

            _context.next = 40;
            return _awaitAsyncGenerator(_iterator["return"]());

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

            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
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
    }, _callee, null, [[3, 50, 54, 62], [13, 31, 35, 45], [36,, 40, 44], [55,, 57, 61]]);
  }));
  return _chain.apply(this, arguments);
}

function parseDefinitionParameters(_x3) {
  return _parseDefinitionParameters.apply(this, arguments);
}

function _parseDefinitionParameters() {
  _parseDefinitionParameters = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee21(parameters) {
    var nargs, dfltarg, it2, digit, dfltparam, it3, anything3;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            nargs = 0;
            dfltarg = null;

            if (!(parameters.production === 'yes')) {
              _context21.next = 27;
              break;
            }

            it2 = iter(parameters.children);
            _context21.next = 6;
            return next(it2);

          case 6:
            _context21.next = 8;
            return next(it2);

          case 8:
            digit = _context21.sent;
            nargs = parseInt(digit.buffer, 10);
            _context21.next = 12;
            return next(it2);

          case 12:
            _context21.next = 14;
            return next(it2);

          case 14:
            dfltparam = _context21.sent;

            if (!(dfltparam.production === 'yes')) {
              _context21.next = 27;
              break;
            }

            it3 = iter(dfltparam.children);
            _context21.next = 19;
            return next(it3);

          case 19:
            _context21.next = 21;
            return next(it3);

          case 21:
            anything3 = _context21.sent;
            _context21.next = 24;
            return _jsGrammar.ast.materialize(anything3);

          case 24:
            dfltarg = _context21.sent;
            _context21.next = 27;
            return next(it3);

          case 27:
            return _context21.abrupt("return", [nargs, dfltarg]);

          case 28:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));
  return _parseDefinitionParameters.apply(this, arguments);
}

var empty = {
  'type': 'node',
  'nonterminal': 'empty',
  'production': 'main',
  'children': []
};
var hash = {
  'type': 'leaf',
  'terminal': '#',
  'buffer': '#'
};

var err = function err(nonterminal, production) {
  return function () {
    throw new Error("".concat(nonterminal, ".").concat(production, " should have been handled before"));
  };
};

var t = _jsGrammar.ast.transform;
var cmap = _jsGrammar.ast.cmap;

var m = function m(children, match, ctx) {
  return cmap(
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
      }, _callee2);
    }));

    return function (_x4) {
      return _ref.apply(this, arguments);
    };
  }(), children);
};

function extend(transform, extension) {
  var result = {};

  for (var key in transform) {
    result[key] = Object.assign({}, transform[key], extension[key]);
  }

  return result;
}

var optimizedVisitor = extend(_visitor["default"], {
  "anything": {
    "end": function end() {
      return empty;
    }
  },
  "anything-but-]": {
    "end": function end() {
      return empty;
    }
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
    "\n": function _(tree) {
      return tree;
    },
    " ": function _(tree) {
      return tree;
    },
    "digit": function digit(tree) {
      return tree;
    },
    "$": function $(tree) {
      return tree;
    }
  },
  "cmdargs": {
    "end": function end() {
      return empty;
    }
  },
  "cmdafter": {
    "nothing": function nothing() {
      return empty;
    }
  },
  "cmdafter-but-not-]": {
    "nothing": function nothing() {
      return empty;
    }
  },
  "endif": {
    "fi": function fi(tree) {
      return tree;
    }
  }
});
var expandArguments = extend(optimizedVisitor, {
  "something-else": {
    "argument": function () {
      var _argument = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(tree, match, _ref2) {
        var args, it, nonterminal, arg, i, subtree;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                args = _ref2.args;
                it = iter(tree.children);
                _context3.next = 4;
                return next(it);

              case 4:
                _context3.next = 6;
                return next(it);

              case 6:
                nonterminal = _context3.sent;
                _context3.next = 9;
                return next(iter(nonterminal.children));

              case 9:
                arg = _context3.sent;

                if (!(nonterminal.production === '#')) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", hash);

              case 12:
                // this and next line could be moved one line up
                i = parseInt(arg.buffer, 10) - 1; // #arg

                if (!(i >= args.length)) {
                  _context3.next = 15;
                  break;
                }

                throw new Error("Requesting ".concat(arg.buffer, " but only got ").concat(args.length, " arguments."));

              case 15:
                subtree = args[i];
                return _context3.abrupt("return", subtree);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function argument(_x5, _x6, _x7) {
        return _argument.apply(this, arguments);
      };
    }()
  },
  "argument-subject": {
    "#": err("argument-subject", "#"),
    "digit": err("argument-subject", "digit")
  }
});

function parseArguments(args, dfltarg, type, name) {
  var cmdargs = [];
  var arg_i = args;

  if (arg_i.production === 'optional') {
    if (dfltarg === null) throw new Error("".concat(type, " ").concat(name, " is not defined with a default argument."));

    var _arg_i$children = _slicedToArray(arg_i.children, 2),
        optgroup = _arg_i$children[0],
        tail = _arg_i$children[1];

    var _optgroup$children = _slicedToArray(optgroup.children, 3),
        _open = _optgroup$children[0],
        arg = _optgroup$children[1],
        _close = _optgroup$children[2];

    cmdargs.push(arg);
    arg_i = tail;
  } else if (dfltarg !== null) cmdargs.push(dfltarg);

  while (arg_i.production === 'normal') {
    var _arg_i$children2 = _slicedToArray(arg_i.children, 2),
        group = _arg_i$children2[0],
        _tail = _arg_i$children2[1];

    var _group$children = _slicedToArray(group.children, 3),
        _open2 = _group$children[0],
        _arg = _group$children[1],
        _close2 = _group$children[2];

    cmdargs.push(_arg);
    arg_i = _tail;
  }

  var complex = arg_i.production === 'optional';
  return [complex, cmdargs];
}

var _default = extend(optimizedVisitor, {
  "othercmd": {
    "othercmd": function () {
      var _othercmd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(tree, match, ctx) {
        var it, othercmd, cmd, optstar, args, _ctx$variables$get$ge, _ctx$variables$get$ge2, nargs, dfltarg, expandsto, _parseArguments, _parseArguments2, complex, cmdargs, withArguments, flat, tokensTape, subtree;

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

                if (!ctx.variables.get('cmd').has(cmd)) {
                  _context4.next = 35;
                  break;
                }

                _ctx$variables$get$ge = ctx.variables.get('cmd').get(cmd), _ctx$variables$get$ge2 = _slicedToArray(_ctx$variables$get$ge, 3), nargs = _ctx$variables$get$ge2[0], dfltarg = _ctx$variables$get$ge2[1], expandsto = _ctx$variables$get$ge2[2];
                _parseArguments = parseArguments(args, dfltarg, 'Command', cmd), _parseArguments2 = _slicedToArray(_parseArguments, 2), complex = _parseArguments2[0], cmdargs = _parseArguments2[1];

                if (complex) {
                  _context4.next = 35;
                  break;
                }

                if (!(cmdargs.length !== nargs)) {
                  _context4.next = 26;
                  break;
                }

                throw new Error("Command ".concat(cmd, " is defined with ").concat(nargs, " arguments but ").concat(cmdargs.length, " were given."));

              case 26:
                _context4.next = 28;
                return t(expandsto, expandArguments, {
                  args: cmdargs
                });

              case 28:
                withArguments = _context4.sent;
                flat = _jsGrammar.ast.flatten(withArguments);
                tokensTape = _jsTape["default"].fromAsyncIterable(flat);
                _context4.next = 33;
                return _jsGrammar.ast.materialize(ctx.parser.parse(tokensTape));

              case 33:
                subtree = _context4.sent.children[0];
                return _context4.abrupt("return", t(subtree, match, ctx));

              case 35:
                return _context4.abrupt("return", {
                  'type': 'node',
                  'nonterminal': 'othercmd',
                  'production': 'othercmd',
                  'children': chain([[othercmd, optstar], m([args], match, ctx)])
                });

              case 36:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function othercmd(_x8, _x9, _x10) {
        return _othercmd.apply(this, arguments);
      };
    }()
  },
  "begin-environment": {
    "begin-environment": function () {
      var _beginEnvironment = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(tree, match, ctx) {
        var it, begincmd, leftbracket, envtext, env, rightbracket, args, envStackEntry, _ctx$variables$get$ge3, _ctx$variables$get$ge4, nargs, dfltarg, begin, end, _parseArguments3, _parseArguments4, complex, cmdargs, withArguments, flat, tokensTape, subtree;

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
                envStackEntry = {
                  env: env,
                  expand: false,
                  children: []
                };
                ctx.env.push(envStackEntry);

                if (!ctx.variables.get('env').has(env)) {
                  _context5.next = 40;
                  break;
                }

                _ctx$variables$get$ge3 = ctx.variables.get('env').get(env), _ctx$variables$get$ge4 = _slicedToArray(_ctx$variables$get$ge3, 4), nargs = _ctx$variables$get$ge4[0], dfltarg = _ctx$variables$get$ge4[1], begin = _ctx$variables$get$ge4[2], end = _ctx$variables$get$ge4[3];
                _parseArguments3 = parseArguments(args, dfltarg, 'Environment', env), _parseArguments4 = _slicedToArray(_parseArguments3, 2), complex = _parseArguments4[0], cmdargs = _parseArguments4[1];

                if (complex) {
                  _context5.next = 40;
                  break;
                }

                envStackEntry.expand = true;
                envStackEntry.args = cmdargs; // do not parse complex syntax

                if (!(cmdargs.length !== nargs)) {
                  _context5.next = 31;
                  break;
                }

                throw new Error("Environment ".concat(env, " is defined with ").concat(nargs, " arguments but ").concat(cmdargs.length, " were given."));

              case 31:
                _context5.next = 33;
                return t(begin, expandArguments, {
                  args: cmdargs
                });

              case 33:
                withArguments = _context5.sent;
                flat = _jsGrammar.ast.flatten(withArguments);
                tokensTape = _jsTape["default"].fromAsyncIterable(flat);
                _context5.next = 38;
                return _jsGrammar.ast.materialize(ctx.parser.parse(tokensTape));

              case 38:
                subtree = _context5.sent.children[0];
                return _context5.abrupt("return", t(subtree, match, {
                  env: envStackEntry.children,
                  variables: ctx.variables,
                  parser: ctx.parser
                }));

              case 40:
                return _context5.abrupt("return", {
                  'type': 'node',
                  'nonterminal': 'begin-environment',
                  'production': 'begin-environment',
                  'children': chain([[begincmd, leftbracket, envtext, rightbracket], m([args], match, ctx)])
                });

              case 41:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function beginEnvironment(_x11, _x12, _x13) {
        return _beginEnvironment.apply(this, arguments);
      };
    }()
  },
  "end-environment": {
    "end-environment": function () {
      var _endEnvironment = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(tree, match, ctx) {
        var it, endcmd, leftbracket, envtext, env, rightbracket, _ctx$env$pop, expand, currentEnv, children, cmdargs, _ctx$variables$get$ge5, _ctx$variables$get$ge6, nargs, defaultarg, begin, end, withArguments, flat, tokensTape, subtree;

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

                if (!(ctx.env.length === 0)) {
                  _context6.next = 16;
                  break;
                }

                throw new Error("Trying to end environment on an empty stack with \\end{".concat(env, "} (matching \\begin{").concat(env, "} is missing)."));

              case 16:
                _ctx$env$pop = ctx.env.pop(), expand = _ctx$env$pop.expand, currentEnv = _ctx$env$pop.env, children = _ctx$env$pop.children, cmdargs = _ctx$env$pop.args;

                if (!(currentEnv !== env)) {
                  _context6.next = 21;
                  break;
                }

                throw new Error("Trying to match \\begin{".concat(currentEnv, "} with \\end{").concat(env, "}."));

              case 21:
                if (!expand) {
                  _context6.next = 34;
                  break;
                }

                _ctx$variables$get$ge5 = ctx.variables.get('env').get(env), _ctx$variables$get$ge6 = _slicedToArray(_ctx$variables$get$ge5, 4), nargs = _ctx$variables$get$ge6[0], defaultarg = _ctx$variables$get$ge6[1], begin = _ctx$variables$get$ge6[2], end = _ctx$variables$get$ge6[3];
                _context6.next = 25;
                return t(end, expandArguments, {
                  args: cmdargs
                });

              case 25:
                withArguments = _context6.sent;
                flat = _jsGrammar.ast.flatten(withArguments);
                tokensTape = _jsTape["default"].fromAsyncIterable(flat);
                _context6.next = 30;
                return _jsGrammar.ast.materialize(ctx.parser.parse(tokensTape));

              case 30:
                subtree = _context6.sent.children[0];
                return _context6.abrupt("return", t(subtree, match, {
                  env: children,
                  variables: ctx.variables,
                  parser: ctx.parser
                }));

              case 34:
                return _context6.abrupt("return", {
                  'type': 'node',
                  'nonterminal': 'end-environment',
                  'production': 'end-environment',
                  'children': chain([[endcmd, leftbracket, envtext, rightbracket]])
                });

              case 35:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function endEnvironment(_x14, _x15, _x16) {
        return _endEnvironment.apply(this, arguments);
      };
    }()
  },
  "something-else": {
    "newif": function newif() {
      return empty;
    },
    "comment": function comment() {
      return {
        'type': 'leaf',
        'terminal': 'comment',
        'buffer': '%'
      };
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
        }, _callee7);
      }));

      return function ifcmd(_x17, _x18, _x19) {
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
        }, _callee8);
      }));

      return function falsecmd(_x20, _x21, _x22) {
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
        }, _callee9);
      }));

      return function truecmd(_x23, _x24, _x25) {
        return _truecmd.apply(this, arguments);
      };
    }(),
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
        }, _callee10);
      }));

      return function def(_x26, _x27, _x28) {
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
        }, _callee11);
      }));

      return function newcommand(_x29, _x30, _x31) {
        return _newcommand.apply(this, arguments);
      };
    }(),
    "renewcommand": function () {
      var _renewcommand = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee12(tree, match, ctx) {
        var it, cmddef;
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
                cmddef = _context12.sent;
                return _context12.abrupt("return", t(cmddef, match, ctx));

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));

      return function renewcommand(_x32, _x33, _x34) {
        return _renewcommand.apply(this, arguments);
      };
    }(),
    "newenvironment": function () {
      var _newenvironment = _asyncToGenerator(
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
        }, _callee13);
      }));

      return function newenvironment(_x35, _x36, _x37) {
        return _newenvironment.apply(this, arguments);
      };
    }(),
    "renewenvironment": function () {
      var _renewenvironment = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(tree, match, ctx) {
        var it, envdef;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                it = iter(tree.children);
                _context14.next = 3;
                return next(it);

              case 3:
                _context14.next = 5;
                return next(it);

              case 5:
                envdef = _context14.sent;
                return _context14.abrupt("return", t(envdef, match, ctx));

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      return function renewenvironment(_x38, _x39, _x40) {
        return _renewenvironment.apply(this, arguments);
      };
    }()
  },
  "argument-subject": {
    "#": function _() {
      throw new Error('Escaped hash (##) without argument context.');
    },
    "digit": function () {
      var _digit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee15(tree) {
        var digit;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return next(iter(tree.children));

              case 2:
                digit = _context15.sent;
                throw new Error("Requesting #".concat(digit.buffer, " without argument context."));

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));

      return function digit(_x41) {
        return _digit.apply(this, arguments);
      };
    }()
  },
  "command-definition": {
    "{cmd}[nargs][default]{anything}": function () {
      var _cmdNargsDefaultAnything = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee16(tree, _, _ref4) {
        var variables, it, othercmd, cmd, parameters, _ref5, _ref6, nargs, dflt, anything, blob;

        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                variables = _ref4.variables;
                it = iter(tree.children);
                _context16.next = 4;
                return next(it);

              case 4:
                _context16.next = 6;
                return next(it);

              case 6:
                othercmd = _context16.sent;
                // cmd
                cmd = othercmd.buffer;
                _context16.next = 10;
                return next(it);

              case 10:
                _context16.next = 12;
                return next(it);

              case 12:
                parameters = _context16.sent;
                _context16.next = 15;
                return parseDefinitionParameters(parameters);

              case 15:
                _ref5 = _context16.sent;
                _ref6 = _slicedToArray(_ref5, 2);
                nargs = _ref6[0];
                dflt = _ref6[1];
                _context16.next = 21;
                return next(it);

              case 21:
                _context16.next = 23;
                return next(it);

              case 23:
                anything = _context16.sent;
                _context16.next = 26;
                return _jsGrammar.ast.materialize(anything);

              case 26:
                blob = _context16.sent;
                // anything
                variables.get('cmd').set(cmd, [nargs, dflt, blob]);
                _context16.next = 30;
                return next(it);

              case 30:
                return _context16.abrupt("return", empty);

              case 31:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));

      return function cmdNargsDefaultAnything(_x42, _x43, _x44) {
        return _cmdNargsDefaultAnything.apply(this, arguments);
      };
    }(),
    "cmd[nargs][default]{anything}": function () {
      var _cmdNargsDefaultAnything2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee17(tree, _, _ref7) {
        var variables, it, othercmd, cmd, parameters, _ref8, _ref9, nargs, dflt, anything, blob;

        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                variables = _ref7.variables;
                it = iter(tree.children);
                _context17.next = 4;
                return next(it);

              case 4:
                othercmd = _context17.sent;
                cmd = othercmd.buffer;
                _context17.next = 8;
                return next(it);

              case 8:
                parameters = _context17.sent;
                _context17.next = 11;
                return parseDefinitionParameters(parameters);

              case 11:
                _ref8 = _context17.sent;
                _ref9 = _slicedToArray(_ref8, 2);
                nargs = _ref9[0];
                dflt = _ref9[1];
                _context17.next = 17;
                return next(it);

              case 17:
                _context17.next = 19;
                return next(it);

              case 19:
                anything = _context17.sent;
                _context17.next = 22;
                return _jsGrammar.ast.materialize(anything);

              case 22:
                blob = _context17.sent;
                variables.get('cmd').set(cmd, [nargs, dflt, blob]);
                _context17.next = 26;
                return next(it);

              case 26:
                return _context17.abrupt("return", empty);

              case 27:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));

      return function cmdNargsDefaultAnything(_x45, _x46, _x47) {
        return _cmdNargsDefaultAnything2.apply(this, arguments);
      };
    }(),
    "*cmd[nargs][default]{anything}": function () {
      var _cmdNargsDefaultAnything3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee18(tree, _, _ref10) {
        var variables, it, othercmd, cmd, parameters, _ref11, _ref12, nargs, dflt, anything, blob;

        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                variables = _ref10.variables;
                // do not know what to do with '*' at the moment
                // see https://tex.stackexchange.com/questions/1050/whats-the-difference-between-newcommand-and-newcommand
                it = iter(tree.children);
                _context18.next = 4;
                return next(it);

              case 4:
                _context18.next = 6;
                return next(it);

              case 6:
                othercmd = _context18.sent;
                cmd = othercmd.buffer;
                _context18.next = 10;
                return next(it);

              case 10:
                parameters = _context18.sent;
                _context18.next = 13;
                return parseDefinitionParameters(parameters);

              case 13:
                _ref11 = _context18.sent;
                _ref12 = _slicedToArray(_ref11, 2);
                nargs = _ref12[0];
                dflt = _ref12[1];
                _context18.next = 19;
                return next(it);

              case 19:
                _context18.next = 21;
                return next(it);

              case 21:
                anything = _context18.sent;
                _context18.next = 24;
                return _jsGrammar.ast.materialize(anything);

              case 24:
                blob = _context18.sent;
                variables.get('cmd').set(cmd, [nargs, dflt, blob]);
                _context18.next = 28;
                return next(it);

              case 28:
                return _context18.abrupt("return", empty);

              case 29:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));

      return function cmdNargsDefaultAnything(_x48, _x49, _x50) {
        return _cmdNargsDefaultAnything3.apply(this, arguments);
      };
    }()
  },
  "environment-definition": {
    "{envname}[nargs][default]{begin}{end}": function () {
      var _envnameNargsDefaultBeginEnd = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee19(tree, _, _ref13) {
        var variables, it, envtext, env, parameters, _ref14, _ref15, nargs, dflt, anything1, begin, anything2, end;

        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                variables = _ref13.variables;
                // do not know what to do with '*' at the moment
                // see https://tex.stackexchange.com/questions/1050/whats-the-difference-between-newcommand-and-newcommand
                it = iter(tree.children); //await next(it); // *

                _context19.next = 4;
                return next(it);

              case 4:
                _context19.next = 6;
                return next(it);

              case 6:
                envtext = _context19.sent;
                env = envtext.buffer;
                _context19.next = 10;
                return next(it);

              case 10:
                _context19.next = 12;
                return next(it);

              case 12:
                _context19.next = 14;
                return next(it);

              case 14:
                parameters = _context19.sent;
                _context19.next = 17;
                return parseDefinitionParameters(parameters);

              case 17:
                _ref14 = _context19.sent;
                _ref15 = _slicedToArray(_ref14, 2);
                nargs = _ref15[0];
                dflt = _ref15[1];
                _context19.next = 23;
                return next(it);

              case 23:
                _context19.next = 25;
                return next(it);

              case 25:
                anything1 = _context19.sent;
                _context19.next = 28;
                return _jsGrammar.ast.materialize(anything1);

              case 28:
                begin = _context19.sent;
                _context19.next = 31;
                return next(it);

              case 31:
                _context19.next = 33;
                return next(it);

              case 33:
                _context19.next = 35;
                return next(it);

              case 35:
                _context19.next = 37;
                return next(it);

              case 37:
                anything2 = _context19.sent;
                _context19.next = 40;
                return _jsGrammar.ast.materialize(anything2);

              case 40:
                end = _context19.sent;
                _context19.next = 43;
                return next(it);

              case 43:
                // }
                variables.get('env').set(env, [nargs, dflt, begin, end]);
                return _context19.abrupt("return", empty);

              case 45:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));

      return function envnameNargsDefaultBeginEnd(_x51, _x52, _x53) {
        return _envnameNargsDefaultBeginEnd.apply(this, arguments);
      };
    }()
  },
  "definition-parameters": {
    "yes": err('definition-parameters', 'yes'),
    "no": err('definition-parameters', 'no')
  },
  "default-argument-for-definition": {
    "yes": err('default-argument-for-definition', 'yes'),
    "no": err('default-argument-for-definition', 'no')
  },
  "cmd*": {
    "yes": err("cmd*", "yes"),
    "no": err("cmd*", "no")
  },
  "ignore": {
    "starts-with-a-space": err('ignore', 'starts-with-a-space'),
    "starts-with-a-newline": err('ignore', 'starts-with-a-newline'),
    "starts-with-a-comment": err('ignore', 'starts-with-a-comment'),
    "nothing": err('ignore', 'nothing')
  }
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vc2hha2VyLmpzIl0sIm5hbWVzIjpbIml0ZXIiLCJvYmplY3QiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJuZXh0IiwiZGZsdCIsInVuZGVmaW5lZCIsIngiLCJkb25lIiwiU3RvcEl0ZXJhdGlvbiIsInZhbHVlIiwiY2hhaW4iLCJpdGVyYWJsZXMiLCJpdGVyYWJsZSIsIml0ZW0iLCJwYXJzZURlZmluaXRpb25QYXJhbWV0ZXJzIiwicGFyYW1ldGVycyIsIm5hcmdzIiwiZGZsdGFyZyIsInByb2R1Y3Rpb24iLCJpdDIiLCJjaGlsZHJlbiIsImRpZ2l0IiwicGFyc2VJbnQiLCJidWZmZXIiLCJkZmx0cGFyYW0iLCJpdDMiLCJhbnl0aGluZzMiLCJhc3QiLCJtYXRlcmlhbGl6ZSIsImVtcHR5IiwiaGFzaCIsImVyciIsIm5vbnRlcm1pbmFsIiwiRXJyb3IiLCJ0IiwidHJhbnNmb3JtIiwiY21hcCIsIm0iLCJtYXRjaCIsImN0eCIsImNoaWxkIiwiZXh0ZW5kIiwiZXh0ZW5zaW9uIiwicmVzdWx0Iiwia2V5IiwiT2JqZWN0IiwiYXNzaWduIiwib3B0aW1pemVkVmlzaXRvciIsInZpc2l0b3IiLCJ0cmVlIiwiZXhwYW5kQXJndW1lbnRzIiwiYXJncyIsIml0IiwiYXJnIiwiaSIsImxlbmd0aCIsInN1YnRyZWUiLCJwYXJzZUFyZ3VtZW50cyIsInR5cGUiLCJuYW1lIiwiY21kYXJncyIsImFyZ19pIiwib3B0Z3JvdXAiLCJ0YWlsIiwiX29wZW4iLCJfY2xvc2UiLCJwdXNoIiwiZ3JvdXAiLCJjb21wbGV4Iiwib3RoZXJjbWQiLCJjbWQiLCJvcHRzdGFyIiwidmFyaWFibGVzIiwiZ2V0IiwiaGFzIiwiZXhwYW5kc3RvIiwid2l0aEFyZ3VtZW50cyIsImZsYXQiLCJmbGF0dGVuIiwidG9rZW5zVGFwZSIsInRhcGUiLCJmcm9tQXN5bmNJdGVyYWJsZSIsInBhcnNlciIsInBhcnNlIiwiYmVnaW5jbWQiLCJsZWZ0YnJhY2tldCIsImVudnRleHQiLCJlbnYiLCJyaWdodGJyYWNrZXQiLCJlbnZTdGFja0VudHJ5IiwiZXhwYW5kIiwiYmVnaW4iLCJlbmQiLCJlbmRjbWQiLCJwb3AiLCJjdXJyZW50RW52IiwiZGVmYXVsdGFyZyIsImlmY21kIiwidmFyaWFibGUiLCJzdWJzdHIiLCJmbGFnIiwiYmxvY2sxIiwiZW5kaWYiLCJfZWxzZSIsImJsb2NrMiIsIl9maSIsIl8iLCJmYWxzZWNtZCIsInN1YnN0cmluZyIsInNldCIsInRydWVjbWQiLCJhbnl0aGluZyIsImJsb2IiLCJjbWRkZWYiLCJlbnZkZWYiLCJhbnl0aGluZzEiLCJhbnl0aGluZzIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxTQUFTQSxJQUFULENBQWdCQyxNQUFoQixFQUF5QjtBQUN2QjtBQUNBLE1BQUtBLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxhQUFSLENBQVgsRUFBb0MsT0FBT0YsTUFBTSxDQUFDQyxNQUFNLENBQUNDLGFBQVIsQ0FBTixFQUFQLENBQXBDLEtBQ0ssT0FBT0YsTUFBTSxDQUFDQyxNQUFNLENBQUNFLFFBQVIsQ0FBTixFQUFQO0FBQ04sQyxDQUVEOzs7U0FDZUMsSTs7Ozs7OzswQkFBZixtQkFBc0JELFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUNFLFlBQUFBLElBQWpDLGlFQUF3Q0MsU0FBeEM7QUFBQTtBQUFBLG1CQUVrQkgsUUFBUSxDQUFDQyxJQUFULEVBRmxCOztBQUFBO0FBRVFHLFlBQUFBLENBRlI7O0FBQUEsaUJBSU9BLENBQUMsQ0FBQ0MsSUFKVDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFLU0gsSUFBSSxLQUFLQyxTQUxsQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFLb0MsSUFBSUcsMEJBQUosRUFMcEM7O0FBQUE7QUFBQSwrQ0FNZ0JKLElBTmhCOztBQUFB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QUFBQSxTQUFTLENBQUNDLEdBQVYsQ0FBYyxLQUFkLEVBQXFCb0MsR0FBckIsQ0FBeUJ0QixHQUF6QixFQUE4QixDQUFFdkUsS0FBRixFQUFVWixJQUFWLEVBQWlCdUYsS0FBakIsRUFBeUJDLEdBQXpCLENBQTlCO0FBckJ5QyxtREFzQmxDL0QsS0F0QmtDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTNDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRHlCLEdBelNhO0FBbVV4QywyQkFBMEI7QUFDeEIsV0FBUUUsR0FBRyxDQUFDLHVCQUFELEVBQTJCLEtBQTNCLENBRGE7QUFFeEIsVUFBT0EsR0FBRyxDQUFDLHVCQUFELEVBQTJCLElBQTNCO0FBRmMsR0FuVWM7QUF1VXhDLHFDQUFvQztBQUNsQyxXQUFRQSxHQUFHLENBQUMsaUNBQUQsRUFBcUMsS0FBckMsQ0FEdUI7QUFFbEMsVUFBT0EsR0FBRyxDQUFDLGlDQUFELEVBQXFDLElBQXJDO0FBRndCLEdBdlVJO0FBNFV4QyxVQUFRO0FBQ04sV0FBUUEsR0FBRyxDQUFFLE1BQUYsRUFBVyxLQUFYLENBREw7QUFFTixVQUFPQSxHQUFHLENBQUUsTUFBRixFQUFXLElBQVg7QUFGSixHQTVVZ0M7QUFpVnhDLFlBQVc7QUFDVCwyQkFBd0JBLEdBQUcsQ0FBQyxRQUFELEVBQVcscUJBQVgsQ0FEbEI7QUFFVCw2QkFBMEJBLEdBQUcsQ0FBQyxRQUFELEVBQVcsdUJBQVgsQ0FGcEI7QUFHVCw2QkFBMEJBLEdBQUcsQ0FBQyxRQUFELEVBQVcsdUJBQVgsQ0FIcEI7QUFJVCxlQUFZQSxHQUFHLENBQUMsUUFBRCxFQUFXLFNBQVg7QUFKTjtBQWpWNkIsQ0FBckIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3BJdGVyYXRpb24gfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyBhc3QgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuaW1wb3J0IHRhcGUgZnJvbSAnQGF1cmVvb21zL2pzLXRhcGUnIDtcblxuaW1wb3J0IHZpc2l0b3IgZnJvbSAnLi92aXNpdG9yJyA7XG5cbi8vIFRPRE8gY3JlYXRlIGxpYnJhcnkgd2l0aCB0aG9zZVxuZnVuY3Rpb24gaXRlciAoIG9iamVjdCApIHtcbiAgLy8gbWF5YmUgd2UgZG8gbm90IGV2ZW4gbmVlZCB0aGUgc2Vjb25kIGNhc2VcbiAgaWYgKCBvYmplY3RbU3ltYm9sLmFzeW5jSXRlcmF0b3JdICkgcmV0dXJuIG9iamVjdFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSA7XG4gIGVsc2UgcmV0dXJuIG9iamVjdFtTeW1ib2wuaXRlcmF0b3JdKCkgO1xufVxuXG4vLyBUT0RPIGNyZWF0ZSBsaWJyYXJ5IHdpdGggdGhvc2VcbmFzeW5jIGZ1bmN0aW9uIG5leHQgKCBpdGVyYXRvciAsIGRmbHQgPSB1bmRlZmluZWQgKSB7XG5cbiAgY29uc3QgeCA9IGF3YWl0IGl0ZXJhdG9yLm5leHQoICkgO1xuXG4gIGlmICggeC5kb25lICkge1xuICAgIGlmICggZGZsdCA9PT0gdW5kZWZpbmVkICkgdGhyb3cgbmV3IFN0b3BJdGVyYXRpb24oKSA7XG4gICAgZWxzZSByZXR1cm4gZGZsdCA7XG4gIH1cblxuICByZXR1cm4geC52YWx1ZSA7XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24qIGNoYWluICggaXRlcmFibGVzICkge1xuXG4gIGZvciAoIGNvbnN0IGl0ZXJhYmxlIG9mIGl0ZXJhYmxlcyApIHtcbiAgICBpZiAoIGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0gKSB5aWVsZCogaXRlcmFibGUgO1xuICAgIGVsc2UgZm9yIGF3YWl0ICggY29uc3QgaXRlbSBvZiBpdGVyYWJsZSApIHlpZWxkIGl0ZW0gO1xuICB9XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VEZWZpbml0aW9uUGFyYW1ldGVycyAoIHBhcmFtZXRlcnMgKSB7XG4gIGxldCBuYXJncyA9IDA7XG4gIGxldCBkZmx0YXJnID0gbnVsbDtcbiAgaWYgKHBhcmFtZXRlcnMucHJvZHVjdGlvbiA9PT0gJ3llcycpIHtcbiAgICBjb25zdCBpdDIgPSBpdGVyKHBhcmFtZXRlcnMuY2hpbGRyZW4pO1xuICAgIGF3YWl0IG5leHQoaXQyKSA7IC8vIFtcbiAgICBjb25zdCBkaWdpdCA9IGF3YWl0IG5leHQoaXQyKSA7XG4gICAgbmFyZ3MgPSBwYXJzZUludChkaWdpdC5idWZmZXIsIDEwKTtcbiAgICBhd2FpdCBuZXh0KGl0MikgOyAvLyBdXG5cbiAgICBjb25zdCBkZmx0cGFyYW0gPSBhd2FpdCBuZXh0KGl0MikgO1xuICAgIGlmICggZGZsdHBhcmFtLnByb2R1Y3Rpb24gPT09ICd5ZXMnICkge1xuICAgICAgY29uc3QgaXQzID0gaXRlcihkZmx0cGFyYW0uY2hpbGRyZW4pO1xuICAgICAgYXdhaXQgbmV4dChpdDMpIDsgLy8gW1xuICAgICAgY29uc3QgYW55dGhpbmczID0gYXdhaXQgbmV4dChpdDMpO1xuICAgICAgZGZsdGFyZyA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZzMpIDtcbiAgICAgIGF3YWl0IG5leHQoaXQzKSA7IC8vIF1cbiAgICB9XG5cbiAgfVxuICByZXR1cm4gWyBuYXJncyAsIGRmbHRhcmcgXSA7XG59XG5cblxuY29uc3QgZW1wdHkgPSB7XG4gICd0eXBlJyA6ICdub2RlJyAsXG4gICdub250ZXJtaW5hbCcgOiAnZW1wdHknICxcbiAgJ3Byb2R1Y3Rpb24nIDogJ21haW4nICxcbiAgJ2NoaWxkcmVuJyA6IFtdICxcbn0gO1xuXG5jb25zdCBoYXNoID0ge1xuICAndHlwZScgOiAnbGVhZicgLFxuICAndGVybWluYWwnIDogJyMnICxcbiAgJ2J1ZmZlcicgOiAnIycgLFxufSA7XG5cbmNvbnN0IGVyciA9ICggbm9udGVybWluYWwgLCBwcm9kdWN0aW9uICkgPT4gKCkgPT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoYCR7bm9udGVybWluYWx9LiR7cHJvZHVjdGlvbn0gc2hvdWxkIGhhdmUgYmVlbiBoYW5kbGVkIGJlZm9yZWApO1xufSA7XG5cbmNvbnN0IHQgPSBhc3QudHJhbnNmb3JtIDtcbmNvbnN0IGNtYXAgPSBhc3QuY21hcCA7XG5jb25zdCBtID0gKCBjaGlsZHJlbiAsIG1hdGNoICwgY3R4ICkgPT4gY21hcCggYXN5bmMgY2hpbGQgPT4gYXdhaXQgdCggY2hpbGQgLCBtYXRjaCAsIGN0eCApICwgY2hpbGRyZW4gKSA7XG5cbmZ1bmN0aW9uIGV4dGVuZCAoIHRyYW5zZm9ybSwgZXh0ZW5zaW9uICkge1xuICBjb25zdCByZXN1bHQgPSB7IH0gO1xuICBmb3IgKCBjb25zdCBrZXkgaW4gdHJhbnNmb3JtICkge1xuICAgIHJlc3VsdFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgdHJhbnNmb3JtW2tleV0sIGV4dGVuc2lvbltrZXldKSA7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCA7XG59XG5cbmNvbnN0IG9wdGltaXplZFZpc2l0b3IgPSBleHRlbmQoIHZpc2l0b3IgLCB7XG5cbiAgXCJhbnl0aGluZ1wiIDoge1xuICAgIFwiZW5kXCIgOiAoKSA9PiBlbXB0eSAsXG4gIH0gLFxuXG4gIFwiYW55dGhpbmctYnV0LV1cIiA6IHtcbiAgICBcImVuZFwiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcblxuICBcIipcIiA6IHtcbiAgICBcIipcIiA6IHRyZWUgPT4gdHJlZSAsXG4gIH0gLFxuXG4gIFwiW1wiIDoge1xuICAgIFwiW1wiIDogdHJlZSA9PiB0cmVlICxcbiAgfSAsXG5cbiAgXCJdXCIgOiB7XG4gICAgXCJdXCIgOiB0cmVlID0+IHRyZWUgLFxuICB9ICxcblxuICBcInNvbWV0aGluZy1lbHNlXCIgOiB7XG5cbiAgICBcInRleHRcIiA6IHRyZWUgPT4gdHJlZSAsXG5cbiAgICBcIlxcblwiIDogdHJlZSA9PiB0cmVlICxcblxuICAgIFwiIFwiIDogdHJlZSA9PiB0cmVlICxcblxuICAgIFwiZGlnaXRcIiA6IHRyZWUgPT4gdHJlZSAsXG5cbiAgICBcIiRcIiA6IHRyZWUgPT4gdHJlZSAsXG5cbiAgfSAsXG5cbiAgXCJjbWRhcmdzXCI6IHtcbiAgICBcImVuZFwiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcblxuICBcImNtZGFmdGVyXCI6IHtcbiAgICBcIm5vdGhpbmdcIiA6ICgpID0+IGVtcHR5ICxcbiAgfSAsXG5cbiAgXCJjbWRhZnRlci1idXQtbm90LV1cIjoge1xuICAgIFwibm90aGluZ1wiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcblxuICBcImVuZGlmXCI6IHtcbiAgICBcImZpXCIgOiB0cmVlID0+IHRyZWUgLFxuICB9ICxcblxufSApIDtcblxuY29uc3QgZXhwYW5kQXJndW1lbnRzID0gZXh0ZW5kKCBvcHRpbWl6ZWRWaXNpdG9yICwge1xuICBcInNvbWV0aGluZy1lbHNlXCI6IHtcbiAgICBcImFyZ3VtZW50XCI6IGFzeW5jICggdHJlZSAsIG1hdGNoICwgeyBhcmdzIH0gKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vICNcbiAgICAgIGNvbnN0IG5vbnRlcm1pbmFsID0gYXdhaXQgbmV4dChpdCk7IC8vICMgb3IgZGlnaXRcbiAgICAgIGNvbnN0IGFyZyA9IGF3YWl0IG5leHQoaXRlcihub250ZXJtaW5hbC5jaGlsZHJlbikpIDtcbiAgICAgIGlmIChub250ZXJtaW5hbC5wcm9kdWN0aW9uID09PSAnIycpIHJldHVybiBoYXNoIDsgLy8gdGhpcyBhbmQgbmV4dCBsaW5lIGNvdWxkIGJlIG1vdmVkIG9uZSBsaW5lIHVwXG4gICAgICBjb25zdCBpID0gcGFyc2VJbnQoYXJnLmJ1ZmZlciwgMTApIC0gMTsgLy8gI2FyZ1xuICAgICAgaWYgKCBpID49IGFyZ3MubGVuZ3RoICkgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0aW5nICR7YXJnLmJ1ZmZlcn0gYnV0IG9ubHkgZ290ICR7YXJncy5sZW5ndGh9IGFyZ3VtZW50cy5gKSA7XG4gICAgICBjb25zdCBzdWJ0cmVlID0gYXJnc1tpXSA7XG4gICAgICByZXR1cm4gc3VidHJlZSA7XG4gICAgfSAsXG4gIH0gLFxuXG4gIFwiYXJndW1lbnQtc3ViamVjdFwiIDoge1xuICAgIFwiI1wiIDogZXJyKFwiYXJndW1lbnQtc3ViamVjdFwiLCBcIiNcIikgLFxuICAgIFwiZGlnaXRcIiA6IGVycihcImFyZ3VtZW50LXN1YmplY3RcIiwgXCJkaWdpdFwiKSAsXG4gIH0gLFxuXG59ICkgO1xuXG5mdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyAoIGFyZ3MgLCBkZmx0YXJnICwgdHlwZSAsIG5hbWUgKSB7XG5cbiAgY29uc3QgY21kYXJncyA9IFtdO1xuICBsZXQgYXJnX2kgPSBhcmdzXG4gIGlmICggYXJnX2kucHJvZHVjdGlvbiA9PT0gJ29wdGlvbmFsJyApIHtcbiAgICBpZiAoZGZsdGFyZyA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKGAke3R5cGV9ICR7bmFtZX0gaXMgbm90IGRlZmluZWQgd2l0aCBhIGRlZmF1bHQgYXJndW1lbnQuYCkgO1xuICAgIGNvbnN0IFsgb3B0Z3JvdXAgLCB0YWlsIF0gPSBhcmdfaS5jaGlsZHJlbiA7XG4gICAgY29uc3QgWyBfb3BlbiAsIGFyZyAsIF9jbG9zZSBdID0gb3B0Z3JvdXAuY2hpbGRyZW4gO1xuICAgIGNtZGFyZ3MucHVzaChhcmcpO1xuICAgIGFyZ19pID0gdGFpbCA7XG4gIH1cbiAgZWxzZSBpZiAoZGZsdGFyZyAhPT0gbnVsbCkgY21kYXJncy5wdXNoKGRmbHRhcmcpIDtcbiAgd2hpbGUgKCBhcmdfaS5wcm9kdWN0aW9uID09PSAnbm9ybWFsJyApIHtcbiAgICBjb25zdCBbIGdyb3VwICwgdGFpbCBdID0gYXJnX2kuY2hpbGRyZW4gO1xuICAgIGNvbnN0IFsgX29wZW4gLCBhcmcgLCBfY2xvc2UgXSA9IGdyb3VwLmNoaWxkcmVuIDtcbiAgICBjbWRhcmdzLnB1c2goYXJnKSA7XG4gICAgYXJnX2kgPSB0YWlsIDtcbiAgfVxuICBjb25zdCBjb21wbGV4ID0gYXJnX2kucHJvZHVjdGlvbiA9PT0gJ29wdGlvbmFsJyA7XG5cbiAgcmV0dXJuIFsgY29tcGxleCAsIGNtZGFyZ3MgXSA7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kKCBvcHRpbWl6ZWRWaXNpdG9yICwge1xuXG4gIFwib3RoZXJjbWRcIiA6IHtcblxuICAgIFwib3RoZXJjbWRcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG5cbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG5cbiAgICAgIGNvbnN0IG90aGVyY21kID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgbGV0IGNtZCA9IG90aGVyY21kLmJ1ZmZlcjtcblxuICAgICAgY29uc3Qgb3B0c3RhciA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhd2FpdCBuZXh0KGl0KSk7XG4gICAgICBpZiAoIG9wdHN0YXIucHJvZHVjdGlvbiA9PT0gJ3llcycgKSBjbWQgKz0gJyonO1xuXG4gICAgICBjb25zdCBhcmdzID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGF3YWl0IG5leHQoaXQpKTtcblxuICAgICAgaWYgKCBjdHgudmFyaWFibGVzLmdldCgnY21kJykuaGFzKGNtZCkgKSB7XG5cblx0Y29uc3QgWyBuYXJncyAsIGRmbHRhcmcgLCBleHBhbmRzdG8gXSA9IGN0eC52YXJpYWJsZXMuZ2V0KCdjbWQnKS5nZXQoY21kKSA7XG5cblx0Y29uc3QgWyBjb21wbGV4ICwgY21kYXJncyBdID0gcGFyc2VBcmd1bWVudHMoIGFyZ3MgLCBkZmx0YXJnICwgJ0NvbW1hbmQnICwgY21kICkgO1xuXG5cdGlmICghY29tcGxleCkge1xuXHQgIC8vIGRvIG5vdCBwYXJzZSBjb21wbGV4IHN5bnRheFxuXHQgIGlmIChjbWRhcmdzLmxlbmd0aCAhPT0gbmFyZ3MpIHRocm93IG5ldyBFcnJvcihgQ29tbWFuZCAke2NtZH0gaXMgZGVmaW5lZCB3aXRoICR7bmFyZ3N9IGFyZ3VtZW50cyBidXQgJHtjbWRhcmdzLmxlbmd0aH0gd2VyZSBnaXZlbi5gKSA7XG5cblx0ICBjb25zdCB3aXRoQXJndW1lbnRzID0gYXdhaXQgdCggZXhwYW5kc3RvICwgZXhwYW5kQXJndW1lbnRzICwgeyBhcmdzOiBjbWRhcmdzIH0gKVxuXHQgIGNvbnN0IGZsYXQgPSBhc3QuZmxhdHRlbih3aXRoQXJndW1lbnRzKSA7XG5cdCAgY29uc3QgdG9rZW5zVGFwZSA9IHRhcGUuZnJvbUFzeW5jSXRlcmFibGUoZmxhdCk7XG5cdCAgY29uc3Qgc3VidHJlZSA9IChhd2FpdCBhc3QubWF0ZXJpYWxpemUoY3R4LnBhcnNlci5wYXJzZSh0b2tlbnNUYXBlKSkpLmNoaWxkcmVuWzBdIDtcblx0ICByZXR1cm4gdCggc3VidHJlZSAsIG1hdGNoICwgY3R4ICkgO1xuXHR9XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcblx0J3R5cGUnIDogJ25vZGUnICxcblx0J25vbnRlcm1pbmFsJyA6ICdvdGhlcmNtZCcgLFxuXHQncHJvZHVjdGlvbicgOiAnb3RoZXJjbWQnICxcblx0J2NoaWxkcmVuJyA6IGNoYWluKCBbIFsgb3RoZXJjbWQgLCBvcHRzdGFyIF0gLCBtKFthcmdzXSwgbWF0Y2gsIGN0eCkgXSApICxcbiAgICAgIH0gO1xuXG4gICAgfSAsXG5cbiAgfSAsXG5cbiAgXCJiZWdpbi1lbnZpcm9ubWVudFwiIDoge1xuXG4gICAgXCJiZWdpbi1lbnZpcm9ubWVudFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcblxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcblxuICAgICAgY29uc3QgYmVnaW5jbWQgPSBhd2FpdCBuZXh0KGl0KSA7IC8vIFxcYmVnaW5cbiAgICAgIGNvbnN0IGxlZnRicmFja2V0ID0gYXdhaXQgbmV4dChpdCkgOyAvLyB7XG4gICAgICBjb25zdCBlbnZ0ZXh0ID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgY29uc3QgZW52ID0gZW52dGV4dC5idWZmZXIgO1xuICAgICAgY29uc3QgcmlnaHRicmFja2V0ID0gYXdhaXQgbmV4dChpdCkgOyAvLyB9XG5cbiAgICAgIGNvbnN0IGFyZ3MgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYXdhaXQgbmV4dChpdCkpO1xuXG4gICAgICBjb25zdCBlbnZTdGFja0VudHJ5ID0geyBlbnYgLCBleHBhbmQ6IGZhbHNlLCBjaGlsZHJlbjogW119IDtcbiAgICAgIGN0eC5lbnYucHVzaChlbnZTdGFja0VudHJ5KSA7XG5cbiAgICAgIGlmICggY3R4LnZhcmlhYmxlcy5nZXQoJ2VudicpLmhhcyhlbnYpICkge1xuXG5cdGNvbnN0IFsgbmFyZ3MgLCBkZmx0YXJnICwgYmVnaW4gLCBlbmQgXSA9IGN0eC52YXJpYWJsZXMuZ2V0KCdlbnYnKS5nZXQoZW52KSA7XG5cblx0Y29uc3QgWyBjb21wbGV4ICwgY21kYXJncyBdID0gcGFyc2VBcmd1bWVudHMoIGFyZ3MgLCBkZmx0YXJnICwgJ0Vudmlyb25tZW50JyAsIGVudiApIDtcblxuXHRpZiAoIWNvbXBsZXgpIHtcblx0ICBlbnZTdGFja0VudHJ5LmV4cGFuZCA9IHRydWUgO1xuXHQgIGVudlN0YWNrRW50cnkuYXJncyA9IGNtZGFyZ3MgO1xuXHQgIC8vIGRvIG5vdCBwYXJzZSBjb21wbGV4IHN5bnRheFxuXHQgIGlmIChjbWRhcmdzLmxlbmd0aCAhPT0gbmFyZ3MpXG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoYEVudmlyb25tZW50ICR7ZW52fSBpcyBkZWZpbmVkIHdpdGggJHtuYXJnc30gYXJndW1lbnRzIGJ1dCAke2NtZGFyZ3MubGVuZ3RofSB3ZXJlIGdpdmVuLmApIDtcblxuXHQgIGNvbnN0IHdpdGhBcmd1bWVudHMgPSBhd2FpdCB0KCBiZWdpbiAsIGV4cGFuZEFyZ3VtZW50cyAsIHsgYXJnczogY21kYXJncyB9IClcblx0ICBjb25zdCBmbGF0ID0gYXN0LmZsYXR0ZW4od2l0aEFyZ3VtZW50cykgO1xuXHQgIGNvbnN0IHRva2Vuc1RhcGUgPSB0YXBlLmZyb21Bc3luY0l0ZXJhYmxlKGZsYXQpO1xuXHQgIGNvbnN0IHN1YnRyZWUgPSAoYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGN0eC5wYXJzZXIucGFyc2UodG9rZW5zVGFwZSkpKS5jaGlsZHJlblswXSA7XG5cdCAgcmV0dXJuIHQoIHN1YnRyZWUgLCBtYXRjaCAsIHsgZW52OiBlbnZTdGFja0VudHJ5LmNoaWxkcmVuICwgdmFyaWFibGVzOiBjdHgudmFyaWFibGVzICwgcGFyc2VyOiBjdHgucGFyc2VyIH0gKSA7XG5cdH1cblxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuXHQndHlwZScgOiAnbm9kZScgLFxuXHQnbm9udGVybWluYWwnIDogJ2JlZ2luLWVudmlyb25tZW50JyAsXG5cdCdwcm9kdWN0aW9uJyA6ICdiZWdpbi1lbnZpcm9ubWVudCcgLFxuXHQnY2hpbGRyZW4nIDogY2hhaW4oIFsgWyBiZWdpbmNtZCAsIGxlZnRicmFja2V0ICwgZW52dGV4dCAsIHJpZ2h0YnJhY2tldCBdICwgbShbYXJnc10sIG1hdGNoLCBjdHgpIF0gKSAsXG4gICAgICB9IDtcblxuICAgIH0gLFxuXG4gIH0gLFxuXG4gIFwiZW5kLWVudmlyb25tZW50XCIgOiB7XG5cbiAgICBcImVuZC1lbnZpcm9ubWVudFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcblxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcblxuICAgICAgY29uc3QgZW5kY21kID0gYXdhaXQgbmV4dChpdCkgOyAvLyBcXGVuZFxuICAgICAgY29uc3QgbGVmdGJyYWNrZXQgPSBhd2FpdCBuZXh0KGl0KSA7IC8vIHtcbiAgICAgIGNvbnN0IGVudnRleHQgPSBhd2FpdCBuZXh0KGl0KSA7XG4gICAgICBjb25zdCBlbnYgPSBlbnZ0ZXh0LmJ1ZmZlciA7XG4gICAgICBjb25zdCByaWdodGJyYWNrZXQgPSBhd2FpdCBuZXh0KGl0KSA7IC8vIH1cblxuICAgICAgaWYgKCBjdHguZW52Lmxlbmd0aCA9PT0gMCApIHtcblx0dGhyb3cgbmV3IEVycm9yKGBUcnlpbmcgdG8gZW5kIGVudmlyb25tZW50IG9uIGFuIGVtcHR5IHN0YWNrIHdpdGggXFxcXGVuZHske2Vudn19IChtYXRjaGluZyBcXFxcYmVnaW57JHtlbnZ9fSBpcyBtaXNzaW5nKS5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBleHBhbmQgLCBlbnY6IGN1cnJlbnRFbnYgLCBjaGlsZHJlbiAsIGFyZ3M6IGNtZGFyZ3MgfSA9IGN0eC5lbnYucG9wKCk7XG5cbiAgICAgIGlmICggY3VycmVudEVudiAhPT0gZW52ICkge1xuXHR0aHJvdyBuZXcgRXJyb3IoYFRyeWluZyB0byBtYXRjaCBcXFxcYmVnaW57JHtjdXJyZW50RW52fX0gd2l0aCBcXFxcZW5keyR7ZW52fX0uYCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChleHBhbmQpIHtcblx0Y29uc3QgWyBuYXJncyAsIGRlZmF1bHRhcmcgLCBiZWdpbiAsIGVuZCBdID0gY3R4LnZhcmlhYmxlcy5nZXQoJ2VudicpLmdldChlbnYpIDtcblx0Y29uc3Qgd2l0aEFyZ3VtZW50cyA9IGF3YWl0IHQoIGVuZCAsIGV4cGFuZEFyZ3VtZW50cyAsIHsgYXJnczogY21kYXJncyB9IClcblx0Y29uc3QgZmxhdCA9IGFzdC5mbGF0dGVuKHdpdGhBcmd1bWVudHMpIDtcblx0Y29uc3QgdG9rZW5zVGFwZSA9IHRhcGUuZnJvbUFzeW5jSXRlcmFibGUoZmxhdCk7XG5cdGNvbnN0IHN1YnRyZWUgPSAoYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGN0eC5wYXJzZXIucGFyc2UodG9rZW5zVGFwZSkpKS5jaGlsZHJlblswXSA7XG5cdHJldHVybiB0KCBzdWJ0cmVlICwgbWF0Y2ggLCB7IGVudjogY2hpbGRyZW4gLCB2YXJpYWJsZXM6IGN0eC52YXJpYWJsZXMgLCBwYXJzZXI6IGN0eC5wYXJzZXIgfSApIDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuXHRyZXR1cm4ge1xuXHQgICd0eXBlJyA6ICdub2RlJyAsXG5cdCAgJ25vbnRlcm1pbmFsJyA6ICdlbmQtZW52aXJvbm1lbnQnICxcblx0ICAncHJvZHVjdGlvbicgOiAnZW5kLWVudmlyb25tZW50JyAsXG5cdCAgJ2NoaWxkcmVuJyA6IGNoYWluKCBbIFsgZW5kY21kICwgbGVmdGJyYWNrZXQgLCBlbnZ0ZXh0ICwgcmlnaHRicmFja2V0IF0gXSApICxcblx0fSA7XG4gICAgICB9XG4gICAgfSAsXG5cbiAgfSAsXG5cbiAgXCJzb21ldGhpbmctZWxzZVwiIDoge1xuXG4gICAgXCJuZXdpZlwiOiAoKSA9PiBlbXB0eSAsXG5cbiAgICBcImNvbW1lbnRcIjogKCApID0+ICh7XG4gICAgICAndHlwZScgOiAnbGVhZicgLFxuICAgICAgJ3Rlcm1pbmFsJyA6ICdjb21tZW50JyAsXG4gICAgICAnYnVmZmVyJyA6ICclJyAsXG4gICAgfSkgLFxuXG4gICAgXCJpZmNtZFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcblxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcblxuICAgICAgY29uc3QgaWZjbWQgPSBhd2FpdCBuZXh0KGl0KSA7IC8vIFxcaWYuLi5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gaWZjbWQuYnVmZmVyLnN1YnN0cigzKTtcblxuICAgICAgaWYgKGN0eC52YXJpYWJsZXMuZ2V0KCdpZicpLmhhcyh2YXJpYWJsZSkpIHtcblx0Y29uc3QgZmxhZyA9IGN0eC52YXJpYWJsZXMuZ2V0KCdpZicpLmdldCh2YXJpYWJsZSk7XG5cdGNvbnN0IGJsb2NrMSA9IGF3YWl0IG5leHQoaXQpIDtcblx0aWYgKGZsYWcpIHJldHVybiB0KCBibG9jazEgLCBtYXRjaCAsIGN0eCApIDtcblx0ZWxzZSB7XG5cdCAgY29uc3QgZW5kaWYgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYXdhaXQgbmV4dChpdCkpIDtcblx0ICBpZiAoIGVuZGlmLnByb2R1Y3Rpb24gPT09IFwiZWxzZWZpXCIgKSB7XG5cdCAgICBjb25zdCBbIF9lbHNlICwgYmxvY2syICwgX2ZpIF0gPSBlbmRpZi5jaGlsZHJlbiA7XG5cdCAgICByZXR1cm4gdCggYmxvY2syICwgbWF0Y2ggLCBjdHggKSA7XG5cdCAgfVxuXHQgIGVsc2UgcmV0dXJuIGVtcHR5IDtcblx0fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuXHQndHlwZScgOiAnbm9kZScgLFxuXHQnbm9udGVybWluYWwnIDogJ3NvbWV0aGluZy1lbHNlJyAsXG5cdCdwcm9kdWN0aW9uJyA6ICdpZmNtZCcgLFxuXHQnY2hpbGRyZW4nIDogY2hhaW4oIFsgWyBpZmNtZCBdICwgbSggaXQgLCBtYXRjaCAsIGN0eCApIF0gKSAsXG4gICAgICB9IDtcblxuICAgIH0gLFxuXG4gICAgXCJmYWxzZWNtZFwiIDogYXN5bmMgKCB0cmVlICwgXyAsIGN0eCApID0+IHtcbiAgICAgIGNvbnN0IGZhbHNlY21kID0gYXdhaXQgbmV4dChpdGVyKHRyZWUuY2hpbGRyZW4pKSA7XG4gICAgICBjb25zdCBidWZmZXIgPSBmYWxzZWNtZC5idWZmZXI7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMSwgYnVmZmVyLmxlbmd0aC01KTtcbiAgICAgIGN0eC52YXJpYWJsZXMuZ2V0KCdpZicpLnNldCh2YXJpYWJsZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0gLFxuXG4gICAgXCJ0cnVlY21kXCIgOiBhc3luYyAoIHRyZWUgLCBfICwgY3R4ICkgPT4ge1xuICAgICAgY29uc3QgdHJ1ZWNtZCA9IGF3YWl0IG5leHQoaXRlcih0cmVlLmNoaWxkcmVuKSkgO1xuICAgICAgY29uc3QgYnVmZmVyID0gdHJ1ZWNtZC5idWZmZXI7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMSwgYnVmZmVyLmxlbmd0aC00KTtcbiAgICAgIGN0eC52YXJpYWJsZXMuZ2V0KCdpZicpLnNldCh2YXJpYWJsZSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSAsXG5cbiAgICBcImRlZlwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIHsgdmFyaWFibGVzIH0gKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCkgOyAvLyBcXGRlZlxuICAgICAgY29uc3Qgb3RoZXJjbWQgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGNtZCA9IG90aGVyY21kLmJ1ZmZlciA7XG4gICAgICBhd2FpdCBuZXh0KGl0KSA7IC8vIHtcbiAgICAgIGNvbnN0IGFueXRoaW5nID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZykgO1xuICAgICAgdmFyaWFibGVzLmdldCgnY21kJykuc2V0KGNtZCwgWzAsIG51bGwsIGJsb2JdKTtcbiAgICAgIGF3YWl0IG5leHQoaXQpIDsgLy8gfVxuICAgICAgcmV0dXJuIGVtcHR5IDtcbiAgICB9ICxcblxuICAgIFwibmV3Y29tbWFuZFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG4gICAgICBhd2FpdCBuZXh0KGl0KSA7IC8vIFxcbmV3Y29tbWFuZFxuICAgICAgY29uc3QgY21kZGVmID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgcmV0dXJuIHQoIGNtZGRlZiAsIG1hdGNoICwgY3R4ICkgO1xuICAgIH0gLFxuXG4gICAgXCJyZW5ld2NvbW1hbmRcIjogYXN5bmMgKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCkgOyAvLyBcXHJlbmV3Y29tbWFuZFxuICAgICAgY29uc3QgY21kZGVmID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgcmV0dXJuIHQoIGNtZGRlZiAsIG1hdGNoICwgY3R4ICkgO1xuICAgIH0gLFxuXG4gICAgXCJuZXdlbnZpcm9ubWVudFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG4gICAgICBhd2FpdCBuZXh0KGl0KSA7IC8vIFxcbmV3ZW52aXJvbm1lbnRcbiAgICAgIGNvbnN0IGVudmRlZiA9IGF3YWl0IG5leHQoaXQpIDtcbiAgICAgIHJldHVybiB0KCBlbnZkZWYgLCBtYXRjaCAsIGN0eCApIDtcbiAgICB9ICxcblxuICAgIFwicmVuZXdlbnZpcm9ubWVudFwiOiBhc3luYyAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+IHtcbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG4gICAgICBhd2FpdCBuZXh0KGl0KSA7IC8vIFxccmVuZXdlbnZpcm9ubWVudFxuICAgICAgY29uc3QgZW52ZGVmID0gYXdhaXQgbmV4dChpdCkgO1xuICAgICAgcmV0dXJuIHQoIGVudmRlZiAsIG1hdGNoICwgY3R4ICkgO1xuICAgIH0gLFxuXG4gIH0gLFxuXG4gIFwiYXJndW1lbnQtc3ViamVjdFwiIDoge1xuICAgIFwiI1wiIDogKCkgPT4ge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFc2NhcGVkIGhhc2ggKCMjKSB3aXRob3V0IGFyZ3VtZW50IGNvbnRleHQuJykgO1xuICAgIH0gLFxuICAgIFwiZGlnaXRcIiA6IGFzeW5jIHRyZWUgPT4ge1xuICAgICAgY29uc3QgZGlnaXQgPSBhd2FpdCBuZXh0KGl0ZXIodHJlZS5jaGlsZHJlbikpIDtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUmVxdWVzdGluZyAjJHtkaWdpdC5idWZmZXJ9IHdpdGhvdXQgYXJndW1lbnQgY29udGV4dC5gKSA7XG4gICAgfSAsXG4gIH0gLFxuXG4gIFwiY29tbWFuZC1kZWZpbml0aW9uXCIgOiB7XG5cbiAgICBcIntjbWR9W25hcmdzXVtkZWZhdWx0XXthbnl0aGluZ31cIjogYXN5bmMgKCB0cmVlICwgXyAsIHsgdmFyaWFibGVzIH0gKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIHtcbiAgICAgIGNvbnN0IG90aGVyY21kID0gYXdhaXQgbmV4dChpdCk7IC8vIGNtZFxuICAgICAgY29uc3QgY21kID0gb3RoZXJjbWQuYnVmZmVyO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIH1cbiAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBhd2FpdCBuZXh0KGl0KTsgLy8gW25hcmdzXVtkZWZhdWx0XVxuICAgICAgY29uc3QgWyBuYXJncyAsIGRmbHQgXSA9IGF3YWl0IHBhcnNlRGVmaW5pdGlvblBhcmFtZXRlcnMoIHBhcmFtZXRlcnMgKSA7XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8ge1xuICAgICAgY29uc3QgYW55dGhpbmcgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYW55dGhpbmcpIDsgLy8gYW55dGhpbmdcbiAgICAgIHZhcmlhYmxlcy5nZXQoJ2NtZCcpLnNldChjbWQsIFsgbmFyZ3MgLCBkZmx0ICwgYmxvYiBdKTtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB9XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSAsXG5cbiAgICBcImNtZFtuYXJnc11bZGVmYXVsdF17YW55dGhpbmd9XCI6IGFzeW5jICggdHJlZSAsIF8gLCB7IHZhcmlhYmxlcyB9ICkgPT4ge1xuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcbiAgICAgIGNvbnN0IG90aGVyY21kID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBjbWQgPSBvdGhlcmNtZC5idWZmZXI7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJzID0gYXdhaXQgbmV4dChpdCk7IC8vIFtuYXJnc11bZGVmYXVsdF1cbiAgICAgIGNvbnN0IFsgbmFyZ3MgLCBkZmx0IF0gPSBhd2FpdCBwYXJzZURlZmluaXRpb25QYXJhbWV0ZXJzKCBwYXJhbWV0ZXJzICkgO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIHtcbiAgICAgIGNvbnN0IGFueXRoaW5nID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgYXN0Lm1hdGVyaWFsaXplKGFueXRoaW5nKSA7XG4gICAgICB2YXJpYWJsZXMuZ2V0KCdjbWQnKS5zZXQoY21kLCBbIG5hcmdzICwgZGZsdCAsYmxvYiBdKTtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB9XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSAsXG5cbiAgICBcIipjbWRbbmFyZ3NdW2RlZmF1bHRde2FueXRoaW5nfVwiOiBhc3luYyAoIHRyZWUgLCBfICwgeyB2YXJpYWJsZXMgfSApID0+IHtcbiAgICAgIC8vIGRvIG5vdCBrbm93IHdoYXQgdG8gZG8gd2l0aCAnKicgYXQgdGhlIG1vbWVudFxuICAgICAgLy8gc2VlIGh0dHBzOi8vdGV4LnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8xMDUwL3doYXRzLXRoZS1kaWZmZXJlbmNlLWJldHdlZW4tbmV3Y29tbWFuZC1hbmQtbmV3Y29tbWFuZFxuICAgICAgY29uc3QgaXQgPSBpdGVyKHRyZWUuY2hpbGRyZW4pIDtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyAqXG4gICAgICBjb25zdCBvdGhlcmNtZCA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgY21kID0gb3RoZXJjbWQuYnVmZmVyO1xuICAgICAgY29uc3QgcGFyYW1ldGVycyA9IGF3YWl0IG5leHQoaXQpOyAvLyBbbmFyZ3NdW2RlZmF1bHRdXG4gICAgICBjb25zdCBbIG5hcmdzICwgZGZsdCBdID0gYXdhaXQgcGFyc2VEZWZpbml0aW9uUGFyYW1ldGVycyggcGFyYW1ldGVycyApIDtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB7XG4gICAgICBjb25zdCBhbnl0aGluZyA9IGF3YWl0IG5leHQoaXQpO1xuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZykgO1xuICAgICAgdmFyaWFibGVzLmdldCgnY21kJykuc2V0KGNtZCwgWyBuYXJncyAsIGRmbHQgLGJsb2IgXSk7XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8gfVxuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0gLFxuXG4gIH0gLFxuXG4gIFwiZW52aXJvbm1lbnQtZGVmaW5pdGlvblwiIDoge1xuICAgIFwie2Vudm5hbWV9W25hcmdzXVtkZWZhdWx0XXtiZWdpbn17ZW5kfVwiIDogIGFzeW5jICggdHJlZSAsIF8gLCB7IHZhcmlhYmxlcyB9ICkgPT4ge1xuICAgICAgLy8gZG8gbm90IGtub3cgd2hhdCB0byBkbyB3aXRoICcqJyBhdCB0aGUgbW9tZW50XG4gICAgICAvLyBzZWUgaHR0cHM6Ly90ZXguc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzEwNTAvd2hhdHMtdGhlLWRpZmZlcmVuY2UtYmV0d2Vlbi1uZXdjb21tYW5kLWFuZC1uZXdjb21tYW5kXG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgLy9hd2FpdCBuZXh0KGl0KTsgLy8gKlxuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIHtcbiAgICAgIGNvbnN0IGVudnRleHQgPSBhd2FpdCBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGVudiA9IGVudnRleHQuYnVmZmVyO1xuICAgICAgYXdhaXQgbmV4dChpdCk7IC8vIH1cbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyBpZ25vcmVcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBhd2FpdCBuZXh0KGl0KTsgLy8gW25hcmdzXVtkZWZhdWx0XVxuICAgICAgY29uc3QgWyBuYXJncyAsIGRmbHQgXSA9IGF3YWl0IHBhcnNlRGVmaW5pdGlvblBhcmFtZXRlcnMoIHBhcmFtZXRlcnMgKSA7XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8ge1xuICAgICAgY29uc3QgYW55dGhpbmcxID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBiZWdpbiA9IGF3YWl0IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZzEpIDtcbiAgICAgIGF3YWl0IG5leHQoaXQpOyAvLyB9XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8gaWdub3JlXG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8ge1xuICAgICAgY29uc3QgYW55dGhpbmcyID0gYXdhaXQgbmV4dChpdCk7XG4gICAgICBjb25zdCBlbmQgPSBhd2FpdCBhc3QubWF0ZXJpYWxpemUoYW55dGhpbmcyKSA7XG4gICAgICBhd2FpdCBuZXh0KGl0KTsgLy8gfVxuICAgICAgdmFyaWFibGVzLmdldCgnZW52Jykuc2V0KGVudiwgWyBuYXJncyAsIGRmbHQgLCBiZWdpbiAsIGVuZCBdKTtcbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcbiAgfSAsXG4gIFwiZGVmaW5pdGlvbi1wYXJhbWV0ZXJzXCIgOiB7XG4gICAgXCJ5ZXNcIiA6IGVycignZGVmaW5pdGlvbi1wYXJhbWV0ZXJzJyAsICd5ZXMnICkgLFxuICAgIFwibm9cIiA6IGVycignZGVmaW5pdGlvbi1wYXJhbWV0ZXJzJyAsICdubycgKSAsXG4gIH0gLFxuICBcImRlZmF1bHQtYXJndW1lbnQtZm9yLWRlZmluaXRpb25cIiA6IHtcbiAgICBcInllc1wiIDogZXJyKCdkZWZhdWx0LWFyZ3VtZW50LWZvci1kZWZpbml0aW9uJyAsICd5ZXMnICkgLFxuICAgIFwibm9cIiA6IGVycignZGVmYXVsdC1hcmd1bWVudC1mb3ItZGVmaW5pdGlvbicgLCAnbm8nICkgLFxuICB9ICxcblxuICBcImNtZCpcIjoge1xuICAgIFwieWVzXCIgOiBlcnIoIFwiY21kKlwiICwgXCJ5ZXNcIiApICxcbiAgICBcIm5vXCIgOiBlcnIoIFwiY21kKlwiICwgXCJub1wiICkgLFxuICB9ICxcblxuICBcImlnbm9yZVwiIDoge1xuICAgIFwic3RhcnRzLXdpdGgtYS1zcGFjZVwiIDogZXJyKCdpZ25vcmUnLCAnc3RhcnRzLXdpdGgtYS1zcGFjZScpICxcbiAgICBcInN0YXJ0cy13aXRoLWEtbmV3bGluZVwiIDogZXJyKCdpZ25vcmUnLCAnc3RhcnRzLXdpdGgtYS1uZXdsaW5lJykgLFxuICAgIFwic3RhcnRzLXdpdGgtYS1jb21tZW50XCIgOiBlcnIoJ2lnbm9yZScsICdzdGFydHMtd2l0aC1hLWNvbW1lbnQnKSAsXG4gICAgXCJub3RoaW5nXCIgOiBlcnIoJ2lnbm9yZScsICdub3RoaW5nJykgLFxuICB9ICxcblxufSApIDtcbiJdfQ==