$(document).ready(function() {
    $('#slide_1').show();
    $('#text_1').show();
    $('#link_1').show();
    //$(".img-nav").removeClass(".about");


    $("#link_1").click(function() {
        window.location = "about-us";
        //$("about").addClass("aboutover");
    });

    $("#link_1").mouseenter(function() {
        slideJump(1);
    });


    $("#busTab").click(function() {
        window.location = "for-business";
        //slideJump(2);
    });

    $("#busTab").mouseenter(function() {
        slideJump(2);
    });


    $("#privateTab").click(function() {
        window.location = "for-you";
    });

    $("#privateTab").mouseenter(function() {
        slideJump(3);
    });


    $("#stayTab").click(function() {
        window.location = "sectors";
    });

    $("#stayTab").mouseenter(function() {
        slideJump(4);
    });

});

    function resetSlides() {
            var i;

            for (i = 1; i <= 4; i++) {
                $('#slide_' + i).hide();
                $('#text_' + i).hide();
                $('#link_' + i).hide();
                $('#link_' + i).addClass("imgNav background");
            }
            $('#slide_1').show();
            $('#text_1').show();
            $('#link_1').show();
        }

    function slideMove(slideNum) {

            $('#slide_' + (slideNum - 1)).hide();
            $('#slide_' + slideNum).show('slow');
            $('#slide_' + (slideNum + 1)).hide();
            slideJump(slideNum);
        }

    function slideJump(slideNum) {

            var i;

            for (i = 1; i <= 10; i++) {
                $('#slide_' + i).hide();
                $('#text_' + i).hide();
                //$('img-nav').addClass("background");
                //$('#link_' + i).hide();
                
                
            }

            $('#slide_' + slideNum).show();
            $('#link_' + slideNum).show();
            $('#text_' + slideNum).show('fast');

        }        