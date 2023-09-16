// announcement
$('.announcement_slider').bxSlider({
	auto: true,
});

// SNUE edu
$('.edu_slider_wrap').bxSlider({
    minSlides: 3,
	maxSlides: 3,
	moveSlides: 1,
	slideWidth: 800,
	slideMargin: 30,
	auto: true,
    pager: false,
    controls:false,
})

// media
$('.m_slider').bxSlider({
    minSlides: 2,
	maxSlides: 2,
	moveSlides: 1,
	slideWidth: 280,
	slideMargin: 10,
	auto: true,
})

// quick
$(document).ready(function(){

    $(document).ready(function(){
        // 첫 번째 li 요소에 'active' 클래스 추가
        $(".quick_top li:first-child").addClass("active");

    // 초기 상태에서 모든 하위 메뉴를 숨깁니다.
    $('.prof .quick_bot, .general .quick_bot').hide();

    // 각 카테고리 버튼에 클릭 이벤트 핸들러를 설정합니다.
    $('.quick_top_btn').click(function(e) {
        e.preventDefault(); // 기본 동작(링크 이동)을 막습니다.

        if ($(this).find('.quick_bot').is(":visible")) {
            return;  // 현재 클릭된 버튼의 하위 메뉴가 이미 보이는 경우 아무런 동작을 수행하지 않습니다.
        }

        // 다른 카테고리의 하위 메뉴가 표시되어 있다면 숨깁니다.
        $('.quick_top_btn').not(this).find('.quick_bot').hide();

        // 클릭한 카테고리의 하위 메뉴를 토글합니다 (보이지 않으면 보이게, 보이면 숨기게 합니다).
        $(this).find('.quick_bot').toggle();
    });
})});

// quick_top_btn
$(document).ready(function(){
    $('.student,.prof,.general').click(function() {
        if ($(this).hasClass('active')) {
            // 이미 active 클래스가 적용된 경우, 해당 클래스를 제거합니다.
            $(this).removeClass('active');
        } else {
            // 그렇지 않은 경우, 모든 형제 요소에서 active 클래스를 제거하고
            // 클릭된 요소에만 active 클래스를 추가합니다.
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }
    });
});

$(document).ready(function(){

    $(document).ready(function(){
        // 첫 번째 li 요소에 'active' 클래스 추가
        $(".tab li:first").addClass("active");
      
    $(".tab li").click(function(){
      // 모든 li 요소에서 'active' 클래스 제거
      $(".tab li").removeClass("active");

      $('.tab li').click(function(e) {
        e.preventDefault(); // 기본 동작(링크 이동)을 막습니다.
  
      // 클릭된 li 요소에 'active' 클래스 추가
      $(this).addClass("active");
    })});
})});