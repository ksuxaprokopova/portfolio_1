$(".about_items > div").on("click", function(){
    $(this).children(".about_icon").toggleClass("about_rotate_icon");
    $(this).parent(".about_items").toggleClass("change_color")
    $(this).next(".about_items_text").slideToggle(300);
})