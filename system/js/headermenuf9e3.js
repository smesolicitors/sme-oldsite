$(document).ready(function() {


//MOBILE MENU BUTTON
            
            /**
            $(".menu-button").click(function(e) {
                $('.mobile-menu').toggleClass('menu-open');http://localhost/smesolicitors/system/img/banner3.jpg
                e.stopPropagation()
            });

            $(document).click(function(e) {
            if (!$(e.target).hasClass('.mobile-menu')) $(".mobile-menu").removeClass('menu-open');
             });
            **/

        $(function() {
            $('.menu-button').click(function() {
                 $('.mobile-menu').slideToggle();
            });
        });


        });

        //MAIN MENU
        function hideMenus() {

            for (var a = document.getElementsByTagName('div'), i = 0, n = a.length; i < n; i++) {
                if (a[i].id && a[i].id.indexOf('menu') === 0) {
                    $('#' + a[i].id).hide();
                }
            }
        }

        function showMenu(menuDiv) {

            $('#' + menuDiv).show('fast');

        }

        function delayHideMenu() { setTimeout("hideMenus()", 500); }

        hideMenus();