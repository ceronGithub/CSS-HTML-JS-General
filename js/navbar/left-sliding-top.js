const _open_button = document.querySelector(".left-open-bar");
const _close_button = document.querySelector(".left-closed-bar");
const _navbar = document.querySelector(".sliding-top-navbar");

_open_button.addEventListener("click", show_navbar);
_close_button.addEventListener("click", close_navbar);

function show_navbar(){    
    _open_button.style.setProperty("background", "transparent");
    _navbar.style.setProperty("height", "8vh");
}
function close_navbar(){    
    _navbar.style.setProperty("height", "0vh");   
}