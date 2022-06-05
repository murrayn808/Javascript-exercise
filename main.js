
$(document).ready(function() {
    console.log("ready!");

    $("#button").hover(function(){
        $(this).css("background-color", "violet");
    },function(){
        $(this).css("background-color", "orange");
    });


    $("button").html( "Click for a surprise!" )
    $("button").on("click", function( event ) {
        $("p").toggleClass('chungus compound');

        let fboi = document.getElementById("fboi");
        fboi.src = "https://cdn3.emoji.gg/emojis/9378-fuckboi.png";
      
        

    
        /*if(){

        }
        */

        /*
        $("#fboi").show('noshow');        
        $("#fboi").toggleClass('noshow');
        */

        /*if($("#fboi").attr("noshow") == true){
            $("#fboi").attr("show", "noshow");
        }

        else{
            $("#fboi").attr("noshow", "show");
        }
        */
    });

});
