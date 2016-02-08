<?php
	require_once "../vendors/PHPMailer-master/PHPMailerAutoload.php";

	$data = array();

	$sender_name = isset($_POST['sender_name']) ? $_POST['sender_name'] : '';
	$sender_email = isset($_POST['sender_email']) ? $_POST['sender_email'] : '';
	$sender_tel = isset($_POST['sender_tel']) ? $_POST['sender_tel'] : '';
	$sender_message = isset($_POST['sender_message']) ? $_POST['sender_message'] : '';

	$mail = new PHPMailer;

	//Enable SMTP debugging. 
	$mail->SMTPDebug = false;                               
	//Set PHPMailer to use SMTP.
	$mail->isSMTP();            
	//Set SMTP host name                          
	$mail->Host = "smtp.gmail.com";
	//Set this to true if SMTP host requires authentication to send email
	$mail->SMTPAuth = true;                          
	//Provide username and password     
	$mail->Username = ******;                 
	$mail->Password = *****;                           
	//If SMTP requires TLS encryption then set it
	$mail->SMTPSecure = "tls";                           
	//Set TCP port to connect to 
	$mail->Port = 587;                                   

	$mail->From = $sender_email;
	$mail->FromName = $sender_name;


	$mail->addAddress("vsharma6@illinois.edu", "Vibhu Sharma");

	$mail->isHTML(true);

	$mail->Subject = "Message Sent from jcrageralternatives.com by: ".$sender_name;
	$mail->Body = "<p>Name: ".$sender_name."</p><p>Email Provided: ".$sender_email."</p><p>Phone Number Provided: ".$sender_tel."</p><p>Message: '".$sender_message."'</p>";
	$mail->AltBody = $sender_message;

	header('Content-Type: application/json');

	if(!$mail->send()) 
	{
	    $data["success"] = false;
	} 
	else 
	{
	    $data["success"] = true;
	}

	echo json_encode($data);
?>