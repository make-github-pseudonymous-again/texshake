"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.G = undefined;

var _jsGrammar = require("@aureooms/js-grammar");

const start = "blocks";
const eof = "$";
const productions = {
  "blocks": { // blocks : 0
    "add": ["&block", "&blocks"], // 0.0
    "end": [] // 0.1
  },
  "block": { // block : 1
    "text": ['=text'], // 1.0
    "newif": ['=newif', '=ifcmd'], // 1.1
    "ifcmd": ['=ifcmd', "&blocks", "&endif"], // 1.2
    "falsecmd": ['=falsecmd'], // 1.3
    "truecmd": ['=truecmd'], // 1.4
    "comment": ['=comment'], // 1.5
    "othercmd": ['=othercmd', "&cmd*", "&cmdoptargs", "&cmdargs"], // 1.6
    "def": ['=def', '=othercmd', '={', "&blocks", '=}'], // 1.7
    "newcommand": ['=newcommand', "&cmddef"], // 1.8
    "{blocks}": ['={', "&blocks", '=}'], // 1.9
    "[blocks]": ['=[', "&blocks", '=]'], // 1.10
    "*": ['=*'], // 1.11
    "arg": ['=arg'] // 1.12
  },
  "endif": { // endif : 2
    "elsefi": ['=else', "&blocks", '=fi'], // 2.0
    "fi": ['=fi'] // 2.1
  },
  "cmddef": { // command definition 3
    "{cmd}[x]{blocks}": ['={', '=othercmd', '=}', "&cmddefargs", '={', "&blocks", '=}'], // 3.0
    "cmd[x]{blocks}": ['=othercmd', "&cmddefargs", '={', "&blocks", '=}'], // 3.1
    "*cmd[x]{blocks}": ['=*', '=othercmd', "&cmddefargs", '={', "&blocks", '=}'] // 3.2
  },
  "cmddefargs": { // command definition arguments 4
    "yes": ['=[', '=text', '=]'], // 4.0
    "no": [] // 4.1
  },
  "cmd*": { // othercmd star : 5
    "yes": ['=*'], // 5.0
    "no": [] // 5.1
  },
  "cmdoptargs": { // othercmd optional arguments 6
    "yes": ['=[', "&blocks", '=]'], // 6.0
    "no": [] // 6.1
  },
  "cmdargs": { // othercmd arguments : 7
    "add": ['={', "&blocks", '=}', "&cmdargs"], // 7.0
    "end": [] // 7.1
  }
};

const G = exports.G = _jsGrammar.grammar.from({ start, eof, productions });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwiZW9mIiwicHJvZHVjdGlvbnMiLCJHIiwiZ3JhbW1hciIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLFFBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQVo7QUFDQSxNQUFNQyxjQUFjO0FBQ2xCLFlBQVcsRUFBRTtBQUNYLFdBQVEsQ0FBRSxRQUFGLEVBQWEsU0FBYixDQURDLEVBQzBCO0FBQ25DLFdBQVEsRUFGQyxDQUVLO0FBRkwsR0FETztBQUtsQixXQUFVLEVBQUU7QUFDVixZQUFTLENBQUUsT0FBRixDQURELEVBQ2U7QUFDdkIsYUFBVSxDQUFFLFFBQUYsRUFBYSxRQUFiLENBRkYsRUFFNEI7QUFDcEMsYUFBVSxDQUFFLFFBQUYsRUFBYSxTQUFiLEVBQXlCLFFBQXpCLENBSEYsRUFHd0M7QUFDaEQsZ0JBQWEsQ0FBRSxXQUFGLENBSkwsRUFJdUI7QUFDL0IsZUFBWSxDQUFFLFVBQUYsQ0FMSixFQUtxQjtBQUM3QixlQUFZLENBQUUsVUFBRixDQU5KLEVBTXFCO0FBQzdCLGdCQUFhLENBQUUsV0FBRixFQUFnQixPQUFoQixFQUEwQixhQUExQixFQUEwQyxVQUExQyxDQVBMLEVBTzhEO0FBQ3RFLFdBQVEsQ0FBRSxNQUFGLEVBQVcsV0FBWCxFQUF5QixJQUF6QixFQUFnQyxTQUFoQyxFQUE0QyxJQUE1QyxDQVJBLEVBUXFEO0FBQzdELGtCQUFlLENBQUUsYUFBRixFQUFrQixTQUFsQixDQVRQLEVBU3VDO0FBQy9DLGdCQUFhLENBQUUsSUFBRixFQUFTLFNBQVQsRUFBcUIsSUFBckIsQ0FWTCxFQVVtQztBQUMzQyxnQkFBYSxDQUFFLElBQUYsRUFBUyxTQUFULEVBQXFCLElBQXJCLENBWEwsRUFXbUM7QUFDM0MsU0FBTSxDQUFFLElBQUYsQ0FaRSxFQVlTO0FBQ2pCLFdBQVEsQ0FBRSxNQUFGLENBYkEsQ0FhYTtBQWJiLEdBTFE7QUFvQmxCLFdBQVUsRUFBRTtBQUNWLGNBQVcsQ0FBRSxPQUFGLEVBQVksU0FBWixFQUF3QixLQUF4QixDQURILEVBQ3FDO0FBQzdDLFVBQU8sQ0FBRSxLQUFGLENBRkMsQ0FFVztBQUZYLEdBcEJRO0FBd0JsQixZQUFXLEVBQUU7QUFDWCx3QkFBcUIsQ0FBRSxJQUFGLEVBQVMsV0FBVCxFQUF1QixJQUF2QixFQUE4QixhQUE5QixFQUE4QyxJQUE5QyxFQUFxRCxTQUFyRCxFQUFpRSxJQUFqRSxDQURaLEVBQ3NGO0FBQy9GLHNCQUFtQixDQUFFLFdBQUYsRUFBZ0IsYUFBaEIsRUFBZ0MsSUFBaEMsRUFBdUMsU0FBdkMsRUFBbUQsSUFBbkQsQ0FGVixFQUVzRTtBQUMvRSx1QkFBb0IsQ0FBRSxJQUFGLEVBQVMsV0FBVCxFQUF1QixhQUF2QixFQUF1QyxJQUF2QyxFQUE4QyxTQUE5QyxFQUEwRCxJQUExRCxDQUhYLENBRzhFO0FBSDlFLEdBeEJPO0FBNkJsQixnQkFBZSxFQUFFO0FBQ2YsV0FBUSxDQUFFLElBQUYsRUFBUyxPQUFULEVBQW1CLElBQW5CLENBREssRUFDdUI7QUFDcEMsVUFBTyxFQUZNLENBRUE7QUFGQSxHQTdCRztBQWlDbEIsVUFBUyxFQUFFO0FBQ1QsV0FBUSxDQUFFLElBQUYsQ0FERCxFQUNZO0FBQ25CLFVBQU8sRUFGQSxDQUVNO0FBRk4sR0FqQ1M7QUFxQ2xCLGdCQUFlLEVBQUU7QUFDZixXQUFRLENBQUUsSUFBRixFQUFTLFNBQVQsRUFBcUIsSUFBckIsQ0FESyxFQUN5QjtBQUN0QyxVQUFPLEVBRk0sQ0FFQTtBQUZBLEdBckNHO0FBeUNsQixhQUFZLEVBQUU7QUFDWixXQUFRLENBQUUsSUFBRixFQUFTLFNBQVQsRUFBcUIsSUFBckIsRUFBNEIsVUFBNUIsQ0FERSxFQUN5QztBQUNuRCxXQUFRLEVBRkUsQ0FFSTtBQUZKO0FBekNNLENBQXBCOztBQStDTyxNQUFNQyxnQkFBSUMsbUJBQVFDLElBQVIsQ0FBYyxFQUFFTCxLQUFGLEVBQVVDLEdBQVYsRUFBZ0JDLFdBQWhCLEVBQWQsQ0FBViIsImZpbGUiOiJncmFtbWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhbW1hciB9IGZyb20gJ0BhdXJlb29tcy9qcy1ncmFtbWFyJyA7XG5cbmNvbnN0IHN0YXJ0ID0gXCJibG9ja3NcIiA7XG5jb25zdCBlb2YgPSBcIiRcIiA7XG5jb25zdCBwcm9kdWN0aW9ucyA9IHtcbiAgXCJibG9ja3NcIiA6IHsgLy8gYmxvY2tzIDogMFxuICAgIFwiYWRkXCIgOiBbIFwiJmJsb2NrXCIgLCBcIiZibG9ja3NcIiBdICwgLy8gMC4wXG4gICAgXCJlbmRcIiA6IFsgXSAsIC8vIDAuMVxuICB9ICxcbiAgXCJibG9ja1wiIDogeyAvLyBibG9jayA6IDFcbiAgICBcInRleHRcIiA6IFsgJz10ZXh0JyBdICwgLy8gMS4wXG4gICAgXCJuZXdpZlwiIDogWyAnPW5ld2lmJyAsICc9aWZjbWQnIF0gLCAvLyAxLjFcbiAgICBcImlmY21kXCIgOiBbICc9aWZjbWQnICwgXCImYmxvY2tzXCIgLCBcIiZlbmRpZlwiIF0gLCAvLyAxLjJcbiAgICBcImZhbHNlY21kXCIgOiBbICc9ZmFsc2VjbWQnIF0gLCAvLyAxLjNcbiAgICBcInRydWVjbWRcIiA6IFsgJz10cnVlY21kJyBdICwgLy8gMS40XG4gICAgXCJjb21tZW50XCIgOiBbICc9Y29tbWVudCcgXSAsIC8vIDEuNVxuICAgIFwib3RoZXJjbWRcIiA6IFsgJz1vdGhlcmNtZCcgLCBcIiZjbWQqXCIgLCBcIiZjbWRvcHRhcmdzXCIgLCBcIiZjbWRhcmdzXCIgXSAsIC8vIDEuNlxuICAgIFwiZGVmXCIgOiBbICc9ZGVmJyAsICc9b3RoZXJjbWQnICwgJz17JyAsIFwiJmJsb2Nrc1wiICwgJz19JyBdICwgLy8gMS43XG4gICAgXCJuZXdjb21tYW5kXCIgOiBbICc9bmV3Y29tbWFuZCcgLCBcIiZjbWRkZWZcIiBdICwgLy8gMS44XG4gICAgXCJ7YmxvY2tzfVwiIDogWyAnPXsnICwgXCImYmxvY2tzXCIgLCAnPX0nIF0gLCAvLyAxLjlcbiAgICBcIltibG9ja3NdXCIgOiBbICc9WycgLCBcIiZibG9ja3NcIiAsICc9XScgXSAsIC8vIDEuMTBcbiAgICBcIipcIiA6IFsgJz0qJyBdICwgLy8gMS4xMVxuICAgIFwiYXJnXCIgOiBbICc9YXJnJyBdICwgLy8gMS4xMlxuICB9ICxcbiAgXCJlbmRpZlwiIDogeyAvLyBlbmRpZiA6IDJcbiAgICBcImVsc2VmaVwiIDogWyAnPWVsc2UnICwgXCImYmxvY2tzXCIgLCAnPWZpJyBdICwgLy8gMi4wXG4gICAgXCJmaVwiIDogWyAnPWZpJyBdICwgLy8gMi4xXG4gIH0gLFxuICBcImNtZGRlZlwiIDogeyAvLyBjb21tYW5kIGRlZmluaXRpb24gM1xuICAgIFwie2NtZH1beF17YmxvY2tzfVwiIDogWyAnPXsnICwgJz1vdGhlcmNtZCcgLCAnPX0nICwgXCImY21kZGVmYXJnc1wiICwgJz17JyAsIFwiJmJsb2Nrc1wiICwgJz19JyBdICwgLy8gMy4wXG4gICAgXCJjbWRbeF17YmxvY2tzfVwiIDogWyAnPW90aGVyY21kJyAsIFwiJmNtZGRlZmFyZ3NcIiAsICc9eycgLCBcIiZibG9ja3NcIiAsICc9fScgXSAsIC8vIDMuMVxuICAgIFwiKmNtZFt4XXtibG9ja3N9XCIgOiBbICc9KicgLCAnPW90aGVyY21kJyAsIFwiJmNtZGRlZmFyZ3NcIiAsICc9eycgLCBcIiZibG9ja3NcIiAsICc9fScgXSAsIC8vIDMuMlxuICB9ICxcbiAgXCJjbWRkZWZhcmdzXCIgOiB7IC8vIGNvbW1hbmQgZGVmaW5pdGlvbiBhcmd1bWVudHMgNFxuICAgIFwieWVzXCIgOiBbICc9WycgLCAnPXRleHQnICwgJz1dJyBdICwgLy8gNC4wXG4gICAgXCJub1wiIDogWyBdICwgLy8gNC4xXG4gIH0gLFxuICBcImNtZCpcIiA6IHsgLy8gb3RoZXJjbWQgc3RhciA6IDVcbiAgICBcInllc1wiIDogWyAnPSonIF0gLCAvLyA1LjBcbiAgICBcIm5vXCIgOiBbIF0gLCAvLyA1LjFcbiAgfSAsXG4gIFwiY21kb3B0YXJnc1wiIDogeyAvLyBvdGhlcmNtZCBvcHRpb25hbCBhcmd1bWVudHMgNlxuICAgIFwieWVzXCIgOiBbICc9WycgLCBcIiZibG9ja3NcIiAsICc9XScgXSAsIC8vIDYuMFxuICAgIFwibm9cIiA6IFsgXSAsIC8vIDYuMVxuICB9ICxcbiAgXCJjbWRhcmdzXCIgOiB7IC8vIG90aGVyY21kIGFyZ3VtZW50cyA6IDdcbiAgICBcImFkZFwiIDogWyAnPXsnICwgXCImYmxvY2tzXCIgLCAnPX0nICwgXCImY21kYXJnc1wiIF0gLCAvLyA3LjBcbiAgICBcImVuZFwiIDogWyBdICwgLy8gNy4xXG4gIH0gLFxufSA7XG5cbmV4cG9ydCBjb25zdCBHID0gZ3JhbW1hci5mcm9tKCB7IHN0YXJ0ICwgZW9mICwgcHJvZHVjdGlvbnMgfSApIDtcbiJdfQ==