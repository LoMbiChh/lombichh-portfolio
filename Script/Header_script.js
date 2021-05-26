// Sottolineatura pagina corrente
for (let i = 0; i < 4; i++) {
  if (document.getElementsByClassName("navitem")[i].href == location.href) {
    document.getElementsByClassName("navitem")[i].id = "current_link";
  }
};

// Header scroll
window.onscroll = () => {
  if (window.pageYOffset > 50) {
    document.getElementsByClassName("header")[0].style.background = "#2B5ED6";
    if (window.innerWidth > 1000) {
      document.getElementsByClassName("header")[0].style.transform = "scale(0.85)";
      document.getElementsByClassName("header")[0].style.width = "118%";
      document.getElementsByClassName("header")[0].style.top = "-5px";
    }
  } else {
    if (menuOpen == false) {
      document.getElementsByClassName("header")[0].style.background = "none";
    }
    if (window.innerWidth > 1000) {
      document.getElementsByClassName("header")[0].style.transform = "scale(1)";
      document.getElementsByClassName("header")[0].style.width = "100%";
      document.getElementsByClassName("header")[0].style.top = "0";
    }
  }
};
