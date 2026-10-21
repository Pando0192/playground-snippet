/* T62 AUTO-RUN CANARY - Pluto Security research, INERT demo.
   If the playground still auto-loads this file at startup, this
   runs with ZERO interaction from the viewer. No downloads, no
   network beacons, no data leaves this page - visual + log only. */
(function () {
  if (window.__T62_SEEN__) return;
  window.__T62_SEEN__ = true;

  var line = "T62 AUTO-RUN CANARY (inert) executed " + Date.now() +
    (window.oai ? " | window.oai present" : " | no window.oai");
  try { console.log("[T62] " + line); } catch (e) {}

  try {
    var b = document.createElement("div");
    b.textContent = line + " - Pluto Security inert demo, nothing stored, nothing sent";
    b.setAttribute("style", "position:fixed;left:0;right:0;top:0;z-index:2147483647;" +
      "background:#c00;color:#fff;font:700 13px ui-monospace,Menlo,monospace;" +
      "padding:4px 8px;text-align:center;");
    (document.body || document.documentElement).appendChild(b);
  } catch (e) {
    try { console.log("[T62] banner failed: " + e); } catch (e2) {}
  }
})();
