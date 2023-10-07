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


// quick

$(document).ready(function() {
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
    $(".f_nav_dep2").hide();
  
    $("li > i.fa-solid.fa-bars").click(function(){
      $(this).next(".f_nav_dep2").toggle();
    });
  });

  // quick_top_btn
$(document).ready(function(){
    $(".quick_top li:first-child").addClass("active");

    $('.quick_top_btn').on('click',function(e) {
        e.preventDefault(); // 기본 동작(링크 이동)을 막습니다.

        $('.quick_top_btn').removeClass('active');

        $(this).addClass('active');
    });
});

//tab_btn
$(document).ready(function(){
    $(".tab li:first-child").addClass("active");

    $('.tab li').click(function(e) {
        e.preventDefault();

        $('.tab li').removeClass('active');

        $(this).addClass('active');
    });
});



// announcement
// $('.announcement_slider').bxSlider({
// 	auto: true,
// });

var announceSlider;

$(document).ready(function() {
    announceSlider = $('.announcement_slider').bxSlider({
        auto: true,

		onSliderLoad: function() {
            $('.news_slider_btn>.left_btn').click(function(e) {
                e.preventDefault();
                announceSlider.goToPrevSlide();
            });

            $('.news_slider_btn>.right_btn').click(function(e) {
                e.preventDefault();
                announceSlider.goToNextSlide();
            });

			$('.news_slider_btn>.pause_btn').click(function(e) {
				e.preventDefault();

				var isPaused = $(this).data('paused');

				if (isPaused) { 
					announceSlider.startAuto();
					$(this).data('paused', false);
                    $(this).html('<i class="fa-solid fa-pause"></i>');
				} else { 
					announceSlider.stopAuto();
					$(this).data('paused', true);
                    $(this).html('<i class="fa-solid fa-play"></i>');
				}
                
			});
		}
    });
    
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
       list.style.marginLeft=-li_width * num + 'px';
   },50);
});

function moveRight() {
    num++;
    if (num == total+1){ 
        setTimeout(function() {
            num = 0;
            list.style.transition ='none';
            list.style.marginLeft='0px';   
        }, 500); 
   } else {
       setTimeout(function(){
           list.style.transition='margin-left .5s'
           ;
           list.style.marginLeft=-li_width * num + 'px';
      },50);
   }
}

let autoSlideIntervalId;

function startAutoSlide() {
    autoSlideIntervalId = setInterval(moveRight, 2000);
}

startAutoSlide(); 

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

// SNUE edu
var slider;

$(document).ready(function() {
    slider = $('.edu_slider_wrap').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 800,
        slideMargin: 10,
        auto: true,
        pager: false,
        controls:false,

		onSliderLoad: function() {
            $('.snue_control_btn>.left_btn').click(function(e) {
                e.preventDefault();
                slider.goToPrevSlide();
            });
            $('.snue_control_btn>.right_btn').click(function(e) {
                e.preventDefault();
                slider.goToNextSlide();
            });
            $('.snue_control_btn>.pause_btn').click(function(e) {
				e.preventDefault();

				var isPaused = $(this).data('paused');

				if (isPaused) { 
					slider.startAuto();
					$(this).data('paused', false);
                    $(this).html('<i class="fa-solid fa-pause"></i>');
				} else { 
					slider.stopAuto();
					$(this).data('paused', true);
                    $(this).html('<i class="fa-solid fa-play"></i>');
				}
			});
		}
    });
});


// media

var mSlider;

$(document).ready(function() {
    mSlider = $('.m_slider').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 240,
        slideMargin: 10,
        moveSlides: 1,
        adaptiveHeight: true,
        auto: true,
        pager: false,
        controls:false,

		onSliderLoad: function() {
            $('.media_control>.left_btn').click(function(e) {
                e.preventDefault();
                mSlider.goToPrevSlide();
            });

            $('.media_control>.right_btn').click(function(e) {
                e.preventDefault();
                mSlider.goToNextSlide();
            });

			$('.media_control>.pause_btn').click(function(e) {
				e.preventDefault();

				var isPaused = $(this).data('paused');

				if (isPaused) { 
					mSlider.startAuto();
					$(this).data('paused', false);
                    $(this).html('<i class="fa-solid fa-pause"></i>');
				} else { 
					mSlider.stopAuto();
					$(this).data('paused', true);
                    $(this).html('<i class="fa-solid fa-play"></i>');
				}
                
			});
		}
    });
    
});



