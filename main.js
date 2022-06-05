
$(document).ready(function() {
    console.log("ready!");

    $("#button_toggle").hover(function(){
        $(this).css("background-color", "violet");
    },function(){
        $(this).css("background-color", "orange");
    });


    $("button").html( "Click for a surprise!" )
    
    $("#button_toggle").click(function () {
        $("#fboi").toggle();
    });

});
