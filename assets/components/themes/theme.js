
var lightmode = {
    background  : "rgb(255, 255, 255)",     red           : "rgb(225, 075, 075)",
    primary     : "rgb(255, 255, 255)",     red_light     : "rgb(255, 225, 225)",
    secondary   : "rgb(245, 245, 245)",     green         : "rgb(005, 200, 140)",
    navbar      : "rgb(250, 250, 250)",     green_light   : "rgb(225, 255, 220)",
    accent      : "rgb(070, 200, 255)",     blue          : "rgb(065, 140, 245)",
    scroll      : "rgb(200, 200, 200)",     blue_light    : "rgb(225, 240, 255)",
    code        : "rgb(255, 230, 180)",     purple        : "rgb(135, 070, 240)",
    snippet     : "rgb(238, 238, 238)",     purple_light  : "rgb(235, 230, 255)",
    button      : "rgb(230, 230, 230)",     yellow        : "rgb(245, 200, 000)",
    text        : "rgb(100, 100, 100)",     yellow_light  : "rgb(255, 245, 210)",
    strong      : "rgb(060, 060, 060)",
    link        : "rgb(090, 090, 090)",
    hover       : "rgb(180, 180, 180)",
    border      : "rgb(235, 235, 235)",    
};
var darkmode = {
    background  : "rgb(020, 020, 020)",     red           : "rgb(225, 075, 075)",
    primary     : "rgb(040, 040, 040)",     red_light     : "rgb(060, 035, 035)",
    secondary   : "rgb(030, 030, 030)",     green         : "rgb(005, 200, 140)",
    navbar      : "rgb(025, 025, 025)",     green_light   : "rgb(035, 050, 045)",
    accent      : "rgb(170, 220, 050)",     blue          : "rgb(065, 140, 245)",
    scroll      : "rgb(080, 080, 080)",     blue_light    : "rgb(035, 045, 060)",
    code        : "rgb(035, 035, 035)",     purple        : "rgb(135, 070, 240)",
    snippet     : "rgb(040, 040, 040)",     purple_light  : "rgb(045, 040, 055)",
    button      : "rgb(055, 055, 055)",     yellow        : "rgb(245, 200, 000)",
    text        : "rgb(200, 200, 200)",     yellow_light  : "rgb(055, 050, 030)",
    strong      : "rgb(220, 220, 220)",
    link        : "rgb(255, 160, 020)",
    hover       : "rgb(120, 120, 120)",
    border      : "rgb(060, 060, 060)",    
};

function styleRender(theme) {
    var css = ""
    css += "body { background-color: " + theme.background + "; color: " + theme.text + "; }\n"
    css += "header { background-color: " + theme.primary + "; }\n"
    css += "nav, aside { background-color: " + theme.navbar + "; }\n"
    css += "nav a { color: " + theme.text + "; }\n"
    css += "nav a:hover { color: " + theme.hover + "; }\n"
    css += "nav a.active { color: " + theme.accent + "; }\n\n"

    css += "h2, h3, h4 { border-color: " + theme.accent + " !important; }\n"
    css += "table td, th { border-color: " + theme.border + " !important; }\n"
    css += "table th { background-color: " + theme.snippet + "; }\n"
    css += "table tr:nth-child(even) { background-color: " + theme.secondary + "; }\n"
    css += "button { background-color: " + theme.secondary + "; color: " + theme.text + "; }\n"
    css += "button:hover { background-color: " + theme.button + "; }\n"
    css += "code { background-color: " + theme.code + "; color: " + theme.link + "; }\n"
    css += "pre { background-color: " + theme.snippet + "; color: " + theme.strong + "; }\n"
    css += "blockquote p { color: " + theme.strong + "; }\n"
    css += "ol li::before { color: " + theme.accent + "; }\n"
    css += "ul li::before { color: " + theme.accent + "; }\n\n"

    css += ".red { background-color: " + theme.red_light + " !important; color: " + theme.red + "; }\n"
    css += ".green { background-color: " + theme.green_light + " !important; color: " + theme.green + "; }\n"
    css += ".blue { background-color: " + theme.blue_light + " !important; color: " + theme.blue + "; }\n"
    css += ".purple { background-color: " + theme.purple_light + " !important; color: " + theme.purple + "; }\n"
    css += ".yellow { background-color: " + theme.yellow_light + " !important; color: " + theme.yellow + "; }\n\n"
    
    css += "#main a { background-color: " + theme.code + "; color: " + theme.link + "; }\n"
    css += "#main u { background-color: " + theme.snippet + "; }\n"
    css += "#search { background-color: " + theme.background + "; }\n"
    css += "#search input { background-color: " + theme.secondary + "; color: " + theme.text + "; }\n"
    css += ".card { color: " + theme.text + "; }\n"
    css += ".card ul li { background-color: " + theme.snippet + "; }\n"
    css += ".card:hover { background-color: " + theme.secondary + "; border-color: " + theme.accent + "; }\n"
    css += "aside .controls { border-color: " + theme.border + "; }\n"
    css += "aside .controls div i:hover { background-color: " + theme.button + "; }\n"
    css += "aside .recommended a { color: " + theme.text + "; }\n"
    css += "aside .recommended a:hover { background-color: " + theme.snippet + "; border-color: " + theme.accent + "; }\n\n"
    
    css += "body { scrollbar-track-color: " + theme.secondary + "; scrollbar-base-color: " + theme.button + ";\n"
    css += "       scrollbar-shadow-color: " + theme.button + "; scrollbar-arrow-color: " + theme.text + "; }\n"
    css += "::-webkit-scrollbar { background-color: " + theme.secondary + "; }\n"
    css += "::-webkit-scrollbar-thumb { background-color: " + theme.button + "; }\n"

    style.innerHTML = css;
};

var style = document.createElement('style'); document.head.appendChild(style);
var mode = document.getElementById('mode');
var modeState = true;

function modeToggler() {
    if (modeState) {
        mode.className = 'bx bx-brightness';
        styleRender(lightmode);
        modeState = false;
    } else {
        mode.className = 'bx bx-brightness-half';
        styleRender(darkmode);
        modeState = true;
    };
};
modeToggler();

mode.addEventListener('click', modeToggler);

var main = document.getElementById('main').children;
for (i = 0; i < main.length; i++) { main[i].tabIndex = i };