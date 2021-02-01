const over_text = document.getElementById('over_text');
const over_title = document.getElementById('over_title');
const page_title = document.getElementById('page_title');
const text = "In 1997, Royce Brown was found left for dead in a back alley. He was brought to the hospital, but despite efforts died 32 minutes later.";
const title = "The 1997 Murder of Royce Brown"
over_title.innerHTML = "> " + title;
over_text.innerHTML = text;
page_title.innerHTML = "Operation Revive: " + title;