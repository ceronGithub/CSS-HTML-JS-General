const _open_button = document.querySelector("#fa-bars-id");
const _sliding_card = document.querySelector(".sliding-card");
 _open_button.addEventListener("click", show_navbar);

function show_navbar(){       
    _open_button.classList.toggle('fa-active');
    _sliding_card.classList.toggle('expand-sliding-card');
}