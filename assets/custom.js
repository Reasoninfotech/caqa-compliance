$(document).ready(function(){

   if($(".scrollspy_new").length == 0){
    let sec = document.querySelectorAll('.blog-right-scrollspy div');
    let links = document.querySelectorAll('.blog-left-scrollspy-ol a');  
    window.onscroll = () => {
      sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 60;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
    
        if(top >= offset && top < offset + height){
          links.forEach(link => {
            link.classList.remove('active');
            // $('.blog-left-scrollspy-ol a').parent('li').removeClass('active');
            
            document.querySelector('.blog-left-scrollspy-ol a[href*=' + id + ']').classList.add('active');
            // $('.blog-left-scrollspy-ol a[href*=' + id + ']').parent('li').addClass('active');
          })
        }
      })
    };
    $(".artical_content_metafeild").css("display", "flex");
  }else{
  setInterval(function () {
    if($(".blog-left-scrollspy-ol > a").length == 1){
      var $i = 1;
      var $itemh2 = $(".scrollspy_new .article-template__content h2").length;
      if($itemh2 != 1){
        $(".scrollspy_new .article-template__content h2:not(.article_meta_title)").each(function(){      
          if($itemh2 < $i){
            return false;
          }else{
            $(this).attr("id", "scrollspy_" + $i).attr("class", "article_meta_title");
            $(".blog-left-scrollspy-ol").append('<a href="#scrollspy_' + $i + '" class="">' + $(this).text() + '</a>');
            $i++;
          }
        });
      }else{
        $(".artical_content_metafeild").addClass("notitle");
      }
      $(".artical_content_metafeild").css("display", "flex");
      // else{
      //   var $j = 1;
      //   var $itemstrong = $(".scrollspy_new .article-template__content > strong").length;      
      //   if($itemstrong > 1){
      //     $(".scrollspy_new .article-template__content > strong").each(function(){      
      //       if($itemstrong < $j){
      //         return false;
      //       }else{
      //         $(this).attr("id", "scrollspy_" + $j).attr("class", "article_meta_title");
      //         $(".blog-left-scrollspy-ol").append('<a href="#scrollspy_' + $j + '" class="">' + $(this).text() + '</a>');
      //         $j++;
      //       }
      //     });
      //   }else{
      //     var $k = 1;
      //     var $itemenderstrong = $(".scrollspy_new .article-template__content .entry-content > p > strong").length;
      //     if($itemenderstrong > 1){
      //       console.log($itemenderstrong + " -- " + $k);
      //       $(".scrollspy_new .article-template__content .entry-content > p").each(function(){      
      //         if($itemenderstrong < $k){
      //           return false;
      //         }else{
      //           if($(this).find("strong").length != 0){
      //             $(this).find("strong").attr("id", "scrollspy_" + $k).attr("class", "article_meta_title");
      //             $(".blog-left-scrollspy-ol").append('<a href="#scrollspy_' + $k + '" class="">' + $(this).text() + '</a>');
      //             $k++;
      //           }
      //         }
      //       });
      //     }else{
      //       var $itemenderb = $(".scrollspy_new .article-template__content .entry-content > p > b").length;
      //       if($itemenderb > 1){
      //         console.log($itemenderb);
      //         $(".scrollspy_new .article-template__content .entry-content > p").each(function(){      
      //           if($itemenderb < $k){
      //             return false;
      //           }else{
      //             if($(this).find("b").length != 0){
      //               $(this).find("b").attr("id", "scrollspy_" + $k).attr("class", "article_meta_title");
      //               $(".blog-left-scrollspy-ol").append('<a href="#scrollspy_' + $k + '" class="">' + $(this).text() + '</a>');
      //               $k++;
      //             }
      //           }
      //         });
      //       }else{        
      //         $(".artical_content_metafeild").addClass("notitle");
      //       }
      //     }
      //   }      
      // }      
    }else{
      $(".artical_content_metafeild").css("display", "flex");
    }
  }, 500);  
  // let $sectionspstrong = $('.blog-right-scrollspy .article-template__content .entry-content > p > strong');
  // let $sectionspb = $('.blog-right-scrollspy .article-template__content .entry-content > p > b');  
  let $sections = $('.blog-right-scrollspy .article-template__content h2');
  $(window).on('scroll', function() {    
    if($sections.length != 0){
      $sections.each(function() {
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 60;
        let height = $(this).outerHeight();
        let id = $(this).attr('id');
        if (top >= offset && top < offset + height) {        
          $('.blog-left-scrollspy-ol a').removeClass('active');
          $(`.blog-left-scrollspy-ol a[href*="${id}"]`).addClass('active');
        }
      });
    }
  });
  
  }
  
   
});