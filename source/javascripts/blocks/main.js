 $(document).ready(function() {
     $('#listitems').paginate({itemsPerPage: 5});

     $('.hamburger').click(function(){
         var side_nav = $("nav");
         var target_margin = 0;
         if(side_nav.hasClass("open")){
           target_margin = -600;
         } else {
           target_margin = 0;
         }
         TweenLite.to(side_nav, 0.6, {
                       marginRight: target_margin, 
                       ease: Power4.easeOut,
                       onComplete: toggleOpen,
                       onCompleteParams: [side_nav]
                      });
         //$('nav').animate({marginLeft: 0}, 400);
     });

     function toggleOpen(_target) {
       _target.toggleClass("open");
     }
 });


