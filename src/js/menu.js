$(".top-menu-icon").click((e) => {
    $('.menu').toggleClass('active')
});

$(".menu .menu-nav").click((e) => {
     // $(".drop").removeClass('open')
     $(e.target).closest('li').children(".drop").toggleClass('open')
    // $(e.target).closest('li').children(".drop").removeClass('open')
    // $(e.target).closest('li').children(".drop").addClass('open')
});
