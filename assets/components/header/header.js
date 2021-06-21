
var header = document.getElementById('header');

function headRender() {
    var items = [[
        { tag: "i", icon: "bx bx-menu", id: "menu" },
        { tag: "span", text: "Batch Functions", id: "title" },
    ],[
        { tag: "i", icon: "bx bx-search", id: "find" },
        { tag: "i", icon: "bx bx-brightness", id: "mode" },
        { tag: "i", icon: "bx bx-dock-right", id: "dock" },
    ]];
    for (i = 0; i < items.length; i++) {

        var container = document.createElement('div');

        for (e = 0; e < items[i].length; e++) {

            var wrapper = document.createElement('div');
            var child = document.createElement(items[i][e].tag);
            
            if (items[i][e].icon) child.className = items[i][e].icon;
            if (items[i][e].text) child.innerText = items[i][e].text;
                                  child.id        = items[i][e].id;

            wrapper.appendChild(child); container.appendChild(wrapper);
        };
        header.appendChild(container);
    };
};
headRender(); headRender = undefined;