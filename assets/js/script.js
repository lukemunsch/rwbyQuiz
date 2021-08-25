function modalChange(){
    let modDown = document.getElementById('rules-modal');
    if(this.getAttribute("class" === "modal--hidden")){
        modDown.removeAttribute("class", "modal--hidden");
    } else {
        modDown.setAttribute("class", "modal--hidden");
    }
}
