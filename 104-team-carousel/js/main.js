$(document).ready(function(){
    $(".prodect-carousel").owlCarousel({
        item:5,
        autoplay:true,
        nav:true,
        loop:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        margin:30,
        dots:false
        
    });
});