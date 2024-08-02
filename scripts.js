!function(t){"use strict";t(".switcher-toggle").on("click",function(){var s=t("#styles-switcher.left"),e=t("#styles-switcher.right");"-202px"===e.css("right")?t(e).animate({right:"0px"},300).addClass("shadow"):t(e).animate({right:"-202px"},300).removeClass("shadow"),"-202px"===s.css("left")?t(s).animate({left:"0px"},300).addClass("shadow"):t(s).animate({left:"-202px"},300).removeClass("shadow")}),t("#styles-switcher ul li").on("click",function(){var s=t(this).data("path");t("#color-switcher").attr("href",s),t(this).parent().find("li").removeClass("active"),t(this).addClass("active")}),t("#reset-color").on("click",function(){t("#color-switcher").removeAttr("href"),t("#styles-switcher ul li").parent().find("li").removeClass("active")})}(jQuery);
 
/*
================================================================
* Template:           Oxyy - Login and Register Form Html Templates
* Written by:          Harnish Design - (http://www.harnishdesign.net)
* Description:   Main Custom Script File
================================================================
*/


(function ($) {
        "use strict";

// Preloader
$(window).on('load', function () {
        $('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
        $('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(333);
});


// OTP Form (Focusing on next input)
$("#otp-screen .form-control").keyup(function() {  
if (this.value.length == 0) {
   $(this).blur().parent().prev().children('.form-control').focus();
}
else if (this.value.length == this.maxLength) {
   $(this).blur().parent().next().children('.form-control').focus();
}
});


/*---------------------------------------------------
    YouTube video to autoplay in modal
----------------------------------------------------- */
// Gets the video src from the data-src on each button
var $videoSrc;
$('.video-btn').on('click', function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
// when the modal is opened autoplay it  
$('#videoModal').on('shown.bs.modal', function (e) {
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates...you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0" ); 
})
// stop playing the youtube video when I close the modal
$('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc); 
})


// Fixed Bootstrap Multiple Modal Issue
$('body').on('hidden.bs.modal', function () {
if($('.modal.show').length > 0)
{
    $('body').addClass('modal-open');
}
});


/*------------------------
   tooltips
-------------------------- */
$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

})(jQuery)