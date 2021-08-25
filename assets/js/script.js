function rulesModalUp(){
    let showModal = document.getElementById('rules-modal');
        showModal.removeAttribute("class", "modal--hidden");
}

function rulesModalDown(){
    let closeModal = document.getElementById('rules-modal');
        closeModal.setAttribute("class", "modal--hidden")   
}

document.getElementById('show-modal').addEventListener('click', toggleModalOn);
document.getElementById('close-rules').addEventListener('click', toggleModal);