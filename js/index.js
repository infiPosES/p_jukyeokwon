$(document).ready(function() {
    //===================== click =======================
    //map display
    $('.mapBtn').click(function() {
        let index = $('.mapBtn').index(this);
        $('.mapBtn').removeClass('on');
        $(this).addClass('on');
        $('.mCMap').css('display', 'none');
        $('.mCMap').eq(index).css('display', 'block');
    });
    //popup
    $('.popup_close').click(function() {
        $('.popup').css('display','none');
    });
    $('.closeBtn').click(function(){
        $('.gnb').removeClass('on');
    });
    //languageBtn click event
    $('.dpBtn').click(function(){
        $('.languageList').toggleClass('on');
    });
    $('.languageList > li').click(function() { 
      var contImgUrl = $(this).find('.contImg').attr('src'),
      contName = $(this).find('.contName').html();
      $('.dpBtn').find('.contImg').attr('src', contImgUrl);
      $('.dpBtn').find('.contName').html(contName);
      
      $('.languageList').toggleClass('on');
    })
    //index.html section2 이미지 클릭 이벤트
    $('.m2ImgLeft').click(function(){
        let bgUrl = $(this).css('background-image');
        $('.mainSec2Left').css('background-image', bgUrl);
    });
    $('.m2ImgRight').click(function(){
        let bgUrl = $(this).css('background-image');
        $('.mainSec2Right').css('background-image', bgUrl);
    });
    //mobile icon
    $('.icon').click(function(){
        $('.gnb').addClass('on');
    });



    //모바일 메뉴
    var burger = $('.menu-trigger');
    burger.each(function(index){
        var $this = $(this);
        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active-1');
            $('.m_gnb > ul').toggleClass('active');
            $('.m_languageBtn').toggleClass('active');
            $('.m_home').toggleClass('m_active');
            $('.section').toggleClass('m_active');
            $('.blk_bg').toggleClass('active');
        })
        $('.m_gnb > ul > li').click(function(){
          $(this).find('> a').toggleClass('active');
          $(this).find('> ul').slideToggle(); 
          $(this).siblings('li').find('> ul').slideUp();  
          $(this).siblings('li').find('> a').removeClass('active');
        })
    });
    $('.blk_bg').click(function(){
      burger.toggleClass('active-1');
      $('.m_gnb > ul').toggleClass('active');
      $('.m_languageBtn').toggleClass('active');
      $('.m_home').toggleClass('m_active');
      $('.section').toggleClass('m_active');
      $('.blk_bg').toggleClass('active');
    });
    //img click popup
    $('.b3_certli_ImgBox').click(function() {
        $('.popup').css('display','block');
        let imgUrl = $(this).children().attr('src');
        $('.b3_pop_cont_cert').attr('src', imgUrl);
    }); 
    $('.bttBtn').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
      });
    //================= scroll event ================
    let docHeight = document.body.offsetHeight;
    let onclassPos = docHeight / 3;
    let scrollPos;
    $(window).scroll(function() {
        scrollPos = $(document).scrollTop();
        scrollPos > onclassPos ? $('.bttBtn').fadeIn() : $('.bttBtn').fadeOut();
    });
    //================== 플러그인 ==================
    //brand3 slide(swiper)
    var mySwiper = new Swiper('.b3_slide0', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    var mySwiper2 = new Swiper('.b3_slide1', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    //main slide(swiper)
    var mySwiper3 = new Swiper('.notice', {
      loop: true,
      direction: 'vertical',
      autoplay: {  delay: 3000, }
  })
	AOS.init({
		easing: 'ease-out-back', 
		duration: 1000
	});
});

