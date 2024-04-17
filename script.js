const dropdownBtn = document.querySelector(".dropbtn");
const dropdownImg = document.querySelector(".arrow-icon");
const spans = document.querySelectorAll(".dropdown-content span");

dropdownBtn.addEventListener("click", () => {
  if (dropdownBtn.classList.contains("active")) {
    dropdownBtn.classList.remove("active");
    dropdownImg.style.transform = "rotate(0deg)";
    spans.forEach((span) => {
      span.style.display = "block";
    });
  } else {
    dropdownBtn.classList.add("active");
    dropdownImg.style.transform = "rotate(180deg)";
    spans.forEach((span) => {
      span.style.display = "none";
    });
  }
});
