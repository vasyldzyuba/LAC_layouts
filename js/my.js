$('.ham').on('click', function(){
	$('.little_menu').fadeIn(500);
})
$('body').on('click', function(e){
	if(e.target.className != 'ham'){
		$('.little_menu').fadeOut(500);
	}
})
setInterval(function(){
	if($('body').width() >= 750){
		$('.little_menu').fadeOut();
	}
}, 20);

