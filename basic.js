// announcement
$('.announcement_slider').bxSlider({
	auto: true,
});


// SNUE edu
$('.edu_slider_wrap').bxSlider({
    minSlides: 4,
	maxSlides: 4,
	moveSlides: 1,
	slideWidth: 800,
	slideMargin: 10,
	auto: true,
    pager: false,
    controls:false,
})

// SNUE news

$('.news_slider').bxSlider({
    minSlides: 1,
	maxSlides: 3,
	moveSlides: 1,
    slideWidth: 600,
    slideMargin: 30,
	auto: true,
    pager: false,
    controls:false,
    ariaHidden: false,
})


// media
$('.m_slider').bxSlider({
    minSlides: 2,
	maxSlides: 3,
	moveSlides: 1,
	slideWidth: 230,
	slideMargin: 10,
	auto: true,
})

// quick_top_btn
$(document).ready(function(){
    // 첫 번째 li 요소에 'active' 클래스 추가
    $(".quick_top li:first-child").addClass("active");

    // 각 카테고리 버튼에 클릭 이벤트 핸들러를 설정합니다.
    $('.quick_top_btn').click(function(e) {
        e.preventDefault(); // 기본 동작(링크 이동)을 막습니다.

        // 모든 li 요소에서 'active' 클래스 제거
        $('.quick_top_btn').removeClass('active');

        // 현재 클릭된 li 요소에만 'active' 클래스 추가
        $(this).addClass('active');
    });
});

// quick

$(document).ready(function() {
    // 모든 하위 ul 요소를 숨김
    $(".quick_bot").hide();
    $("#student").show();
  
    $(".student").click(function() {
        $(".quick_bot").hide();
        $("#student").show();
    });
  
    $(".prof").click(function() {
        $(".quick_bot").hide();
        $("#prof").show();
    });
  
    $(".general").click(function() {
        $(".quick_bot").hide();
        $("#general").show();
    });
  });

$(document).ready(function(){
    // 모든 하위 ul 요소를 숨김
    $(".f_nav_dep2").hide();
  
    $("li > i.fa-solid.fa-bars").click(function(){
      // 현재 클릭된 li 요소의 하위 ul 요소를 토글
      $(this).next(".f_nav_dep2").toggle();
    });
  });

//tab_btn

$(document).ready(function(){
    // 첫 번째 li 요소에 'active' 클래스 추가
    $(".tab li:first-child").addClass("active");

    // 각 li 요소에 클릭 이벤트 핸들러를 설정합니다.
    $('.tab li').click(function(e) {
        e.preventDefault(); // 기본 동작(링크 이동)을 막습니다.

        // 모든 li 요소에서 'active' 클래스 제거
        $('.tab li').removeClass('active');

        // 현재 클릭된 li 요소에만 'active' 클래스 추가
        $(this).addClass('active');
    });
});

// fullmenu.active
$(document).ready(function() {
    $('.icon_menu').on('click',function(){
       $('.fullmenu_wrap').toggleClass('active');
    });
 });

//  icon_search
document.addEventListener('DOMContentLoaded', function() {
    var iconSearch = document.querySelector('.icon_search');
    var gnbBg = document.querySelector('.icon_search>.gnb_bg');

    iconSearch.addEventListener('click', function(e) {
        e.preventDefault();
        gnbBg.style.display = 'block';
    });
});