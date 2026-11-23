// Run: bun test_canon.js   (or node test_canon.js). Needs sym.json; data.json is used when present.
const fs = require("fs"), path = require("path");
const Canon = require("./canon.js");
const SYM = JSON.parse(fs.readFileSync(path.join(__dirname, "sym.json"), "utf8"));
const C = Canon.make(SYM.symCell);
let seed = 12345; const rnd = (n) => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed % n; };
let fails = 0; const check = (ok, msg) => { if (!ok) { fails++; console.log("FAIL", msg); } };

// 1. the 48 symmetry maps are distinct permutations of the 54 cells
const perms = new Set(SYM.symCell.map((p) => p.join(",")));
check(SYM.symCell.length === 48 && perms.size === 48, "48 distinct symmetries");
SYM.symCell.forEach((p, s) => check(new Set(p).size === 54, "symmetry " + s + " is a permutation"));

// 2. key invariance: a random position and its image under a random symmetry have the same key
function randomPos() {
  const k = rnd(26), cells = Array.from({ length: 54 }, (_, i) => i);
  for (let i = 53; i > 0; i--) { const j = rnd(i + 1); [cells[i], cells[j]] = [cells[j], cells[i]]; }
  const xs = [], os = []; for (let i = 0; i < k; i++) (i % 2 ? os : xs).push(cells[i]);
  return { xs, os };
}
let n = 0;
for (let t = 0; t < 200; t++) {
  const { xs, os } = randomPos(), side = rnd(2), k0 = C.key(xs, xs.length, os, os.length, side);
  for (let r = 0; r < 6; r++) {
    const s = rnd(48), xi = xs.map((c) => SYM.symCell[s][c]), oi = os.map((c) => SYM.symCell[s][c]);
    check(C.key(xi, xi.length, oi, oi.length, side) === k0, "invariance pos " + t + " sym " + s); n++;
  }
  check(C.orbit(xs, xs.length, os, os.length) * (48 / C.orbit(xs, xs.length, os, os.length)) === 48, "orbit divides 48");
  check(48 % C.orbit(xs, xs.length, os, os.length) === 0, "orbit size divides 48");
}
console.log("invariance: " + n + " transformed positions compared with their originals");
check(C.key([], 0, [], 0, 0) === "0.0.0", "empty board key is 0.0.0");

// 3. against engine data: every child key listed under a node must be reached by some legal move from that node
const dp = path.join(__dirname, "data.json");
if (fs.existsSync(dp)) {
  const D = JSON.parse(fs.readFileSync(dp, "utf8")), keys = Object.keys(D.nodes);
  const bits = (hexStr) => { let v = BigInt("0x" + hexStr), out = []; for (let c = 0; c < 54; c++) if ((v >> BigInt(c)) & 1n) out.push(c); return out; };
  let checked = 0, missing = 0, lists = 0;
  for (let t = 0; t < Math.min(400, keys.length); t++) {
    const key = keys[rnd(keys.length)], node = D.nodes[key]; if (!node[4].length) continue;
    const [xh, oh, sd] = key.split("."), X = bits(xh), O = bits(oh), mover = +sd, used = new Set(X.concat(O));
    const reach = new Set();
    for (let tw = 0; tw < 12; tw++) {
      const xt = X.map((c) => SYM.perm[tw][c]), ot = O.map((c) => SYM.perm[tw][c]);
      for (let c = 0; c < 54; c++) {
        if (used.has(c)) continue; const p = SYM.perm[tw][c];
        const xs = mover === 0 ? xt.concat([p]) : xt, os = mover === 1 ? ot.concat([p]) : ot;
        reach.add(C.key(xs, xs.length, os, os.length, 1 - mover));
      }
    }
    lists++; for (const ce of node[4]) { const ck = Array.isArray(ce) ? ce[0] : ce; checked++; if (!reach.has(ck)) { missing++; if (missing < 5) console.log("child not reached:", key, "->", ck); } }
  }
  check(missing === 0, missing + " of " + checked + " listed child keys not produced by the JS canonicaliser");
  check(D.root === "0.0.0", "root key is 0.0.0 (is " + D.root + ")");
  console.log("data: " + lists + " random nodes, " + checked + " child keys checked, " + missing + " missing; nodes in file " + keys.length);
} else console.log("data.json not present: skipped the engine-data check");
console.log(fails ? fails + " FAILURES" : "ALL PASSED"); process.exit(fails ? 1 : 0);
