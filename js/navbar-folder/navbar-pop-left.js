const _open_button = document.querySelector("#fa-bars-active");
const _close_button = document.querySelector("#fa-bars-not-active");
const _navbar_sliding = document.querySelector(".navbar-sliding");

_open_button.addEventListener("click", show_navbar);
_close_button.addEventListener("click", hide_navbar);

function show_navbar(){      
    // alert("working");  
    _close_button.classList.toggle('fa-color-active');  
    _navbar_sliding.classList.remove('unexpand-navbar');
    _navbar_sliding.classList.toggle('expand-navbar');
}

function hide_navbar(){      
    // alert("working");    
    _close_button.classList.remove('fa-color-active');   
    _navbar_sliding.classList.remove('expand-navbar');
    _navbar_sliding.classList.toggle('unexpand-navbar');
}