const murderer = "Scott Anderson";
const people = ["Scott Anderson", "Oscar Ford", "Chloe Hall", "Royce Brown"];

var solution = document.getElementById("solution");

function assertEqualName() {
    var name = document.getElementById("guess").value;
    if (people.includes(name) === true) {
        if (murderer === name) {
            solution.innerHTML = "Congrats! You caught the murderer. Interested in learning more? Check out my github here.";
        } else {
            solution.innerHTML = "Wrong person! Make sure to think of the concepts of security and privacy.";
        }
    } else {
        solution.innerHTML = "Please write a real person and make sure it is their full name!";
    }
}