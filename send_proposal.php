
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<title>Sending Mail</title>
</head>
<body>

<!-- Reminder: Add the link for the 'next page' (at the bottom) --> 
<!-- Reminder: Change 'YourEmail' to Your real email --> 

<?php

$fr_visitor = $_POST['fr_name']; 
$fr_visitorphn = $_POST['fr_phn'];
$fr_age = $_POST['fr_age'];
$fr_qua = $_POST['fr_qua'];
$fr_mail = $_POST['fr_mail']; 
$fr_add =$_POST['fr_add'];
$fr_cntr_add =$_POST['fr_cntr_add'];
$fr_notes = $_POST['fr_notes'];

$subject = "Franchisee proposal from activecomputer.co.in"; 

$message = "
From: $fr_visitor\n
Mobile No.: $fr_visitorphn\n
Email: $fr_mail\n
Age: $fr_age\n
Qualification: $fr_qua\n
Address: $fr_add\n
Center Location: $fr_cntr_add\n
Message: $fr_notes \n
";

$from = "From: $fr_mail\r\n";


mail("activecomputer01@gmail.com", $subject, $message, $from);

?>

<h4 style="display:block; font-family:'Times New Roman', Times, serif; margin:10px auto; background-color:#FFFFCC; border:#000000 1px solid; border-radius:5px; width:300px; height:auto; padding:10px;" align="center">
<font color="#009933">-------Successfully Delivered------</font><br />
Thank You <br /><br />

Name : <?php echo $fr_visitor ?> <br />
Email : <?php echo $fr_mail ?> 
<br /> <br />

Details : <br /> 
<?php $nt = str_replace("\r", "<br/>", $fr_notes); 
echo $nt; ?>

<br /><br />
Redirecting in 3 seconds.......
</h4> 
<script language="javascript">
setTimeout(function()
{
window.location = "franchisee.html";
}, 5000);
</script>
</body>
</html>