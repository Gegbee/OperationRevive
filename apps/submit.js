var story = window.location.search.substring(1);
var murderer = storylines[story]["murderer"];
var people = storylines[story]["people"];

var solution = document.getElementById("solution");

function assertEqualName() {
    var name = document.getElementById("guess").value.toLowerCase();
    if (people.includes(name) === true) {
        if (murderer === name) {
            solution.innerHTML = "Congrats! You caught the murderer. Want to play more? Go back to the home page.";
            solution.style.color = "#34eb64";
        } else {
            solution.innerHTML = "Wrong person! Make sure to think of the concepts of security and privacy.";
            solution.style.color = "#eb347a";
        }
    } else {
        solution.innerHTML = "Please write a real person and make sure it is their full name!";
        solution.style.color = "#eb347a";
    }
}