$(document).ready(function(){
console.log('loaded');
config();
	// $("#myDiv").on('click', function(e){
	// 	console.log('clicked');
	// });
});

var config =function () {
	$("#myDiv").on('click', function(e){
		var response = confirm('clicked')

		if(response) {
			var click = prompt('clicked');
			alert('button has been clicked');
		}
		else {
			alert('no click');
		}
	});

}
