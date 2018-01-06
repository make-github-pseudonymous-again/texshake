'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.shake = shake;
function shake(out, tree, variables, args) {

		let variable, buffer, cmd, nargs, expandsto;

		while (tree.nonterminal === 0) {
				// eliminate expensive tail-recursion
				if (tree.production.id === 1) return;
				shake(out, tree.children[0], variables, args); // 1
				tree = tree.children[1]; // 0
		}

		switch (tree.nonterminal) {
				case 1:
						switch (tree.production.id) {
								case 0:
										out.write(tree.children[0].buffer); // text
										break;
								case 1:
										// newif
										// ifcmd
										break;
								case 2:
										variable = tree.children[0].buffer.substr(3);
										if (variables.has(variable)) {
												// ifcmd
												const flag = variables.get(variable);
												if (flag) shake(out, tree.children[1], variables, args);else if (tree.children[2].production.id === 0) {
														// else
														shake(out, tree.children[2].children[1], variables, args);
												}
												// fi
										} else {
												out.write(tree.children[0].buffer); // ifcmd
												shake(out, tree.children[1], variables, args);
												if (tree.children[2].production.id === 0) {
														out.write('\\else'); // else
														shake(out, tree.children[2].children[1], variables, args);
												}
												out.write('\\fi'); // fi
										}
										break;
								case 3:
										buffer = tree.children[0].buffer; // falsecmd
										variable = buffer.substring(1, buffer.length - 5);
										variables.set(variable, false);
										break;
								case 4:
										buffer = tree.children[0].buffer; // truecmd
										variable = buffer.substring(1, buffer.length - 4);
										variables.set(variable, true);
										break;
								case 5:
										out.write('%'); // comment
										break;
								case 6:
										cmd = tree.children[0].buffer; // othercmd
										if (tree.children[1].production.id === 0) cmd += '*';
										const optargsnode = tree.children[2];
										const hasoptargs = optargsnode.production.id === 0;
										let argsnode = tree.children[3];
										const cmdargs = [];
										while (argsnode.production.id === 0) {
												// {
												cmdargs.push(argsnode.children[1]);
												// }
												argsnode = argsnode.children[3];
										}
										if (!hasoptargs && variables.has(cmd)) {
												// too hard to parse opt args currently
												[nargs, expandsto] = variables.get(cmd);
												if (cmdargs.length !== nargs) throw new Error('nargs does not match');
												shake(out, expandsto, variables, [args, cmdargs]);
										} else {
												out.write(cmd);
												if (hasoptargs) {
														out.write('[');
														shake(out, optargsnode.children[1], variables, args);
														out.write(']');
												}
												for (const subtree of cmdargs) {
														out.write('{');
														shake(out, subtree, variables, args);
														out.write('}');
												}
										}
										break;
								case 7:
										// def
										cmd = tree.children[1].buffer; // othercmd
										// {
										variables.set(cmd, [0, tree.children[3]]);
										// }
										break;
								case 8:
										// newcommand
										shake(out, tree.children[1], variables, args);
										break;
								case 9:
										out.write('{'); // {
										shake(out, tree.children[1], variables, args);
										out.write('}'); // }
										break;
								case 10:
										out.write('['); // [
										shake(out, tree.children[1], variables, args);
										out.write(']'); // ]
										break;
								case 11:
										out.write('*'); // *
										break;
								case 12:
										//throw new Error('Should never reach case 1.12 because handled before.');
										const i = parseInt(tree.children[0].buffer.substr(1), 10) - 1; // arg
										if (i >= args[1].length) throw new Error('shake 1.12: not enough arguments');
										const subtree = args[1][i]; // arg
										shake(out, subtree, variables, args[0]);
										break;
						}
						break;
				case 2:
						throw new Error('Should never reach case 2 because handled before.');
				case 3:
						switch (tree.production.id) {
								case 0:
										// {
										cmd = tree.children[1].buffer; // othercmd
										// }
										nargs = 0;
										if (tree.children[3].production.id === 0) {
												// [
												nargs = parseInt(tree.children[3].children[1].buffer, 10); // text
												// ]
										}
										// {
										variables.set(cmd, [nargs, tree.children[5]]);
										// }
										break;
								case 1:
										cmd = tree.children[0].buffer; // othercmd
										nargs = 0;
										if (tree.children[1].production.id === 0) {
												// [
												nargs = parseInt(tree.children[1].children[1].buffer, 10); // text
												// ]
										}
										// {
										variables.set(cmd, [nargs, tree.children[3]]);
										// }
										break;
								case 2:
										// *
										cmd = tree.children[1].buffer; // othercmd
										// do not know what to do with '*' at the moment
										nargs = 0;
										if (tree.children[2].production.id === 0) {
												// [
												nargs = parseInt(tree.children[2].children[1].buffer, 10); // text
												// ]
										}
										// {
										variables.set(cmd, [nargs, tree.children[4]]);
										// }
										break;
						}
						break;
				case 4:
						throw new Error('Should never reach case 4 because handled before.');
				case 5:
						throw new Error('Should never reach case 5 because handled before.');
				case 6:
						throw new Error('Should never reach case 6 because handled before.');
				case 7:
						throw new Error('Should never reach case 7 because handled before.');
		}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaGFrZS5qcyJdLCJuYW1lcyI6WyJzaGFrZSIsIm91dCIsInRyZWUiLCJ2YXJpYWJsZXMiLCJhcmdzIiwidmFyaWFibGUiLCJidWZmZXIiLCJjbWQiLCJuYXJncyIsImV4cGFuZHN0byIsIm5vbnRlcm1pbmFsIiwicHJvZHVjdGlvbiIsImlkIiwiY2hpbGRyZW4iLCJ3cml0ZSIsInN1YnN0ciIsImhhcyIsImZsYWciLCJnZXQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJzZXQiLCJvcHRhcmdzbm9kZSIsImhhc29wdGFyZ3MiLCJhcmdzbm9kZSIsImNtZGFyZ3MiLCJwdXNoIiwiRXJyb3IiLCJzdWJ0cmVlIiwiaSIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsSyxHQUFBQSxLO0FBQVQsU0FBU0EsS0FBVCxDQUFpQkMsR0FBakIsRUFBdUJDLElBQXZCLEVBQThCQyxTQUE5QixFQUEwQ0MsSUFBMUMsRUFBaUQ7O0FBRXRELE1BQUlDLFFBQUosRUFBZUMsTUFBZixFQUF3QkMsR0FBeEIsRUFBOEJDLEtBQTlCLEVBQXNDQyxTQUF0Qzs7QUFFQSxTQUFRUCxLQUFLUSxXQUFMLEtBQXFCLENBQTdCLEVBQWlDO0FBQy9CO0FBQ0EsUUFBS1IsS0FBS1MsVUFBTCxDQUFnQkMsRUFBaEIsS0FBdUIsQ0FBNUIsRUFBZ0M7QUFDaENaLFVBQU9DLEdBQVAsRUFBYUMsS0FBS1csUUFBTCxDQUFjLENBQWQsQ0FBYixFQUFnQ1YsU0FBaEMsRUFBNENDLElBQTVDLEVBSCtCLENBR3NCO0FBQ3JERixXQUFPQSxLQUFLVyxRQUFMLENBQWMsQ0FBZCxDQUFQLENBSitCLENBSU47QUFDMUI7O0FBRUQsVUFBU1gsS0FBS1EsV0FBZDtBQUNFLFNBQUssQ0FBTDtBQUNFLGNBQVNSLEtBQUtTLFVBQUwsQ0FBZ0JDLEVBQXpCO0FBQ0wsYUFBSyxDQUFMO0FBQ0VYLGNBQUlhLEtBQUosQ0FBVVosS0FBS1csUUFBTCxDQUFjLENBQWQsRUFBaUJQLE1BQTNCLEVB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LENBQW5CO0FBQ0E7QUFDQTtBQUNGLGFBQUssQ0FBTDtBQUNFO0FBQ0FOLGdCQUFNTCxLQUFLVyxRQUFMLENBQWMsQ0FBZCxFQUFpQlAsTUFBdkIsQ0FGRixDQUVpQztBQUMvQjtBQUNBRSxrQkFBUSxDQUFSO0FBQ0EsY0FBSU4sS0FBS1csUUFBTCxDQUFjLENBQWQsRUFBaUJGLFVBQWpCLENBQTRCQyxFQUE1QixLQUFtQyxDQUF2QyxFQUEwQztBQUN4QztBQUNBSixvQkFBUXNCLFNBQVM1QixLQUFLVyxRQUFMLENBQWMsQ0FBZCxFQUFpQkEsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJQLE1BQXRDLEVBQThDLEVBQTlDLENBQVIsQ0FGd0MsQ0FFbUI7QUFDM0Q7QUFDRDtBQUNEO0FBQ0FILG9CQUFVa0IsR0FBVixDQUFjZCxHQUFkLEVBQW1CLENBQUVDLEtBQUYsRUFBU04sS0FBS1csUUFBTCxDQUFjLENBQWQsQ0FBVCxDQUFuQjtBQUNBO0FBQ0E7QUF4Q0c7QUEwQ0E7QUFDRixTQUFLLENBQUw7QUFDRSxZQUFNLElBQUljLEtBQUosQ0FBVSxtREFBVixDQUFOO0FBQ0YsU0FBSyxDQUFMO0FBQ0UsWUFBTSxJQUFJQSxLQUFKLENBQVUsbURBQVYsQ0FBTjtBQUNGLFNBQUssQ0FBTDtBQUNFLFlBQU0sSUFBSUEsS0FBSixDQUFVLG1EQUFWLENBQU47QUFDRixTQUFLLENBQUw7QUFDRSxZQUFNLElBQUlBLEtBQUosQ0FBVSxtREFBVixDQUFOO0FBbktKO0FBc0tEIiwiZmlsZSI6InNoYWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNoYWtlICggb3V0ICwgdHJlZSAsIHZhcmlhYmxlcyAsIGFyZ3MgKSB7XG5cbiAgbGV0IHZhcmlhYmxlICwgYnVmZmVyICwgY21kICwgbmFyZ3MgLCBleHBhbmRzdG8gO1xuXG4gIHdoaWxlICggdHJlZS5ub250ZXJtaW5hbCA9PT0gMCApIHtcbiAgICAvLyBlbGltaW5hdGUgZXhwZW5zaXZlIHRhaWwtcmVjdXJzaW9uXG4gICAgaWYgKCB0cmVlLnByb2R1Y3Rpb24uaWQgPT09IDEgKSByZXR1cm4gO1xuICAgIHNoYWtlKCBvdXQgLCB0cmVlLmNoaWxkcmVuWzBdICwgdmFyaWFibGVzICwgYXJncyApIDsgLy8gMVxuICAgIHRyZWUgPSB0cmVlLmNoaWxkcmVuWzFdOyAvLyAwXG4gIH1cblxuICBzd2l0Y2ggKCB0cmVlLm5vbnRlcm1pbmFsICkge1xuICAgIGNhc2UgMTpcbiAgICAgIHN3aXRjaCAoIHRyZWUucHJvZHVjdGlvbi5pZCApIHtcblx0Y2FzZSAwOlxuXHQgIG91dC53cml0ZSh0cmVlLmNoaWxkcmVuWzBdLmJ1ZmZlcik7IC8vIHRleHRcblx0ICBicmVhaztcblx0Y2FzZSAxOlxuXHQgIC8vIG5ld2lmXG5cdCAgLy8gaWZjbWRcblx0ICBicmVhaztcblx0Y2FzZSAyOlxuXHQgIHZhcmlhYmxlID0gdHJlZS5jaGlsZHJlblswXS5idWZmZXIuc3Vic3RyKDMpO1xuXHQgIGlmICh2YXJpYWJsZXMuaGFzKHZhcmlhYmxlKSkge1xuXHQgICAgLy8gaWZjbWRcblx0ICAgIGNvbnN0IGZsYWcgPSB2YXJpYWJsZXMuZ2V0KHZhcmlhYmxlKTtcblx0ICAgIGlmIChmbGFnKSBzaGFrZShvdXQsIHRyZWUuY2hpbGRyZW5bMV0gLCB2YXJpYWJsZXMgLCBhcmdzKSA7XG5cdCAgICBlbHNlIGlmICggdHJlZS5jaGlsZHJlblsyXS5wcm9kdWN0aW9uLmlkID09PSAwICkge1xuXHQgICAgICAvLyBlbHNlXG5cdCAgICAgIHNoYWtlKG91dCwgdHJlZS5jaGlsZHJlblsyXS5jaGlsZHJlblsxXSAsIHZhcmlhYmxlcyAsIGFyZ3MpIDtcblx0ICAgIH1cblx0ICAgIC8vIGZpXG5cdCAgfVxuXHQgIGVsc2Uge1xuXHQgICAgb3V0LndyaXRlKHRyZWUuY2hpbGRyZW5bMF0uYnVmZmVyKTsgLy8gaWZjbWRcblx0ICAgIHNoYWtlKG91dCwgdHJlZS5jaGlsZHJlblsxXSAsIHZhcmlhYmxlcyAsIGFyZ3MpIDtcblx0ICAgIGlmICggdHJlZS5jaGlsZHJlblsyXS5wcm9kdWN0aW9uLmlkID09PSAwICkge1xuXHQgICAgICBvdXQud3JpdGUoJ1xcXFxlbHNlJyk7IC8vIGVsc2Vcblx0ICAgICAgc2hha2Uob3V0LCB0cmVlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdICwgdmFyaWFibGVzICwgYXJncykgO1xuXHQgICAgfVxuXHQgICAgb3V0LndyaXRlKCdcXFxcZmknKTsgLy8gZmlcblx0ICB9XG5cdCAgYnJlYWs7XG5cdGNhc2UgMzpcblx0ICBidWZmZXIgPSB0cmVlLmNoaWxkcmVuWzBdLmJ1ZmZlcjsgLy8gZmFsc2VjbWRcblx0ICB2YXJpYWJsZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMSxidWZmZXIubGVuZ3RoLTUpO1xuXHQgIHZhcmlhYmxlcy5zZXQodmFyaWFibGUsIGZhbHNlKTtcblx0ICBicmVhaztcblx0Y2FzZSA0OlxuXHQgIGJ1ZmZlciA9IHRyZWUuY2hpbGRyZW5bMF0uYnVmZmVyOyAvLyB0cnVlY21kXG5cdCAgdmFyaWFibGUgPSBidWZmZXIuc3Vic3RyaW5nKDEsYnVmZmVyLmxlbmd0aC00KTtcblx0ICB2YXJpYWJsZXMuc2V0KHZhcmlhYmxlLCB0cnVlKTtcblx0ICBicmVhaztcblx0Y2FzZSA1OlxuXHQgIG91dC53cml0ZSgnJScpOyAvLyBjb21tZW50XG5cdCAgYnJlYWs7XG5cdGNhc2UgNjpcblx0ICBjbWQgPSB0cmVlLmNoaWxkcmVuWzBdLmJ1ZmZlcjsgLy8gb3RoZXJjbWRcblx0ICBpZiAoIHRyZWUuY2hpbGRyZW5bMV0ucHJvZHVjdGlvbi5pZCA9PT0gMCApIGNtZCArPSAnKic7XG5cdCAgY29uc3Qgb3B0YXJnc25vZGUgPSB0cmVlLmNoaWxkcmVuWzJdO1xuXHQgIGNvbnN0IGhhc29wdGFyZ3MgPSBvcHRhcmdzbm9kZS5wcm9kdWN0aW9uLmlkID09PSAwIDtcblx0ICBsZXQgYXJnc25vZGUgPSB0cmVlLmNoaWxkcmVuWzNdIDtcblx0ICBjb25zdCBjbWRhcmdzID0gW107XG5cdCAgd2hpbGUgKCBhcmdzbm9kZS5wcm9kdWN0aW9uLmlkID09PSAwICkge1xuXHQgICAgLy8ge1xuXHQgICAgY21kYXJncy5wdXNoKGFyZ3Nub2RlLmNoaWxkcmVuWzFdKSA7XG5cdCAgICAvLyB9XG5cdCAgICBhcmdzbm9kZSA9IGFyZ3Nub2RlLmNoaWxkcmVuWzNdO1xuXHQgIH1cblx0ICBpZiAoIWhhc29wdGFyZ3MgJiYgdmFyaWFibGVzLmhhcyhjbWQpKSB7IC8vIHRvbyBoYXJkIHRvIHBhcnNlIG9wdCBhcmdzIGN1cnJlbnRseVxuXHQgICAgWyBuYXJncyAsIGV4cGFuZHN0byBdID0gdmFyaWFibGVzLmdldChjbWQpIDtcblx0ICAgIGlmIChjbWRhcmdzLmxlbmd0aCAhPT0gbmFyZ3MpIHRocm93IG5ldyBFcnJvcignbmFyZ3MgZG9lcyBub3QgbWF0Y2gnKSA7XG5cdCAgICBzaGFrZShvdXQsIGV4cGFuZHN0bywgdmFyaWFibGVzLCBbIGFyZ3MgLCBjbWRhcmdzIF0gKTtcblx0ICB9XG5cdCAgZWxzZSB7XG5cdCAgICBvdXQud3JpdGUoY21kKTtcblx0ICAgIGlmIChoYXNvcHRhcmdzKSB7XG5cdCAgICAgIG91dC53cml0ZSgnWycpO1xuXHQgICAgICBzaGFrZShvdXQsIG9wdGFyZ3Nub2RlLmNoaWxkcmVuWzFdLCB2YXJpYWJsZXMsIGFyZ3MpO1xuXHQgICAgICBvdXQud3JpdGUoJ10nKTtcblx0ICAgIH1cblx0ICAgIGZvciAoIGNvbnN0IHN1YnRyZWUgb2YgY21kYXJncyApIHtcblx0ICAgICAgb3V0LndyaXRlKCd7Jyk7XG5cdCAgICAgIHNoYWtlKG91dCwgc3VidHJlZSwgdmFyaWFibGVzLCBhcmdzKTtcblx0ICAgICAgb3V0LndyaXRlKCd9Jyk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIGJyZWFrO1xuXHRjYXNlIDc6XG5cdCAgLy8gZGVmXG5cdCAgY21kID0gdHJlZS5jaGlsZHJlblsxXS5idWZmZXI7IC8vIG90aGVyY21kXG5cdCAgLy8ge1xuXHQgIHZhcmlhYmxlcy5zZXQoY21kLCBbMCwgdHJlZS5jaGlsZHJlblszXV0pO1xuXHQgIC8vIH1cblx0ICBicmVhaztcblx0Y2FzZSA4OlxuXHQgIC8vIG5ld2NvbW1hbmRcblx0ICBzaGFrZSggb3V0ICwgdHJlZS5jaGlsZHJlblsxXSAsIHZhcmlhYmxlcyAsIGFyZ3MpIDtcblx0ICBicmVhaztcblx0Y2FzZSA5OlxuXHQgIG91dC53cml0ZSgneycpOyAvLyB7XG5cdCAgc2hha2UoIG91dCAsIHRyZWUuY2hpbGRyZW5bMV0gLCB2YXJpYWJsZXMgLCBhcmdzKSA7XG5cdCAgb3V0LndyaXRlKCd9Jyk7IC8vIH1cblx0ICBicmVhaztcblx0Y2FzZSAxMDpcblx0ICBvdXQud3JpdGUoJ1snKTsgLy8gW1xuXHQgIHNoYWtlKCBvdXQgLCB0cmVlLmNoaWxkcmVuWzFdICwgdmFyaWFibGVzICwgYXJncykgO1xuXHQgIG91dC53cml0ZSgnXScpOyAvLyBdXG5cdCAgYnJlYWs7XG5cdGNhc2UgMTE6XG5cdCAgb3V0LndyaXRlKCcqJyk7IC8vICpcblx0ICBicmVhaztcblx0Y2FzZSAxMjpcblx0ICAvL3Rocm93IG5ldyBFcnJvcignU2hvdWxkIG5ldmVyIHJlYWNoIGNhc2UgMS4xMiBiZWNhdXNlIGhhbmRsZWQgYmVmb3JlLicpO1xuXHQgIGNvbnN0IGkgPSBwYXJzZUludCh0cmVlLmNoaWxkcmVuWzBdLmJ1ZmZlci5zdWJzdHIoMSksIDEwKSAtIDE7IC8vIGFyZ1xuXHQgIGlmICggaSA+PSBhcmdzWzFdLmxlbmd0aCApIHRocm93IG5ldyBFcnJvcignc2hha2UgMS4xMjogbm90IGVub3VnaCBhcmd1bWVudHMnKSA7XG5cdCAgY29uc3Qgc3VidHJlZSA9IGFyZ3NbMV1baV0gLy8gYXJnXG5cdCAgc2hha2Uob3V0LCBzdWJ0cmVlLCB2YXJpYWJsZXMsIGFyZ3NbMF0pO1xuXHQgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaG91bGQgbmV2ZXIgcmVhY2ggY2FzZSAyIGJlY2F1c2UgaGFuZGxlZCBiZWZvcmUuJyk7XG4gICAgY2FzZSAzOlxuICAgICAgc3dpdGNoICggdHJlZS5wcm9kdWN0aW9uLmlkICkge1xuXHRjYXNlIDA6XG5cdCAgLy8ge1xuXHQgIGNtZCA9IHRyZWUuY2hpbGRyZW5bMV0uYnVmZmVyOyAvLyBvdGhlcmNtZFxuXHQgIC8vIH1cblx0ICBuYXJncyA9IDA7XG5cdCAgaWYgKHRyZWUuY2hpbGRyZW5bM10ucHJvZHVjdGlvbi5pZCA9PT0gMCkge1xuXHQgICAgLy8gW1xuXHQgICAgbmFyZ3MgPSBwYXJzZUludCh0cmVlLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzFdLmJ1ZmZlciwgMTApOyAvLyB0ZXh0XG5cdCAgICAvLyBdXG5cdCAgfVxuXHQgIC8vIHtcblx0ICB2YXJpYWJsZXMuc2V0KGNtZCwgWyBuYXJncyAsIHRyZWUuY2hpbGRyZW5bNV0gXSk7XG5cdCAgLy8gfVxuXHQgIGJyZWFrO1xuXHRjYXNlIDE6XG5cdCAgY21kID0gdHJlZS5jaGlsZHJlblswXS5idWZmZXI7IC8vIG90aGVyY21kXG5cdCAgbmFyZ3MgPSAwO1xuXHQgIGlmICh0cmVlLmNoaWxkcmVuWzFdLnByb2R1Y3Rpb24uaWQgPT09IDApIHtcblx0ICAgIC8vIFtcblx0ICAgIG5hcmdzID0gcGFyc2VJbnQodHJlZS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5idWZmZXIsIDEwKTsgLy8gdGV4dFxuXHQgICAgLy8gXVxuXHQgIH1cblx0ICAvLyB7XG5cdCAgdmFyaWFibGVzLnNldChjbWQsIFsgbmFyZ3MgLCB0cmVlLmNoaWxkcmVuWzNdIF0pO1xuXHQgIC8vIH1cblx0ICBicmVhaztcblx0Y2FzZSAyOlxuXHQgIC8vICpcblx0ICBjbWQgPSB0cmVlLmNoaWxkcmVuWzFdLmJ1ZmZlcjsgLy8gb3RoZXJjbWRcblx0ICAvLyBkbyBub3Qga25vdyB3aGF0IHRvIGRvIHdpdGggJyonIGF0IHRoZSBtb21lbnRcblx0ICBuYXJncyA9IDA7XG5cdCAgaWYgKHRyZWUuY2hpbGRyZW5bMl0ucHJvZHVjdGlvbi5pZCA9PT0gMCkge1xuXHQgICAgLy8gW1xuXHQgICAgbmFyZ3MgPSBwYXJzZUludCh0cmVlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzFdLmJ1ZmZlciwgMTApOyAvLyB0ZXh0XG5cdCAgICAvLyBdXG5cdCAgfVxuXHQgIC8vIHtcblx0ICB2YXJpYWJsZXMuc2V0KGNtZCwgWyBuYXJncywgdHJlZS5jaGlsZHJlbls0XV0pO1xuXHQgIC8vIH1cblx0ICBicmVhaztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hvdWxkIG5ldmVyIHJlYWNoIGNhc2UgNCBiZWNhdXNlIGhhbmRsZWQgYmVmb3JlLicpO1xuICAgIGNhc2UgNTpcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hvdWxkIG5ldmVyIHJlYWNoIGNhc2UgNSBiZWNhdXNlIGhhbmRsZWQgYmVmb3JlLicpO1xuICAgIGNhc2UgNjpcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hvdWxkIG5ldmVyIHJlYWNoIGNhc2UgNiBiZWNhdXNlIGhhbmRsZWQgYmVmb3JlLicpO1xuICAgIGNhc2UgNzpcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hvdWxkIG5ldmVyIHJlYWNoIGNhc2UgNyBiZWNhdXNlIGhhbmRsZWQgYmVmb3JlLicpO1xuICB9XG5cbn1cbiJdfQ==