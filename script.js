function imgSlider(image) {
    document.querySelector('.pepsi').src = image;
}

function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header ul li a');

    function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    function setActiveClass(event) {
        removeActiveClass();
        event.target.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', setActiveClass);
    });
});
