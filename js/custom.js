var expandMenu;
(function($) {
    "use strict";
    if ($('.scroll-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scroll-top').addClass('show');

                } else {
                    $('.scroll-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
            
        });
        $('.scroll-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    
    $(".nav-toggle").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".header .menus").removeClass("open");    
            $(".overlay-common").removeClass("show"); 
        }else{
            $(this).addClass("active");
            $(".header .menus").addClass("open");    
            $(".overlay-common").addClass("show"); 
        }
        

    });
    $(".overlay-common").click(function(){
        $(".header .menus").removeClass("open");
        $(".nav-toggle").removeClass("active");
        $(this).removeClass("show");
    });
    $(".header .down").click(function(){
        $(this).toggleClass("active");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().toggleClass("active");
    });
    var my_date_format = function(id){
        var d = new Date();
        var weekday=['Chủ Nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sau','Thứ bảy']
        var month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var date = weekday[d.getDay()] + ", " + d.getDate() +  "/" + month[d.getMonth()] + "/" + d.getFullYear();
        var time = d.toLocaleTimeString().toLowerCase().replace(/([\d]+:[\d]+):[\d]+(\s\w+)/g, "$1$2");
        $(id).text(date);
        
    };
    my_date_format("#datetime");

})(jQuery);

        
