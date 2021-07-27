function openMobileMenu() {
  var menu = document.getElementById("banner__mobile");
  menu.style.display = "block";

  var content = document.getElementById("content");
  content.style.display = "none";

  menu.focus();
}

function closeMobileMenu() {
  var menu = document.getElementById("banner__mobile");
  menu.style.display = "none";

  var content = document.getElementById("content");
  content.style.display = "block";

  content.focus();
}

window.addEventListener("DOMContentLoaded", () => {
  try {
    [...document.querySelectorAll("a[data-fathom-goal]")].forEach((a) => {
      a.addEventListener("click", (e) => {
        const goalId = e.target.getAttribute("data-fathom-goal");
        if (window.fathom) {
          window.fathom.trackGoal(goalId, 0);
        }
      });
    });
  } catch (err) {
    console.warning(
      "Hit a JavaScript programming error trying to add Fathom goal tracking."
    );
  }
});
