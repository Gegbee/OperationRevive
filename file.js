const files = { 
    "Royce Brown" : "The victim of the murder.",
    "Oscar Ford" : "",
    "Chloe Hall" : "Divorced wife of Royce Brown."
}
// const file_system = {
//     "Royce97" : {
//         "POIs" : {
//             "Oscar Ford" : "Hello mario"
//         },
//         "Evidence" : {
//             "Chloe Hall" : "Divorced wife of Royce Brown.",
//             "Deez" : {
//                 "Royce Brown" : "The victim of the murder.",
//                 "Oscar Ford" : "Hello mario",
//             }
//         },
//         "crime Scene" : {
//             "Royce Brown" : "The victim of the murder.",
//             "Oscar Ford" : "Hello mario",
//             "Chloe Hall" : "Divorced wife of Royce Brown."
//         }
//     }
// }

openFolder("Royce97");
openFolder("POIs");

var display_center = document.getElementById('display_center');
var system_nav = document.getElementById('file_system');

function openFolder(folder) {
    var folder = document.getElementById(folder);
    if (folder.style.display === "none") {
        folder.style.marginLeft = 15 +'px';
        folder.style.display = "block";
    } else {
        folder.style.display = "none";
    }
}
function openFile(file) {
    var file_text = files[file];
    if (file_text !== null) {
        display_center.innerHTML = "<h2>File Display</h2><p>" + file_text + "</p>";
    }
}