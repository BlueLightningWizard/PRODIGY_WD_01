let current_scroll = 0;

window.addEventListener("scroll", () =>
{
    if (window.scrollY > 250 && current_scroll == 0)
    {
        $('body').removeClass('scroll_bottomup');
        $('body').addClass('scroll_topdown');

        current_scroll = 1;
    }

    else if (window.scrollY <= 250 && current_scroll == 1)
    {
        $('body').removeClass('scroll_topdown');
        $('body').addClass('scroll_bottomup');

        current_scroll = 0;
    }
})