const tabsMinWidth = 1200;
const buttonMinWidth = 500;
const fileMinWidth = 600;

var tabs = true;

if (tabs === true) {
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
}
function checkResize() {
    const buttons = document.getElementsByClassName("button");
    const display_center = document.getElementById('display_center');
    const system_nav = document.getElementById('file_system');
    if (window.innerWidth < tabsMinWidth && tabs === true) {changeWidth(true);} else {changeWidth(false);}
    if (window.innerWidth < buttonMinWidth) {
        for (button = 0; button < buttons.length; button++) {buttons[button].style.width = 80 + "%";}
    } else {for (button = 0; button < buttons.length; button++) {buttons[button].style.width = "auto";}}
    if (window.innerWidth < fileMinWidth) { 
        display_center.style.width = 80 + "%";system_nav.style.width = 80 + "%";
    } else {display_center.style.width = 50 + "%";system_nav.style.width = 35 + "%";}
}
window.addEventListener("resize", checkResize);
checkResize();