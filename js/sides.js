$(document).ready(function() {

    var sourceSides = getUrlParam("source-sides") || "1";
    $("input[type='radio'][name='source-sides'][value='" + sourceSides + "']").attr("checked", "checked");
    var copiesSides = getUrlParam("copies-sides") || "1";
    $("input[type='radio'][name='copies-sides'][value='" + copiesSides + "']").attr("checked", "checked");

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
    var sourceSides = $("input[type='radio'][name='source-sides']:checked").val();
    var copiesSides = $("input[type='radio'][name='copies-sides']:checked").val();
    var params = "";
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for(var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if(sParameterName[0] !== "source-sides" && sParameterName[0] !== "copies-sides") {
            params += sURLVariables[i] + "&";
        }
    }
    window.location.replace("menu.html?" + params + "source-sides=" + sourceSides + "&copies-sides=" + copiesSides);
}
