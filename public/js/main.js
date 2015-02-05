$(document).on('ready', function() {
	// var ui = {};
	// ui.isSmall = function() {
	// 	return $(window).width() < 768;
	// }
    var $menu = $('.logo-menu');
    var $body = $('body');
    if(window.location.pathname ==="/") {
        $menu.addClass('is-disabled-home')
        $menu.find('.logo-menu-logo a').click(function(){
            return false;
        })
    }
    var disableTouchmove = function(){
        $body.bind("touchmove", function(e){
                e.preventDefault();
        })
    }
    var enableTouchmove = function(){
        $body.unbind("touchmove");
    }
    var toggleScrolling = function() {
        $body.toggleClass('is-disabled-touchmove');
        if($body.hasClass('is-disabled-touchmove')) {
            disableTouchmove(); 
        }
        else {
            enableTouchmove();
        }
    }
    $('.navigation--full-screen').addClass('has-not-been-triggered');
    var toggleMenu = function() {
        $('body').toggleClass('is-open-menu')
        $('.navigation--full-screen').removeClass('has-not-been-triggered').toggleClass('is-active');
        $menu.toggleClass('is-toggled');
        toggleScrolling();
    }
	$('.navigation--full-screen-trigger').click(function(e) {
        toggleMenu();
    });
    $('li.work-link a, li.writings-link a').on('click', function(){
        if(window.location.pathname == '/' || window.location.pathname == '/index.html') {
            toggleMenu();
        }
    });
    
    $(window).scroll( function(){
        if($('.post-pagination').length >0) {
            var $pagination = $('.post-pagination');
            var $content = $('.project-detail-content');
            if($pagination.offset().top > $content.offset().top) {
                if(!$pagination.hasClass('is-active')) {
                    $pagination.addClass('is-active');
                }
            }
            else if ($pagination.offset().top < $content.offset().top && $pagination.hasClass('is-active')) {
                $pagination.removeClass('is-active');
            }
        }
    });
    // var modifier = "shiftKey";
    // var wasPressed = function (ev, num) {
    //     return (ev.which === num && ev[modifier])
    // };
    // $(window).bind("keydown keypress", function (event) {
    //     if(wasPressed(event, 38)) { // up
    //         // alert('calluna')
    //         $('body').removeClass('kepler').removeClass('leitura').addClass('calluna');
    //     }
    //     else if(wasPressed(event, 40)) { // down
    //         // alert('kepler')
    //         $('body').removeClass('calluna').removeClass('leitura').addClass('kepler');
    //     }
    //     else if(wasPressed(event, 39)) {
    //         // alert('back to chaparral')
    //         $('body').removeClass('calluna').removeClass('kepler').removeClass('leitura');
    //     }    
    //     else if(wasPressed(event, 37)) {
    //         $('body').removeClass('calluna').removeClass('kepler').addClass('leitura');
    //     }
    // });
});