
function mediaRender() {
    var viewer = document.createElement('div'); viewer.id = 'media_viewer';
        document.body.appendChild(viewer);
    var closer = document.createElement('i'); closer.id = 'media_close'; closer.className = 'bx bxs-x-circle';
        document.body.appendChild(closer);
}
mediaRender(); mediaRender = undefined;

var viewer = document.getElementById('media_viewer');
var closer = document.getElementById('media_close');
var media = document.getElementsByTagName('u');

function mediaViewer() {
    var content = document.createElement(this.dataset.type);
    content.src = this.dataset.link;

    viewer.appendChild(content);
    viewer.style.display = 'flex';
    closer.style.display = 'block';
};
function mediaClose() {
    viewer.removeChild(viewer.firstChild);
    viewer.style.display = 'none';
    closer.style.display = 'none';
};

for (i = 0; i < media.length; i++) {
    media[i].addEventListener('click', mediaViewer);
};

closer.addEventListener('click', mediaClose);