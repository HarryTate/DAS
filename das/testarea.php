<?php include "includes/header.php"; ?>



<br clear="all">

<br>
<br>
<br>
<br>
<br>
<?php

  $name = "";
  $email= "";
  $message= "";


if (isset($_POST['submit'])){
require '../../configure.php';
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  echo $name;
  echo $email;
  echo $message;
}
?>
<div class="row">
  <div class = "col-sm-6">
<form id="contact_form" action="testarea.php" method="POST" >
   <label for="name">Name</label><br/>
   <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
   <label for="email">Email</label><br/>
   <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
   <label for="message">Message</label><br />
   <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
 <input id="submit" type="submit" Name="submit" value="Send email" />
</form>
</div>
</div>
<div class = "col-sm-6">
</div>

<?php include "includes/footer.php"; ?>
