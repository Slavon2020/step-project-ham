const additionalWorkElementsArray = [{
    dataWorkClass: 'graphic-design',
    imageScr: 'images/work-image5.png',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{   
    dataWorkClass: 'graphic-design',
    imageScr: 'images/work-image5.png',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{
    dataWorkClass: 'graphic-design',
    imageScr: 'images/work-image5.png',
    workItemHeading: 'graphic design heading',
    workItemClass: 'graphic design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/work-image6.png',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/work-image6.png',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'web-design',
    imageScr: 'images/work-image6.png',
    workItemHeading: 'web design heading',
    workItemClass: 'web design'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/work-image7.png',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/work-image7.png',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'landing-pages',
    imageScr: 'images/work-image7.png',
    workItemHeading: 'landing pages heading',
    workItemClass: 'landing pages'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/work-image8.png',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/work-image8.png',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
},
{
    dataWorkClass: 'wordpress',
    imageScr: 'images/work-image8.png',
    workItemHeading: 'wordpress heading',
    workItemClass: 'wordpress'
},
];

const $workCategories = $('.work-nav-item');
const $workItemsSection = $('.work-items');

const createHtmlToadd = (arr) => {
    let htmlToReturn = []; 
    arr.forEach(el => {
          htmlToReturn.push(
            `<div class="work-item" data-work-class="${el.dataWorkClass}">
                <img src="${el.imageScr}" alt="work-image" class="work-img">
                <div class="work-item-hover">
                    <div class="work-item-top">
                        <div class="work-item-chain-wrap">
                            <svg class="chain-icon" xmlns="http://www.w3.org/2000/svg"     width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
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
            </div>`);
        });
    arr.length = 0;
    return htmlToReturn;
};

$('.work-nav-list').click((event) => {
    const $allWorkItems = $('.work-item');
    const choosedWorkCategory = event.target.dataset.workCategory;
    const $target = $(event.target);
    $workCategories.css({'color': '#717171','border': '1px solid #DADADA'});
    $target.css({'color': '#18CFAB','border': '2px solid #18CFAB'});
    if (choosedWorkCategory === 'all-work-categories') {
        $allWorkItems.css('display', 'block');
    } else {
        $allWorkItems.css('display', 'none');
        $allWorkItems.filter(`[data-work-class=${choosedWorkCategory}]`).css('display', 'block');
    };
});

$('.load-more-btn').click(() => {
    let htmlToAdd = createHtmlToadd(additionalWorkElementsArray);
    $workItemsSection.append(htmlToAdd);
    $('.load-more-btn').css('display', 'none');
});

$('.services-list').click((event) => {
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

/*****************SLIDER***************/

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
    });
});
