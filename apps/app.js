const tabsMinWidth = 1200;
const buttonMinWidth = 500;

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

function changeWidth(in_width) {
    var overview = document.getElementById('overview');
    var files = document.getElementById('files');
    var notes = document.getElementById('notes');
    var conclusion = document.getElementById('conclusion');
    const widths = [overview, files, notes, conclusion];
    if (in_width === true) {
        for (width = 0; width < widths.length; width++) {
            widths[width].style.width = 80 + "%";
        }
    } else {
        for (width = 0; width < widths.length; width++) {
            widths[width].style.width = 60 + "%";
        }
    }
}

function checkResize() {
    const buttons = document.getElementsByClassName("button");
    if (window.innerWidth < tabsMinWidth) {
        changeWidth(true);
    } else {
        changeWidth(false);
    }
    if (window.innerWidth < buttonMinWidth) {
        for (button = 0; button < buttons.length; button++) {
            buttons[button].style.width = 80 + "%";
        }
    } else {
        for (button = 0; button < buttons.length; button++) {
            buttons[button].style.width = "auto";
        }
    }
}
window.addEventListener("resize", checkResize);
checkResize();