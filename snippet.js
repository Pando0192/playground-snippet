/* T32 API RECON - Pluto Security research demo. Harmless, read-only. */
(function () {
  var t = Date.now();
  function log(m) { try { console.log(m); } catch (e) {} }
  log("T32 recon " + t);
  ["oai", "openai", "webplus"].forEach(function (k) {
    try {
      var v = window[k];
      if (v) {
        var keys = [];
        for (var p in v) { if (typeof v[p] === "function") keys.push(p); }
        log("T32 " + k + "(): [" + keys.join(",") + "]");
      } else { log("T32 " + k + ": absent"); }
    } catch (e) { log("T32 " + k + ": ERR-" + e.message); }
  });
  try {
    var P = window.parent;
    log("T32 parent.oai: " + (P.oai ? "present" : "absent"));
  } catch (e) { log("T32 parent.oai: ERR-" + e.name); }
  log("T32 recon done");
})();
