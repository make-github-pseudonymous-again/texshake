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
    "\n": ['=\n'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwiZW9mIiwicHJvZHVjdGlvbnMiLCJHIiwiZ3JhbW1hciIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLFVBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQVo7QUFDQSxNQUFNQyxjQUFjO0FBQ2xCLGNBQWE7QUFDWCw0QkFBeUIsQ0FBRSxXQUFGLEVBQWdCLFdBQWhCLENBRGQ7QUFFWCxxQkFBa0IsQ0FBRSxJQUFGLEVBQVMsV0FBVCxDQUZQO0FBR1gscUJBQWtCLENBQUUsSUFBRixFQUFTLFdBQVQsQ0FIUDtBQUlYLHFCQUFrQixDQUFFLElBQUYsRUFBUyxXQUFULENBSlA7QUFLWCwyQkFBd0IsQ0FBRSxRQUFGLEVBQWEsV0FBYixDQUxiO0FBTVgsa0NBQStCLENBQUUsaUJBQUYsRUFBc0IsV0FBdEIsQ0FOcEI7QUFPWCxXQUFRLEVBUEcsQ0FPRztBQVBILEdBREs7QUFVbEIsb0JBQW1CO0FBQ2pCLDRCQUF5QixDQUFFLFdBQUYsRUFBZ0IscUJBQWhCLENBRFI7QUFFakIscUJBQWtCLENBQUUsSUFBRixFQUFTLGlCQUFULENBRkQ7QUFHakIscUJBQWtCLENBQUUsSUFBRixFQUFTLGlCQUFULENBSEQ7QUFJakIsMkJBQXdCLENBQUUsUUFBRixFQUFhLGlCQUFiLENBSlA7QUFLakIsa0NBQStCLENBQUUsaUJBQUYsRUFBc0IsaUJBQXRCLENBTGQ7QUFNakIsV0FBUTtBQU5TLEdBVkQ7QUFrQmxCLFdBQVU7QUFDUixhQUFVLENBQUUsSUFBRixFQUFTLFdBQVQsRUFBdUIsSUFBdkI7QUFERixHQWxCUTtBQXFCbEIsY0FBYTtBQUNYLGFBQVUsQ0FBRSxJQUFGLEVBQVMsaUJBQVQsRUFBNkIsSUFBN0I7QUFEQyxHQXJCSztBQXdCbEIsY0FBYTtBQUNYLGdCQUFhLENBQUUsV0FBRixFQUFnQixPQUFoQixFQUEwQixVQUExQjtBQURGLEdBeEJLO0FBMkJsQixPQUFNO0FBQ0osU0FBTSxDQUFFLElBQUY7QUFERixHQTNCWTtBQThCbEIsT0FBTTtBQUNKLFNBQU0sQ0FBRSxJQUFGO0FBREYsR0E5Qlk7QUFpQ2xCLE9BQU07QUFDSixTQUFNLENBQUUsSUFBRjtBQURGLEdBakNZO0FBb0NsQixvQkFBbUI7QUFDakIsWUFBUyxDQUFFLE9BQUYsQ0FEUSxFQUNNO0FBQ3ZCLGFBQVUsQ0FBRSxRQUFGLEVBQWEsUUFBYixDQUZPLEVBRW1CO0FBQ3BDLGFBQVUsQ0FBRSxRQUFGLEVBQWEsV0FBYixFQUEyQixRQUEzQixDQUhPLEVBR2lDO0FBQ2xELGdCQUFhLENBQUUsV0FBRixDQUpJLEVBSWM7QUFDL0IsZUFBWSxDQUFFLFVBQUYsQ0FMSyxFQUtZO0FBQzdCLGVBQVksQ0FBRSxVQUFGLENBTkssRUFNWTtBQUM3QixXQUFRLENBQUUsTUFBRixFQUFXLFdBQVgsRUFBeUIsSUFBekIsRUFBZ0MsV0FBaEMsRUFBOEMsSUFBOUMsQ0FQUyxFQU84QztBQUMvRCxrQkFBZSxDQUFFLGFBQUYsRUFBa0IsU0FBbEIsQ0FSRSxFQVE4QjtBQUMvQyxVQUFPLENBQUUsS0FBRixDQVRVO0FBVWpCLFdBQVEsQ0FBRSxNQUFGLENBVlMsRUFVSTtBQUNyQixTQUFNLENBQUUsSUFBRixDQVhXO0FBWWpCLFlBQVMsQ0FBRSxNQUFGLEVBQVcsV0FBWCxFQUF5QixNQUF6QixDQVpRO0FBYWpCLGVBQVksQ0FBRSxNQUFGLEVBQVcsV0FBWCxFQUF5QixNQUF6QjtBQWJLLEdBcENEO0FBbURsQixXQUFVLEVBQUU7QUFDVixjQUFXLENBQUUsT0FBRixFQUFZLFdBQVosRUFBMEIsS0FBMUIsQ0FESCxFQUN1QztBQUMvQyxVQUFPLENBQUUsS0FBRixDQUZDLENBRVc7QUFGWCxHQW5EUTtBQXVEbEIsWUFBVyxFQUFFO0FBQ1gsMEJBQXVCLENBQUUsSUFBRixFQUFTLFdBQVQsRUFBdUIsSUFBdkIsRUFBOEIsYUFBOUIsRUFBOEMsSUFBOUMsRUFBcUQsV0FBckQsRUFBbUUsSUFBbkUsQ0FEZDtBQUVULHdCQUFxQixDQUFFLFdBQUYsRUFBZ0IsYUFBaEIsRUFBZ0MsSUFBaEMsRUFBdUMsV0FBdkMsRUFBcUQsSUFBckQsQ0FGWjtBQUdULHlCQUFzQixDQUFFLElBQUYsRUFBUyxXQUFULEVBQXVCLGFBQXZCLEVBQXVDLElBQXZDLEVBQThDLFdBQTlDLEVBQTRELElBQTVEO0FBSGIsR0F2RE87QUE0RGxCLGdCQUFlLEVBQUU7QUFDZixXQUFRLENBQUUsSUFBRixFQUFTLE9BQVQsRUFBbUIsSUFBbkIsQ0FESyxFQUN1QjtBQUNwQyxVQUFPLEVBRk0sQ0FFQTtBQUZBLEdBNURHO0FBZ0VsQixVQUFTLEVBQUU7QUFDVCxXQUFRLENBQUUsSUFBRixDQURELEVBQ1k7QUFDbkIsVUFBTyxFQUZBLENBRU07QUFGTixHQWhFUztBQW9FbEIsYUFBWSxFQUFFO0FBQ1osY0FBVyxDQUFFLFFBQUYsRUFBYSxVQUFiLENBREQ7QUFFVixnQkFBYSxDQUFFLFdBQUYsRUFBZ0IsVUFBaEIsQ0FGSDtBQUdWLFdBQVEsRUFIRSxDQUdJO0FBSEosR0FwRU07QUF5RWxCLGNBQWEsRUFBRTtBQUNiLGdCQUFhLENBQUUsV0FBRixFQUFnQixXQUFoQixDQURGO0FBRVgsdUJBQW9CLENBQUUsSUFBRixFQUFTLFdBQVQsQ0FGVDtBQUdYLG9DQUFpQyxDQUFFLGlCQUFGLEVBQXNCLFdBQXRCLENBSHRCO0FBSVgsZUFBWTtBQUpELEdBekVLO0FBK0VsQix3QkFBdUIsRUFBRTtBQUN2QixnQkFBYSxDQUFFLFdBQUYsRUFBZ0IscUJBQWhCLENBRFE7QUFFckIsb0NBQWlDLENBQUUsaUJBQUYsRUFBc0IsaUJBQXRCLENBRlo7QUFHckIsZUFBWTtBQUhTO0FBL0VMLENBQXBCOztBQXNGTyxNQUFNQyxnQkFBSUMsbUJBQVFDLElBQVIsQ0FBYyxFQUFFTCxLQUFGLEVBQVVDLEdBQVYsRUFBZ0JDLFdBQWhCLEVBQWQsQ0FBViIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhbW1hciB9IGZyb20gJ0BhdXJlb29tcy9qcy1ncmFtbWFyJyA7XG5cbmNvbnN0IHN0YXJ0ID0gXCJhbnl0aGluZ1wiIDtcbmNvbnN0IGVvZiA9IFwiJVwiIDtcbmNvbnN0IHByb2R1Y3Rpb25zID0ge1xuICBcImFueXRoaW5nXCIgOiB7XG4gICAgXCJzdGFydHMtd2l0aC1vdGhlcmNtZFwiIDogWyAnJm90aGVyY21kJyAsIFwiJmNtZGFmdGVyXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC0qXCIgOiBbICcmKicgLCBcIiZhbnl0aGluZ1wiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtW1wiIDogWyAnJlsnICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLV1cIiA6IFsgJyZdJyAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1hLWdyb3VwXCIgOiBbICcmZ3JvdXAnICwgJyZhbnl0aGluZycgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZVwiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcImVuZFwiIDogWyBdICwgLy8gMC4xXG4gIH0gLFxuICBcImFueXRoaW5nLWJ1dC1dXCIgOiB7XG4gICAgXCJzdGFydHMtd2l0aC1vdGhlcmNtZFwiIDogWyAnJm90aGVyY21kJyAsIFwiJmNtZGFmdGVyLWJ1dC1ub3QtXVwiIF0gLFxuICAgIFwic3RhcnRzLXdpdGgtKlwiIDogWyAnJionICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcInN0YXJ0cy13aXRoLVtcIiA6IFsgJyZbJyAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1hLWdyb3VwXCIgOiBbICcmZ3JvdXAnICwgJyZhbnl0aGluZy1idXQtXScgXSAsXG4gICAgXCJzdGFydHMtd2l0aC1zb21ldGhpbmctZWxzZVwiIDogWyBcIiZzb21ldGhpbmctZWxzZVwiICwgXCImYW55dGhpbmctYnV0LV1cIiBdICxcbiAgICBcImVuZFwiIDogWyBdICxcbiAgfSAsXG4gIFwiZ3JvdXBcIiA6IHtcbiAgICBcImdyb3VwXCIgOiBbICc9eycgLCAnJmFueXRoaW5nJyAsICc9fScgXSAsXG4gIH0gLFxuICBcIm9wdGdyb3VwXCIgOiB7XG4gICAgXCJncm91cFwiIDogWyAnPVsnICwgXCImYW55dGhpbmctYnV0LV1cIiAsICc9XScgXSAsXG4gIH0gLFxuICBcIm90aGVyY21kXCIgOiB7XG4gICAgXCJvdGhlcmNtZFwiIDogWyAnPW90aGVyY21kJyAsIFwiJmNtZCpcIiAsIFwiJmNtZGFyZ3NcIiBdICxcbiAgfSxcbiAgXCIqXCIgOiB7XG4gICAgXCIqXCIgOiBbICc9KicgXSAsXG4gIH0gLFxuICBcIltcIiA6IHtcbiAgICBcIltcIiA6IFsgJz1bJyBdICxcbiAgfSAsXG4gIFwiXVwiIDoge1xuICAgIFwiXVwiIDogWyAnPV0nIF0gLFxuICB9ICxcbiAgXCJzb21ldGhpbmctZWxzZVwiIDoge1xuICAgIFwidGV4dFwiIDogWyAnPXRleHQnIF0gLCAvLyAxLjBcbiAgICBcIm5ld2lmXCIgOiBbICc9bmV3aWYnICwgJz1pZmNtZCcgXSAsIC8vIDEuMVxuICAgIFwiaWZjbWRcIiA6IFsgJz1pZmNtZCcgLCBcIiZhbnl0aGluZ1wiICwgXCImZW5kaWZcIiBdICwgLy8gMS4yXG4gICAgXCJmYWxzZWNtZFwiIDogWyAnPWZhbHNlY21kJyBdICwgLy8gMS4zXG4gICAgXCJ0cnVlY21kXCIgOiBbICc9dHJ1ZWNtZCcgXSAsIC8vIDEuNFxuICAgIFwiY29tbWVudFwiIDogWyAnPWNvbW1lbnQnIF0gLCAvLyAxLjVcbiAgICBcImRlZlwiIDogWyAnPWRlZicgLCAnPW90aGVyY21kJyAsICc9eycgLCBcIiZhbnl0aGluZ1wiICwgJz19JyBdICwgLy8gMS43XG4gICAgXCJuZXdjb21tYW5kXCIgOiBbICc9bmV3Y29tbWFuZCcgLCBcIiZjbWRkZWZcIiBdICwgLy8gMS44XG4gICAgXCJcXG5cIiA6IFsgJz1cXG4nIF0gLFxuICAgIFwiYXJnXCIgOiBbICc9YXJnJyBdICwgLy8gMS4xMlxuICAgIFwiJFwiIDogWyAnPSQnIF0gLFxuICAgIFwibWF0aFwiIDogWyAnPVxcXFwoJyAsICcmYW55dGhpbmcnICwgJz1cXFxcKScgXSAsXG4gICAgXCJtYXRoZW52XCIgOiBbICc9XFxcXFsnICwgJyZhbnl0aGluZycgLCAnPVxcXFxdJyBdICxcbiAgfSAsXG4gIFwiZW5kaWZcIiA6IHsgLy8gZW5kaWYgOiAyXG4gICAgXCJlbHNlZmlcIiA6IFsgJz1lbHNlJyAsIFwiJmFueXRoaW5nXCIgLCAnPWZpJyBdICwgLy8gMi4wXG4gICAgXCJmaVwiIDogWyAnPWZpJyBdICwgLy8gMi4xXG4gIH0gLFxuICBcImNtZGRlZlwiIDogeyAvLyBjb21tYW5kIGRlZmluaXRpb24gM1xuICAgIFwie2NtZH1beF17YW55dGhpbmd9XCIgOiBbICc9eycgLCAnPW90aGVyY21kJyAsICc9fScgLCBcIiZjbWRkZWZhcmdzXCIgLCAnPXsnICwgXCImYW55dGhpbmdcIiAsICc9fScgXSAsXG4gICAgXCJjbWRbeF17YW55dGhpbmd9XCIgOiBbICc9b3RoZXJjbWQnICwgXCImY21kZGVmYXJnc1wiICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nIF0gLFxuICAgIFwiKmNtZFt4XXthbnl0aGluZ31cIiA6IFsgJz0qJyAsICc9b3RoZXJjbWQnICwgXCImY21kZGVmYXJnc1wiICwgJz17JyAsIFwiJmFueXRoaW5nXCIgLCAnPX0nIF0gLFxuICB9ICxcbiAgXCJjbWRkZWZhcmdzXCIgOiB7IC8vIGNvbW1hbmQgZGVmaW5pdGlvbiBhcmd1bWVudHMgNFxuICAgIFwieWVzXCIgOiBbICc9WycgLCAnPXRleHQnICwgJz1dJyBdICwgLy8gNC4wXG4gICAgXCJub1wiIDogWyBdICwgLy8gNC4xXG4gIH0gLFxuICBcImNtZCpcIiA6IHsgLy8gb3RoZXJjbWQgc3RhciA6IDVcbiAgICBcInllc1wiIDogWyAnPSonIF0gLCAvLyA1LjBcbiAgICBcIm5vXCIgOiBbIF0gLCAvLyA1LjFcbiAgfSAsXG4gIFwiY21kYXJnc1wiIDogeyAvLyBvdGhlcmNtZCBhcmd1bWVudHMgOiA3XG4gICAgXCJub3JtYWxcIiA6IFsgXCImZ3JvdXBcIiAsIFwiJmNtZGFyZ3NcIiBdICxcbiAgICBcIm9wdGlvbmFsXCIgOiBbIFwiJm9wdGdyb3VwXCIgLCBcIiZjbWRhcmdzXCIgXSAsXG4gICAgXCJlbmRcIiA6IFsgXSAsIC8vIDcuMVxuICB9ICxcbiAgXCJjbWRhZnRlclwiIDogeyAvLyBhZnRlciBvdGhlcmNtZFxuICAgIFwib3RoZXJjbWRcIiA6IFsgXCImb3RoZXJjbWRcIiAsIFwiJmNtZGFmdGVyXCIgXSAsXG4gICAgXCJdLXRoZW4tYW55dGhpbmdcIiA6IFsgXCImXVwiICwgXCImYW55dGhpbmdcIiBdICxcbiAgICBcInNvbWV0aGluZy1lbHNlLXRoZW4tYW55dGhpbmdcIiA6IFsgXCImc29tZXRoaW5nLWVsc2VcIiAsIFwiJmFueXRoaW5nXCIgXSAsXG4gICAgXCJub3RoaW5nXCIgOiBbIF0gLFxuICB9ICxcbiAgXCJjbWRhZnRlci1idXQtbm90LV1cIiA6IHsgLy8gYWZ0ZXIgb3RoZXJjbWRcbiAgICBcIm90aGVyY21kXCIgOiBbIFwiJm90aGVyY21kXCIgLCBcIiZjbWRhZnRlci1idXQtbm90LV1cIiBdICxcbiAgICBcInNvbWV0aGluZy1lbHNlLXRoZW4tYW55dGhpbmdcIiA6IFsgXCImc29tZXRoaW5nLWVsc2VcIiAsIFwiJmFueXRoaW5nLWJ1dC1dXCIgXSAsXG4gICAgXCJub3RoaW5nXCIgOiBbIF0gLFxuICB9ICxcbn0gO1xuXG5leHBvcnQgY29uc3QgRyA9IGdyYW1tYXIuZnJvbSggeyBzdGFydCAsIGVvZiAsIHByb2R1Y3Rpb25zIH0gKSA7XG4iXX0=