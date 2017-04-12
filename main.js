/* Add content for different width screen */
    function addImages(width) {
        if (width < '768') {
            $(".mobile").html('');
            $(".desktop").html('');
            $(".mobile").html('<img class="favicon" src="images/mobile.png" alt="mobile" />');
        } else {
            $(".mobile").html('');
            $(".desktop").html('');
            $(".desktop").html('<img class="preview" src="images/desktop.png" alt="desktop" />');
        }
    }

    var width = document.body.clientWidth;
    addImages(width);

    $(window).resize(function() {
        var width = document.body.clientWidth;
        addImages(width);
    });


/* Document ready */
jQuery(document).ready(function($) {
    //
});


/* Smooth scrolling */
    $('.container').on("click","a", function (event) {
        event.preventDefault();

        var heightDifferences = 180;
        if ( $(window).width() < 991 ) {
            heightDifferences = 70;
        }
    });


/* Change height for hover */
    $('#background-menu').hover(function() {
        $('.site-header .general-menu').css('height', '225');
    },function() {
        $('.site-header .general-menu').css('height', '82');
    });



elem.addClass('menu-fixed');
elem.removeClass('menu-fixed');
$(".payment-form .states" ).empty();
$(".payment-form .states" ).append(input_state_text_form_payment);