AOS.init();

// fullmenu.active
$(document).ready(function() {
    var initialWindowWidth = window.innerWidth;

    $('.icon_menu').on('click', function() {
        if (initialWindowWidth <= 1023) {
            $('.fullmenu_wrap2').css('display', 'block');
        } else {
            $('.fullmenu_wrap').css('display', 'block');
        }
        $('body').css('overflow', 'hidden');
    });

    $('.fullmenu_wrap>.fa-xmark, .fullmenu_wrap>.close_btn').on('click', function() {
        $('.fullmenu_wrap, .fullmenu_wrap2').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
    
    $('.fullmenu_wrap2 .fullmenu_dep1>li').on('click', function(e) {
        e.preventDefault();
        $(this).find('.fullmenu_dep2').slideToggle();
    });
    $('.fullmenu_wrap2 .fullmenu_dep2>li').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).find('.fullmenu_dep3').slideToggle();
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
    closeBtn.addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        gnbBg.style.display = 'none';
    })
    
});

// popup
const closeBtn = document.querySelector('.close_btn');
    const popup = document.querySelector('.popup');
    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

// sideNav
$(document).ready(function(){
    $('.open_btn').on('click',function(){
        $('.sideNav').css('display' , 'block');
    });
    $('.sideNav>.close_btn').on('click',function(){
        $('.sideNav').css('display' , 'none');
    });
    $(".sideNav>.bot").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $(".sideList > ul > li").click(function(e){
        e.stopPropagation(); // 이벤트 버블링을 방지합니다.
        $(".side_2dep").hide();
        $(this).find('.side_2dep').show(); // 해당하는 .side_2dep 요소의 표시 상태를 변경(toggle)합니다.
    });
    
})



// mainVisual
$(function () {
	var visual = $('.visual_bg>li'); // 슬라이드 이미지
	var button = $('#buttonList>li'); // 버튼
	var leftBtn = $('.btnImg .prev');
	var rightBtn = $('.btnImg .next');
	var current = 0; // 현재 보이는 이미지
	var setIntervalId; // clearInterval을 쓰기 위해 변수명이 필요함

	var counterEl = '<div class="counter">1';
	$('.main_visual').append(counterEl);
	var counter = $('.counter');

	timer();
	function timer() {
		setIntervalId = setInterval(function () {
			var prev = visual.eq(current);
			var pn = button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');
			current++;
			if (current == visual.length) current = 0;
			var next = visual.eq(current);
			var pnn = button.eq(current);
			move(next, '100%', 0);
			pnn.addClass('on');
			cnt(current);
		}, 3000);
	}});

	function move(tg, start, end) {
		tg.css('left', start).stop().animate({ left: end }, { duration: 500, ease: 'easeOutCubic' });
	}

	function cnt(num) {
		counter.html(`${num + 1}`);
	}


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

// calender

$(document).ready(function() {
    var slider = $('.calender_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite:true,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.calender_slider_btn>.left_btn').on('click', function(e) {
        e.preventDefault();
        slider.slick('slickPrev');
    });

    $('.calender_slider_btn>.right_btn').on('click', function(e) {
        e.preventDefault();
        slider.slick('slickNext');
    });

    $('.calender_slider_btn>.pause_btn').on('click', function(e) {
		e.preventDefault();

		var isPaused = $(this).data('paused');

		if (isPaused) { 
			slider.slick('slickPlay');
			$(this).data('paused', false);
            $(this).html('<i class="fa-solid fa-pause"></i>');
		} else { 
			slider.slick('slickPause');
			$(this).data('paused', true);
            $(this).html('<i class="fa-solid fa-play"></i>');
		}
	});
});


// announcement


var announceSlider;

$(document).ready(function() {
    announceSlider = $('.announcement_slider').bxSlider({
        auto: true,

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
		},
		
        onSlideAfter: function($slideElement, oldIndex, newIndex) { // 추가
            $(".page > .current").text(newIndex + 1); // 추가
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

function loadSlider() {
    if(slider !== undefined){
        slider.destroySlider();
    }

    var slideCount;

    if($(window).width() <= 1023){
        slideCount = 2;
    } else {
        slideCount = 4;
    }

    slider = $('.edu_slider_wrap').bxSlider({
        minSlides: slideCount,
        maxSlides: slideCount,
        moveSlides: 1,
        slideWidth: 800,
        slideMargin: 10,
        auto: true,
        pager: false,
        controls: false,


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
};
$(document).ready(function() {
    loadSlider();

    $(window).resize(function() {
        loadSlider();
    });
});



// media

var mSlider;

function loadMSlider() {
    if(mSlider !== undefined){
        mSlider.destroySlider();
    }

    var slideCount;

    if($(window).width() <= 1023){
        slideCount = 1;
    } else {
        slideCount = 3;
    }

    mSlider = $('.m_slider').bxSlider({
        minSlides: slideCount,
        maxSlides: slideCount,
        moveSlides: 1,
        slideWidth: 240,
        slideMargin: 10,
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
    
};
$(document).ready(function() {
    loadMSlider();

    $(window).resize(function() {
        loadMSlider();
    });
});



