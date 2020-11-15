$(document).ready(function() {

    var brightness = getUrlParam("brightness") || "5";
    $("#brightness-slider").val(brightness);
    $("#slider-pos-label").text(brightness);
    
    $("#brightness-slider").change(function(e) {
        $("#slider-pos-label").text($(this).val());
    });

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
    var brightness = $("#brightness-slider").val();
    var params = "";
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for(var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if(sParameterName[0] !== "brightness") {
            params += sURLVariables[i] + "&";
        }
    }
    window.location.replace("menu.html?" + params + "brightness=" + brightness);
}
