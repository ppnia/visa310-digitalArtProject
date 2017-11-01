$(document).ready(function() {
   
  $(document).keydown(function(e) {
   
    if (e.keyCode == 82) {
      // $(".popsicle").css("opacity", 0.2);
      changeAnimDirection();
    } else if (e.keyCode == 80){
        pauseAnim();
    }
  });
    

//  
//    function changeDripDirection() {
//        if ($(".dripAnimForward").css("animation-direction") == 'normal'){
//            $(".dripAnimForward").css("animation-direction", 'reverse');
//        } else {
//            $(".dripAnimForward").css("animation-direction", 'normal');
//        }
//    }
//  
  function pauseAnim() {
 
    if ($(".popsicleAnimForward").css("animation-play-state") == 'running'){
      $(".popsicleAnimForward").css("animation-play-state", 'paused');
      $(".dripAnimForward").css("animation-play-state", 'paused');
      $(".repositionDripForward").css("animation-play-state", 'paused');
      $(".puddleAnimForward").css("animation-play-state", 'paused');
        $(".popsicleFillingAnim").css("animation-play-state", 'paused');
    } else {
      $(".popsicleAnimForward").css("animation-play-state", 'running');
      $(".dripAnimForward").css("animation-play-state", 'running');
      $(".repositionDripForward").css("animation-play-state", 'running');
      $(".puddleAnimForward").css("animation-play-state", 'running');
        $(".popsicleFillingAnim").css("animation-play-state", 'running');

    }   
    
  }
  
 
    
      function changeAnimDirection() {
 
    if ($(".popsicleAnimForward").css("animation-direction") == 'normal'){
      $(".popsicleAnimForward").css("animation-direction", 'reverse');
      $(".dripAnimForward").css("animation-direction", 'reverse');
      $(".repositionDripForward").css("animation-direction", 'reverse');
      $(".puddleAnimForward").css("animation-direction", 'reverse');
        $(".popsicleFillingAnim").css("animation-direction", 'reverse');
    } else {
      $(".popsicleAnimForward").css("animation-direction", 'normal');
      $(".dripAnimForward").css("animation-direction", 'normal');
      $(".repositionDripForward").css("animation-direction", 'normal');
      $(".puddleAnimForward").css("animation-direction", 'normal');
        $(".popsicleFillingAnim").css("animation-direction", 'normal');
    }   
    
  }
    
  $(".popsicle").hover(function () { // on mouse enter
        $(".popsicle").css("opacity", 0.2);
        $(".drip").css("opacity", 0.2);
           $(".puddle").css("opacity", 0.2);
    }, function () { // on mouse leave
        $(".popsicle").css("opacity", 1);
          $(".drip").css("opacity", 1);
          $(".puddle").css("opacity", 1);
    });
});

 

//https://premiumcoding.com/css3-tricks-falling-leaves-css/

//https://codepen.io/caterdesigns/pen/ZYpQqV

//https://stackoverflow.com/questions/27962653/css-animation-onclick-and-reverse-next-onclick
