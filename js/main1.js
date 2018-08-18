$(document).ready(function() {

	

  $("div.blog-post").hover(
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    },
    function() {
        $(this).find("div.content-hide").slideToggle("fast");
    }
  );

  $('.flexslider').flexslider({
		prevText: '',
		nextText: ''
	});

  $('.testimonails-slider').flexslider({
    animation: 'slide',
    slideshowSpeed: 5000,
    prevText: '',
    nextText: '',
    controlNav: false
  });

  $(function(){

  // Instantiate MixItUp:

  $('#Container').mixItUp();

  

  $(document).ready(function() {
      $(".fancybox").fancybox();
    });

  });


});

var index = 1;
  sliderImages(index);

  function plusIndex(n){
    sliderImages(index += n);
  }

  

  function sliderImages(n){
    var i;
    var x = document.getElementsByClassName("slides");
    if( n > x.length){ index = 1};
    if(n < 1 ){ index = x.length};
    for(i=0;i<x.length;i++)
    {
      x[i].style.display = "none";
    }

    x[index-1].style.display = "block";
    }

