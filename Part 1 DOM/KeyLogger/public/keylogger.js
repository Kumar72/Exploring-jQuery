$(document).ready(function(){
console.log('loaded key');
config();
});

var config =function () {
	$(document).on('keydown', function(e){

		var store = $('#down').text();

		if(e.keyCode > 47 && e.keyCode < 91 || e.keyCode == 32 || e.keyCode == 188 || e.keyCode == 190) {
			$('#down').text(store + e.key);
		}
		else if(e.keyCode == 8) {
			$('#down').text().ex(-1);
		}
	});
}
