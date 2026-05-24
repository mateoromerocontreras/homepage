(function () {
  const trekToggle = document.querySelector(".trekking-toggle");

  console.log(
    "%c👋 Hey, fellow explorer!",
    "color: #2d6a4f; font-size: 14px; font-weight: bold;"
  );
  console.log(
    "%cYou found the console. Nice instincts.",
    "color: #5c5c62; font-size: 12px;"
  );
  console.log(
    "%cHint: there's a nearly invisible dot in About Me. Happy trekking.",
    "color: #6a737d; font-size: 11px; font-style: italic;"
  );

  const fakeLog = [
    { hash: "a3f91c2", msg: "feat: ship resume v2 — cleaner timeline" },
    { hash: "7b04e19", msg: "fix: mobile contact layout on narrow screens" },
    { hash: "c8120fa", msg: "docs: add certifications block" },
    { hash: "1d9e44b", msg: "chore: bump line-height for readability" },
    { hash: "e05ac73", msg: "feat(easter-egg): trekking mode — shh 🤫" },
    { hash: "9f2a118", msg: "initial commit: hello, world" },
  ];

  console.log("%c\n* git log --oneline -6", "color: #ff9a00; font-weight: bold;");
  fakeLog.forEach(function (entry) {
    console.log(
      "%c" + entry.hash + "%c " + entry.msg,
      "color: #e9c46a; font-family: monospace;",
      "color: #181820; font-family: monospace;"
    );
  });

  if (!trekToggle) return;

  trekToggle.addEventListener("click", function () {
    var on = document.body.classList.toggle("trekking-mode");
    trekToggle.setAttribute("aria-pressed", on ? "true" : "false");
    trekToggle.title = on ? "Trekking mode on" : "Toggle trekking mode";
  });

  trekToggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      trekToggle.click();
    }
  });
})();
