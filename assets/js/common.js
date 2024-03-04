$(function () {
    const topSwiper = new Swiper(".top-banner", {
        direction: "vertical",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    const mainSwiper = new Swiper(".mainSwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                var pageIndex = index + 1;
                var bulletText = pageIndex >= 10 ? pageIndex.toString() : '0' + pageIndex;
                return '<span class="' + className + '">' + bulletText + '</span>';

            },
        },
    });
});