
<?php include "includes/header.php"; ?>

<?php

if (isset($_POST['submit'])){
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];


    $email_from = '';
    $email_subject = "New Enquiry";
    $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".


    $to = "";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
}


?>

<?php
/*
$to       = 'harryjamestate@gmail.com';
$subject  = 'New Contact Enquiry - Drone Aerial Surveying';
$message  = 'Hi, you just received an email using sendmail!';
$headers  = 'From:harryjamestate@gmail.com' . "\r\n" .
            'MIME-Version: 1.0' . "\r\n" .
            'Content-type: text/html; charset=utf-8';


if(mail($to, $subject, $message, $headers))
    echo "Email sent";
else
    echo "Email sending failed";
    */
?>





<div class= "contactcontent">

<section class = "container">
  <div class = "row">
    <figure class = "col-sm-6">


      <div class="contactform">
      <h2>
    Contact
</h2>

<form method="post" name="myemailform" action="formpractise.php">

Enter Name:<br> <input type="text" name="name"><br>
Enter Email Address:  <br>  <input type="text" name="email"><br>
Enter Message:<br>  <textarea name="message"></textarea><br>
<input type="submit" name="submit" value="Send Form">
</form>
</div>
    </figure>
<div class="contact-page-map">
    <figure class = "col-sm-6">


          <div id="map">Map</div>
      </div>
    </div>
    </figure>
      </div>
    </section>
  </div>




<?php include "includes/footer.php"; ?>
