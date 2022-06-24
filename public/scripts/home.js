$(function () {
    $(document).scroll(function(){
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


$(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();
    var navHeight = $("#mainNavbar").outerHeight();
    console.log(navHeight);
    $("html, body").animate({
        scrollTop: $($.attr(this, 'href')).offset().top - navHeight
    }, 800);
});

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});