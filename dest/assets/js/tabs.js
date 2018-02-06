(function($){
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children(".tabs__tab").children(".tab__content").hide();
                $(tabs).children(".tabs__tab").children(".tab__content").eq(i).show();
                $(tabs).children(".tabs__menu").children(".tabs__menuitem").removeClass("active");
                $(tabs).children(".tabs__menu").children(".tabs__menuitem").eq(i).addClass("active");

                $(tabs).children(".restaurantMenu__tabsBlock").children(".restaurantMenu__tabContent").hide();
                $(tabs).children(".restaurantMenu__tabsBlock").children(".restaurantMenu__tabContent").eq(i).show();
                $(tabs).children(".restaurantMenu__tabMenu").children(".menu__item").removeClass("active");
                $(tabs).children(".restaurantMenu__tabMenu").children(".menu__item").eq(i).addClass("active");

                $(tabs).children(".bookingForm__tabsBlock").children(".bookingForm__tabContent").hide();
                $(tabs).children(".bookingForm__tabsBlock").children(".bookingForm__tabContent").eq(i).show();
                $(tabs).children(".bookingForm__tabMenu").children(".menu__item").removeClass("active");
                $(tabs).children(".bookingForm__tabMenu").children(".menu__item").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).children(".tabs__menu").children(".tabs__menuitem").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });
            $(tabs).children(".tabs__menu").children(".tabs__menuitem").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });

            $(tabs).children(".restaurantMenu__tabMenu").children(".menu__item").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });
            $(tabs).children(".restaurantMenu__tabMenu").children(".menu__item").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });

            $(tabs).children(".bookingForm__tabMenu").children(".menu__item").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });
            $(tabs).children(".bookingForm__tabMenu").children(".menu__item").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);

$(document).ready(function(){
    $(".subpage__tabs").lightTabs();
    $(".restaurantMenu__tabs").lightTabs();
    $(".booking__tabs").lightTabs();
});
