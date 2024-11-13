/*$(document).ready(function () {
$.wait = function (callback, seconds) {
    return window.setTimeout(callback, seconds * 1000);
};

$.wait(function () {
   if (sessionStorage.getItem('cookie-smesolicitors-info') !== 'shown') {
        cookieToggle();
   }
}, 2);

var cookieToggle = function () {
    $(".cookie-window").slideToggle("slow");
}

var cookieAccept = function() {
    $(".cookie-window").slideToggle("slow");
    sessionStorage.setItem('cookie-smesolicitors-info', 'shown');
    if ($("#chkAnalytics").is(':checked')) {
        sessionStorage.setItem('cookie-analytics', 'accepted');
    }
}
});*/





    $.wait = function (callback, seconds) {
        return window.setTimeout(callback, seconds * 1000);
    };

    $.wait(function () {
        var cookiepop = getCookie("cookie-smesolicitors-info");

        if (cookiepop !== "shown") {
            cookieToggle();
        }
    }, 2);

    var cookieToggle = function () {
        $(".cookie-window").slideToggle("slow");
    };

    var cookieAccept = function () {
        var date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

        setCookie('cookie-smesolicitors-info', 'shown', date);

        $(".cookie-window").slideToggle("slow");
    };

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

