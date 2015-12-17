// Get dirty

$(document).ready(function() {
  console.log('--> cart.js');
  $(window).trigger('resize');
});

// Flowtype Init
// http://simplefocus.com/flowtype/
$('body').flowtype({
   minimum   : 320,
   maximum   : 1980,
   minFont   : 10,
   maxFont   : 20,
   fontRatio : 30
});

// Header Hover Peek
var header = $('header');
header.each(function(index, element){
  //Vars
  var hamburg = $('#hamburg');
  var tl = new TimelineLite({paused:true});
  
  //Main Animations
  tl.to(header, .25, { height:150, ease: Power1.easeInOut});
  tl.to(hamburg, .4, { color:"#000",borderColor:"#000", ease: Power3.easeInOut}, "-=0.25");
  
  //In-Page Animations
    //vars
    var homeHero = $('#home .hero h4');
    tl.to(homeHero, .2, { height:0,overflow:'hidden', margin: "0 auto", autoAlpha:0, ease: Power3.easeInOut}, "-=0.25");
  //Export
  header.animation = tl;
});

//Window Width
$(window).resize(function() {
  ww = window.innerWidth;
  //Desktop Header Functions
  if(ww => 767) {
    $('.headTrigger').click(function() {
      if(!$(this).hasClass('active')) {
        $(this).addClass('active');
        header.animation.play()
      } else {
        $(this).removeClass('active');
        header.animation.reverse();
      }
    });
  }
  if(ww <= 766 && $('.headTrigger').hasClass('active')) {
    $('.headTrigger').removeClass('active');
    header.animation.to(header, .25, { height:150, ease: Power1.easeInOut});
  header.animation.to(hamburg, .4, { color:"#000",borderColor:"#000", ease: Power3.easeInOut}, "-=0.25");
  }
})