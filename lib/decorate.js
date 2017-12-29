'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decorate = decorate;

var _jsItertools = require('@aureooms/js-itertools');

var _match = require('./match');

function decorate(it, tree) {
  // modifies tree in place
  let children = [];
  for (const child of tree.children) {
    if (typeof child === 'string') {
      const [token, buffer] = (0, _jsItertools.next)(it);
      (0, _match.match)(token, child);
      children.push({ 'type': 'leaf', 'token': token, 'buffer': buffer });
    } else {
      children.push(decorate(it, child));
    }
  }
  tree.children = children;
  tree.type = 'internal';
  return tree;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvcmF0ZS5qcyJdLCJuYW1lcyI6WyJkZWNvcmF0ZSIsIml0IiwidHJlZSIsImNoaWxkcmVuIiwiY2hpbGQiLCJ0b2tlbiIsImJ1ZmZlciIsInB1c2giLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7OztRQUdnQkEsUSxHQUFBQSxROztBQUhoQjs7QUFDQTs7QUFFTyxTQUFTQSxRQUFULENBQW9CQyxFQUFwQixFQUF5QkMsSUFBekIsRUFBZ0M7QUFBRTtBQUN2QyxNQUFJQyxXQUFXLEVBQWY7QUFDQSxPQUFNLE1BQU1DLEtBQVosSUFBcUJGLEtBQUtDLFFBQTFCLEVBQXFDO0FBQ25DLFFBQUssT0FBT0MsS0FBUCxLQUFpQixRQUF0QixFQUFpQztBQUMvQixZQUFNLENBQUVDLEtBQUYsRUFBVUMsTUFBVixJQUFxQix1QkFBS0wsRUFBTCxDQUEzQjtBQUNBLHdCQUFPSSxLQUFQLEVBQWVELEtBQWY7QUFDQUQsZUFBU0ksSUFBVCxDQUFjLEVBQUUsUUFBUyxNQUFYLEVBQW9CLFNBQVVGLEtBQTlCLEVBQXNDLFVBQVdDLE1BQWpELEVBQWQ7QUFDRCxLQUpELE1BS0s7QUFDSEgsZUFBU0ksSUFBVCxDQUFjUCxTQUFVQyxFQUFWLEVBQWVHLEtBQWYsQ0FBZDtBQUNEO0FBQ0Y7QUFDREYsT0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQUQsT0FBS00sSUFBTCxHQUFZLFVBQVo7QUFDQSxTQUFPTixJQUFQO0FBQ0QiLCJmaWxlIjoiZGVjb3JhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuZXh0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tICcuL21hdGNoJyA7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvcmF0ZSAoIGl0ICwgdHJlZSApIHsgLy8gbW9kaWZpZXMgdHJlZSBpbiBwbGFjZVxuICBsZXQgY2hpbGRyZW4gPSBbIF0gO1xuICBmb3IgKCBjb25zdCBjaGlsZCBvZiB0cmVlLmNoaWxkcmVuICkge1xuICAgIGlmICggdHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyApIHtcbiAgICAgIGNvbnN0IFsgdG9rZW4gLCBidWZmZXIgXSA9IG5leHQoaXQpO1xuICAgICAgbWF0Y2goIHRva2VuICwgY2hpbGQgKSA7XG4gICAgICBjaGlsZHJlbi5wdXNoKHsgJ3R5cGUnIDogJ2xlYWYnICwgJ3Rva2VuJyA6IHRva2VuICwgJ2J1ZmZlcicgOiBidWZmZXIgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2hpbGRyZW4ucHVzaChkZWNvcmF0ZSggaXQgLCBjaGlsZCApKSA7XG4gICAgfVxuICB9XG4gIHRyZWUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgdHJlZS50eXBlID0gJ2ludGVybmFsJyA7XG4gIHJldHVybiB0cmVlO1xufVxuIl19