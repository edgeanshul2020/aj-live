
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<title>Sending Mail</title>
</head>
<body>



<?php

$ip = $_POST['ip']; 
$httpref = $_POST['httpref']; 
$httpagent = $_POST['httpagent']; 
$visitor = $_POST['visitor']; 
$visitorphn = $_POST['visitorphn'];
$visitormail = $_POST['visitormail']; 
$visitorcity =$_POST['visitorcity'];
$attn = $_POST['attn'];
$notes = $_POST['notes'];

$attn = $attn ; 
$subject = "Enquiry From activecomputer.co.in"; 

$notes = stripcslashes($notes); 

$message = "
From: $visitor\n
Email: $visitormail\n
Mobile No.: $visitorphn\n
Course: $attn \n
Message: $notes \n
Additional Info: IP = $ip \n
Browser Info: $httpagent \n
Referral: $httpref \n
";

$from = "From: $visitormail\r\n";


mail("activecomputer01@gmail.com", $subject, $message, $from);

?>

<h4 style="display:block; font-family:'Times New Roman', Times, serif; margin:10px auto; background-color:#FFFFCC; border:#000000 1px solid; border-radius:5px; width:300px; height:auto; padding:10px;" align="center">
<font color="#009933">-------Successfully Delivered------</font><br />
Thank You <br /><br />

Name : <?php echo $visitor ?> <br />
Email : <?php echo $visitormail ?> 
<br /> <br />

Details : <br /> 
<?php $nt = str_replace("\r", "<br/>", $notes); 
echo $nt; ?>

<br /><br />
Redirecting in 3 seconds.......
</h4> 
<script language="javascript">
setTimeout(function()
{
window.location = "index.html";
}, 5000);
</script>
</body>
</html>