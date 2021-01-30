var files = {
    "name" : "The victim of the murder."
}




function openFolder(folder) {
    var folder = document.getElementById(folder);
    if (folder.style.display === "none") {
        folder.style.display = "block";
    } else {
        folder.style.display = "none";
    }
}
function openFile(file) {
    var file_text = files[file];
}