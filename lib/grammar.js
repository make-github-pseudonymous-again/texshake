"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsGrammar = require("@aureooms/js-grammar");

var root = "document";
var start = "contents";
var eof = "%";
var productions = {
  "document": {
    "contents": ["&anything", "=%"]
  },
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
    "text": ['=text'],
    // 1.0
    "newif": ['=newif', '=ifcmd'],
    // 1.1
    "ifcmd": ['=ifcmd', "&anything", "&endif"],
    // 1.2
    "falsecmd": ['=falsecmd'],
    // 1.3
    "truecmd": ['=truecmd'],
    // 1.4
    "comment": ['=comment'],
    // 1.5
    "def": ['=def', '=othercmd', '={', "&anything", '=}'],
    // 1.7
    "newcommand": ['=newcommand', "&cmddef"],
    // 1.8
    "\n": ['=\n'],
    "arg": ['=arg'],
    // 1.12
    "$": ['=$'],
    "math": ['=\\(', '&anything', '=\\)'],
    "mathenv": ['=\\[', '&anything', '=\\]']
  },
  "endif": {
    // endif : 2
    "elsefi": ['=else', "&anything", '=fi'],
    // 2.0
    "fi": ['=fi'] // 2.1

  },
  "cmddef": {
    // command definition 3
    "{cmd}[x]{anything}": ['={', '=othercmd', '=}', "&cmddefargs", '={', "&anything", '=}'],
    "cmd[x]{anything}": ['=othercmd', "&cmddefargs", '={', "&anything", '=}'],
    "*cmd[x]{anything}": ['=*', '=othercmd', "&cmddefargs", '={', "&anything", '=}']
  },
  "cmddefargs": {
    // command definition arguments 4
    "yes": ['=[', '=text', '=]'],
    // 4.0
    "no": [] // 4.1

  },
  "cmd*": {
    // othercmd star : 5
    "yes": ['=*'],
    // 5.0
    "no": [] // 5.1

  },
  "cmdargs": {
    // othercmd arguments : 7
    "normal": ["&group", "&cmdargs"],
    "optional": ["&optgroup", "&cmdargs"],
    "end": [] // 7.1

  },
  "cmdafter": {
    // after othercmd
    "othercmd": ["&othercmd", "&cmdafter"],
    "]-then-anything": ["&]", "&anything"],
    "something-else-then-anything": ["&something-else", "&anything"],
    "nothing": []
  },
  "cmdafter-but-not-]": {
    // after othercmd
    "othercmd": ["&othercmd", "&cmdafter-but-not-]"],
    "something-else-then-anything": ["&something-else", "&anything-but-]"],
    "nothing": []
  }
};

var _default = _jsGrammar.grammar.from({
  root: root,
  start: start,
  eof: eof,
  productions: productions
});

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiZ3JhbW1hciIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsVUFBYjtBQUNBLElBQU1DLEtBQUssR0FBRyxVQUFkO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLEdBQVo7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEIsY0FBYTtBQUNYLGdCQUFhLENBQUUsV0FBRixFQUFnQixJQUFoQjtBQURGLEdBREs7QUFJbEIsY0FBYTtBQUNYLDRCQUF5QixDQUFFLFdBQUYsRUFBZ0IsV0FBaEIsQ0FEZDtBQUVYLHFCQUFrQixDQUFFLElBQUYsRUFBUyxXQUFULENBRlA7QUFHWCxxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsV0FBVCxDQUhQO0FBSVgscUJBQWtCLENBQUUsSUFBRixFQUFTLFdBQVQsQ0FKUDtBQUtYLDJCQUF3QixDQUFFLFFBQUYsRUFBYSxXQUFiLENBTGI7QUFNWCxrQ0FBK0IsQ0FBRSxpQkFBRixFQUFzQixXQUF0QixDQU5wQjtBQU9YLFdBQVEsRUFQRyxDQU9HOztBQVBILEdBSks7QUFhbEIsb0JBQW1CO0FBQ2pCLDRCQUF5QixDQUFFLFdBQUYsRUFBZ0IscUJBQWhCLENBRFI7QUFFakIscUJBQWtCLENBQUUsSUFBRixFQUFTLGlCQUFULENBRkQ7QUFHakIscUJBQWtCLENBQUUsSUFBRixFQUFTLGlCQUFULENBSEQ7QUFJakIsMkJBQXdCLENBQUUsUUFBRixFQUFhLGlCQUFiLENBSlA7QUFLakIsa0NBQStCLENBQUUsaUJBQUYsRUFBc0IsaUJBQXRCLENBTGQ7QUFNakIsV0FBUTtBQU5TLEdBYkQ7QUFxQmxCLFdBQVU7QUFDUixhQUFVLENBQUUsSUFBRixFQUFTLFdBQVQsRUFBdUIsSUFBdkI7QUFERixHQXJCUTtBQXdCbEIsY0FBYTtBQUNYLGFBQVUsQ0FBRSxJQUFGLEVBQVMsaUJBQVQsRUFB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LEVBQUFBLEtBQUssRUFBTEEsS0FBVDtBQUFpQkMsRUFBQUEsR0FBRyxFQUFIQSxHQUFqQjtBQUF1QkMsRUFBQUEsV0FBVyxFQUFYQTtBQUF2QixDQUFkLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFtbWFyIH0gZnJvbSAnQGF1cmVvb21zL2pzLWdyYW1tYXInIDtcblxuY29uc3Qgcm9vdCA9IFwiZG9jdW1lbnRcIiA7XG5jb25zdCBzdGFydCA9IFwiY29udGVudHNcIiA7XG5jb25zdCBlb2YgPSBcIiVcIiA7XG5jb25zdCBwcm9kdWN0aW9ucyA9IHtcbiAgXCJkb2N1bWVudFwiIDoge1xuICAgIFwiY29udGVudHNcIiA6IFsgXCImYW55dGhpbmdcIiAsIFwiPSVcIiBdICxcbiAgfSAsXG4gIFwiYW55dGhpbmdcIiA6IHtcbiAgICBcInN0YXJ0cy13aXRoLW90aGVyY21kXCIgOiBbICcmb3RoZXJjbWQnICwgXCImY21kYWZ0ZXJcIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLSpcIiA6IFsgJyYqJyAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1bXCIgOiBbICcmWycgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtXVwiIDogWyAnJl0nICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLWEtZ3JvdXBcIiA6IFsgJyZncm91cCcgLCAnJmFueXRoaW5nJyBdICxcbiAgICBcInN0YXJ0cy13aXRoLXNvbWV0aGluZy1lbHNlXCIgOiBbIFwiJnNvbWV0aGluZy1lbHNlXCIgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwiZW5kXCIgOiBbIF0gLCAvLyAwLjFcbiAgfSAsXG4gIFwiYW55dGhpbmctYnV0LV1cIiA6IHtcbiAgICBcInN0YXJ0cy13aXRoLW90aGVyY21kXCIgOiBbICcmb3RoZXJjbWQnICwgXCImY21kYWZ0ZXItYnV0LW5vdC1dXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC0qXCIgOiBbICcmKicgLCBcIiZhbnl0aGluZy1idXQtXVwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtW1wiIDogWyAnJlsnICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLWEtZ3JvdXBcIiA6IFsgJyZncm91cCcgLCAnJmFueXRoaW5nLWJ1dC1dJyBdICxcbiAgICBcInN0YXJ0cy13aXRoLXNvbWV0aGluZy1lbHNlXCIgOiBbIFwiJnNvbWV0aGluZy1lbHNlXCIgLCBcIiZhbnl0aGluZy1idXQtXVwiIF0gLFxuICAgIFwiZW5kXCIgOiBbIF0gLFxuICB9ICxcbiAgXCJncm91cFwiIDoge1xuICAgIFwiZ3JvdXBcIiA6IFsgJz17JyAsICcmYW55dGhpbmcnICwgJz19JyBdICxcbiAgfSAsXG4gIFwib3B0Z3JvdXBcIiA6IHtcbiAgICBcImdyb3VwXCIgOiBbICc9WycgLCBcIiZhbnl0aGluZy1idXQtXVwiICwgJz1dJyBdICxcbiAgfSAsXG4gIFwib3RoZXJjbWRcIiA6IHtcbiAgICBcIm90aGVyY21kXCIgOiBbICc9b3RoZXJjbWQnICwgXCImY21kKlwiICwgXCImY21kYXJnc1wiIF0gLFxuICB9LFxuICBcIipcIiA6IHtcbiAgICBcIipcIiA6IFsgJz0qJyBdICxcbiAgfSAsXG4gIFwiW1wiIDoge1xuICAgIFwiW1wiIDogWyAnPVsnIF0gLFxuICB9ICxcbiAgXCJdXCIgOiB7XG4gICAgXCJdXCIgOiBbICc9XScgXSAsXG4gIH0gLFxuICBcInNvbWV0aGluZy1lbHNlXCIgOiB7XG4gICAgXCJ0ZXh0XCIgOiBbICc9dGV4dCcgXSAsIC8vIDEuMFxuICAgIFwibmV3aWZcIiA6IFsgJz1uZXdpZicgLCAnPWlmY21kJyBdICwgLy8gMS4xXG4gICAgXCJpZmNtZFwiIDogWyAnPWlmY21kJyAsIFwiJmFueXRoaW5nXCIgLCBcIiZlbmRpZlwiIF0gLCAvLyAxLjJcbiAgICBcImZhbHNlY21kXCIgOiBbICc9ZmFsc2VjbWQnIF0gLCAvLyAxLjNcbiAgICBcInRydWVjbWRcIiA6IFsgJz10cnVlY21kJyBdICwgLy8gMS40XG4gICAgXCJjb21tZW50XCIgOiBbICc9Y29tbWVudCcgXSAsIC8vIDEuNVxuICAgIFwiZGVmXCIgOiBbICc9ZGVmJyAsICc9b3RoZXJjbWQnICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nIF0gLCAvLyAxLjdcbiAgICBcIm5ld2NvbW1hbmRcIiA6IFsgJz1uZXdjb21tYW5kJyAsIFwiJmNtZGRlZlwiIF0gLCAvLyAxLjhcbiAgICBcIlxcblwiIDogWyAnPVxcbicgXSAsXG4gICAgXCJhcmdcIiA6IFsgJz1hcmcnIF0gLCAvLyAxLjEyXG4gICAgXCIkXCIgOiBbICc9JCcgXSAsXG4gICAgXCJtYXRoXCIgOiBbICc9XFxcXCgnICwgJyZhbnl0aGluZycgLCAnPVxcXFwpJyBdICxcbiAgICBcIm1hdGhlbnZcIiA6IFsgJz1cXFxcWycgLCAnJmFueXRoaW5nJyAsICc9XFxcXF0nIF0gLFxuICB9ICxcbiAgXCJlbmRpZlwiIDogeyAvLyBlbmRpZiA6IDJcbiAgICBcImVsc2VmaVwiIDogWyAnPWVsc2UnICwgXCImYW55dGhpbmdcIiAsICc9ZmknIF0gLCAvLyAyLjBcbiAgICBcImZpXCIgOiBbICc9ZmknIF0gLCAvLyAyLjFcbiAgfSAsXG4gIFwiY21kZGVmXCIgOiB7IC8vIGNvbW1hbmQgZGVmaW5pdGlvbiAzXG4gICAgXCJ7Y21kfVt4XXthbnl0aGluZ31cIiA6IFsgJz17JyAsICc9b3RoZXJjbWQnICwgJz19JyAsIFwiJmNtZGRlZmFyZ3NcIiAsICc9eycgLCBcIiZhbnl0aGluZ1wiICwgJz19JyBdICxcbiAgICBcImNtZFt4XXthbnl0aGluZ31cIiA6IFsgJz1vdGhlcmNtZCcgLCBcIiZjbWRkZWZhcmdzXCIgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgXSAsXG4gICAgXCIqY21kW3hde2FueXRoaW5nfVwiIDogWyAnPSonICwgJz1vdGhlcmNtZCcgLCBcIiZjbWRkZWZhcmdzXCIgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgXSAsXG4gIH0gLFxuICBcImNtZGRlZmFyZ3NcIiA6IHsgLy8gY29tbWFuZCBkZWZpbml0aW9uIGFyZ3VtZW50cyA0XG4gICAgXCJ5ZXNcIiA6IFsgJz1bJyAsICc9dGV4dCcgLCAnPV0nIF0gLCAvLyA0LjBcbiAgICBcIm5vXCIgOiBbIF0gLCAvLyA0LjFcbiAgfSAsXG4gIFwiY21kKlwiIDogeyAvLyBvdGhlcmNtZCBzdGFyIDogNVxuICAgIFwieWVzXCIgOiBbICc9KicgXSAsIC8vIDUuMFxuICAgIFwibm9cIiA6IFsgXSAsIC8vIDUuMVxuICB9ICxcbiAgXCJjbWRhcmdzXCIgOiB7IC8vIG90aGVyY21kIGFyZ3VtZW50cyA6IDdcbiAgICBcIm5vcm1hbFwiIDogWyBcIiZncm91cFwiICwgXCImY21kYXJnc1wiIF0gLFxuICAgIFwib3B0aW9uYWxcIiA6IFsgXCImb3B0Z3JvdXBcIiAsIFwiJmNtZGFyZ3NcIiBdICxcbiAgICBcImVuZFwiIDogWyBdICwgLy8gNy4xXG4gIH0gLFxuICBcImNtZGFmdGVyXCIgOiB7IC8vIGFmdGVyIG90aGVyY21kXG4gICAgXCJvdGhlcmNtZFwiIDogWyBcIiZvdGhlcmNtZFwiICwgXCImY21kYWZ0ZXJcIiBdICxcbiAgICBcIl0tdGhlbi1hbnl0aGluZ1wiIDogWyBcIiZdXCIgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwic29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZ1wiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcIm5vdGhpbmdcIiA6IFsgXSAsXG4gIH0gLFxuICBcImNtZGFmdGVyLWJ1dC1ub3QtXVwiIDogeyAvLyBhZnRlciBvdGhlcmNtZFxuICAgIFwib3RoZXJjbWRcIiA6IFsgXCImb3RoZXJjbWRcIiAsIFwiJmNtZGFmdGVyLWJ1dC1ub3QtXVwiIF0gLFxuICAgIFwic29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZ1wiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcIm5vdGhpbmdcIiA6IFsgXSAsXG4gIH0gLFxufSA7XG5cbmV4cG9ydCBkZWZhdWx0IGdyYW1tYXIuZnJvbSggeyByb290ICwgc3RhcnQgLCBlb2YgLCBwcm9kdWN0aW9ucyB9ICkgO1xuIl19