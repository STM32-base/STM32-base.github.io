var menu = null;

function onClick () {
    if (!menu) {
        return;
    }

    menu.classList.toggle('site-navigation-visible');
}

(function(document) {
    var hamburger = document.getElementById('hamburger');
    menu = document.getElementById('main-menu');
    hamburger.addEventListener('click', onClick);
})(document);
