const files = {};
const file_system = game;

var folders = [];
const display_center = document.getElementById('display_center');
const system_nav = document.getElementById('file_system');
var new_html = "<h2>File System</h2>";

createFiles(file_system);
finishFiles();

function createFiles(folder) {
    for (var file in folder) {
        if (typeof(folder[file]) === 'object') {
            folders.push(file);
            new_html += "<button class = 'file_button' onclick =" + '"openFolder(' + "'" + file + "'" + ')"' + ">> "+ file + "</button>" + "<div id = '" + file + "'>";
            createFiles(folder[file]);
            new_html += "</div>";
        } else {
            new_html += "<button class = 'file_button' onclick =" + '"openFile(' + "'" + file + "'" + ')"' + ">"+ file + ".txt</button>";
            files[file] = folder[file];
        }
    }
}

function finishFiles() {
    system_nav.innerHTML = new_html;
    for (var folder = 0; folder <folders.length; folder++) {
        openFolder(folders[folder]);
    }
}

function openFolder(folder) {
    var folder = document.getElementById(folder);
    if (folder.style.display === "none") {
        folder.style.marginLeft = 20 +'px';
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