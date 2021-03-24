$(document).ready(function () {
    headerResize();
});

window.onresize = () => {
    headerResize();
}

function headerResize() {
    var headerHeight = $('#main-navigation').height();
    $('#page').css("margin-top", headerHeight + 'px');
}

// Navigation
$('.main-menu div a').click(function (e) {

    var target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
});

$(window).scroll(function () {

    var scrollDistance = $(window).scrollTop();

    $('.main-content').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('.main-menu div.main-nav-active').removeClass('main-nav-active');
            $('.main-menu div').eq(i).addClass('main-nav-active');
        }
    });
}).scroll();

var modal = document.getElementById("resume-modal");

var img = document.getElementById("resume-modal-trigger");
var modalImg = document.getElementById("img1");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}