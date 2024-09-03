const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");
const main = document.querySelector("main");


function toggleMenu() {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("active");
  
}


toggle.addEventListener("click", toggleMenu);

document.querySelectorAll(".navLink").forEach(link => {
  link.addEventListener("click", toggleMenu);
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navLink");


const iconPaths = {
  home: {
    default: 'assets/images/icons/header-icon01.svg',
    active: 'assets/images/icons/header-icon01-active.svg'
  },
  funcionamento: {
    default: 'assets/images/icons/header-icon02.svg',
    active: 'assets/images/icons/header-icon02-active.svg'
  },
  estacoesTech: {
    default: 'assets/images/icons/header-icon03.svg',
    active: 'assets/images/icons/header-icon03-active.svg'
  },
  cadastro: {
    default: 'assets/images/icons/header-icon04.svg',
    active: 'assets/images/icons/header-icon04-active.svg'
  }
};

function changeActiveNav() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {} 

 
  navLinks.forEach(link => {
    link.classList.remove("active");
    const icon = link.querySelector(".navIcon");
    if (icon) {
      const iconKey = icon.id.replace("icon", "").toLowerCase();
      if (iconPaths[iconKey]) {
        icon.src = iconPaths[iconKey].default;
      }
    }
  });

  const activeLink = navLinks[index];
  if (activeLink) {
    activeLink.classList.add("active");
    const activeIcon = activeLink.querySelector(".navIcon");
    if (activeIcon) {
      const activeIconKey = activeIcon.id.replace("icon", "").toLowerCase();
      if (iconPaths[activeIconKey]) {
        activeIcon.src = iconPaths[activeIconKey].active;
      }
    }
  }
}


window.addEventListener("scroll", changeActiveNav);
window.addEventListener("load", changeActiveNav);
