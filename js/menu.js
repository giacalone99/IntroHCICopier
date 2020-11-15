$(document).ready(function() {
    
    $(".number-btn").not("#delete-num").click(function(e) {
        var numCopies = $("#num-copies").text();
        $("#num-copies").text(numCopies + e.target.text);
    });

    $("#delete-num").click(function() {
        var numCopies = $("#num-copies").text();
        if(numCopies.length > 0) {
            $("#num-copies").text(numCopies.substring(0, numCopies.length - 1));
        }
    });

    $("#print-btn").click(function() {
        if($("#num-copies").text().length > 0) {
            window.location.replace("printing.html");
        }
    });

});

function goToSetting(url) {
    window.location.replace(url + "?" + window.location.search.substring(1));
}

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
