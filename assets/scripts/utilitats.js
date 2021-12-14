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
window.onscroll = () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });
  navList.forEach((li) => {
    li.classList.remove("aside-nav__active");
    if (li.classList.contains(currentSection)) {
      li.classList.add("aside-nav__active");
    }
  });
};
