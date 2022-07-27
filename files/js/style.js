// -----Navbar-----

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//       document.getElementById("con").style.display = "none";
//   }
//   else {
//     document.getElementById("con").style.display = "block";
//   }
// }

// -----Home Slider-----
$(document).ready(function(){
  $('.banner-area').slick({
    autoplay: true, 
    autoplaySpeed: 800,
    dots: false,
    fade: true,
    cssEase: 'linear',
    arrows:false
  });
});

// $(document).ready(function(){
//   $('.banner-area-1').slick({
//     rtl: true,
//     slidesToShow: 1,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     cssEase: 'linear'
//   });
// });

$('.banner-area-1').slick(); 

// bedroom-button
 
 $('.bed-btn').click(function(e){
  e.preventDefault();
  $('.bed-btn').removeClass('active1');
  $(this).addClass('active1');
 });
// -----Menu Overlay-----

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// -----Side Carousal-----

$('.floorplan-slider').slick({
   dots: true,
   prevArrow: $('.prev'),
   nextArrow: $('.next'),
   infinite: false,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 5000,
});

// -----Tabs-----

$(document).ready(function() {
   
  $('.tabs a').click(function(e){
    e.preventDefault();
     $('.panel').hide();
     $('.tabs a.active').removeClass('active');
     $(this).addClass('active');
     
     var panel = $(this).attr('href');
     $(panel).fadeIn(1000);
     
     return false;  // prevents link action
    
  });  // end click 

     $('.tabs li:first a').click();
     
}); 

// -----Gallery-----

document.querySelectorAll('.item img').forEach((img) => {
  // Ideally, we would know the image size or aspect ratio beforehand...
  if (img.naturalHeight) {
    setItemRatio.call(img);
  } else {
    img.addEventListener('load', setItemRatio);
  }
});

function setItemRatio() {
    this.parentNode.style.setProperty('--ratio', this.naturalHeight / this.naturalWidth);
}

  //=============== 


$(document).ready(function() {
    
    //alert('here');
  
  $('.tabs a').click(function(){
  
     $('.panel').hide();
     $('.tabs a.active').removeClass('active');
     $(this).addClass('active');
     
     var panel = $(this).attr('href');
     $(panel).fadeIn(1000);
     
     return false;  // prevents link action
    
  });  // end click 

     $('.tabs li:first a').click();
     
}); // end ready




