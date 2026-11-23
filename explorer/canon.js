/* Canonical form of a Twist Tac Toe position under the 48 cube symmetries (rotations and reflections).
   Same definition as the engine: over all symmetries take the lexicographically smallest (X mask, O mask),
   the X mask first, each mask read as a 54-bit unsigned integer with cell c at bit c.
   Key format: "<x hex>.<o hex>.<side>", lowercase hex without leading zeros ("0" if empty); side is the player to move
   (0 = X, 1 = O). Masks are held as two numbers (cells 0..27 and 28..53) so no BigInt is needed. */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.TwistCanon = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";
  const SPLIT = 28;
  function make(symCell) {
    const NS = symCell.length, lo = new Int32Array(NS * 54), hi = new Int32Array(NS * 54);
    for (let s = 0; s < NS; s++) for (let c = 0; c < 54; c++) {
      const i = symCell[s][c];
      if (i < SPLIT) lo[s * 54 + c] = 1 << i; else hi[s * 54 + c] = 1 << (i - SPLIT);
    }
    const hex = (h, l) => (h ? h.toString(16) + l.toString(16).padStart(7, "0") : l.toString(16));
    // xs[0..nx) and os[0..no) are the cell indices of the X and O marks
    function key(xs, nx, os, no, side) {
      let bxh = -1, bxl = 0, boh = 0, bol = 0;
      for (let s = 0; s < NS; s++) {
        const b = s * 54; let xl = 0, xh = 0, ol = 0, oh = 0;
        for (let k = 0; k < nx; k++) { xl |= lo[b + xs[k]]; xh |= hi[b + xs[k]]; }
        if (bxh >= 0 && (xh > bxh || (xh === bxh && xl > bxl))) continue;
        for (let k = 0; k < no; k++) { ol |= lo[b + os[k]]; oh |= hi[b + os[k]]; }
        const better = bxh < 0 || xh < bxh || (xh === bxh && (xl < bxl || (xl === bxl && (oh < boh || (oh === boh && ol < bol)))));
        if (better) { bxh = xh; bxl = xl; boh = oh; bol = ol; }
      }
      return hex(bxh, bxl) + "." + hex(boh, bol) + "." + side;
    }
    // number of distinct images of the position under the 48 symmetries (48 / size of its stabiliser)
    function orbit(xs, nx, os, no) {
      const seen = new Set();
      for (let s = 0; s < NS; s++) {
        const b = s * 54; let xl = 0, xh = 0, ol = 0, oh = 0;
        for (let k = 0; k < nx; k++) { xl |= lo[b + xs[k]]; xh |= hi[b + xs[k]]; }
        for (let k = 0; k < no; k++) { ol |= lo[b + os[k]]; oh |= hi[b + os[k]]; }
        seen.add(xh + "," + xl + "," + oh + "," + ol);
      }
      return seen.size;
    }
    return { key, orbit };
  }
  return { make };
});
