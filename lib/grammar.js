"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.G = undefined;

var _jsGrammar = require("@aureooms/js-grammar");

const start = "anything";
const eof = "%";
const productions = {
  "anything": {
    "starts-with-othercmd": ['&othercmd', "&cmdafter"],
    "starts-with-*": ['&*', "&anything"],
    "starts-with-[": ['&[', "&anything"],
    "starts-with-]": ['&]', "&anything"],
    "starts-with-a-group": ['&group', '&anything'],
    "starts-with-something-else": ["&something-else", "&anything"],
    "end": [] // 0.1
  },
  "anything-but-]": {
    "starts-with-othercmd": ['&othercmd', "&cmdafter-but-not-]"],
    "starts-with-*": ['&*', "&anything-but-]"],
    "starts-with-[": ['&[', "&anything-but-]"],
    "starts-with-a-group": ['&group', '&anything-but-]'],
    "starts-with-something-else": ["&something-else", "&anything-but-]"],
    "end": []
  },
  "group": {
    "group": ['={', '&anything', '=}']
  },
  "optgroup": {
    "group": ['=[', "&anything-but-]", '=]']
  },
  "othercmd": {
    "othercmd": ['=othercmd', "&cmd*", "&cmdargs"]
  },
  "*": {
    "*": ['=*']
  },
  "[": {
    "[": ['=[']
  },
  "]": {
    "]": ['=]']
  },
  "something-else": {
    "text": ['=text'], // 1.0
    "newif": ['=newif', '=ifcmd'], // 1.1
    "ifcmd": ['=ifcmd', "&anything", "&endif"], // 1.2
    "falsecmd": ['=falsecmd'], // 1.3
    "truecmd": ['=truecmd'], // 1.4
    "comment": ['=comment'], // 1.5
    "def": ['=def', '=othercmd', '={', "&anything", '=}'], // 1.7
    "newcommand": ['=newcommand', "&cmddef"], // 1.8
    " ": ['= '],
    "\n": ['=\n'],
    "\t": ['=\t'],
    "arg": ['=arg'], // 1.12
    "$": ['=$'],
    "math": ['=\\(', '&anything', '=\\)'],
    "mathenv": ['=\\[', '&anything', '=\\]']
  },
  "endif": { // endif : 2
    "elsefi": ['=else', "&anything", '=fi'], // 2.0
    "fi": ['=fi'] // 2.1
  },
  "cmddef": { // command definition 3
    "{cmd}[x]{anything}": ['={', '=othercmd', '=}', "&cmddefargs", '={', "&anything", '=}'],
    "cmd[x]{anything}": ['=othercmd', "&cmddefargs", '={', "&anything", '=}'],
    "*cmd[x]{anything}": ['=*', '=othercmd', "&cmddefargs", '={', "&anything", '=}']
  },
  "cmddefargs": { // command definition arguments 4
    "yes": ['=[', '=text', '=]'], // 4.0
    "no": [] // 4.1
  },
  "cmd*": { // othercmd star : 5
    "yes": ['=*'], // 5.0
    "no": [] // 5.1
  },
  "cmdargs": { // othercmd arguments : 7
    "normal": ["&group", "&cmdargs"],
    "optional": ["&optgroup", "&cmdargs"],
    "end": [] // 7.1
  },
  "cmdafter": { // after othercmd
    "othercmd": ["&othercmd", "&cmdafter"],
    "]-then-anything": ["&]", "&anything"],
    "something-else-then-anything": ["&something-else", "&anything"],
    "nothing": []
  },
  "cmdafter-but-not-]": { // after othercmd
    "othercmd": ["&othercmd", "&cmdafter-but-not-]"],
    "something-else-then-anything": ["&something-else", "&anything-but-]"],
    "nothing": []
  }
};

const G = exports.G = _jsGrammar.grammar.from({ start, eof, productions });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwiZW9mIiwicHJvZHVjdGlvbnMiLCJHIiwiZ3JhbW1hciIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLFVBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQVo7QUFDQSxNQUFNQyxjQUFjO0FBQ2xCLGNBQWE7QUFDWCw0QkFBeUIsQ0FBRSxXQUFGLEVBQWdCLFdBQWhCLENBRGQ7QUFFWCxxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsV0FBVCxDQUZQO0FBR1gscUJBQWtCLENBQUUsSUFBRixFQUFTLFdBQVQsQ0FIUDtBQUlYLHFCQUFrQixDQUFFLElBQUYsRUFBUyxXQUFULENBSlA7QUFLWCwyQkFBd0IsQ0FBRSxRQUFGLEVBQWEsV0FBYixDQUxiO0FBTVgsa0NBQStCLENBQUUsaUJBQUYsRUFBc0IsV0FBdEIsQ0FOcEI7QUFPWCxXQUFRLEVBUEcsQ0FPRztBQVBILEdBREs7QUFVbEIsb0JBQW1CO0FBQ2pCLDRCQUF5QixDQUFFLFdBQUYsRUFBZ0IscUJBQWhCLENBRFI7QUFFakIscUJBQWtCLENBQUUsSUFBRixFQUFTLGlCQUFULENBRkQ7QUFHakIscUJBQWtCLENBQUUsSUFBRixFQUFTLGlCQUFULENBSEQ7QUFJakIsMkJBQXdCLENBQUUsUUFBRixFQUFhLGlCQUFiLENBSlA7QUFLakIsa0NBQStCLENBQUUsaUJBQUYsRUFBc0IsaUJBQXRCLENBTGQ7QUFNakIsV0FBUTtBQU5TLEdBVkQ7QUFrQmxCLFdBQVU7QUFDUixhQUFVLENBQUUsSUFBRixFQUFTLFdBQVQsRUFBdUIsSUFBdkI7QUFERixHQWxCUTtBQXFCbEIsY0FBYTtBQUNYLGFBQVUsQ0FBRSxJQUFGLEVBQVMsaUJBQVQsRUFBNkIsSUFBN0I7QUFEQyxHQXJCSztBQXdCbEIsY0FBYTtBQUNYLGdCQUFhLENBQUUsV0FBRixFQUFnQixPQUFoQixFQUEwQixVQUExQjtBQURGLEdBeEJLO0FBMkJsQixPQUFN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ZXNDb250ZW50IjpbImltcG9ydCB7IGdyYW1tYXIgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuXG5jb25zdCBzdGFydCA9IFwiYW55dGhpbmdcIiA7XG5jb25zdCBlb2YgPSBcIiVcIiA7XG5jb25zdCBwcm9kdWN0aW9ucyA9IHtcbiAgXCJhbnl0aGluZ1wiIDoge1xuICAgIFwic3RhcnRzLXdpdGgtb3RoZXJjbWRcIiA6IFsgJyZvdGhlcmNtZCcgLCBcIiZjbWRhZnRlclwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtKlwiIDogWyAnJionICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLVtcIiA6IFsgJyZbJyAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1dXCIgOiBbICcmXScgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtYS1ncm91cFwiIDogWyAnJmdyb3VwJyAsICcmYW55dGhpbmcnIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtc29tZXRoaW5nLWVsc2VcIiA6IFsgXCImc29tZXRoaW5nLWVsc2VcIiAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJlbmRcIiA6IFsgXSAsIC8vIDAuMVxuICB9ICxcbiAgXCJhbnl0aGluZy1idXQtXVwiIDoge1xuICAgIFwic3RhcnRzLXdpdGgtb3RoZXJjbWRcIiA6IFsgJyZvdGhlcmNtZCcgLCBcIiZjbWRhZnRlci1idXQtbm90LV1cIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLSpcIiA6IFsgJyYqJyAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1bXCIgOiBbICcmWycgLCBcIiZhbnl0aGluZy1idXQtXVwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtYS1ncm91cFwiIDogWyAnJmdyb3VwJyAsICcmYW55dGhpbmctYnV0LV0nIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtc29tZXRoaW5nLWVsc2VcIiA6IFsgXCImc29tZXRoaW5nLWVsc2VcIiAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgXSAsXG4gICAgXCJlbmRcIiA6IFsgXSAsXG4gIH0gLFxuICBcImdyb3VwXCIgOiB7XG4gICAgXCJncm91cFwiIDogWyAnPXsnICwgJyZhbnl0aGluZycgLCAnPX0nIF0gLFxuICB9ICxcbiAgXCJvcHRncm91cFwiIDoge1xuICAgIFwiZ3JvdXBcIiA6IFsgJz1bJyAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgLCAnPV0nIF0gLFxuICB9ICxcbiAgXCJvdGhlcmNtZFwiIDoge1xuICAgIFwib3RoZXJjbWRcIiA6IFsgJz1vdGhlcmNtZCcgLCBcIiZjbWQqXCIgLCBcIiZjbWRhcmdzXCIgXSAsXG4gIH0sXG4gIFwiKlwiIDoge1xuICAgIFwiKlwiIDogWyAnPSonIF0gLFxuICB9ICxcbiAgXCJbXCIgOiB7XG4gICAgXCJbXCIgOiBbICc9WycgXSAsXG4gIH0gLFxuICBcIl1cIiA6IHtcbiAgICBcIl1cIiA6IFsgJz1dJyBdICxcbiAgfSAsXG4gIFwic29tZXRoaW5nLWVsc2VcIiA6IHtcbiAgICBcInRleHRcIiA6IFsgJz10ZXh0JyBdICwgLy8gMS4wXG4gICAgXCJuZXdpZlwiIDogWyAnPW5ld2lmJyAsICc9aWZjbWQnIF0gLCAvLyAxLjFcbiAgICBcImlmY21kXCIgOiBbICc9aWZjbWQnICwgXCImYW55dGhpbmdcIiAsIFwiJmVuZGlmXCIgXSAsIC8vIDEuMlxuICAgIFwiZmFsc2VjbWRcIiA6IFsgJz1mYWxzZWNtZCcgXSAsIC8vIDEuM1xuICAgIFwidHJ1ZWNtZFwiIDogWyAnPXRydWVjbWQnIF0gLCAvLyAxLjRcbiAgICBcImNvbW1lbnRcIiA6IFsgJz1jb21tZW50JyBdICwgLy8gMS41XG4gICAgXCJkZWZcIiA6IFsgJz1kZWYnICwgJz1vdGhlcmNtZCcgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgXSAsIC8vIDEuN1xuICAgIFwibmV3Y29tbWFuZFwiIDogWyAnPW5ld2NvbW1hbmQnICwgXCImY21kZGVmXCIgXSAsIC8vIDEuOFxuICAgIFwiIFwiIDogWyAnPSAnIF0gLFxuICAgIFwiXFxuXCIgOiBbICc9XFxuJyBdICxcbiAgICBcIlxcdFwiIDogWyAnPVxcdCcgXSAsXG4gICAgXCJhcmdcIiA6IFsgJz1hcmcnIF0gLCAvLyAxLjEyXG4gICAgXCIkXCIgOiBbICc9JCcgXSAsXG4gICAgXCJtYXRoXCIgOiBbICc9XFxcXCgnICwgJyZhbnl0aGluZycgLCAnPVxcXFwpJyBdICxcbiAgICBcIm1hdGhlbnZcIiA6IFsgJz1cXFxcWycgLCAnJmFueXRoaW5nJyAsICc9XFxcXF0nIF0gLFxuICB9ICxcbiAgXCJlbmRpZlwiIDogeyAvLyBlbmRpZiA6IDJcbiAgICBcImVsc2VmaVwiIDogWyAnPWVsc2UnICwgXCImYW55dGhpbmdcIiAsICc9ZmknIF0gLCAvLyAyLjBcbiAgICBcImZpXCIgOiBbICc9ZmknIF0gLCAvLyAyLjFcbiAgfSAsXG4gIFwiY21kZGVmXCIgOiB7IC8vIGNvbW1hbmQgZGVmaW5pdGlvbiAzXG4gICAgXCJ7Y21kfVt4XXthbnl0aGluZ31cIiA6IFsgJz17JyAsICc9b3RoZXJjbWQnICwgJz19JyAsIFwiJmNtZGRlZmFyZ3NcIiAsICc9eycgLCBcIiZhbnl0aGluZ1wiICwgJz19JyBdICxcbiAgICBcImNtZFt4XXthbnl0aGluZ31cIiA6IFsgJz1vdGhlcmNtZCcgLCBcIiZjbWRkZWZhcmdzXCIgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgXSAsXG4gICAgXCIqY21kW3hde2FueXRoaW5nfVwiIDogWyAnPSonICwgJz1vdGhlcmNtZCcgLCBcIiZjbWRkZWZhcmdzXCIgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgXSAsXG4gIH0gLFxuICBcImNtZGRlZmFyZ3NcIiA6IHsgLy8gY29tbWFuZCBkZWZpbml0aW9uIGFyZ3VtZW50cyA0XG4gICAgXCJ5ZXNcIiA6IFsgJz1bJyAsICc9dGV4dCcgLCAnPV0nIF0gLCAvLyA0LjBcbiAgICBcIm5vXCIgOiBbIF0gLCAvLyA0LjFcbiAgfSAsXG4gIFwiY21kKlwiIDogeyAvLyBvdGhlcmNtZCBzdGFyIDogNVxuICAgIFwieWVzXCIgOiBbICc9KicgXSAsIC8vIDUuMFxuICAgIFwibm9cIiA6IFsgXSAsIC8vIDUuMVxuICB9ICxcbiAgXCJjbWRhcmdzXCIgOiB7IC8vIG90aGVyY21kIGFyZ3VtZW50cyA6IDdcbiAgICBcIm5vcm1hbFwiIDogWyBcIiZncm91cFwiICwgXCImY21kYXJnc1wiIF0gLFxuICAgIFwib3B0aW9uYWxcIiA6IFsgXCImb3B0Z3JvdXBcIiAsIFwiJmNtZGFyZ3NcIiBdICxcbiAgICBcImVuZFwiIDogWyBdICwgLy8gNy4xXG4gIH0gLFxuICBcImNtZGFmdGVyXCIgOiB7IC8vIGFmdGVyIG90aGVyY21kXG4gICAgXCJvdGhlcmNtZFwiIDogWyBcIiZvdGhlcmNtZFwiICwgXCImY21kYWZ0ZXJcIiBdICxcbiAgICBcIl0tdGhlbi1hbnl0aGluZ1wiIDogWyBcIiZdXCIgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwic29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZ1wiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcIm5vdGhpbmdcIiA6IFsgXSAsXG4gIH0gLFxuICBcImNtZGFmdGVyLWJ1dC1ub3QtXVwiIDogeyAvLyBhZnRlciBvdGhlcmNtZFxuICAgIFwib3RoZXJjbWRcIiA6IFsgXCImb3RoZXJjbWRcIiAsIFwiJmNtZGFmdGVyLWJ1dC1ub3QtXVwiIF0gLFxuICAgIFwic29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZ1wiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcIm5vdGhpbmdcIiA6IFsgXSAsXG4gIH0gLFxufSA7XG5cbmV4cG9ydCBjb25zdCBHID0gZ3JhbW1hci5mcm9tKCB7IHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMgfSApIDtcbiJdfQ==