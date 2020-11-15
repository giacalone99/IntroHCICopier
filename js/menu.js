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
