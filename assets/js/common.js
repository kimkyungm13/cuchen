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
            type: "bullets",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + ('0' + (index + 1)).slice(-2) + '</span>'; // 각 bullet을 숫자로 렌더링하고 앞에 0을 붙임
            },
        },
    });
});