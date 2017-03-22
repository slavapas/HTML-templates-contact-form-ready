<?php

if( $_POST ){
	
	$name = $_POST['txt_fullname'];
	$email = $_POST['txt_email'];
	$phone = $_POST['txt_phone'];
	$message = $_POST['txt_message'];
	
	//prepair greetings
	$greetings = "You've received a message";
	// prepare email subject text
	$subject .= "Name: ";
	$subject .= $name;
	$subject .= "\n";
	 
	$subject .= "Email: ";
	$subject .= $email;
	$subject .= "\n";
	
	$subject .= "Phone: ";
	$subject .= $phone;
	$subject .= "\n";	
	
	$subject .= "Message: ";
	$subject .= $message;
	$subject .= "\n";
	mail("pascaruv@gmail.com",$greetings, $subject);
	?>
    
    <p>Thanks a lot. We'll get in touch with you soon.</p>
    <?php
	
}