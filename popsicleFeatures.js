$(document).ready(function() {
  $(document).keydown(function(e) {
   
    if (e.keyCode == 65) {
      // $(".popsicle").css("opacity", 0.2);
      changeAnimDirection();
    }
  });
  
  function changeAnimDirection() {
 
    if ($(".popsicleAnimForward").css("animation-play-state") == 'running'){
      $(".popsicleAnimForward").css("animation-play-state", 'paused');
      $(".dripAnimForward").css("animation-play-state", 'paused');
      $(".repositionDripForward").css("animation-play-state", 'paused');
      $(".puddleAnimForward").css("animation-play-state", 'paused');
    } else {
      $(".popsicleAnimForward").css("animation-play-state", 'running');
      $(".dripAnimForward").css("animation-play-state", 'running');
      $(".repositionDripForward").css("animation-play-state", 'running');
      $(".puddleAnimForward").css("animation-play-state", 'running');
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
