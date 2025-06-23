function waitForButtonAndBind() {
  const menuBtn = document.getElementById("vertical-menu-btn");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      document.body.classList.add("pace-done", "sidebar-enable");
    });
  } else {
    // Try again after a short delay
    setTimeout(waitForButtonAndBind, 300);
  }
}

document.addEventListener("DOMContentLoaded", waitForButtonAndBind);
