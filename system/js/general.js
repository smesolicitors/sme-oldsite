$(document).ready(function () {

});


   $(".open-request").click(function () {
             $(".hover-expand").toggleClass('hover-show');
             $('.full-message').fadeOut('slow');
        });


         function disp_confirm() {
             $(".hover-expand").toggleClass('hover-show');
             //alert('test');
         }


$(window).on('load', function () {
    if (screen.width <= 375) {
        var mvp = document.getElementById('myViewport');
        //mvp.setAttribute('content', 'width=375');
        //mvp.setAttribute('maximum-scale', '1');
    }
});



function showSubNav(subNavID) {

    var par = $('#' + subNavID).closest('div.submenu');
    
    $(par).find('ul li .nested').not('#' + subNavID).slideUp();

    $('#' + subNavID).slideToggle();

}

function showSubNavMob(subNavID) {

    
    var par = $('#' + subNavID).closest('div.submenu');

    $(par).find('ul li .nested').not('#' + subNavID).slideUp();

    $('#' + subNavID).slideToggle();

}



$('#txtMessage').keyup(function () {
    var cs = $(this).val().length;
    $('#number').text(cs);
});


$('.fatogglemenu').on('click', function () {

    var fa = $(this);
    var faparent = $(this).parent('li');
    var submenu = faparent.find('.submenu');

    submenu.slideDown();
    $('.submenu').not(submenu).slideUp();

    $(".fatogglemenu").not(fa).css({
        transform: 'rotate(0deg)',
        MozTransform: 'rotate(0deg)',
        WebkitTransform: 'rotate(0deg)',
        msTransform: 'rotate(0deg)'
    });

    fa.css({
        transform: 'rotate(90deg)',
        MozTransform: 'rotate(90deg)',
        WebkitTransform: 'rotate(90deg)',
        msTransform: 'rotate(90deg)'
    });

});
