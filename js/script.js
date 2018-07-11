/*******Typed*******/
$(function() {
    $(".typed-wrap__span").typed({
        strings: ["Hello, there!", "It is example", "Of my work"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 10,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});

/*******Notify-Content*******/
$(".notify-btn").click(function() {
    $("#main-content").removeClass("active");
    $("#contact").addClass("active");
});

$(".contact__close").click(function() {
    $("#contact").removeClass("active");
    $("#main-content").addClass("active");
});

/*******Slider*******/
$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
        breakpoint: 320,
        //сообщает, при какой ширине экрана нужно включать настройки
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    }]
});

/*******Gallery*******/
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

/*******Anchor Scroll*******/
$(document).ready(function() {
    $("nav").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});

/*******Scroll Up*******/
(function($) {
    $(function() {

        $('#up').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        })

    })
})(jQuery)

/*******Pop Up*******/
$(".btn-pink").click(function() {
    $(".popup").addClass("active");
});
$(".close").click(function() {
    $(".popup").removeClass("active");
});







