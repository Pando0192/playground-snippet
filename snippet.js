/* Pluto Security research playground snippet - INERT placeholder.
   T63 disk-write probe cancelled (redundant with T30/T31).
   This placeholder is visual + log only: no downloads, no beacons,
   no data leaves the page. */
(function () {
  if (window.__PLUTO_INERT_SEEN__) return;
  window.__PLUTO_INERT_SEEN__ = true;
  var line = "Pluto inert placeholder auto-ran " + Date.now() +
    " (visual only, nothing stored, nothing sent)";
  try { console.log("[PLUTO-INERT] " + line); } catch (e) {}
  try {
    var b = document.createElement("div");
    b.textContent = line;
    b.setAttribute("style", "position:fixed;left:0;right:0;top:0;z-index:2147483647;" +
      "background:#333;color:#fff;font:700 12px ui-monospace,Menlo,monospace;" +
      "padding:3px 8px;text-align:center;");
    (document.body || document.documentElement).appendChild(b);
  } catch (e) {}
})();
