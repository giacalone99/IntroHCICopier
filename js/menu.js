$(document).ready(function() {
    
    $(".number-btn").not("#delete-num").click(function(e) {
        var numCopies = $("#num-copies").find('script').remove().end().text();
        $("#num-copies").text(numCopies + e.target.text);
    });

    $("#delete-num").click(function() {
        var numCopies = $("#num-copies").find('script').remove().end().text();
        if(numCopies.length > 0) {
            $("#num-copies").text(numCopies.substring(0, numCopies.length - 1));
        }
    });

    $("#print-btn").click(function() {
        if($("#num-copies").text().length > 0) {
            goToSetting("printing.html");
        }
    });

});

function goToSetting(url) {
    window.location.replace(url + "?" + "numCopies=" + $("#num-copies").find('script').remove().end().text() + "&" + window.location.search.substring(1));
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

function getSidesString() {
    var sourceSides = getUrlParam("source-sides");
    var copiesSides = getUrlParam("copies-sides");
    if(sourceSides === "" || copiesSides === "") {
        return "1 to 1";
    }
    else {
        return sourceSides + " to " + copiesSides;
    }
}
