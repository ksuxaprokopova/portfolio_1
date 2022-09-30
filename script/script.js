$(".about_items > div").on("click", function(){
    $(this).children(".about_items_right").children(".about_icon").toggleClass("about_rotate_icon");
    $(this).parent(".about_items").toggleClass("change_color");
    $(this).next(".about_items_text").slideToggle(300);
})

$(".features_items > div").on("click", function(){
    $(this).parent(".features_items").toggleClass("features_border");
    $(this).parent(".features_title").toggleClass("features_click_color");
    $(this).children(".features_img").toggleClass("features_click");
    $(this).next(".features_text").slideToggle(300);
   
   
})

$(".features_items > div").on("click", function(){
    $(this).next(".features_img_click").slideToggle(300);
})