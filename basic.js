

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
});

// SNUE news

const list = document.querySelector('.slides_container');
const listLi = document.querySelectorAll('.slides_container li a');
const show_num = 2;
const total = listLi.length;
const li_width = parseInt(getComputedStyle(listLi[0]).width);
let num = 0;

for(let i = 0; i < show_num; i++){
    var copyobj = listLi[i].cloneNode(true);
    list.appendChild(copyobj);
}

// Copy the first slide and append it to the end
var firstCopyObj = listLi[0].cloneNode(true);
list.appendChild(firstCopyObj);

document.querySelector('.control > .right_btn').addEventListener('click', function(e) {
    e.preventDefault();
    moveRight();
});

document.querySelector('.control > .left_btn').addEventListener('click', function(e){
    e.preventDefault();

    if (num == 0){
        num=total;
        list.style.transition ='none';
        list.style.marginLeft=-li_width * num + 'px';
   }

   setTimeout(function(){
       num--;
       list.style.transition='margin-left .5s'
       ;
       list.style.marginLeft=-li_width * num +'px';
   },50);
});

function moveRight() {
    num++;
    if (num == total+1){ // Notice this change here
        // Reset to the actual first slide without transition after transition ends.
        setTimeout(function() {
            num = 0;
            list.style.transition ='none';
            list.style.marginLeft='0px';   
        }, 500); // Adjust this delay to match your transition duration
   } else {
       setTimeout(function(){
           // This is your original code.
           // It is executed when it's not transitioning from last slide to the first.
           list.style.transition='margin-left .5s'
           ;
           list.style.marginLeft=-li_width * num +'px';
      },50);
   }
}

// Auto slide every 2 seconds
let autoSlideIntervalId;

function startAutoSlide() {
    autoSlideIntervalId = setInterval(moveRight, 2000);
}

startAutoSlide(); 

// Pause button functionality
document.querySelector('.control>.pause_btn').addEventListener('click', function(e) {
    e.preventDefault();

    if (this.dataset.paused === 'true') { 
        startAutoSlide(); 
        this.dataset.paused = 'false'; 
      } else { 
          clearInterval(autoSlideIntervalId); 
          this.dataset.paused ='true'; 
      }
});




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
    var closeBtn = document.querySelector('.search_window>.close_btn');

    iconSearch.addEventListener('click', function(e) {
        e.preventDefault();
        gnbBg.style.display = 'block';
    });
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        gnbBg.style.display = 'none';
    });
});