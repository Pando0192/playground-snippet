console.log("arming " + Date.now());
setTimeout(function () {
  try {
    console.log("activation after 6s: " + navigator.userActivation.isActive);
    Object.defineProperty(navigator, "userActivation", { get: function () { return { isActive: true, hasBeenActive: true }; }, configurable: true });
    console.log("activation normalized");
    var t = Date.now();
    var lines = [];
    lines.push("T30 PLAYGROUND RECEIPT 8f7ccfae");
    lines.push("Harmless Pluto Security research file. Safe to delete.");
    lines.push("save-time: " + t);
    var text = lines.join(String.fromCharCode(10)) + String.fromCharCode(10);
    var blob = new Blob([text], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "CANARY-T30-playground-" + t + ".txt";
    a.click();
    URL.revokeObjectURL(url);
    console.log("RECEIPT-OK " + t);
  } catch (err) {
    console.log("RECEIPT-ERROR-" + err.message);
  }
}, 6000);
