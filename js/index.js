var numCirclesFilled = 0;

$(document).ready(function() {
    
    $(".number-btn").not("#delete-num").click(function() {
        $(".dot:eq(" + numCirclesFilled + ")").css("background-color", "#000");
        numCirclesFilled++;
        if(numCirclesFilled === 4) {
            window.location.replace("menu.html");
        }
    });

    $("#delete-num").click(function() {
        if(numCirclesFilled > 0) {
            numCirclesFilled--;
            $(".dot:eq(" + numCirclesFilled + ")").css("background-color", "#fff");
        }
    });

});
