"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
    "starts-with-begin-environment": ["&begin-environment", "&cmdafter"],
    "starts-with-end-environment": ["&end-environment", "&anything"],
    "starts-with-*": ['&*', "&anything"],
    "starts-with-[": ['&[', "&anything"],
    "starts-with-]": ['&]', "&anything"],
    "starts-with-a-group": ['&group', '&anything'],
    "starts-with-something-else": ["&something-else", "&anything"],
    "end": [] // 0.1

  },
  "anything-but-]": {
    "starts-with-othercmd": ['&othercmd', "&cmdafter-but-not-]"],
    "starts-with-begin-environment": ["&begin-environment", "&cmdafter-but-not-]"],
    "starts-with-end-environment": ["&end-environment", "&anything-but-]"],
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
  "begin-environment": {
    "begin-environment": ["=begin", '={', "=text", '=}', "&cmdargs"]
  },
  "end-environment": {
    "end-environment": ["=end", '={', "=text", '=}']
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
    "newcommand": ['=newcommand', "&command-definition"],
    // 1.8
    "renewcommand": ['=renewcommand', "&command-definition"],
    "newenvironment": ['=newenvironment', "&environment-definition"],
    "renewenvironment": ['=renewenvironment', "&environment-definition"],
    "\n": ['=\n'],
    " ": ['= '],
    "digit": ['=digit'],
    "argument": ['=#', '&argument-subject'],
    // 1.12
    "$": ['=$'],
    "math": ['=\\(', '&anything', '=\\)'],
    "mathenv": ['=\\[', '&anything', '=\\]']
  },
  "argument-subject": {
    "#": ["=#"],
    "digit": ["=digit"]
  },
  "endif": {
    // endif : 2
    "elsefi": ['=else', "&anything", '=fi'],
    // 2.0
    "fi": ['=fi'] // 2.1

  },
  "command-definition": {
    // command definition 3
    "{cmd}[nargs][default]{anything}": ['={', '=othercmd', '=}', "&definition-parameters", '={', "&anything", '=}'],
    "cmd[nargs][default]{anything}": ['=othercmd', "&definition-parameters", '={', "&anything", '=}'],
    "*cmd[nargs][default]{anything}": ['=*', '=othercmd', "&definition-parameters", '={', "&anything", '=}']
  },
  "environment-definition": {
    "{envname}[nargs][default]{begin}{end}": ['={', '=text', '=}', "&ignore", "&definition-parameters", '={', "&anything", '=}', "&ignore", '={', "&anything", '=}'],
    "*{envname}[nargs][default]{begin}{end}": ['=*', '={', '=text', '=}', "&definition-parameters", '={', "&anything", '=}', '={', "&anything", '=}']
  },
  "definition-parameters": {
    "yes": ['=[', '=digit', '=]', '&default-argument-for-definition', "&ignore"],
    "no": []
  },
  "default-argument-for-definition": {
    "yes": ['=[', '&anything-but-]', '=]'],
    "no": []
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
    "begin-environment": ["&begin-environment", "&cmdafter"],
    "end-environment": ["&end-environment", "&anything"],
    "]-then-anything": ["&]", "&anything"],
    "something-else-then-anything": ["&something-else", "&anything"],
    "nothing": []
  },
  "cmdafter-but-not-]": {
    // after othercmd
    "othercmd": ["&othercmd", "&cmdafter-but-not-]"],
    "begin-environment": ["&begin-environment", "&cmdafter-but-not-]"],
    "end-environment": ["&end-environment", "&anything-but-]"],
    "something-else-then-anything": ["&something-else", "&anything-but-]"],
    "nothing": []
  },
  "ignore": {
    "starts-with-a-space": ["= ", "&ignore"],
    "starts-with-a-newline": ["=\n", "&ignore"],
    "starts-with-a-comment": ["=comment", "&ignore"],
    "nothing": []
  }
};

var _default = _jsGrammar.grammar.from({
  root: root,
  start: start,
  eof: eof,
  productions: productions
});

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiZ3JhbW1hciIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsVUFBYjtBQUNBLElBQU1DLEtBQUssR0FBRyxVQUFkO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLEdBQVo7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEIsY0FBYTtBQUNYLGdCQUFhLENBQUUsV0FBRixFQUFnQixJQUFoQjtBQURGLEdBREs7QUFJbEIsY0FBYTtBQUNYLDRCQUF5QixDQUFFLFdBQUYsRUFBZ0IsV0FBaEIsQ0FEZDtBQUVYLHFDQUFrQyxDQUFFLG9CQUFGLEVBQXlCLFdBQXpCLENBRnZCO0FBR1gsbUNBQWdDLENBQUUsa0JBQUYsRUFBdUIsV0FBdkIsQ0FIckI7QUFJWCxxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsV0FBVCxDQUpQO0FBS1gscUJBQWtCLENBQUUsSUFBRixFQUFTLFdBQVQsQ0FMUDtBQU1YLHFCQUFrQixDQUFFLElBQUYsRUFBUyxXQUFULENBTlA7QUFPWCwyQkFBd0IsQ0FBRSxRQUFGLEVBQWEsV0FBYixDQVBiO0FBUVgsa0NBQStCLENBQUUsaUJBQUYsRUFBc0IsV0FBdEIsQ0FScEI7QUFTWCxXQUFRLEVBVEcsQ0FTRzs7QUFUSCxHQUpLO0FBZWxCLG9CQUFtQjtBQUNqQiw0QkFBeUIsQ0FBRSxXQUFGLEVBQWdCLHFCQUFoQixDQURSO0FBRWpCLHFDQUFrQyxDQUFFLG9CQUFGLEVBQXlCLHFCQUF6QixDQUZqQjtBQUdqQixtQ0FBZ0MsQ0FBRSxrQkFBRixFQUF1QixpQkFBdkIsQ0FIZjtBQUlqQixxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsaUJBQVQsQ0FKRDtBQUtqQixxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsaUJBQVQsQ0FMRDtBQU1qQiwyQkFBd0IsQ0FBRSxRQUFGLEVBQWEsaUJBQWIsQ0FOUDtBQU9qQixr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QixXQUF0QixDQUx0QjtBQU1YLGVBQVk7QUFORCxHQXZHSztBQStHbEIsd0JBQXVCO0FBQUU7QUFDdkIsZ0JBQWEsQ0FBRSxXQUFGLEVBQWdCLHFCQUFoQixDQURRO0FBRXJCLHlCQUFzQixDQUFFLG9CQUFGLEVBQXlCLHFCQUF6QixDQUZEO0FBR3JCLHVCQUFvQixDQUFFLGtCQUFGLEVBQXVCLGlCQUF2QixDQUhDO0FBSXJCLG9DQUFpQyxDQUFFLGlCQUFGLEVBQXNCLGlCQUF0QixDQUpaO0FBS3JCLGVBQVk7QUFMUyxHQS9HTDtBQXNIbEIsWUFBVztBQUNULDJCQUF3QixDQUFFLElBQUYsRUFBUyxTQUFULENBRGY7QUFFVCw2QkFBMEIsQ0FBRSxLQUFGLEVBQVUsU0FBVixDQUZqQjtBQUdULDZCQUEwQixDQUFFLFVBQUYsRUFBZSxTQUFmLENBSGpCO0FBSVQsZUFBWTtBQUpIO0FBdEhPLENBQXBCOztlQThIZUMsbUJBQVFDLElBQVIsQ0FBYztBQUFFTCxFQUFBQSxJQUFJLEVBQUpBLElBQUY7QUFBU0MsRUFBQUEsS0FBSyxFQUFMQSxLQUFUO0FBQWlCQyxFQUFBQSxHQUFHLEVBQUhBLEdBQWpCO0FBQXVCQyxFQUFBQSxXQUFXLEVBQVhBO0FBQXZCLENBQWQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYW1tYXIgfSBmcm9tICdAYXVyZW9vbXMvanMtZ3JhbW1hcicgO1xuXG5jb25zdCByb290ID0gXCJkb2N1bWVudFwiIDtcbmNvbnN0IHN0YXJ0ID0gXCJjb250ZW50c1wiIDtcbmNvbnN0IGVvZiA9IFwiJVwiIDtcbmNvbnN0IHByb2R1Y3Rpb25zID0ge1xuICBcImRvY3VtZW50XCIgOiB7XG4gICAgXCJjb250ZW50c1wiIDogWyBcIiZhbnl0aGluZ1wiICwgXCI9JVwiIF0gLFxuICB9ICxcbiAgXCJhbnl0aGluZ1wiIDoge1xuICAgIFwic3RhcnRzLXdpdGgtb3RoZXJjbWRcIiA6IFsgJyZvdGhlcmNtZCcgLCBcIiZjbWRhZnRlclwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtYmVnaW4tZW52aXJvbm1lbnRcIiA6IFsgXCImYmVnaW4tZW52aXJvbm1lbnRcIiAsIFwiJmNtZGFmdGVyXCJdICxcbiAgICBcInN0YXJ0cy13aXRoLWVuZC1lbnZpcm9ubWVudFwiIDogWyBcIiZlbmQtZW52aXJvbm1lbnRcIiAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC0qXCIgOiBbICcmKicgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtW1wiIDogWyAnJlsnICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLV1cIiA6IFsgJyZdJyAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1hLWdyb3VwXCIgOiBbICcmZ3JvdXAnICwgJyZhbnl0aGluZycgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZVwiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcImVuZFwiIDogWyBdICwgLy8gMC4xXG4gIH0gLFxuICBcImFueXRoaW5nLWJ1dC1dXCIgOiB7XG4gICAgXCJzdGFydHMtd2l0aC1vdGhlcmNtZFwiIDogWyAnJm90aGVyY21kJyAsIFwiJmNtZGFmdGVyLWJ1dC1ub3QtXVwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtYmVnaW4tZW52aXJvbm1lbnRcIiA6IFsgXCImYmVnaW4tZW52aXJvbm1lbnRcIiAsIFwiJmNtZGFmdGVyLWJ1dC1ub3QtXVwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtZW5kLWVudmlyb25tZW50XCIgOiBbIFwiJmVuZC1lbnZpcm9ubWVudFwiICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLSpcIiA6IFsgJyYqJyAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1bXCIgOiBbICcmWycgLCBcIiZhbnl0aGluZy1idXQtXVwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtYS1ncm91cFwiIDogWyAnJmdyb3VwJyAsICcmYW55dGhpbmctYnV0LV0nIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtc29tZXRoaW5nLWVsc2VcIiA6IFsgXCImc29tZXRoaW5nLWVsc2VcIiAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgXSAsXG4gICAgXCJlbmRcIiA6IFsgXSAsXG4gIH0gLFxuICBcImdyb3VwXCIgOiB7XG4gICAgXCJncm91cFwiIDogWyAnPXsnICwgJyZhbnl0aGluZycgLCAnPX0nIF0gLFxuICB9ICxcbiAgXCJvcHRncm91cFwiIDoge1xuICAgIFwiZ3JvdXBcIiA6IFsgJz1bJyAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgLCAnPV0nIF0gLFxuICB9ICxcbiAgXCJvdGhlcmNtZFwiIDoge1xuICAgIFwib3RoZXJjbWRcIiA6IFsgJz1vdGhlcmNtZCcgLCBcIiZjbWQqXCIgLCBcIiZjbWRhcmdzXCIgXSAsXG4gIH0sXG4gIFwiYmVnaW4tZW52aXJvbm1lbnRcIiA6IHtcbiAgICBcImJlZ2luLWVudmlyb25tZW50XCIgOiBbIFwiPWJlZ2luXCIsICc9eycgLCBcIj10ZXh0XCIgLCAnPX0nICwgXCImY21kYXJnc1wiXSAsXG4gIH0gLFxuICBcImVuZC1lbnZpcm9ubWVudFwiIDoge1xuICAgIFwiZW5kLWVudmlyb25tZW50XCIgOiBbIFwiPWVuZFwiLCAnPXsnICwgXCI9dGV4dFwiICwgJz19J10gLFxuICB9ICxcbiAgXCIqXCIgOiB7XG4gICAgXCIqXCIgOiBbICc9KicgXSAsXG4gIH0gLFxuICBcIltcIiA6IHtcbiAgICBcIltcIiA6IFsgJz1bJyBdICxcbiAgfSAsXG4gIFwiXVwiIDoge1xuICAgIFwiXVwiIDogWyAnPV0nIF0gLFxuICB9ICxcbiAgXCJzb21ldGhpbmctZWxzZVwiIDoge1xuICAgIFwidGV4dFwiIDogWyAnPXRleHQnIF0gLCAvLyAxLjBcbiAgICBcIm5ld2lmXCIgOiBbICc9bmV3aWYnICwgJz1pZmNtZCcgXSAsIC8vIDEuMVxuICAgIFwiaWZjbWRcIiA6IFsgJz1pZmNtZCcgLCBcIiZhbnl0aGluZ1wiICwgXCImZW5kaWZcIiBdICwgLy8gMS4yXG4gICAgXCJmYWxzZWNtZFwiIDogWyAnPWZhbHNlY21kJyBdICwgLy8gMS4zXG4gICAgXCJ0cnVlY21kXCIgOiBbICc9dHJ1ZWNtZCcgXSAsIC8vIDEuNFxuICAgIFwiY29tbWVudFwiIDogWyAnPWNvbW1lbnQnIF0gLCAvLyAxLjVcbiAgICBcImRlZlwiIDogWyAnPWRlZicgLCAnPW90aGVyY21kJyAsICc9eycgLCBcIiZhbnl0aGluZ1wiICwgJz19JyBdICwgLy8gMS43XG4gICAgXCJuZXdjb21tYW5kXCIgOiBbICc9bmV3Y29tbWFuZCcgLCBcIiZjb21tYW5kLWRlZmluaXRpb25cIiBdICwgLy8gMS44XG4gICAgXCJyZW5ld2NvbW1hbmRcIiA6IFsgJz1yZW5ld2NvbW1hbmQnICwgXCImY29tbWFuZC1kZWZpbml0aW9uXCIgXSAsXG4gICAgXCJuZXdlbnZpcm9ubWVudFwiIDogWyAnPW5ld2Vudmlyb25tZW50JyAsIFwiJmVudmlyb25tZW50LWRlZmluaXRpb25cIiBdICxcbiAgICBcInJlbmV3ZW52aXJvbm1lbnRcIiA6IFsgJz1yZW5ld2Vudmlyb25tZW50JyAsIFwiJmVudmlyb25tZW50LWRlZmluaXRpb25cIiBdICxcbiAgICBcIlxcblwiIDogWyAnPVxcbicgXSAsXG4gICAgXCIgXCIgOiBbICc9ICcgXSAsXG4gICAgXCJkaWdpdFwiIDogWyAnPWRpZ2l0JyBdICxcbiAgICBcImFyZ3VtZW50XCIgOiBbICc9IycgLCAnJmFyZ3VtZW50LXN1YmplY3QnIF0gLCAvLyAxLjEyXG4gICAgXCIkXCIgOiBbICc9JCcgXSAsXG4gICAgXCJtYXRoXCIgOiBbICc9XFxcXCgnICwgJyZhbnl0aGluZycgLCAnPVxcXFwpJyBdICxcbiAgICBcIm1hdGhlbnZcIiA6IFsgJz1cXFxcWycgLCAnJmFueXRoaW5nJyAsICc9XFxcXF0nIF0gLFxuICB9ICxcbiAgXCJhcmd1bWVudC1zdWJqZWN0XCIgOiB7XG4gICAgXCIjXCIgOiBbIFwiPSNcIiBdICxcbiAgICBcImRpZ2l0XCIgOiBbIFwiPWRpZ2l0XCIgXSAsXG4gIH0gLFxuICBcImVuZGlmXCIgOiB7IC8vIGVuZGlmIDogMlxuICAgIFwiZWxzZWZpXCIgOiBbICc9ZWxzZScgLCBcIiZhbnl0aGluZ1wiICwgJz1maScgXSAsIC8vIDIuMFxuICAgIFwiZmlcIiA6IFsgJz1maScgXSAsIC8vIDIuMVxuICB9ICxcbiAgXCJjb21tYW5kLWRlZmluaXRpb25cIiA6IHsgLy8gY29tbWFuZCBkZWZpbml0aW9uIDNcbiAgICBcIntjbWR9W25hcmdzXVtkZWZhdWx0XXthbnl0aGluZ31cIiA6IFsgJz17JyAsICc9b3RoZXJjbWQnICwgJz19JyAsIFwiJmRlZmluaXRpb24tcGFyYW1ldGVyc1wiICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nIF0gLFxuICAgIFwiY21kW25hcmdzXVtkZWZhdWx0XXthbnl0aGluZ31cIiA6IFsgJz1vdGhlcmNtZCcgLCBcIiZkZWZpbml0aW9uLXBhcmFtZXRlcnNcIiAsICc9eycgLCBcIiZhbnl0aGluZ1wiICwgJz19JyBdICxcbiAgICBcIipjbWRbbmFyZ3NdW2RlZmF1bHRde2FueXRoaW5nfVwiIDogWyAnPSonICwgJz1vdGhlcmNtZCcgLCBcIiZkZWZpbml0aW9uLXBhcmFtZXRlcnNcIiAsICc9eycgLCBcIiZhbnl0aGluZ1wiICwgJz19JyBdICxcbiAgfSAsXG4gIFwiZW52aXJvbm1lbnQtZGVmaW5pdGlvblwiIDoge1xuICAgIFwie2Vudm5hbWV9W25hcmdzXVtkZWZhdWx0XXtiZWdpbn17ZW5kfVwiIDogWyAnPXsnICwgJz10ZXh0JyAsICc9fScgLCBcIiZpZ25vcmVcIiAsIFwiJmRlZmluaXRpb24tcGFyYW1ldGVyc1wiICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nICwgXCImaWdub3JlXCIgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgXSAsXG4gICAgXCIqe2Vudm5hbWV9W25hcmdzXVtkZWZhdWx0XXtiZWdpbn17ZW5kfVwiIDogWyAnPSonICwgJz17JyAsICc9dGV4dCcgLCAnPX0nICwgXCImZGVmaW5pdGlvbi1wYXJhbWV0ZXJzXCIgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgXSAsXG4gIH0gLFxuICBcImRlZmluaXRpb24tcGFyYW1ldGVyc1wiIDoge1xuICAgIFwieWVzXCIgOiBbICc9WycgLCAnPWRpZ2l0JyAsICc9XScgLCAnJmRlZmF1bHQtYXJndW1lbnQtZm9yLWRlZmluaXRpb24nICwgXCImaWdub3JlXCIgXSAsXG4gICAgXCJub1wiIDogWyBdICxcbiAgfSAsXG4gIFwiZGVmYXVsdC1hcmd1bWVudC1mb3ItZGVmaW5pdGlvblwiIDoge1xuICAgIFwieWVzXCIgOiBbICc9WycgLCAnJmFueXRoaW5nLWJ1dC1dJyAsICc9XScgXSAsXG4gICAgXCJub1wiIDogWyBdICxcbiAgfSAsXG4gIFwiY21kKlwiIDogeyAvLyBvdGhlcmNtZCBzdGFyIDogNVxuICAgIFwieWVzXCIgOiBbICc9KicgXSAsIC8vIDUuMFxuICAgIFwibm9cIiA6IFsgXSAsIC8vIDUuMVxuICB9ICxcbiAgXCJjbWRhcmdzXCIgOiB7IC8vIG90aGVyY21kIGFyZ3VtZW50cyA6IDdcbiAgICBcIm5vcm1hbFwiIDogWyBcIiZncm91cFwiICwgXCImY21kYXJnc1wiIF0gLFxuICAgIFwib3B0aW9uYWxcIiA6IFsgXCImb3B0Z3JvdXBcIiAsIFwiJmNtZGFyZ3NcIiBdICxcbiAgICBcImVuZFwiIDogWyBdICwgLy8gNy4xXG4gIH0gLFxuICBcImNtZGFmdGVyXCIgOiB7IC8vIGFmdGVyIG90aGVyY21kXG4gICAgXCJvdGhlcmNtZFwiIDogWyBcIiZvdGhlcmNtZFwiICwgXCImY21kYWZ0ZXJcIiBdICxcbiAgICBcImJlZ2luLWVudmlyb25tZW50XCIgOiBbIFwiJmJlZ2luLWVudmlyb25tZW50XCIgLCBcIiZjbWRhZnRlclwiXSAsXG4gICAgXCJlbmQtZW52aXJvbm1lbnRcIiA6IFsgXCImZW5kLWVudmlyb25tZW50XCIgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwiXS10aGVuLWFueXRoaW5nXCIgOiBbIFwiJl1cIiAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJzb21ldGhpbmctZWxzZS10aGVuLWFueXRoaW5nXCIgOiBbIFwiJnNvbWV0aGluZy1lbHNlXCIgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwibm90aGluZ1wiIDogWyBdICxcbiAgfSAsXG4gIFwiY21kYWZ0ZXItYnV0LW5vdC1dXCIgOiB7IC8vIGFmdGVyIG90aGVyY21kXG4gICAgXCJvdGhlcmNtZFwiIDogWyBcIiZvdGhlcmNtZFwiICwgXCImY21kYWZ0ZXItYnV0LW5vdC1dXCIgXSAsXG4gICAgXCJiZWdpbi1lbnZpcm9ubWVudFwiIDogWyBcIiZiZWdpbi1lbnZpcm9ubWVudFwiICwgXCImY21kYWZ0ZXItYnV0LW5vdC1dXCIgXSAsXG4gICAgXCJlbmQtZW52aXJvbm1lbnRcIiA6IFsgXCImZW5kLWVudmlyb25tZW50XCIgLCBcIiZhbnl0aGluZy1idXQtXVwiIF0gLFxuICAgIFwic29tZXRoaW5nLWVsc2UtdGhlbi1hbnl0aGluZ1wiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcIm5vdGhpbmdcIiA6IFsgXSAsXG4gIH0gLFxuICBcImlnbm9yZVwiIDoge1xuICAgIFwic3RhcnRzLXdpdGgtYS1zcGFjZVwiIDogWyBcIj0gXCIgLCBcIiZpZ25vcmVcIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLWEtbmV3bGluZVwiIDogWyBcIj1cXG5cIiAsIFwiJmlnbm9yZVwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtYS1jb21tZW50XCIgOiBbIFwiPWNvbW1lbnRcIiAsIFwiJmlnbm9yZVwiIF0gLFxuICAgIFwibm90aGluZ1wiIDogWyBdICxcbiAgfSAsXG59IDtcblxuZXhwb3J0IGRlZmF1bHQgZ3JhbW1hci5mcm9tKCB7IHJvb3QgLCBzdGFydCAsIGVvZiAsIHByb2R1Y3Rpb25zIH0gKSA7XG4iXX0=