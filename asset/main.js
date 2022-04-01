const showMenu = (e, t) => { const n = document.getElementById(e), o = document.getElementById(t); n && o && n.addEventListener("click", () => { o.classList.toggle("show-menu") }) }; showMenu("nav-toggle", "nav-menu"); const navLink = document.querySelectorAll(".nav__link"); function linkAction() { document.getElementById("nav-menu").classList.remove("show-menu") } navLink.forEach(e => e.addEventListener("click", linkAction)); const sections = document.querySelectorAll("section[id]"); function scrollActive() { const e = window.pageYOffset; sections.forEach(t => { const n = t.offsetHeight, o = t.offsetTop - 50; sectionId = t.getAttribute("id"), e > o && e <= o + n ? document.querySelector("nav__menu a[href*=" + sectionId + "]").classList.add("active-link") : document.querySelector("nav__menu a[href*=" + sectionId + "]").classList.remove("active-link") }) } function scrollTop() { const e = document.getElementById("scroll-top"); this.scrollY >= 200 ? e.classList.add("show-scroll") : e.classList.remove("show-scroll") } window.addEventListener("scroll", scrollActive), window.addEventListener("scroll", scrollTop); const themeButton = document.getElementById("theme-button"), darkTheme = "dark-theme", iconTheme = "fa-sun", selectedTheme = localStorage.getItem("selected-theme"), selectedIcon = localStorage.getItem("selected-icon"), getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light", getCurrentIcon = () => themeButton.classList.contains("fa-sun") ? "fa-moon" : "fa-sun";

function scaleCv() {
    document.body.classList.add('scale-cv');
}

function removeScale() {
    document.body.classList.remove('scale-cv');
}

let areaCv = document.getElementById('area-cv');

let resumeButton = document.getElementById('resume-button');

var opt = {
    margin: 0,
    filename: 'cv-spa.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' }
};

function generateResume() {
    html2pdf(areaCv, opt);
}

resumeButton.addEventListener('click', () => {
    scaleCv();
})

generateResume()

setTimeout(removeScale, 5000);