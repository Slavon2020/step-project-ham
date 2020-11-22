const additionalWorkElementsArray = [{
    dataWorkClass: 'graphic-design',
    imageScr: 'images/graphic-design-image3.jpg',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{   
    dataWorkClass: 'graphic-design',
    imageScr: 'images/graphic-design-image4.jpg',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{
    dataWorkClass: 'graphic-design',
    imageScr: 'images/graphic-design-image5.jpg',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/web-design-image3.jpg',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/web-design-image4.jpg',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/web-design-image5.jpg',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/landing-page-image4.jpg',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/landing-page-image5.jpg',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/landing-page-image6.jpg',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/wordpress4.jpg',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/wordpress5.jpg',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/wordpress6.jpg',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
}
];

const additionalWorkElementsArray2 = [
{
    dataWorkClass: 'graphic-design',
    imageScr: 'images/graphic-design-image7.jpg',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{   
    dataWorkClass: 'graphic-design',
    imageScr: 'images/graphic-design-image8.jpg',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{
    dataWorkClass: 'graphic-design',
    imageScr: 'images/graphic-design-image9.jpg',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/web-design-image6.jpg',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/web-design-image7.jpg',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/web-design-image8.jpg',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/landing-page-image7.jpg',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/landing-page-image8.jpg',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/landing-page-image9.jpg',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/wordpress7.jpg',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/wordpress8.jpg',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/wordpress9.jpg',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
},
];

const $workCategories = $('.work-nav-item');
const $workItemsSection = $('.work-items');
let choosedWorkCategoryEvent;

const createHtmlToAdd = (arr) => {
    let htmlToReturn = arr.map(el => {
        return (
        `<div class="work-item" data-work-class="${el.dataWorkClass}">
            <img src="${el.imageScr}" alt="work-image" class="work-img">
            <div class="work-item-hover">
                <div class="work-item-top">
                    <div class="work-item-chain-wrap">
                        <svg class="chain-icon" xmlns="http://www.w3.org/2000/svg"     width="15" height="15" viewBox="0 0 15 15"fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 998305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 468897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 113595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.4729610.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 565924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 619093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 108349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L583354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 111629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C849852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 984105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 931174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z"fill="#1FDAB5"/>
                        </svg>
                    </div>
                    <div class="work-item-square-wrap">
                        <div class="work-item-square"></div>
                    </div>
                </div>
                <div class="work-item-bottom">
                    <h5 class="work-item-heading">${el.workItemHeading}</h5>
                    <p class="work-item-class">${el.workItemClass}</p>
                </div>
            </div>
        </div>`)
    });
    arr.length = 0;
    return htmlToReturn;
};

const chooseWorkItemsFunc = function (event) {
    if (event !== undefined) {
        choosedWorkCategoryEvent = event;
        const $allWorkItems = $('.work-item');
        const choosedWorkCategory = event.target.dataset.workCategory;
        const $target = $(event.target);

        $workCategories.removeClass('work-nav-item-choosed');

        $target.addClass('work-nav-item-choosed');
        if (choosedWorkCategory === 'all-work-categories') {
            $allWorkItems.css('display', 'block');
        } else {
            $allWorkItems.css('display', 'none');
            $allWorkItems.filter(`[data-work-class=${choosedWorkCategory}]`).css('display', 'block');
        };
    };
};

$('.work-nav-list').mousedown((event) => {
    chooseWorkItemsFunc(event);
});

$('.load-more-btn').click(() => {
    let htmlToAdd = createHtmlToAdd(additionalWorkElementsArray.length > 0 ? additionalWorkElementsArray : additionalWorkElementsArray2);
    $('.work .container').append($('<div class="preloader"></div>'));
    $('.load-more-btn').css('display', 'none');
    setTimeout(() => {
        $('.preloader').remove();
        $('.load-more-btn').css('display', 'flex');
        $workItemsSection.append(htmlToAdd);
        chooseWorkItemsFunc(choosedWorkCategoryEvent);
    }, 2000);
    if (additionalWorkElementsArray.length === 0 && additionalWorkElementsArray2.length === 0) {
        $('.load-more-btn').remove();
    }
});

$('.services-list').mousedown((event) => {
    const $target = $(event.target);
    const $serviceInfoItems = $('.service-info');
    const chosedServiceCategory = event.target.dataset.serviceCategory;
    
    $('.services-nav-item').removeClass('choosed-service');
    $target.addClass('choosed-service');

    if(!$target.hasClass('service-info-active')) {
        $serviceInfoItems.each((index, el) => {
            el = $(el);
            if(el.hasClass('service-info-active')) {
                el.removeClass('service-info-active');
            };
        });
        $serviceInfoItems.filter(`[data-service-class=${chosedServiceCategory}]`).addClass('service-info-active');
    };
});

/*****************REVIEWS-SLIDER***************/

$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        touchMove: false,
        appendArrows: $('.slider-nav'),
        prevArrow: $(".slick-prev-btn-custom"),
        nextArrow: $(".slick-next-btn-custom"),
        variableWidth: true,
    });
});


