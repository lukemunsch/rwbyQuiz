const toggleModal = () => {
    document.getElementsByClassName('modal').classlist.toggle('modal--hidden');
}

document.getElementById('show-modal').addEventListener('click', toggleModal);
document.getElementById('close-rules').addEventListener('click', toggleModal);