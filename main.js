$(function(){
	//Animate box div
	$('.box').fadeIn(3000);

	$('.box').on('click', function(){
		$('.group').show();
	});
	//Showing click events
	 $('.box').mouseover(function(){
    	$('.click').show();
    });	

    $('.box').mouseleave(function(){
    	$('.click').hide();
    });

	//Animate box div scroll to group
	$('.box').click(function(){

        $('html, body').animate({
            scrollTop: $('.group').offset().top
        }, 2000);
  
    });

	//Show footer
     $('.group p').on('click', function(){
		$('.footer').show();  
	});	
     //Animate group to footer on click
     $('.group p').click(function(){

        $('html, body').animate({
            scrollTop: $('.footer').offset().top
        }, 2000);
  
    });
     //Animate back to the top
     $('h6').click(function(){

        $('html, body').animate({
            scrollTop: $('.box').offset().top
        }, 2000);

      });   

     $('.login').on('click', function(){
     	$('.form').show();
     });
   

     

	var cart = {};

});