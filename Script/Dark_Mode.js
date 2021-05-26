document.getElementById("toggle_dark_mode").addEventListener("click", darkMode);

function darkMode() {
  if (document.getElementById("toggle_dark_mode").checked) {
    if (window.innerWidth < 1000) {
      document.getElementsByClassName("main_page")[0].style.backgroundImage = "url(Images/Background/Mobile_background_dark.jpg)";
    } else {
      document.getElementsByClassName("main_page")[0].style.backgroundImage = "url(Images/Background/Background_dark.jpg)";
    }
    document.getElementById("btn_my_projects").style.background = "#2B5ED6";
    document.getElementById("btn_my_projects").style.borderColor = "#2B5ED6";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    if (window.innerWidth < 1000) {
      document.getElementsByClassName("main_page")[0].style.backgroundImage = "url(Images/Background/Mobile_background_light.jpg)";
    } else {
      document.getElementsByClassName("main_page")[0].style.backgroundImage = "url(Images/Background/Background_light.jpg)";
    }
    document.getElementById("btn_my_projects").style.background = "#2EBE8E";
    document.getElementById("btn_my_projects").style.borderColor = "#2EBE8E";
    document.querySelector("body").style.backgroundColor = "white";
  };
};
