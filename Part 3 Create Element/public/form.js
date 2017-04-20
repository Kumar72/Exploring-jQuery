$(document).ready(function(){
console.log('loaded');
configform();
});

var configform = function() {
	var $form = $('<form>');
		$form.attr('name', 'New Form');

	var $input1 = $('<input>');
		$input1.attr('type','text');
		$input1.attr('id','fName');
		$input1.attr('name','fName');
		$input1.attr('placeholder','First Name');
	var $input2 = $('<input>');
		$input2.attr('type','text');
		$input2.attr('id','lName');
		$input2.attr('name','lName');
		$input2.attr('placeholder','Last Name');
	var $input3 = $('<input>');
		$input3.attr('type','number');
		$input3.attr('id','age');
		$input3.attr('name','age');
		$input3.attr('placeholder','21');

	$form.append($input1, $input2, $input3);

	var $submit = $('<input>');
		$submit.attr('name','submit');
		$submit.attr('type','submit');
		$submit.attr('value','Post Name');

	$form.append($submit);

	$('body').append($form);
}
