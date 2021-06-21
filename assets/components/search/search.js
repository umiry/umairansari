var find = document.getElementById('find');
var search = document.getElementById('search');
var searchbox = document.getElementById('searchbox');
var searchState = false;

function searchToggler() {
    if (searchState) {
        find.className = 'bx bx-search';
        search.className = 'closed';
        searchState = false;
    } else {
        find.className = 'bx bx-x';
        search.className = 'active';
        searchState = true;
    }
}
find.addEventListener('click', searchToggler);

searchbox.addEventListener('change', function() {
    var keywords = searchbox.value.split(' ');

    if (keywords[0] !== "") {
        var regex = new RegExp(keywords.join("|"), 'gi');

        for (i = 0; i < database.length; i++) {

            if (String(database[i].tags).search(regex) > 0) {

                var card = document.createElement('a'); card.className = 'card'; card.href = '#';
                var title = document.createElement('h5'); title.innerText = database[i].title;
                var description = document.createElement('p'); description.innerText = database[i].description;
                var tags = document.createElement('ul');

                for (e = 0; e < database[i].tags; e++) {
                    var items = document.createElement('li'); items.innerText = database[i].tags[e];

                    if (database[i].tags[0] == "projects") items.className = 'blue';
                    if (database[i].tags[0] == "course") items.className = 'green';

                    tags.appendChild(items);
                }
                card.appendChild(title); card.appendChild(description); card.appendChild(tags); search.appendChild(card);
            };
        }
    }
})