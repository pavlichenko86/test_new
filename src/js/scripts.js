let $ = require("jquery");

let list = [
        {
            image: './images/image.jpg',
            text: 'Fortnite'
        },
        {
            image: './images/image2.jpg',
            text: 'League of Legends'
        },
        {
            image: './images/image3.jpg',
            text: 'PLAYERUNKNOWN\'S BATTLEGROUNDS'
        },
        {
            image: './images/image4.jpg',
            text: 'Grand Theft Auto V'
        },
        {
            image: './images/image5.jpg',
            text: 'Overwatch'
        },
        {
            image: './images/image6.jpg',
            text: 'Apex Legends'
        },
        {
            image: './images/image.jpg',
            text: 'Fortnite'
        },
        {
            image: './images/image2.jpg',
            text: 'League of Legends'
        },
        {
            image: './images/image3.jpg',
            text: 'PLAYERUNKNOWN\'S BATTLEGROUNDS'
        },
        {
            image: './images/image4.jpg',
            text: 'Grand Theft Auto V'
        },
        {
            image: './images/image5.jpg',
            text: 'Overwatch'
        },
        {
            image: './images/image6.jpg',
            text: 'Apex Legends'
        },
        {
            image: './images/image.jpg',
            text: 'Fortnite'
        },
        {
            image: './images/image2.jpg',
            text: 'League of Legends'
        },
        {
            image: './images/image3.jpg',
            text: 'PLAYERUNKNOWN\'S BATTLEGROUNDS'
        },
        {
            image: './images/image4.jpg',
            text: 'Grand Theft Auto V'
        },
        {
            image: './images/image5.jpg',
            text: 'Overwatch'
        },
        {
            image: './images/image6.jpg',
            text: 'Apex Legends'
        },
        {
            image: './images/image3.jpg',
            text: 'PLAYERUNKNOWN\'S BATTLEGROUNDS'
        },
        {
            image: './images/image4.jpg',
            text: 'Grand Theft Auto V'
        }
    ],
    slidesCount,
    slideItems;

getCount(window.innerWidth);

function getCount(currentScreen) {
    if (currentScreen > 768) {
        slideItems = 6;
    } else if (currentScreen <= 768 && currentScreen > 375) {
        slideItems = 4;
    } else {
        slideItems = 1;
    }

    slidesCount = Math.floor(list.length / slideItems);

    if (list.length % slideItems !== 0) {
        slidesCount += 1;
    }
    $('.main_slider').html('');

    let j = 0;
    let block;
    debugger

    for (let i = 1; i <= slidesCount; i++) {
        $('.main_slider').append(
            `<div class="item"></div>`
        );

        block = $('.main_slider .item');

        let blockItem = $(block)[i - 1];

        for (j; j < i * slideItems; j++) {
            if (j < list.length) {
                $(blockItem).append(
                    '<a href="#" class="slide_item">'+
                    '<img src="' + list[j].image + '" alt="">'+
                    '<p>' + list[j].text + '</p>'+
                    '</a>'
                );
            }
        }
    }

    $('.main_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        rows: 0,
        responsive: [
            {
                breakpoint: 376,
                settings: {
                    infinite: true,
                    centerMode: true,
                    initialSlide: 1,
                    centerPadding: '8px',
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
}





window.addEventListener('resize', function () {
    $('.main_slider').slick('unslick');
    getCount(window.innerWidth);
});