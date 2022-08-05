export const CategorySettings={
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            }
        },
    ]
};

export const GamesByGenreSettings={
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                fade: true,
                infinite: true,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
}