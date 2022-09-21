$(function () {
    $(".story__accordeon-item").click(function () {
        $('.story__accordeon-item').removeClass("story__accordeon-item--active");
        $(this).addClass("story__accordeon-item--active");
    });
})

$('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
        $(this).removeClass('questions__acc-link--active')
        $(this).children('.questions__acc-text').slideUp()
    } else {
        $('.program__acc-link').removeClass('questions__acc-link--active')
        $('.questions__acc-text').slideUp()
        $(this).addClass('questions__acc-link--active')
        $(this).children('.questions__acc-text').slideDown()
    }
})