$(document).ready(function() {

    var tray = getUrlParam("separator") || "None";
    if(tray === "None") {
        $("input[type='radio'][name='separator'][value='no']").attr("checked", "checked");
        $("input[type='radio'][name='source'][value='Tray A']").attr("checked", "checked");
        $("input[type='radio'][name='source']").attr("disabled", "disabled");
    }
    else {
        $("input[type='radio'][name='separator'][value='yes']").attr("checked", "checked");
        $("input[type='radio'][name='source'][value='" + tray + "']").attr("checked", "checked");
    }

    $("input[type='radio'][name='separator']").change(function(e) {
        if($(this).val() === "yes") $("input[type='radio'][name='source']").removeAttr("disabled");
        else $("input[type='radio'][name='source']").attr("disabled", "disabled");
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
    var hasSeparator = $("input[type='radio'][name='separator']:checked").val();
    var separator = hasSeparator === "no" ? "None" : $("input[type='radio'][name='source']:checked").val();
    var params = "";
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for(var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if(sParameterName[0] !== "separator") {
            params += sURLVariables[i] + "&";
        }
    }
    window.location.replace("menu.html?" + params + "separator=" + separator);
}
