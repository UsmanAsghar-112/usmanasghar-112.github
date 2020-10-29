const responsive={
 0:{
  items:1
 },
 320 :{
  items:1
 },
 560:{
  items:2
 },
 960:{
  items : 3
 }
}
$(document).ready(function(){
 $nav =$('.nav');
 $toggleCollapse =$('.toggle-collapse');
 // Click event on toggle menu
 $toggleCollapse.click(function(){
  $nav.toggleClass('collapse')
 })
 AOS.init();
})

 // owl-carousel
 $('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  autoplaytimeout:3000, 
  dots:false,
  nav:true,
  navText:[$('.owl-nav-prev'),$('.owl-nav-next')],
   responsive:responsive

   }
   );
   
   // click to scroll top
   $('.fa-2x').click(function(){
    $('html,body').animate({
     scrollTop:0
    },1000);
   })
   // AOA instance
   