const sections = [
  document.getElementById("categoria-content"),
  document.getElementById("imc-content"),
  document.getElementById("fmc-content"),
  document.getElementById("horari-content"),
];
const navList = [
  document.getElementById("cat-li"),
  document.getElementById("imc-li"),
  document.getElementById("fmc-li"),
  document.getElementById("horari-li"),
];

window.addEventListener("load", setActiveSection);
window.addEventListener("scroll", setActiveSection);

function setActiveSection() {
  console.log("patates");
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 550) {
      currentSection = section.getAttribute("id");
    }
  });
  navList.forEach((li) => {
    li.classList.remove("aside-nav__active");
    if (li.classList.contains(currentSection)) {
      li.classList.add("aside-nav__active");
    }
  });
}
