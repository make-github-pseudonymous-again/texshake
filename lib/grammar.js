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
    "starts-with-environment": ["&begin-environment", "&cmdafter", "&end-environment", "&anything"],
    "starts-with-*": ['&*', "&anything"],
    "starts-with-[": ['&[', "&anything"],
    "starts-with-]": ['&]', "&anything"],
    "starts-with-a-group": ['&group', '&anything'],
    "starts-with-something-else": ["&something-else", "&anything"],
    "end": [] // 0.1

  },
  "anything-but-]": {
    "starts-with-othercmd": ['&othercmd', "&cmdafter-but-not-]"],
    "starts-with-environment": ["&begin-environment", "&cmdafter-but-not-]", "&end-environment", "&anything-but-]"],
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
    "newcommand": ['=newcommand', "&cmddef"],
    // 1.8
    "renewcommand": ['=renewcommand', "&cmddef"],
    "newenvironment": ['=newenvironment', "&environment-definition"],
    "renewenvironment": ['=renewenvironment', "&environment-definition"],
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
  "environment-definition": {
    "{envname}[nargs][default]{begin}{end}": ['={', '=text', '=}', "&arguments-for-environment-definition", '={', "&anything", '=}', '={', "&anything", '=}'],
    "*{envname}[nargs][default]{begin}{end}": ['=*', '={', '=text', '=}', "&arguments-for-environment-definition", '={', "&anything", '=}', '={', "&anything", '=}']
  },
  "arguments-for-environment-definition": {
    "yes": ['=[', '=text', '=]', '&default-argument-for-environment-definition'],
    "no": []
  },
  "default-argument-for-environment-definition": {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbInJvb3QiLCJzdGFydCIsImVvZiIsInByb2R1Y3Rpb25zIiwiZ3JhbW1hciIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsVUFBYjtBQUNBLElBQU1DLEtBQUssR0FBRyxVQUFkO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLEdBQVo7QUFDQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEIsY0FBYTtBQUNYLGdCQUFhLENBQUUsV0FBRixFQUFnQixJQUFoQjtBQURGLEdBREs7QUFJbEIsY0FBYTtBQUNYLDRCQUF5QixDQUFFLFdBQUYsRUFBZ0IsV0FBaEIsQ0FEZDtBQUVYLCtCQUE0QixDQUFFLG9CQUFGLEVBQXlCLFdBQXpCLEVBQXNDLGtCQUF0QyxFQUEwRCxXQUExRCxDQUZqQjtBQUdYLHFCQUFrQixDQUFFLElBQUYsRUFBUyxXQUFULENBSFA7QUFJWCxxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsV0FBVCxDQUpQO0FBS1gscUJBQWtCLENBQUUsSUFBRixFQUFTLFdBQVQsQ0FMUDtBQU1YLDJCQUF3QixDQUFFLFFBQUYsRUFBYSxXQUFiLENBTmI7QUFPWCxrQ0FBK0IsQ0FBRSxpQkFBRixFQUFzQixXQUF0QixDQVBwQjtBQVFYLFdBQVEsRUFSRyxDQVFHOztBQVJILEdBSks7QUFjbEIsb0JBQW1CO0FBQ2pCLDRCQUF5QixDQUFFLFdBQUYsRUFBZ0IscUJBQWhCLENBRFI7QUFFakIsK0JBQTRCLENBQUUsb0JBQUYsRUFBeUIscUJBQXpCLEVBQWdELGtCQUFoRCxFQUFvRSxpQkFBcEUsQ0FGWDtBQUdqQixxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsaUJBQVQsQ0FIRDtBQUlqQixxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsaUJBQVQsQ0FKRDtBQUtqQiwyQkFBd0IsQ0FBRSxRQUFGLEVBQWEsaUJBQWIsQ0FMUDtBQU1qQixrQ0FBK0IsQ0FBRSxpQkFBRixFQUFzQixpQkFBdEIsQ0FO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LEVBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFTQyxFQUFBQSxLQUFLLEVBQUxBLEtBQVQ7QUFBaUJDLEVBQUFBLEdBQUcsRUFBSEEsR0FBakI7QUFBdUJDLEVBQUFBLFdBQVcsRUFBWEE7QUFBdkIsQ0FBZCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhbW1hciB9IGZyb20gJ0BhdXJlb29tcy9qcy1ncmFtbWFyJyA7XG5cbmNvbnN0IHJvb3QgPSBcImRvY3VtZW50XCIgO1xuY29uc3Qgc3RhcnQgPSBcImNvbnRlbnRzXCIgO1xuY29uc3QgZW9mID0gXCIlXCIgO1xuY29uc3QgcHJvZHVjdGlvbnMgPSB7XG4gIFwiZG9jdW1lbnRcIiA6IHtcbiAgICBcImNvbnRlbnRzXCIgOiBbIFwiJmFueXRoaW5nXCIgLCBcIj0lXCIgXSAsXG4gIH0gLFxuICBcImFueXRoaW5nXCIgOiB7XG4gICAgXCJzdGFydHMtd2l0aC1vdGhlcmNtZFwiIDogWyAnJm90aGVyY21kJyAsIFwiJmNtZGFmdGVyXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1lbnZpcm9ubWVudFwiIDogWyBcIiZiZWdpbi1lbnZpcm9ubWVudFwiICwgXCImY21kYWZ0ZXJcIiwgXCImZW5kLWVudmlyb25tZW50XCIsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC0qXCIgOiBbICcmKicgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtW1wiIDogWyAnJlsnICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLV1cIiA6IFsgJyZdJyAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1hLWdyb3VwXCIgOiBbICcmZ3JvdXAnICwgJyZhbnl0aGluZycgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZVwiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcImVuZFwiIDogWyBdICwgLy8gMC4xXG4gIH0gLFxuICBcImFueXRoaW5nLWJ1dC1dXCIgOiB7XG4gICAgXCJzdGFydHMtd2l0aC1vdGhlcmNtZFwiIDogWyAnJm90aGVyY21kJyAsIFwiJmNtZGFmdGVyLWJ1dC1ub3QtXVwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtZW52aXJvbm1lbnRcIiA6IFsgXCImYmVnaW4tZW52aXJvbm1lbnRcIiAsIFwiJmNtZGFmdGVyLWJ1dC1ub3QtXVwiLCBcIiZlbmQtZW52aXJvbm1lbnRcIiwgXCImYW55dGhpbmctYnV0LV1cIl0gLFxuICAgIFwic3RhcnRzLXdpdGgtKlwiIDogWyAnJionICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLVtcIiA6IFsgJyZbJyAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1hLWdyb3VwXCIgOiBbICcmZ3JvdXAnICwgJyZhbnl0aGluZy1idXQtXScgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZVwiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcImVuZFwiIDogWyBdICxcbiAgfSAsXG4gIFwiZ3JvdXBcIiA6IHtcbiAgICBcImdyb3VwXCIgOiBbICc9eycgLCAnJmFueXRoaW5nJyAsICc9fScgXSAsXG4gIH0gLFxuICBcIm9wdGdyb3VwXCIgOiB7XG4gICAgXCJncm91cFwiIDogWyAnPVsnICwgXCImYW55dGhpbmctYnV0LV1cIiAsICc9XScgXSAsXG4gIH0gLFxuICBcIm90aGVyY21kXCIgOiB7XG4gICAgXCJvdGhlcmNtZFwiIDogWyAnPW90aGVyY21kJyAsIFwiJmNtZCpcIiAsIFwiJmNtZGFyZ3NcIiBdICxcbiAgfSxcbiAgXCJiZWdpbi1lbnZpcm9ubWVudFwiIDoge1xuICAgIFwiYmVnaW4tZW52aXJvbm1lbnRcIiA6IFsgXCI9YmVnaW5cIiwgJz17JyAsIFwiPXRleHRcIiAsICc9fScgLCBcIiZjbWRhcmdzXCJdICxcbiAgfSAsXG4gIFwiZW5kLWVudmlyb25tZW50XCIgOiB7XG4gICAgXCJlbmQtZW52aXJvbm1lbnRcIiA6IFsgXCI9ZW5kXCIsICc9eycgLCBcIj10ZXh0XCIgLCAnPX0nXSAsXG4gIH0gLFxuICBcIipcIiA6IHtcbiAgICBcIipcIiA6IFsgJz0qJyBdICxcbiAgfSAsXG4gIFwiW1wiIDoge1xuICAgIFwiW1wiIDogWyAnPVsnIF0gLFxuICB9ICxcbiAgXCJdXCIgOiB7XG4gICAgXCJdXCIgOiBbICc9XScgXSAsXG4gIH0gLFxuICBcInNvbWV0aGluZy1lbHNlXCIgOiB7XG4gICAgXCJ0ZXh0XCIgOiBbICc9dGV4dCcgXSAsIC8vIDEuMFxuICAgIFwibmV3aWZcIiA6IFsgJz1uZXdpZicgLCAnPWlmY21kJyBdICwgLy8gMS4xXG4gICAgXCJpZmNtZFwiIDogWyAnPWlmY21kJyAsIFwiJmFueXRoaW5nXCIgLCBcIiZlbmRpZlwiIF0gLCAvLyAxLjJcbiAgICBcImZhbHNlY21kXCIgOiBbICc9ZmFsc2VjbWQnIF0gLCAvLyAxLjNcbiAgICBcInRydWVjbWRcIiA6IFsgJz10cnVlY21kJyBdICwgLy8gMS40XG4gICAgXCJjb21tZW50XCIgOiBbICc9Y29tbWVudCcgXSAsIC8vIDEuNVxuICAgIFwiZGVmXCIgOiBbICc9ZGVmJyAsICc9b3RoZXJjbWQnICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nIF0gLCAvLyAxLjdcbiAgICBcIm5ld2NvbW1hbmRcIiA6IFsgJz1uZXdjb21tYW5kJyAsIFwiJmNtZGRlZlwiIF0gLCAvLyAxLjhcbiAgICBcInJlbmV3Y29tbWFuZFwiIDogWyAnPXJlbmV3Y29tbWFuZCcgLCBcIiZjbWRkZWZcIiBdICxcbiAgICBcIm5ld2Vudmlyb25tZW50XCIgOiBbICc9bmV3ZW52aXJvbm1lbnQnICwgXCImZW52aXJvbm1lbnQtZGVmaW5pdGlvblwiIF0gLFxuICAgIFwicmVuZXdlbnZpcm9ubWVudFwiIDogWyAnPXJlbmV3ZW52aXJvbm1lbnQnICwgXCImZW52aXJvbm1lbnQtZGVmaW5pdGlvblwiIF0gLFxuICAgIFwiXFxuXCIgOiBbICc9XFxuJyBdICxcbiAgICBcImFyZ1wiIDogWyAnPWFyZycgXSAsIC8vIDEuMTJcbiAgICBcIiRcIiA6IFsgJz0kJyBdICxcbiAgICBcIm1hdGhcIiA6IFsgJz1cXFxcKCcgLCAnJmFueXRoaW5nJyAsICc9XFxcXCknIF0gLFxuICAgIFwibWF0aGVudlwiIDogWyAnPVxcXFxbJyAsICcmYW55dGhpbmcnICwgJz1cXFxcXScgXSAsXG4gIH0gLFxuICBcImVuZGlmXCIgOiB7IC8vIGVuZGlmIDogMlxuICAgIFwiZWxzZWZpXCIgOiBbICc9ZWxzZScgLCBcIiZhbnl0aGluZ1wiICwgJz1maScgXSAsIC8vIDIuMFxuICAgIFwiZmlcIiA6IFsgJz1maScgXSAsIC8vIDIuMVxuICB9ICxcbiAgXCJjbWRkZWZcIiA6IHsgLy8gY29tbWFuZCBkZWZpbml0aW9uIDNcbiAgICBcIntjbWR9W3hde2FueXRoaW5nfVwiIDogWyAnPXsnICwgJz1vdGhlcmNtZCcgLCAnPX0nICwgXCImY21kZGVmYXJnc1wiICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nIF0gLFxuICAgIFwiY21kW3hde2FueXRoaW5nfVwiIDogWyAnPW90aGVyY21kJyAsIFwiJmNtZGRlZmFyZ3NcIiAsICc9eycgLCBcIiZhbnl0aGluZ1wiICwgJz19JyBdICxcbiAgICBcIipjbWRbeF17YW55dGhpbmd9XCIgOiBbICc9KicgLCAnPW90aGVyY21kJyAsIFwiJmNtZGRlZmFyZ3NcIiAsICc9eycgLCBcIiZhbnl0aGluZ1wiICwgJz19JyBdICxcbiAgfSAsXG4gIFwiY21kZGVmYXJnc1wiIDogeyAvLyBjb21tYW5kIGRlZmluaXRpb24gYXJndW1lbnRzIDRcbiAgICBcInllc1wiIDogWyAnPVsnICwgJz10ZXh0JyAsICc9XScgXSAsIC8vIDQuMFxuICAgIFwibm9cIiA6IFsgXSAsIC8vIDQuMVxuICB9ICxcbiAgXCJlbnZpcm9ubWVudC1kZWZpbml0aW9uXCIgOiB7XG4gICAgXCJ7ZW52bmFtZX1bbmFyZ3NdW2RlZmF1bHRde2JlZ2lufXtlbmR9XCIgOiBbICc9eycgLCAnPXRleHQnICwgJz19JyAsIFwiJmFyZ3VtZW50cy1mb3ItZW52aXJvbm1lbnQtZGVmaW5pdGlvblwiICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nIF0gLFxuICAgIFwiKntlbnZuYW1lfVtuYXJnc11bZGVmYXVsdF17YmVnaW59e2VuZH1cIiA6IFsgJz0qJyAsICc9eycgLCAnPXRleHQnICwgJz19JyAsIFwiJmFyZ3VtZW50cy1mb3ItZW52aXJvbm1lbnQtZGVmaW5pdGlvblwiICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nIF0gLFxuICB9ICxcbiAgXCJhcmd1bWVudHMtZm9yLWVudmlyb25tZW50LWRlZmluaXRpb25cIiA6IHtcbiAgICBcInllc1wiIDogWyAnPVsnICwgJz10ZXh0JyAsICc9XScgLCAnJmRlZmF1bHQtYXJndW1lbnQtZm9yLWVudmlyb25tZW50LWRlZmluaXRpb24nIF0gLFxuICAgIFwibm9cIiA6IFsgXSAsXG4gIH0gLFxuICBcImRlZmF1bHQtYXJndW1lbnQtZm9yLWVudmlyb25tZW50LWRlZmluaXRpb25cIiA6IHtcbiAgICBcInllc1wiIDogWyAnPVsnICwgJyZhbnl0aGluZy1idXQtXScgLCAnPV0nIF0gLFxuICAgIFwibm9cIiA6IFsgXSAsXG4gIH0gLFxuICBcImNtZCpcIiA6IHsgLy8gb3RoZXJjbWQgc3RhciA6IDVcbiAgICBcInllc1wiIDogWyAnPSonIF0gLCAvLyA1LjBcbiAgICBcIm5vXCIgOiBbIF0gLCAvLyA1LjFcbiAgfSAsXG4gIFwiY21kYXJnc1wiIDogeyAvLyBvdGhlcmNtZCBhcmd1bWVudHMgOiA3XG4gICAgXCJub3JtYWxcIiA6IFsgXCImZ3JvdXBcIiAsIFwiJmNtZGFyZ3NcIiBdICxcbiAgICBcIm9wdGlvbmFsXCIgOiBbIFwiJm9wdGdyb3VwXCIgLCBcIiZjbWRhcmdzXCIgXSAsXG4gICAgXCJlbmRcIiA6IFsgXSAsIC8vIDcuMVxuICB9ICxcbiAgXCJjbWRhZnRlclwiIDogeyAvLyBhZnRlciBvdGhlcmNtZFxuICAgIFwib3RoZXJjbWRcIiA6IFsgXCImb3RoZXJjbWRcIiAsIFwiJmNtZGFmdGVyXCIgXSAsXG4gICAgXCJdLXRoZW4tYW55dGhpbmdcIiA6IFsgXCImXVwiICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcInNvbWV0aGluZy1lbHNlLXRoZW4tYW55dGhpbmdcIiA6IFsgXCImc29tZXRoaW5nLWVsc2VcIiAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJub3RoaW5nXCIgOiBbIF0gLFxuICB9ICxcbiAgXCJjbWRhZnRlci1idXQtbm90LV1cIiA6IHsgLy8gYWZ0ZXIgb3RoZXJjbWRcbiAgICBcIm90aGVyY21kXCIgOiBbIFwiJm90aGVyY21kXCIgLCBcIiZjbWRhZnRlci1idXQtbm90LV1cIiBdICxcbiAgICBcInNvbWV0aGluZy1lbHNlLXRoZW4tYW55dGhpbmdcIiA6IFsgXCImc29tZXRoaW5nLWVsc2VcIiAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgXSAsXG4gICAgXCJub3RoaW5nXCIgOiBbIF0gLFxuICB9ICxcbn0gO1xuXG5leHBvcnQgZGVmYXVsdCBncmFtbWFyLmZyb20oIHsgcm9vdCAsIHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMgfSApIDtcbiJdfQ==