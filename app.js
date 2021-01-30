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

