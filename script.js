$(window).scroll(function() {
    console.log($(this).scrollTop());
    if($(this).scrollTop()>=250){
        $('h3').addClass('animate');
    } else {
        $('h3').removeClass('animate');
    }
})