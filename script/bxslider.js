$(".carusel").bxSlider({
    mode: "fade",
    controls: false,
    randomStart: true,
    
})

$(".bx-pager").on("click", function(){
    $(this).children(".bx-pager-item").toggleClass("bx-pager-item:active")
})