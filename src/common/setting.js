export const Settings={
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            }
        },
    ]
};