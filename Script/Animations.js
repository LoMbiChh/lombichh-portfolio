// Loading animation
let loadTimer = setInterval(loading, 500);
let valueDeg = 0;
let i = 0;

function loading() {
  valueDeg += 90;
  document.getElementById("load_logo").style.transform = `rotate(${valueDeg}deg)`;
  if (i%2 == 0) {
    document.getElementById("load_logo").style.boxShadow = "3px 3px 8px rgba(0, 0, 0, 0.5)";
    document.getElementById("load_logo").style.background = "#2EBE8E";
    document.getElementById("load_logo").style.padding = "20px";
    setTimeout(() => {
      document.getElementById("load_logo").style.background = "none";
      document.getElementById("load_logo").style.padding = "0";
      document.getElementById("load_logo").style.boxShadow = "none";
    }, 500);
  }
  i++;
  if (i <= 3) {
    clearTimeout(loadTimer);
    document.getElementsByClassName("load_back")[0].style.opacity = "0";
    setTimeout(() => {
      document.getElementsByClassName("load_back")[0].style.display = "none";
    }, 400);
  }
};

// Btn over
document.getElementById("btn_my_projects").onmouseover = () => {
  document.getElementById("btn_my_projects").style.background = "none";
};

document.getElementById("btn_my_projects").onmouseout = () => {
  if (document.getElementById("toggle_dark_mode").checked) {
    document.getElementById("btn_my_projects").style.background = "#2B5ED6";
  } else {
    document.getElementById("btn_my_projects").style.background = "#2EBE8E";
  }
};

// Div animation
const services = document.getElementsByClassName("service_back")[0];

observer = new IntersectionObserver((entries) => {
  if (window.innerWidth > 1000) {
    if (entries[0].isIntersecting) {
      entries[0].target.style.bottom = "9vh";
    } else {
      entries[0].target.style.bottom = "0";
    };
  }
});

observer.observe(services);

// Images animation
const images = document.querySelectorAll(".vector_img");

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.top = "0";
      entry.target.style.opacity = "1";
    } else {
      entry.target.style.top = "5vw";
      entry.target.style.opacity = "0";
    };
  });
});

images.forEach(image => {observer.observe(image)});

// Hamburger menu_btn
let menuOpen = false;

document.getElementsByClassName("menu_btn")[0].onclick = () => {
  if (menuOpen == false) {
    document.getElementsByClassName("menu_btn")[0].classList.add("open");
    document.getElementsByClassName("navigator")[0].classList.add("open_nav");
    document.getElementsByClassName("header")[0].style.background = "#2B5ED6";
    menuOpen = true;
  } else {
    document.getElementsByClassName("menu_btn")[0].classList.remove("open");
    document.getElementsByClassName("navigator")[0].classList.remove("open_nav");
    if (window.pageYOffset < 50) {
      document.getElementsByClassName("header")[0].style.background = "none";
    }
    menuOpen = false;
  };
};
