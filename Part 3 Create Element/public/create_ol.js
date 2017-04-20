$(document).ready(function(){
console.log('loaded');
listconfig();
});

var listconfig = function() {
	var $fruits = [
		'mango',
		'banana',
		'apple',
		'strawberry'
	];

	var $ol = $('<ol>');
	$ol.append('My Favorite Fruits');

	$fruits.forEach(function(value,index,array) {
		var $li = $('<li>');
		$li.text(value);
		$ol.append($li);
	})

	$('body').append($ol);
}
