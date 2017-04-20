$(document).ready(function(){
console.log('loaded');
removeconfig();
});

var removeconfig = function() {
	$list = $('#list');
	$list.remove();

	$list2 = $('#list2');
	$list2.children().eq(1).empty();
}
