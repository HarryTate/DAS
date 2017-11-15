
<?php include "includes/header.php"; ?>

<?php

if (isset($_POST['submit'])){
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];


    $email_from = 'website@droneaerialsurveying.com';
    $email_subject = "New Enquiry";
    $email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".


    $to = "clive.tate@droneaerailsurveying.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
}


?>


<div class= "contactcontent">

<section class = "container">
  <div class = "row">
    <figure class = "col-sm-6">


      <div class="contactform">
      <h2>
    Contact
</h2>

<form method="post" name="myemailform" action="contact.php">

Enter Name:<br> <input type="text" name="name"><br>
Enter Email Address:  <br>  <input type="text" name="email"><br>
Enter Message:<br>  <textarea name="message"></textarea><br>
<input type="submit" name="submit" value="Send Message">
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
