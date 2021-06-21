
{ // Rendering Control Pannel :: 
var pannel = document.getElementById('pannel');

function dockRender() {
    var items = [{
        title: "Brightness",
        icons: [{ id: "lightplus", class: "bx bx-plus" },{ id: "lightminus", class: "bx bx-minus" }],
    },{
        title: "Scale",
        icons: [{ id: "scaleplus", class: "bx bx-plus" },{ id: "scaleminus", class: "bx bx-minus" }],
    },{
        title: "Nighteye",
        icons: [{ id: "nighteye", class: "bx bx-show-alt"}],
    }];
    var container = document.createElement('div'); container.className = 'controls';
    
    for (i = 0; i < items.length; i++) {

        var wrapper = document.createElement('div');
        var group   = document.createElement('span');
        var title   = document.createElement('p'); title.innerText = items[i].title; wrapper.appendChild(title);

        for (e = 0; e < items[i].icons.length; e++) {
            var icon            = document.createElement('i');
                icon.id         = items[i].icons[e].id;
                icon.className  = items[i].icons[e].class;

            group.appendChild(icon); wrapper.appendChild(group);
        };
        container.appendChild(wrapper);
    };
    pannel.appendChild(container);
};
dockRender(); dockRender = undefined;
};

{ // Rendering Recommended Contents :: 
var recommended = document.createElement('div'); recommended.className = 'recommended';

function recommendRender(content) {
    var heading = document.createElement('b'); heading.innerText = "Related " + content; recommended.appendChild(heading);
    var tag     = content.toLowerCase();

    for (i = 0; i < database.length; i++) {

        if (database[i].tags[0] !== tag) continue;

        if (relation.test(String(database[i].tags))) {
            var link = document.createElement('a'); link.innerText = database[i].title; link.href = database[i].link; link.tabIndex = -1;
            recommended.appendChild(link);
        };
    };
};
};

{ // Toggler for Control Pannel :: 
var dock = document.getElementById('dock');
var dockState = false;

function dockToggler() {
    if (dockState) {
        dock.className = 'bx bx-dock-right';
        pannel.className = 'closed';
        dockState = false;
    } else {
        dock.className = 'bx bxs-dock-right';
        pannel.className = 'active';
        dockState = true;
    };
};
dock.addEventListener('click', dockToggler);
};

{ // Settings for Control Pannel :: 
var overlay = document.createElement('div'); overlay.id = 'brightness'; document.body.appendChild(overlay);
var overlay = document.createElement('div'); overlay.id = 'temperature'; document.body.appendChild(overlay);
overlay = undefined;

// Brightness Controls ::
var lightvalue = 0;
var lightplus = document.getElementById('lightplus');
var lightminus = document.getElementById('lightminus');
var light = document.getElementById('brightness').style;

function _lightplus() {
    if (lightvalue > 0) { lightvalue -= 10; light.backgroundColor = "rgba(0, 0, 0, " + (lightvalue/100) + ")" };
};
lightplus.addEventListener('click', _lightplus);

function _lightminus() {
    if (lightvalue < 70) { lightvalue += 10; light.backgroundColor = "rgba(0, 0, 0, " + (lightvalue/100) + ")" };
};
lightminus.addEventListener('click', _lightminus);

// Scale Controls ::
var scalevalue = 16;
var scaleplus = document.getElementById('scaleplus');
var scaleminus = document.getElementById('scaleminus');
var scale = document.documentElement.style;

function _scaleplus() {
    if (scalevalue < 30) { scalevalue += 2; scale.fontSize = scalevalue + "px" };
};
scaleplus.addEventListener('click', _scaleplus);

function _scaleminus() {
    if (scalevalue > 12) { scalevalue -= 2; scale.fontSize = scalevalue + "px" };
};
scaleminus.addEventListener('click', _scaleminus);

// Nighteye Controls ::
var nighteye = document.getElementById('nighteye');
var night = document.getElementById('temperature').style
var nighteyeState = false;

function nightToggler() {
    if (nighteyeState) {
        nighteye.className = 'bx bx-show-alt';
        night.backgroundColor = "rgba(255, 145, 0, 0)";
        nighteyeState = false;
    } else {
        nighteye.className = 'bx bx-low-vision';
        night.backgroundColor = "rgba(255, 145, 0, .2)";
        nighteyeState = true;
    };
};
nighteye.addEventListener('click', nightToggler);
};