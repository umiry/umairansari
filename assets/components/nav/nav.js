
var nav = document.getElementById('nav');

function navRender() {
    var items = [
        { link: "#", title: "Home", icon: "bx bx-home" },
        { link: "#", title: "Profile", icon: "bx bx-user" },
        { link: "#", title: "DesignGallery", icon: "bx bx-briefcase" },
        { link: "#", title: "CodeExplainer", icon: "bx bx-code-curly" },
        { link: "#", title: "CodeProjects", icon: "bx bx-atom" },
        { link: "#", title: "Contact", icon: "bx bx-message-square-detail" },
        { link: "#", title: "Settings", icon: "bx bx-slider-alt" },
    ];
    for (i = 0; i < items.length; i++) {
        var link = document.createElement('a'); link.href = items[i].link; link.className = 'page';
        var icon = document.createElement('i'); icon.className = items[i].icon; link.appendChild(icon);
        var text = document.createElement('span'); text.innerText = items[i].title; icon.appendChild(text);
        nav.appendChild(link);
    };
};
navRender(); navRender = undefined;

var menu = document.getElementById('menu');
var menuState = false;

function navToggler() {
    if (menuState) {
        menu.className = 'bx bx-menu';
        header.className = 'closed';
        nav.className = 'closed';
        menuState = false;
    } else {
        menu.className = 'bx bx-x';
        header.className = 'active';
        nav.className = 'active';
        menuState = true;
    };
};
menu.addEventListener('click', navToggler);

var pages = document.querySelectorAll('.page');

function navActive() {
    for (i = 0; i < pages.length; i++) { pages[i].className = 'page' };
    this.className = 'page active';
};

for (i = 0; i < pages.length; i++) { pages[i].addEventListener('click', navActive) };