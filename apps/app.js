const minWidth = 1200;

openTab('overview');
function openTab(name) {
    var tabcontent = document.getElementsByClassName("tab_content");
    for (tab = 0; tab < tabcontent.length; tab++) {
        tabcontent[tab].style.visibility = "hidden";
        tabcontent[tab].style.display = "none";
    }
    document.getElementById(name).style.visibility = "visible";
    document.getElementById(name).style.display = "inline-block";
}

function changeWidth(percentage) {
    var overview = document.getElementById('overview');
    var files = document.getElementById('files');
    var notes = document.getElementById('notes');
    var conclusion = document.getElementById('conclusion');
    const widths = [overview, files, notes, conclusion];
    for (width = 0; width < widths.length; width++) {
        widths[width].style.width = percentage + "%";
    }
}

function checkResize() {
    if (window.innerWidth < minWidth) {
        changeWidth(80);
    } else {
        changeWidth(60);
    }
}
window.addEventListener("resize", checkResize);
checkResize();