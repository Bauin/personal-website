/*****
 * Check if the user has scrolled and toggle class based on that.
*****/
$(document).scroll(function(){
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});


/***** 
 * Scroll down to another section on the page.
*****/
$(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();
    var navHeight = $("#mainNavbar").outerHeight();
    console.log(navHeight);
    $("html, body").animate({
        scrollTop: $($.attr(this, 'href')).offset().top - navHeight
    }, 800);
});

/***** 
 * Close the menu when clicked on a link.
*****/
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

/*****
 * Add a border to the navbar when scrolled down to a certain point on the page.
*****/
$(document).scroll(function() {
    var scroll = scrollY;
    var infoPos = document.getElementById("info").offsetTop;
    if (scroll > (infoPos - 60)) {
        document.getElementById("mainNavbar").style.borderBottom = "thin solid black";
    }
    else {
        document.getElementById("mainNavbar").style.borderBottom = "none";
    }
});