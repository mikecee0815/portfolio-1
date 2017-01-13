jQuery(document).ready(function($) {
	var aboutLeft = $('.about_left  p ');
		
	var aboutRight = $('.about_right ');

	aboutLeft.html( function(){ 

		return  "Hello,My name is michael.I am a self-taught web Developer/programmer. I am available for website design and development work, currently i am learning the AngularJS and also Bootstrap3 framework. I continue to  grow my skills set daily and my main goal is to be a full stack web programmer.";}
		);
	aboutRight.html("<p>Im also a Musician who enjoys playing in public. When im not gigging,im most likely coding a webpage.</p>");

	$('.location').html('<h3>Long Island, New York</h3>')
	$('.social-media-links h3').html('Find me on the web')
	
});

