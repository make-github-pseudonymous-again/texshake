'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shake = undefined;

var _jsItertools = require('@aureooms/js-itertools');

var _jsGrammar = require('@aureooms/js-grammar');

const empty = {
  'type': 'node',
  'nonterminal': 'empty',
  'production': 'main',
  'children': []
};

const err = (nonterminal, production) => () => {
  throw new Error(`${nonterminal}.${production} should have been handled before`);
};

const t = _jsGrammar.ast.transform;
const m = (children, match, ctx) => _jsGrammar.ast.cmap(child => t(child, match, ctx), children);

const recurse = (nonterminal, production) => (tree, match, ctx) => ({
  "type": "node",
  nonterminal,
  production,
  "children": _jsGrammar.ast.cmap(x => x.type === 'leaf' ? x : t(x, match, ctx), tree.children)
});

const shake = exports.shake = {

  "anything": {
    "starts-with-othercmd": recurse('anything', 'starts-with-othercmd'),
    "starts-with-*": recurse('anything', 'starts-with-*'),
    "starts-with-[": recurse('anything', 'starts-with-['),
    "starts-with-]": recurse('anything', 'starts-with-]'),
    "starts-with-a-group": recurse('anything', 'starts-with-a-group'),
    "starts-with-something-else": recurse('anything', 'starts-with-something-else'),
    "end": () => empty
  },

  "anything-but-]": {
    "starts-with-othercmd": recurse('anything-but-]', 'starts-with-othercmd'),
    "starts-with-*": recurse('anything', 'starts-with-*'),
    "starts-with-[": recurse('anything', 'starts-with-['),
    "starts-with-a-group": recurse('anything-but-]', 'starts-with-a-group'),
    "starts-with-something-else": recurse('anything-but-]', 'starts-with-something-else'),
    "end": () => empty
  },

  "group": {
    "group": recurse('group', 'group')
  },

  "optgroup": {
    "group": recurse('optgroup', 'group')
  },

  "othercmd": {

    "othercmd": (tree, match, ctx) => {

      const it = (0, _jsItertools.iter)(tree.children);

      const othercmd = (0, _jsItertools.next)(it);
      let cmd = othercmd.buffer;

      const optstar = _jsGrammar.ast.materialize((0, _jsItertools.next)(it));
      if (optstar.production === 'yes') cmd += '*';

      const args = _jsGrammar.ast.materialize((0, _jsItertools.next)(it));
      const cmdargs = [];
      let arg_i = args;
      while (arg_i.production === 'normal') {
        const [group, tail] = arg_i.children;
        const [_open, arg, _close] = group.children;
        cmdargs.push(arg);
        arg_i = tail;
      }
      const hasoptargs = arg_i.production === 'optional';
      if (!hasoptargs && ctx.variables.has(cmd)) {
        // too hard to parse opt args currently
        const [nargs, expandsto] = ctx.variables.get(cmd);
        if (cmdargs.length !== nargs) throw new Error(`Command ${cmd} is defined with ${nargs} arguments but ${cmdargs.length} were given.`);
        return t(expandsto, match, { variables: ctx.variables, args: [ctx.args, cmdargs] });
      } else return {
        'type': 'node',
        'nonterminal': 'othercmd',
        'production': 'othercmd',
        'children': (0, _jsItertools.chain)([[othercmd, optstar], m([args], match, ctx)])
      };
    }

  },

  "*": {
    "*": tree => tree
  },

  "[": {
    "[": tree => tree
  },

  "]": {
    "]": tree => tree
  },

  "something-else": {

    "text": tree => tree,

    "newif": () => empty,

    "ifcmd": (tree, match, ctx) => {

      const it = (0, _jsItertools.iter)(tree.children);

      const ifcmd = (0, _jsItertools.next)(it); // \if...
      const variable = ifcmd.buffer.substr(3);

      if (ctx.variables.has(variable)) {
        const flag = ctx.variables.get(variable);
        const block1 = (0, _jsItertools.next)(it);
        if (flag) return t(block1, match, ctx);else {
          const endif = _jsGrammar.ast.materialize((0, _jsItertools.next)(it));
          if (endif.production === "elsefi") {
            const [_else, block2, _fi] = endif.children;
            return t(block2, match, ctx);
          } else return empty;
        }
      }

      return {
        'type': 'node',
        'nonterminal': 'something-else',
        'production': 'ifcmd',
        'children': (0, _jsItertools.chain)([[ifcmd], m(it, match, ctx)])
      };
    },

    "falsecmd": (tree, _, ctx) => {
      const [falsecmd] = tree.children;
      const buffer = falsecmd.buffer;
      const variable = buffer.substring(1, buffer.length - 5);
      ctx.variables.set(variable, false);
      return empty;
    },

    "truecmd": (tree, _, ctx) => {
      const [truecmd] = tree.children;
      const buffer = truecmd.buffer;
      const variable = buffer.substring(1, buffer.length - 4);
      ctx.variables.set(variable, true);
      return empty;
    },

    "comment": () => ({
      'type': 'leaf',
      'terminal': 'comment',
      'buffer': '%'
    }),

    "def": (tree, match, { variables }) => {
      const it = (0, _jsItertools.iter)(tree.children);
      (0, _jsItertools.next)(it); // \def
      const othercmd = (0, _jsItertools.next)(it);
      const cmd = othercmd.buffer;
      (0, _jsItertools.next)(it); // {
      const anything = (0, _jsItertools.next)(it);
      const blob = _jsGrammar.ast.materialize(anything);
      variables.set(cmd, [0, blob]);
      (0, _jsItertools.next)(it); // }
      return empty;
    },

    "newcommand": (tree, match, ctx) => {
      const [newcommand, cmddef] = tree.children;
      return t(cmddef, match, ctx);
    },

    "\n": tree => tree,

    "arg": (tree, match, { args, variables }) => {
      const [arg] = tree.children;
      if (args.length < 2) throw new Error(`Requesting ${arg} but got no arguments in context.`);
      const i = parseInt(arg.buffer.substr(1), 10) - 1; // #arg
      if (i >= args[1].length) throw new Error(`Requesting ${arg} but only got ${args[1].length} arguments.`);
      const subtree = args[1][i]; // arg
      return t(subtree, match, { args: args[0], variables });
    },

    "$": tree => tree,

    "math": recurse('something-else', 'math'),
    "mathenv": recurse('something-else', 'mathenv')

  },

  "endif": {
    "elsefi": recurse('endif', 'elsefi'),
    "fi": tree => tree
  },

  "cmddef": {

    "{cmd}[x]{anything}": (tree, _, { variables }) => {
      const it = (0, _jsItertools.iter)(tree.children);
      (0, _jsItertools.next)(it); // {
      const othercmd = (0, _jsItertools.next)(it);
      const cmd = othercmd.buffer;
      (0, _jsItertools.next)(it); // }
      const cmddefargs = (0, _jsItertools.next)(it);
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
        const it2 = (0, _jsItertools.iter)(cmddefargs.children);
        (0, _jsItertools.next)(it2); // [
        const text = (0, _jsItertools.next)(it2);
        nargs = parseInt(text.buffer, 10);
        (0, _jsItertools.next)(it2); // ]
      }
      (0, _jsItertools.next)(it); // {
      const anything = (0, _jsItertools.next)(it);
      const blob = _jsGrammar.ast.materialize(anything);
      variables.set(cmd, [nargs, blob]);
      (0, _jsItertools.next)(it); // }
      return empty;
    },

    "cmd[x]{anything}": (tree, _, { variables }) => {
      const it = (0, _jsItertools.iter)(tree.children);
      const othercmd = (0, _jsItertools.next)(it);
      const cmd = othercmd.buffer;
      const cmddefargs = (0, _jsItertools.next)(it);
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
        const it2 = (0, _jsItertools.iter)(cmddefargs.children);
        (0, _jsItertools.next)(it2); // [
        const text = (0, _jsItertools.next)(it2);
        nargs = parseInt(text.buffer, 10);
        (0, _jsItertools.next)(it2); // ]
      }
      (0, _jsItertools.next)(it); // {
      const anything = (0, _jsItertools.next)(it);
      const blob = _jsGrammar.ast.materialize(anything);
      variables.set(cmd, [nargs, blob]);
      (0, _jsItertools.next)(it); // }
      return empty;
    },

    "*cmd[x]{anything}": (tree, _, { variables }) => {
      // do not know what to do with '*' at the moment
      const it = (0, _jsItertools.iter)(tree.children);
      (0, _jsItertools.next)(it); // *
      const othercmd = (0, _jsItertools.next)(it);
      const cmd = othercmd.buffer;
      const cmddefargs = (0, _jsItertools.next)(it);
      let nargs = 0;
      if (cmddefargs.production === 'yes') {
        const it2 = (0, _jsItertools.iter)(cmddefargs.children);
        (0, _jsItertools.next)(it2); // [
        const text = (0, _jsItertools.next)(it2);
        nargs = parseInt(text.buffer, 10);
        (0, _jsItertools.next)(it2); // ]
      }
      (0, _jsItertools.next)(it); // {
      const anything = (0, _jsItertools.next)(it);
      const blob = _jsGrammar.ast.materialize(anything);
      variables.set(cmd, [nargs, blob]);
      (0, _jsItertools.next)(it); // }
      return empty;
    }

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
    "end": () => empty
  },

  "cmdafter": {
    "othercmd": recurse('cmdafter', 'othercmd'),
    "something-else-then-anything": recurse('cmdafter', 'something-else-then-anything'),
    "]-then-anything": recurse('cmdafter', ']-then-anything'),
    "nothing": () => empty
  },

  "cmdafter-but-not-]": {
    "othercmd": recurse('cmdafter-but-not-]', 'othercmd'),
    "something-else-then-anything": recurse('cmdafter-but-not-]', 'something-else-then-anything'),
    "nothing": () => empty
  }

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZS5qcyJdLCJuYW1lcyI6WyJlbXB0eSIsImVyciIsIm5vbnRlcm1pbmFsIiwicHJvZHVjdGlvbiIsIkVycm9yIiwidCIsImFzdCIsInRyYW5zZm9ybSIsIm0iLCJjaGlsZHJlbiIsIm1hdGNoIiwiY3R4IiwiY21hcCIsImNoaWxkIiwicmVjdXJzZSIsInRyZWUiLCJ4IiwidHlwZSIsInNoYWtlIiwiaXQiLCJvdGhlcmNtZCIsImNtZCIsImJ1ZmZlciIsIm9wdHN0YXIiLCJtYXRlcmlhbGl6ZSIsImFyZ3MiLCJjbWRhcmdzIiwiYXJnX2kiLCJncm91cCIsInRhaWwiLCJfb3BlbiIsImFyZyIsIl9jbG9zZSIsInB1c2giLCJoYXNvcHRhcmdzIiwidmFyaWFibGVzIiwiaGFzIiwibmFyZ3MiLCJleHBhbmRzdG8iLCJnZXQiLCJsZW5ndGgiLCJpZmNtZCIsInZhcmlhYmxlIiwic3Vic3RyIiwiZmxhZyIsImJsb2NrMSIsImVuZGlmIiwiX2Vsc2UiLCJibG9jazIiLCJfZmkiLCJfIiwiZmFsc2VjbWQiLCJzdWJzdHJpbmciLCJzZXQiLCJ0cnVlY21kIiwiYW55dGhpbmciLCJibG9iIiwibmV3Y29tbWFuZCIsImNtZGRlZiIsImkiLCJwYXJzZUludCIsInN1YnRyZWUiLCJjbWRkZWZhcmdzIiwiaXQyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBLE1BQU1BLFFBQVE7QUFDWixVQUFTLE1BREc7QUFFWixpQkFBZ0IsT0FGSjtBQUdaLGdCQUFlLE1BSEg7QUFJWixjQUFhO0FBSkQsQ0FBZDs7QUFPQSxNQUFNQyxNQUFNLENBQUVDLFdBQUYsRUFBZ0JDLFVBQWhCLEtBQWdDLE1BQU07QUFDaEQsUUFBTSxJQUFJQyxLQUFKLENBQVcsR0FBRUYsV0FBWSxJQUFHQyxVQUFXLGtDQUF2QyxDQUFOO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNRSxJQUFJQyxlQUFJQyxTQUFkO0FBQ0EsTUFBTUMsSUFBSSxDQUFFQyxRQUFGLEVB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QUdWLHVCQUFvQkEsUUFBUSxVQUFSLEVBQW9CLGlCQUFwQixDQUhWO0FBSVYsZUFBWSxNQUFNZDtBQUpSLEdBelFPOztBQWdSbkIsd0JBQXNCO0FBQ3BCLGdCQUFhYyxRQUFRLG9CQUFSLEVBQThCLFVBQTlCLENBRE87QUFFcEIsb0NBQWlDQSxRQUFRLG9CQUFSLEVBQThCLDhCQUE5QixDQUZiO0FBR3BCLGVBQVksTUFBTWQ7QUFIRTs7QUFoUkgsQ0FBZCIsImZpbGUiOiJzaGFrZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0ZXIgLCBuZXh0ICwgbGlzdCAsIGNoYWluIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuaW1wb3J0IHsgYXN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWdyYW1tYXInIDtcblxuY29uc3QgZW1wdHkgPSB7XG4gICd0eXBlJyA6ICdub2RlJyAsXG4gICdub250ZXJtaW5hbCcgOiAnZW1wdHknICxcbiAgJ3Byb2R1Y3Rpb24nIDogJ21haW4nICxcbiAgJ2NoaWxkcmVuJyA6IFtdICxcbn0gO1xuXG5jb25zdCBlcnIgPSAoIG5vbnRlcm1pbmFsICwgcHJvZHVjdGlvbiApID0+ICgpID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKGAke25vbnRlcm1pbmFsfS4ke3Byb2R1Y3Rpb259IHNob3VsZCBoYXZlIGJlZW4gaGFuZGxlZCBiZWZvcmVgKTtcbn0gO1xuXG5jb25zdCB0ID0gYXN0LnRyYW5zZm9ybSA7XG5jb25zdCBtID0gKCBjaGlsZHJlbiAsIG1hdGNoICwgY3R4ICkgPT4gYXN0LmNtYXAoIGNoaWxkID0+IHQoIGNoaWxkICwgbWF0Y2ggLCBjdHggKSAsIGNoaWxkcmVuICkgO1xuXG5jb25zdCByZWN1cnNlID0gKCBub250ZXJtaW5hbCAsIHByb2R1Y3Rpb24gKSA9PiAoIHRyZWUgLCBtYXRjaCAsIGN0eCApID0+ICh7XG4gIFwidHlwZVwiIDogXCJub2RlXCIgLFxuICBub250ZXJtaW5hbCAsXG4gIHByb2R1Y3Rpb24gLFxuICBcImNoaWxkcmVuXCIgOiBhc3QuY21hcCggeCA9PiB4LnR5cGUgPT09ICdsZWFmJyA/IHggOiB0KCB4ICwgbWF0Y2ggLCBjdHggKSAsIHRyZWUuY2hpbGRyZW4gKSAsXG59KSA7XG5cblxuZXhwb3J0IGNvbnN0IHNoYWtlID0ge1xuXG4gIFwiYW55dGhpbmdcIiA6IHtcbiAgICBcInN0YXJ0cy13aXRoLW90aGVyY21kXCIgOiByZWN1cnNlKCAnYW55dGhpbmcnICwgJ3N0YXJ0cy13aXRoLW90aGVyY21kJyApICxcbiAgICBcInN0YXJ0cy13aXRoLSpcIiA6IHJlY3Vyc2UoICdhbnl0aGluZycgLCAnc3RhcnRzLXdpdGgtKicgKSAsXG4gICAgXCJzdGFydHMtd2l0aC1bXCIgOiByZWN1cnNlKCAnYW55dGhpbmcnICwgJ3N0YXJ0cy13aXRoLVsnICkgLFxuICAgIFwic3RhcnRzLXdpdGgtXVwiIDogcmVjdXJzZSggJ2FueXRoaW5nJyAsICdzdGFydHMtd2l0aC1dJyApICxcbiAgICBcInN0YXJ0cy13aXRoLWEtZ3JvdXBcIiA6IHJlY3Vyc2UoICdhbnl0aGluZycgLCAnc3RhcnRzLXdpdGgtYS1ncm91cCcgKSAsXG4gICAgXCJzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZVwiIDogcmVjdXJzZSggJ2FueXRoaW5nJyAsICdzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZScgKSAsXG4gICAgXCJlbmRcIiA6ICgpID0+IGVtcHR5ICxcbiAgfSAsXG5cbiAgXCJhbnl0aGluZy1idXQtXVwiIDoge1xuICAgIFwic3RhcnRzLXdpdGgtb3RoZXJjbWRcIiA6IHJlY3Vyc2UoICdhbnl0aGluZy1idXQtXScgLCAnc3RhcnRzLXdpdGgtb3RoZXJjbWQnICkgLFxuICAgIFwic3RhcnRzLXdpdGgtKlwiIDogcmVjdXJzZSggJ2FueXRoaW5nJyAsICdzdGFydHMtd2l0aC0qJyApICxcbiAgICBcInN0YXJ0cy13aXRoLVtcIiA6IHJlY3Vyc2UoICdhbnl0aGluZycgLCAnc3RhcnRzLXdpdGgtWycgKSAsXG4gICAgXCJzdGFydHMtd2l0aC1hLWdyb3VwXCIgOiByZWN1cnNlKCAnYW55dGhpbmctYnV0LV0nICwgJ3N0YXJ0cy13aXRoLWEtZ3JvdXAnICkgLFxuICAgIFwic3RhcnRzLXdpdGgtc29tZXRoaW5nLWVsc2VcIiA6IHJlY3Vyc2UoICdhbnl0aGluZy1idXQtXScgLCAnc3RhcnRzLXdpdGgtc29tZXRoaW5nLWVsc2UnICkgLFxuICAgIFwiZW5kXCIgOiAoKSA9PiBlbXB0eSAsXG4gIH0gLFxuXG4gIFwiZ3JvdXBcIiA6IHtcbiAgICBcImdyb3VwXCIgOiByZWN1cnNlKCdncm91cCcsICdncm91cCcpICxcbiAgfSAsXG5cbiAgXCJvcHRncm91cFwiIDoge1xuICAgIFwiZ3JvdXBcIiA6IHJlY3Vyc2UoJ29wdGdyb3VwJywgJ2dyb3VwJykgLFxuICB9ICxcblxuICBcIm90aGVyY21kXCIgOiB7XG5cbiAgICBcIm90aGVyY21kXCI6ICggdHJlZSAsIG1hdGNoICwgY3R4ICkgPT4ge1xuXG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuXG4gICAgICBjb25zdCBvdGhlcmNtZCA9IG5leHQoaXQpIDtcbiAgICAgIGxldCBjbWQgPSBvdGhlcmNtZC5idWZmZXI7XG5cbiAgICAgIGNvbnN0IG9wdHN0YXIgPSBhc3QubWF0ZXJpYWxpemUobmV4dChpdCkpO1xuICAgICAgaWYgKCBvcHRzdGFyLnByb2R1Y3Rpb24gPT09ICd5ZXMnICkgY21kICs9ICcqJztcblxuICAgICAgY29uc3QgYXJncyA9IGFzdC5tYXRlcmlhbGl6ZShuZXh0KGl0KSk7XG4gICAgICBjb25zdCBjbWRhcmdzID0gW107XG4gICAgICBsZXQgYXJnX2kgPSBhcmdzXG4gICAgICB3aGlsZSAoIGFyZ19pLnByb2R1Y3Rpb24gPT09ICdub3JtYWwnICkge1xuXHRjb25zdCBbIGdyb3VwICwgdGFpbCBdID0gYXJnX2kuY2hpbGRyZW4gO1xuXHRjb25zdCBbIF9vcGVuICwgYXJnICwgX2Nsb3NlIF0gPSBncm91cC5jaGlsZHJlbiA7XG5cdGNtZGFyZ3MucHVzaChhcmcpIDtcblx0YXJnX2kgPSB0YWlsIDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhhc29wdGFyZ3MgPSBhcmdfaS5wcm9kdWN0aW9uID09PSAnb3B0aW9uYWwnIDtcbiAgICAgIGlmICghaGFzb3B0YXJncyAmJiBjdHgudmFyaWFibGVzLmhhcyhjbWQpKSB7XG5cdC8vIHRvbyBoYXJkIHRvIHBhcnNlIG9wdCBhcmdzIGN1cnJlbnRseVxuXHRjb25zdCBbIG5hcmdzICwgZXhwYW5kc3RvIF0gPSBjdHgudmFyaWFibGVzLmdldChjbWQpIDtcblx0aWYgKGNtZGFyZ3MubGVuZ3RoICE9PSBuYXJncykgdGhyb3cgbmV3IEVycm9yKGBDb21tYW5kICR7Y21kfSBpcyBkZWZpbmVkIHdpdGggJHtuYXJnc30gYXJndW1lbnRzIGJ1dCAke2NtZGFyZ3MubGVuZ3RofSB3ZXJlIGdpdmVuLmApIDtcblx0cmV0dXJuIHQoIGV4cGFuZHN0byAsIG1hdGNoICwgeyB2YXJpYWJsZXM6IGN0eC52YXJpYWJsZXMgLCBhcmdzOiBbIGN0eC5hcmdzICwgY21kYXJncyBdIH0gKSA7XG4gICAgICB9XG4gICAgICBlbHNlIHJldHVybiB7XG5cdCd0eXBlJyA6ICdub2RlJyAsXG5cdCdub250ZXJtaW5hbCcgOiAnb3RoZXJjbWQnICxcblx0J3Byb2R1Y3Rpb24nIDogJ290aGVyY21kJyAsXG5cdCdjaGlsZHJlbicgOiBjaGFpbiggWyBbIG90aGVyY21kICwgb3B0c3RhciBdICwgbShbYXJnc10sIG1hdGNoLCBjdHgpIF0gKSAsXG4gICAgICB9IDtcbiAgICB9ICxcblxuICB9ICxcblxuICBcIipcIiA6IHtcbiAgICBcIipcIiA6IHRyZWUgPT4gdHJlZSAsXG4gIH0gLFxuXG4gIFwiW1wiIDoge1xuICAgIFwiW1wiIDogdHJlZSA9PiB0cmVlICxcbiAgfSAsXG5cbiAgXCJdXCIgOiB7XG4gICAgXCJdXCIgOiB0cmVlID0+IHRyZWUgLFxuICB9ICxcblxuICBcInNvbWV0aGluZy1lbHNlXCIgOiB7XG5cbiAgICBcInRleHRcIiA6IHRyZWUgPT4gdHJlZSAsXG5cbiAgICBcIm5ld2lmXCI6ICgpID0+IGVtcHR5ICxcblxuICAgIFwiaWZjbWRcIjogKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG5cbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG5cbiAgICAgIGNvbnN0IGlmY21kID0gbmV4dChpdCkgOyAvLyBcXGlmLi4uXG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGlmY21kLmJ1ZmZlci5zdWJzdHIoMyk7XG5cbiAgICAgIGlmIChjdHgudmFyaWFibGVzLmhhcyh2YXJpYWJsZSkpIHtcblx0Y29uc3QgZmxhZyA9IGN0eC52YXJpYWJsZXMuZ2V0KHZhcmlhYmxlKTtcblx0Y29uc3QgYmxvY2sxID0gbmV4dChpdCkgO1xuXHRpZiAoZmxhZykgcmV0dXJuIHQoIGJsb2NrMSAsIG1hdGNoICwgY3R4ICkgO1xuXHRlbHNlIHtcblx0ICBjb25zdCBlbmRpZiA9IGFzdC5tYXRlcmlhbGl6ZShuZXh0KGl0KSkgO1xuXHQgIGlmICggZW5kaWYucHJvZHVjdGlvbiA9PT0gXCJlbHNlZmlcIiApIHtcblx0ICAgIGNvbnN0IFsgX2Vsc2UgLCBibG9jazIgLCBfZmkgXSA9IGVuZGlmLmNoaWxkcmVuIDtcblx0ICAgIHJldHVybiB0KCBibG9jazIgLCBtYXRjaCAsIGN0eCApIDtcblx0ICB9XG5cdCAgZWxzZSByZXR1cm4gZW1wdHkgO1xuXHR9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG5cdCd0eXBlJyA6ICdub2RlJyAsXG5cdCdub250ZXJtaW5hbCcgOiAnc29tZXRoaW5nLWVsc2UnICxcblx0J3Byb2R1Y3Rpb24nIDogJ2lmY21kJyAsXG5cdCdjaGlsZHJlbicgOiBjaGFpbiggWyBbIGlmY21kIF0gLCBtKCBpdCAsIG1hdGNoICwgY3R4ICkgXSApICxcbiAgICAgIH0gO1xuXG4gICAgfSAsXG5cbiAgICBcImZhbHNlY21kXCIgOiAoIHRyZWUgLCBfICwgY3R4ICkgPT4ge1xuICAgICAgY29uc3QgWyBmYWxzZWNtZCBdID0gdHJlZS5jaGlsZHJlbiA7XG4gICAgICBjb25zdCBidWZmZXIgPSBmYWxzZWNtZC5idWZmZXI7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMSwgYnVmZmVyLmxlbmd0aC01KTtcbiAgICAgIGN0eC52YXJpYWJsZXMuc2V0KHZhcmlhYmxlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSAsXG5cbiAgICBcInRydWVjbWRcIiA6ICggdHJlZSAsIF8gLCBjdHggKSA9PiB7XG4gICAgICBjb25zdCBbIHRydWVjbWQgXSA9IHRyZWUuY2hpbGRyZW4gO1xuICAgICAgY29uc3QgYnVmZmVyID0gdHJ1ZWNtZC5idWZmZXI7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMSwgYnVmZmVyLmxlbmd0aC00KTtcbiAgICAgIGN0eC52YXJpYWJsZXMuc2V0KHZhcmlhYmxlLCB0cnVlKTtcbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcblxuICAgIFwiY29tbWVudFwiOiAoICkgPT4gKHtcbiAgICAgICd0eXBlJyA6ICdsZWFmJyAsXG4gICAgICAndGVybWluYWwnIDogJ2NvbW1lbnQnICxcbiAgICAgICdidWZmZXInIDogJyUnICxcbiAgICB9KSAsXG5cbiAgICBcImRlZlwiOiAoIHRyZWUgLCBtYXRjaCAsIHsgdmFyaWFibGVzIH0gKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgbmV4dChpdCkgOyAvLyBcXGRlZlxuICAgICAgY29uc3Qgb3RoZXJjbWQgPSBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGNtZCA9IG90aGVyY21kLmJ1ZmZlciA7XG4gICAgICBuZXh0KGl0KSA7IC8vIHtcbiAgICAgIGNvbnN0IGFueXRoaW5nID0gbmV4dChpdCkgO1xuICAgICAgY29uc3QgYmxvYiA9IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZykgO1xuICAgICAgdmFyaWFibGVzLnNldChjbWQsIFswLCBibG9iXSk7XG4gICAgICBuZXh0KGl0KSA7IC8vIH1cbiAgICAgIHJldHVybiBlbXB0eSA7XG4gICAgfSAsXG5cbiAgICBcIm5ld2NvbW1hbmRcIjogKCB0cmVlICwgbWF0Y2ggLCBjdHggKSA9PiB7XG4gICAgICBjb25zdCBbIG5ld2NvbW1hbmQgLCBjbWRkZWYgXSA9IHRyZWUuY2hpbGRyZW4gO1xuICAgICAgcmV0dXJuIHQoIGNtZGRlZiAsIG1hdGNoICwgY3R4ICkgO1xuICAgIH0gLFxuXG4gICAgXCJcXG5cIiA6IHRyZWUgPT4gdHJlZSAsXG5cbiAgICBcImFyZ1wiOiAoIHRyZWUgLCBtYXRjaCAsIHsgYXJncyAsIHZhcmlhYmxlcyB9ICkgPT4ge1xuICAgICAgY29uc3QgWyBhcmcgXSA9IHRyZWUuY2hpbGRyZW4gO1xuICAgICAgaWYgKCBhcmdzLmxlbmd0aCA8IDIgKSB0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3RpbmcgJHthcmd9IGJ1dCBnb3Qgbm8gYXJndW1lbnRzIGluIGNvbnRleHQuYCkgO1xuICAgICAgY29uc3QgaSA9IHBhcnNlSW50KGFyZy5idWZmZXIuc3Vic3RyKDEpLCAxMCkgLSAxOyAvLyAjYXJnXG4gICAgICBpZiAoIGkgPj0gYXJnc1sxXS5sZW5ndGggKSB0aHJvdyBuZXcgRXJyb3IoYFJlcXVlc3RpbmcgJHthcmd9IGJ1dCBvbmx5IGdvdCAke2FyZ3NbMV0ubGVuZ3RofSBhcmd1bWVudHMuYCkgO1xuICAgICAgY29uc3Qgc3VidHJlZSA9IGFyZ3NbMV1baV0gOyAvLyBhcmdcbiAgICAgIHJldHVybiB0KCBzdWJ0cmVlICwgbWF0Y2ggLCB7IGFyZ3M6IGFyZ3NbMF0gLCB2YXJpYWJsZXMgfSApIDtcbiAgICB9ICxcblxuICAgIFwiJFwiIDogdHJlZSA9PiB0cmVlICxcblxuICAgIFwibWF0aFwiIDogcmVjdXJzZSgnc29tZXRoaW5nLWVsc2UnLCAnbWF0aCcpICxcbiAgICBcIm1hdGhlbnZcIiA6IHJlY3Vyc2UoJ3NvbWV0aGluZy1lbHNlJywgJ21hdGhlbnYnKSAsXG5cbiAgfSAsXG5cbiAgXCJlbmRpZlwiOiB7XG4gICAgXCJlbHNlZmlcIiA6IHJlY3Vyc2UoICdlbmRpZicsICdlbHNlZmknICkgLFxuICAgIFwiZmlcIiA6IHRyZWUgPT4gdHJlZSAsXG4gIH0gLFxuXG4gIFwiY21kZGVmXCIgOiB7XG5cbiAgICBcIntjbWR9W3hde2FueXRoaW5nfVwiOiAoIHRyZWUgLCBfICwgeyB2YXJpYWJsZXMgfSApID0+IHtcbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG4gICAgICBuZXh0KGl0KTsgLy8ge1xuICAgICAgY29uc3Qgb3RoZXJjbWQgPSBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGNtZCA9IG90aGVyY21kLmJ1ZmZlcjtcbiAgICAgIG5leHQoaXQpOyAvLyB9XG4gICAgICBjb25zdCBjbWRkZWZhcmdzID0gbmV4dChpdCk7XG4gICAgICBsZXQgbmFyZ3MgPSAwO1xuICAgICAgaWYgKGNtZGRlZmFyZ3MucHJvZHVjdGlvbiA9PT0gJ3llcycpIHtcblx0Y29uc3QgaXQyID0gaXRlcihjbWRkZWZhcmdzLmNoaWxkcmVuKTtcblx0bmV4dChpdDIpIDsgLy8gW1xuXHRjb25zdCB0ZXh0ID0gbmV4dChpdDIpIDtcblx0bmFyZ3MgPSBwYXJzZUludCh0ZXh0LmJ1ZmZlciwgMTApO1xuXHRuZXh0KGl0MikgOyAvLyBdXG4gICAgICB9XG4gICAgICBuZXh0KGl0KTsgLy8ge1xuICAgICAgY29uc3QgYW55dGhpbmcgPSBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGJsb2IgPSBhc3QubWF0ZXJpYWxpemUoYW55dGhpbmcpIDtcbiAgICAgIHZhcmlhYmxlcy5zZXQoY21kLCBbIG5hcmdzICwgYmxvYiBdKTtcbiAgICAgIG5leHQoaXQpOyAvLyB9XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSAsXG5cbiAgICBcImNtZFt4XXthbnl0aGluZ31cIjogKCB0cmVlICwgXyAsIHsgdmFyaWFibGVzIH0gKSA9PiB7XG4gICAgICBjb25zdCBpdCA9IGl0ZXIodHJlZS5jaGlsZHJlbikgO1xuICAgICAgY29uc3Qgb3RoZXJjbWQgPSBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGNtZCA9IG90aGVyY21kLmJ1ZmZlcjtcbiAgICAgIGNvbnN0IGNtZGRlZmFyZ3MgPSBuZXh0KGl0KTtcbiAgICAgIGxldCBuYXJncyA9IDA7XG4gICAgICBpZiAoY21kZGVmYXJncy5wcm9kdWN0aW9uID09PSAneWVzJykge1xuXHRjb25zdCBpdDIgPSBpdGVyKGNtZGRlZmFyZ3MuY2hpbGRyZW4pO1xuXHRuZXh0KGl0MikgOyAvLyBbXG5cdGNvbnN0IHRleHQgPSBuZXh0KGl0MikgO1xuXHRuYXJncyA9IHBhcnNlSW50KHRleHQuYnVmZmVyLCAxMCk7XG5cdG5leHQoaXQyKSA7IC8vIF1cbiAgICAgIH1cbiAgICAgIG5leHQoaXQpOyAvLyB7XG4gICAgICBjb25zdCBhbnl0aGluZyA9IG5leHQoaXQpO1xuICAgICAgY29uc3QgYmxvYiA9IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZykgO1xuICAgICAgdmFyaWFibGVzLnNldChjbWQsIFsgbmFyZ3MgLCBibG9iIF0pO1xuICAgICAgbmV4dChpdCk7IC8vIH1cbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcblxuICAgIFwiKmNtZFt4XXthbnl0aGluZ31cIjogKCB0cmVlICwgXyAsIHsgdmFyaWFibGVzIH0gKSA9PiB7XG4gICAgICAvLyBkbyBub3Qga25vdyB3aGF0IHRvIGRvIHdpdGggJyonIGF0IHRoZSBtb21lbnRcbiAgICAgIGNvbnN0IGl0ID0gaXRlcih0cmVlLmNoaWxkcmVuKSA7XG4gICAgICBuZXh0KGl0KTsgLy8gKlxuICAgICAgY29uc3Qgb3RoZXJjbWQgPSBuZXh0KGl0KTtcbiAgICAgIGNvbnN0IGNtZCA9IG90aGVyY21kLmJ1ZmZlcjtcbiAgICAgIGNvbnN0IGNtZGRlZmFyZ3MgPSBuZXh0KGl0KTtcbiAgICAgIGxldCBuYXJncyA9IDA7XG4gICAgICBpZiAoY21kZGVmYXJncy5wcm9kdWN0aW9uID09PSAneWVzJykge1xuXHRjb25zdCBpdDIgPSBpdGVyKGNtZGRlZmFyZ3MuY2hpbGRyZW4pO1xuXHRuZXh0KGl0MikgOyAvLyBbXG5cdGNvbnN0IHRleHQgPSBuZXh0KGl0MikgO1xuXHRuYXJncyA9IHBhcnNlSW50KHRleHQuYnVmZmVyLCAxMCk7XG5cdG5leHQoaXQyKSA7IC8vIF1cbiAgICAgIH1cbiAgICAgIG5leHQoaXQpOyAvLyB7XG4gICAgICBjb25zdCBhbnl0aGluZyA9IG5leHQoaXQpO1xuICAgICAgY29uc3QgYmxvYiA9IGFzdC5tYXRlcmlhbGl6ZShhbnl0aGluZykgO1xuICAgICAgdmFyaWFibGVzLnNldChjbWQsIFsgbmFyZ3MgLCBibG9iIF0pO1xuICAgICAgbmV4dChpdCk7IC8vIH1cbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9ICxcblxuICB9ICxcblxuICBcImNtZGRlZmFyZ3NcIjoge1xuICAgIFwieWVzXCIgOiBlcnIoIFwiY21kZGVmYXJnc1wiICwgXCJ5ZXNcIiApICxcbiAgICBcIm5vXCIgOiBlcnIoIFwiY21kZGVmYXJnc1wiICwgXCJub1wiICkgLFxuICB9ICxcblxuICBcImNtZCpcIjoge1xuICAgIFwieWVzXCIgOiBlcnIoIFwiY21kKlwiICwgXCJ5ZXNcIiApICxcbiAgICBcIm5vXCIgOiBlcnIoIFwiY21kKlwiICwgXCJub1wiICkgLFxuICB9ICxcblxuICBcImNtZGFyZ3NcIjoge1xuICAgIFwibm9ybWFsXCIgOiByZWN1cnNlKCdjbWRhcmdzJywgJ25vcm1hbCcpICxcbiAgICBcIm9wdGlvbmFsXCIgOiByZWN1cnNlKCdjbWRhcmdzJywgJ29wdGlvbmFsJykgLFxuICAgIFwiZW5kXCIgOiAoKSA9PiBlbXB0eSAsXG4gIH0gLFxuXG4gIFwiY21kYWZ0ZXJcIjoge1xuICAgIFwib3RoZXJjbWRcIiA6IHJlY3Vyc2UoJ2NtZGFmdGVyJywgJ290aGVyY21kJyApICxcbiAgICBcInNvbWV0aGluZy1lbHNlLXRoZW4tYW55dGhpbmdcIiA6IHJlY3Vyc2UoJ2NtZGFmdGVyJywgJ3NvbWV0aGluZy1lbHNlLXRoZW4tYW55dGhpbmcnICkgLFxuICAgIFwiXS10aGVuLWFueXRoaW5nXCIgOiByZWN1cnNlKCdjbWRhZnRlcicsICddLXRoZW4tYW55dGhpbmcnICkgLFxuICAgIFwibm90aGluZ1wiIDogKCkgPT4gZW1wdHkgLFxuICB9ICxcblxuICBcImNtZGFmdGVyLWJ1dC1ub3QtXVwiOiB7XG4gICAgXCJvdGhlcmNtZFwiIDogcmVjdXJzZSgnY21kYWZ0ZXItYnV0LW5vdC1dJywgJ290aGVyY21kJyApICxcbiAgICBcInNvbWV0aGluZy1lbHNlLXRoZW4tYW55dGhpbmdcIiA6IHJlY3Vyc2UoJ2NtZGFmdGVyLWJ1dC1ub3QtXScsICdzb21ldGhpbmctZWxzZS10aGVuLWFueXRoaW5nJyApICxcbiAgICBcIm5vdGhpbmdcIiA6ICgpID0+IGVtcHR5ICxcbiAgfSAsXG5cbn0gO1xuIl19