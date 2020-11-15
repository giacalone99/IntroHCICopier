$(document).ready(function() {

    var tray = getUrlParam("paper") || "Tray A";
    $("input[type='radio'][name='source'][value='" + tray + "']").attr("checked", "checked");

});

function getUrlParam(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for(var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if(sParameterName[0] == sParam) {
            return sParameterName[1].replace("%20", " ");
        }
    }
    return "";
}

function goToMenu() {
    var checkedTray = $("input[type='radio'][name='source']:checked").val();
    var params = "";
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for(var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if(sParameterName[0] !== "paper") {
            params += sURLVariables[i] + "&";
        }
    }
    window.location.replace("menu.html?" + params + "paper=" + checkedTray);
}
