var story = window.location.search.substring(1);
var title = storylines[story]["title"];
var text = storylines[story]["description"];

const over_text = document.getElementById('over_text');
const over_title = document.getElementById('over_title');
const page_title = document.getElementById('page_title');
over_title.innerHTML = "> " + title;
over_text.innerHTML = text;
page_title.innerHTML = "Operation Revive: " + title;