$(document).ready(function(){
console.log('loaded');
select();
});

var select =function () {
	$("#switch").on('click', function(e){
		console.log('clicked');
		if($('#switch').text() == 'OFF') {
			$(this).text('ON');
		}
		else {
			$(this).text('OFF');
		}
	});
}
