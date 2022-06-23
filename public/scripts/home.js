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
