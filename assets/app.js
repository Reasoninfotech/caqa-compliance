$(document).ready(function () {

  if($("body.temp_e_zines").length != 0){

    function clicktoappend() {
      $(document).one("click", "#view_more_scroll_btn", function(){
        $("#view_more_scroll_btn").hide();
        $("#view_more_scroll_btn").siblings("svg").show();
        scroll_to_data($("#view_more_scroll_btn").attr("data-index"));
      });
    }
    
    function scroll_to_data(index) {
      setTimeout(function() {
        fetch('/blogs/e_zines?page=' + index).then(responseText => responseText.text()).then((responseText) => {
          const html = new DOMParser().parseFromString(responseText, 'text/html');          
          if($(html).find('#e-zine-page .row').html()){
            $('#e-zine-page .row').append($(html).find('#e-zine-page .row').html());
            $("#view_more_scroll_btn").show();
            $("#view_more_scroll_btn").siblings("svg").hide();
            $("#view_more_scroll_btn").attr("data-index", parseInt(index) + 1);
            if($(html).find('#e-zine-page .row > div').length < 20){
              $(".view_more_scroll").remove();
            }
          }else{
            $(".view_more_scroll").remove();
          }       
          clicktoappend();
        });
      }, 1000);
    }
        
    $(window).scroll(function(){      
      if($("#view_more_scroll_btn").length != 0){
        var button_position = $("#view_more_scroll_btn").position().top - $(window).height();
        if($(window).scrollTop() > button_position){
          $("#view_more_scroll_btn").click();   
        }
      }
    });
    clicktoappend();    
  }

  $('.product_recommendations_slider').owlCarousel({
          loop: true,
          margin: 10,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          nav: false,
          dots: false,
          responsiveClass: true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:4
              }
          }
        });

  if($(".home_page-banner").length != 0){
   $('.home_page-banner').owlCarousel({
          loop: true,
          margin: 0,
          autoplay:true,
          autoplayTimeout:4000,
          autoplayHoverPause:true,
          nav: false,
          dots: false,
          responsiveClass: true,
          items:1,
        });
  }
    
  // Header
  function header_scroll() {
    var headertop = $(".fixed_header").height() + 15;
      if ($(document).scrollTop() >= headertop) {
          $(".fixed_header").addClass("header_fill");
      }
      else {
          $(".fixed_header").removeClass("header_fill");
      }
  }
  $(window).scroll(function () {
    header_scroll();
  });
  header_scroll();
  
  $('.header .header__navigation header-menu details').hover(function () {
    $(this).find('summary').click();
  });
  
  $(document).on("click", ".header .header__icon.header__icon--menu", function () {
      if ($("#Details-menu-drawer-container").attr("open") != "open") {
          $(".fixed_header").addClass("header_fill");
      }
      else {
        var headertop = $(".fixed_header").height() + 100;
        if ($(document).scrollTop() < headertop) {
            $(".fixed_header").removeClass("header_fill");
        }
      }
  });
  
  $('.logo_slider').owlCarousel({
      loop: true,
      margin: 10,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: {
          0: {
              items: 2
          },
          576: {
              items: 3
          },
          768: {
              items: 4
          },
          1200: {
              items: 5
          }
      }
  });
  
  $('.magazines-slider').owlCarousel({
      loop:true,
      nav: true,
      center:false,
      margin:20,
      autoWidth:false,
      touchDrag: true,
      mouseDrag: true,
      pagination:true,
      pullDrag: false,
      freeDrag: false,
      dots: false,
      smartSpeed: 4000,
      autoplay:true,
      autoplayTimeout: 7000,
      autoplaySpeed: 4000,
      autoplayHoverPause:true,
      items : 1,
      responsive:{
          0:{
              items:1,
              autoWidth:false,
              nav: false
          },
          800: {
              items: 2,
              autoWidth: false
          },
          1025: {
              items: 4,
              autoWidth: false
          }
      }
  });		
  
  $('.services-slider-main').owlCarousel({
      loop: true,
      nav: false,
      margin: 25,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive: {
          0: {
              items: 1,
              dots:false
          },
          576: {
              items: 2,
          },
          992: {
              items: 3,
          }
      }
  });
  
  $('.custom-featured-collection-main').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      navText: ["<svg aria-hidden='true' focusable='false' role='presentation' class='icon icon-caret' viewBox='0 0 10 6'>"
          + "<path fill-rule='evenodd' clip-rule='evenodd' d='M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z' fill='currentColor'></path>" +
          "</svg>", "<svg aria-hidden='true' focusable='false' role='presentation' class='icon icon-caret' viewBox='0 0 10 6'>" +
      "<path fill-rule='evenodd' clip-rule='evenodd' d='M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z' fill='currentColor'></path></svg>"],
      dots: false,
      responsive: {
          0: {
              items: 1
          },
          576: {
              items: 2
          },
          768: {
              items: 3
          },
          1440: {
              items: 4
          }
      }
  });
  
  $('.custom-featured-blog-main').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      navText: ["<svg aria-hidden='true' focusable='false' role='presentation' class='icon icon-caret' viewBox='0 0 10 6'>"
          + "<path fill-rule='evenodd' clip-rule='evenodd' d='M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z' fill='currentColor'></path>" +
          "</svg>", "<svg aria-hidden='true' focusable='false' role='presentation' class='icon icon-caret' viewBox='0 0 10 6'>" +
      "<path fill-rule='evenodd' clip-rule='evenodd' d='M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z' fill='currentColor'></path></svg>"],
      dots: false,
      responsive: {
          0: {
              items: 1
          },
          576: {
              items: 2
          },
          992: {
              items: 3
          }
      }
  });
  
  $('.custom-testi-main').owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      nav: false,
      dots: true,
      items: 1
  });
  
  
  $('.case-study-main').owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      nav: false,
      dots: true,
      items: 3,
      margin: 30,
      stagePadding: 20,
      responsive: {
          0: {
              items: 1
          },
          576: {
              items: 2
          },
          992: {
              items: 3
          }
      }
  });

  $('.video_section_swiper').owlCarousel({
      loop: false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      nav: true,
      dots: false,
      items: 2,
      margin: 20,
      responsive: {
          0: {
              items: 1,
              margin: 0
          },
          767: {
              items: 2
          }
      }
  });

// for external link in new tabs
$('.header .header__inline-menu a,.header .menu-drawer__navigation a,footer.footer a').each(function() {
    if (this.hostname === location.hostname || !this.hostname.length) {
    }else{
       $(this).attr('target','_blank') 
    }
});

  //   $( 'a' ).each(function() {
  //   if( location.hostname === this.hostname || !this.hostname.length ) {
  //       $(this).addClass('local');
  //   } else {
  //       $(this).addClass('external');
  //   }
  // });



  /* Cart terms checkbox */
  $(document).on('change','#main-cart-footer #cart-accept-terms-condition',function(){
    if($(this).is(':checked')){
     $('#main-cart-footer .cart__dynamic-checkout-buttons,#main-cart-footer .cart__checkout-button').removeClass('disabled');
    }else{
      $('#main-cart-footer .cart__dynamic-checkout-buttons,#main-cart-footer .cart__checkout-button').addClass('disabled');
    }
  });

  $(document).on('change','#cart-notification #cart-drawer-accept-terms-condition',function(){
    if($(this).is(':checked')){
     $('#cart-notification #cart-notification-form').removeClass('disabled');
    }else{
      $('#cart-notification #cart-notification-form').addClass('disabled');
    }
  });
  /* Cart terms checkbox */

  

});
