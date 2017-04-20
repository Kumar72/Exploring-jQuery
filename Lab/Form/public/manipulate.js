$(document).ready(function(){
console.log('loaded');
formConfig();
});


var formConfig = function () {
	var $form = $(contact);

	$form.on('submit', function(e) {
		e.preventDefault();

		var $header = $('<h1>')
		var $input1 = $('<p>');
			$input1.text($(contact.fName).val());
		var $input2 = $('<p>');
			$input2.text($(contact.lName).val());
		var $input3 = $('<p>');
			$input3.text($(contact.street).val());
		var $input4 = $('<p>');
			$input4.text($(contact.city).val());
		var $input5 = $('<p>');
			$input5.text($(contact.state).val());
		var $input6 = $('<p>');
			$input6.text($(contact.zip).val());




		if (verifyFormData($(contact.fName).val(), $(contact.lName).val(), $(contact.street).val(), $(contact.city).val(), $(contact.state).val(), $(contact.zip).val())) {



			$('body').append('----- SUBMITED FORM -----')
			$('body').append($input1, $input2, $input3, $input4, $input5, $input6);



			contact.reset();
		}
		else {
		}
	});

	var verifyFormData = function(fname,lname,street,city,state,zip) {
		var $errorArray = [];
		if(!fname && !lname && !street && !city && !state && !zip) {
			$errorArray.push("Form Empty");
			alert("Form Empty")
		}
		else {
			if(!fname){
				$errorArray.push("First Name Field Empty");
				// $('body').append($errorArray);
				alert("First Name Field Empty")
			}
			if(!lname){
				$errorArray.push("Last Name Field Empty");
				alert("Last Name Field Empty")
			}
			if(!street) {
				$errorArray.push("Street Field Empty");
				alert("Street Field Empty")
			}
			if(!city) {
				$errorArray.push("City Field Empty")
				alert("City Field Empty")
			}
			if(!state) {
				$errorArray.push("State Field Empty")
				alert("State Field Empty")
			}
			if(!zip || zip.length != 5
				|| isNaN(parseInt(zip))) {
				if(!zip) {
				$errorArray.push("Zip Code Field Empty")
				alert("Zip Code Field Empty")
				}
				else if(zip.length >5) {
					$errorArray.push("Too Many Numbers For A Zip Code")
					alert("Too Many Numbers For A Zip Code")
				}
				else if(zip.length <5) {
					$errorArray.push("Not Enough Numbers For A Zip Code")
					alert("Not Enough Numbers For A Zip Code")
				}
				else {
					$errorArray.push("Please Enter A Proper Zip Code")
					alert("Please Enter A Proper Zip Code")
				}
			}
		}

		if($errorArray.length === 0) {
			return true;
		}
		else {
			$('body').append('---- ERRORS -----')
			$errorArray.forEach(function(v,i,a){
				var $li = $('<li>')
				var $ul = $('<ul>')
				$li.text(v);
				$ul.append($li);
				$('body').append($ul);
			});

			return false;
		}
	}

}
