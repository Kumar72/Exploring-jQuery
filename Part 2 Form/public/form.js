$(document).ready(function(){
console.log('loaded');
config();
});

var config = function() {
// var person = {}
// 	var $formVal = $(testForm).serializeArray();
// 	$.each($formVal, function() {
// 		person[this.name] = this.value;
// 	});

$(testForm.submit).click(function(e) {
	 e.preventDefault();

	 console.log($(testForm.username).val());
	 console.log($(testForm.password).val());
	 console.log($(testForm.email).val());

	 var $div = $('<div>');
	 $div.text('Hello World');
	 $di.attr('id','hello')

	 $('body').append($div);

	testForm.reset();
});


}
