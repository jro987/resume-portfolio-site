$(document).ready(function() {

    var headerHeight = $('#main-navigation').height();

    $('#page').css("margin-top", headerHeight + 'px');

    $('.main-menu div a').click(function(e) {
        
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });
});

$(window).scroll(function() {
    
    var scrollDistance = $(window).scrollTop();
    
    $('.main-content').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
                $('.main-menu div.main-nav-active').removeClass('main-nav-active');
                $('.main-menu div').eq(i).addClass('main-nav-active');
        }
});
}).scroll();

// Get the modal
var modal = document.getElementById("resume-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("resume-modal-trigger");
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}