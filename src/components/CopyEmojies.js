function CopyEmojies() {
    let cell = document.getElementsByClassName('image');

    for (var i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', cellClick);
    }
    function cellClick() {

        navigator.clipboard.writeText(this.innerHTML);
    }
}

export default CopyEmojies;