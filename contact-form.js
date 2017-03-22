$(document).ready(function() {	
	
	// submit form using $.ajax() method
	
	$('#reg-form').submit(function(e){
	e.preventDefault(); // Prevent Default Submission
		$.ajax({
			url: 'submit.php',
			type: 'POST',
			data: $(this).serialize() // it will serialize the form data
		})
		.done(function(data){
			$('#form-content').fadeOut('fast', function(){
				$('#form-content').fadeIn('fast').html(data);
			});
		})
		.fail(function(){
			alert('Ajax Submit Failed ...');	
		});
		});	
		});	

	