const dropdownBtn = document.querySelector(".dropbtn");
const dropdownImg = document.querySelector(".arrow-icon");

console.log(dropdownBtn, dropdownImg);

dropdownBtn.addEventListener("click", () => {
  if (dropdownBtn.classList.contains("active")) {
    dropdownBtn.classList.remove("active");
    dropdownImg.style.transform = "rotate(0deg)";
  } else {
    dropdownBtn.classList.add("active");
    dropdownImg.style.transform = "rotate(180deg)";
  }
});
