const _open_button = document.querySelector(".right-open-bar");
const _close_button = document.querySelector(".right-closed-bar");
const _navbar = document.querySelector(".right-sliding-top-navbar");

_open_button.addEventListener("click", show_navbar);
_close_button.addEventListener("click", close_navbar);

function show_navbar(){    
    _open_button.style.setProperty("background", "transparent");
    _navbar.style.setProperty("height", "8vh");
}
function close_navbar(){    
    _navbar.style.setProperty("height", "0vh");   
}