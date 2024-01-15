// form validations
function blnk(an)
{
if(an=='visitor' && document.getElementById(an).value=="Name")
document.getElementById(an).value="";
if(an=='visitorphn' && document.getElementById(an).value=="Mobile No.")
document.getElementById(an).value="";
if(an=='visitormail' && document.getElementById(an).value=="Email Id")
document.getElementById(an).value="";
if(an=='visitorcity' && document.getElementById(an).value=="City")
document.getElementById(an).value="";
if(an=='notes' && document.getElementById(an).value=="Message")
document.getElementById(an).value="";
}
function fill(an)
{
if(an=='visitor' && document.getElementById(an).value=='')
document.getElementById(an).value='Name';
if(an=='visitorphn' && document.getElementById(an).value=='')
document.getElementById(an).value="Mobile No.";
if(an=='visitormail' && document.getElementById(an).value=='')
document.getElementById(an).value="Email Id";
if(an=='visitorcity' && document.getElementById(an).value=='')
document.getElementById(an).value="City";
if(an=='notes' && document.getElementById(an).value=='')
document.getElementById(an).value="Message";
}
function checkform()
{
if(document.getElementById('visitor').value=='Name')
{
alert("Please enter name");
document.getElementById('visitor').focus();
return false;
}
else
{
var chk=/^[a-z]{3,32}$|^[a-z]{2,20}\s{1,2}[a-z]{2,12}$/i
var mat=chk.test(document.getElementById('visitor').value);
if(mat==false)
{
alert("Please enter a valid name");
document.getElementById('visitor').focus();
return false;
}
}
if(document.getElementById('visitorphn').value=='Mobile No.')
{
alert("Please enter Mobile No.");
document.getElementById('visitorphn').focus();
return false;
}
else
{
var chk=/^\d{10}$/
var mat=chk.test(document.getElementById('visitorphn').value);
if(mat==false)
{
alert("Please enter a valid Mobile No.");
document.getElementById('visitorphn').focus();
return false;
}
}

if(document.getElementById('visitormail').value=='Email Id')
{
alert("Please enter Email Id");
document.getElementById('visitormail').focus();
return false;
}
else
{
var chk= /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/
var mat=chk.test(document.getElementById('visitormail').value);
if(mat==false)
{
alert("Please enter a valid Email Id");
document.getElementById('visitormail').focus();
return false;
}
}

if(document.getElementById('visitorcity').value=='City')
{
alert("Please enter City");
document.getElementById('visitorcity').focus();
return false;
}
else
{
var chk= /^[a-z]{3,15}$/i
var mat=chk.test(document.getElementById('visitorcity').value);
if(mat==false)
{
alert("Please enter a valid City");
document.getElementById('visitorcity').focus();
return false;
}
}
if(document.myform.attn.value=="Select Courses")
{
alert("Please select any course");
return false;
}

return true;
}

function srch1()
{
document.getElementById('srch').value="";	
}
function leave()
{
if(document.getElementById('srch').value=="")
{
document.getElementById('srch').value="Start Searching ...";
}
}

var domainroot="www.activecomputer.co.in";

function Gsitesearch(curobj){
curobj.q.value="site:"+domainroot+" "+curobj.srch.value
}

//franchisee form


function fr_blnk(an)
{
if(an=='fr_name' && document.getElementById(an).value=="Name")
document.getElementById(an).value="";
if(an=='fr_phn' && document.getElementById(an).value=="Mobile No.")
document.getElementById(an).value="";
if(an=='fr_age' && document.getElementById(an).value=="Age")
document.getElementById(an).value="";
if(an=='fr_qua' && document.getElementById(an).value=="Qualification")
document.getElementById(an).value="";
if(an=='fr_mail' && document.getElementById(an).value=="Email Id")
document.getElementById(an).value="";
if(an=='fr_add' && document.getElementById(an).value=="Address")
document.getElementById(an).value="";
if(an=='fr_cntr_add' && document.getElementById(an).value=="Center Location")
document.getElementById(an).value="";
if(an=='fr_notes' && document.getElementById(an).value=="Message")
document.getElementById(an).value="";
}
function fr_fill(an)
{
if(an=='fr_name' && document.getElementById(an).value=='')
document.getElementById(an).value='Name';
if(an=='fr_phn' && document.getElementById(an).value=='')
document.getElementById(an).value="Mobile No.";
if(an=='fr_age' && document.getElementById(an).value=='')
document.getElementById(an).value="Age";
if(an=='fr_qua' && document.getElementById(an).value=='')
document.getElementById(an).value="Qualification";
if(an=='fr_mail' && document.getElementById(an).value=='')
document.getElementById(an).value="Email Id";
if(an=='fr_add' && document.getElementById(an).value=='')
document.getElementById(an).value="Address";
if(an=='fr_cntr_add' && document.getElementById(an).value=='')
document.getElementById(an).value="Center Location";
if(an=='fr_notes' && document.getElementById(an).value=='')
document.getElementById(an).value="Message";
}
function fr_form()
{
if(document.getElementById('fr_name').value=='Name')
{
alert("Please enter name");
document.getElementById('fr_name').focus();
return false;
}
else
{
var chk=/^[a-z]{3,32}$|^[a-z]{2,20}\s{1,2}[a-z]{2,12}$/i
var mat=chk.test(document.getElementById('fr_name').value);
if(mat==false)
{
alert("Please enter a valid name");
document.getElementById('fr_name').focus();
return false;
}
}
if(document.getElementById('fr_phn').value=='Mobile No.')
{
alert("Please enter Mobile No.");
document.getElementById('fr_phn').focus();
return false;
}
else
{
var chk=/^\d{10}$/
var mat=chk.test(document.getElementById('fr_phn').value);
if(mat==false)
{
alert("Please enter a valid Mobile No.");
document.getElementById('fr_phn').focus();
return false;
}
}

if(document.getElementById('fr_age').value=='Age')
{
alert("Please enter your age.");
document.getElementById('fr_age').focus();
return false;
}
else
{
var chk=/^\d{2}$/
var mat=chk.test(document.getElementById('fr_age').value);
if(mat==false)
{
alert("Please enter a valid age");
document.getElementById('fr_age').focus();
return false;
}
}
if(document.getElementById('fr_qua').value=='Qualification')
{
alert("Please enter your qualification");
document.getElementById('fr_qua').focus();
return false;
}
else
{
var chk=/^[a-z]{2,20}$|^[a-z]{2,20}\s{1,2}[a-z]{2,12}$/i
var mat=chk.test(document.getElementById('fr_qua').value);
if(mat==false)
{
alert("Please enter a valid qualification");
document.getElementById('fr_qua').focus();
return false;
}
}

if(document.getElementById('fr_mail').value=='Email Id')
{
alert("Please enter Email Id");
document.getElementById('fr_mail').focus();
return false;
}
else
{
var chk= /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/
var mat=chk.test(document.getElementById('fr_mail').value);
if(mat==false)
{
alert("Please enter a valid Email Id");
document.getElementById('fr_mail').focus();
return false;
}
}

if(document.getElementById('fr_add').value=='Address')
{
alert("Please enter your address");
document.getElementById('fr_add').focus();
return false;
}
else
{
var chk= /[a-z0-9]{5,200}/i
var mat=chk.test(document.getElementById('fr_add').value);
if(mat==false)
{
alert("Please enter a valid address");
document.getElementById('fr_add').focus();
return false;
}
}

if(document.getElementById('fr_cntr_add').value=='Center Location')
{
alert("Please enter center location");
document.getElementById('fr_cntr_add').focus();
return false;
}
else
{
var chk= /[a-z0-9]{5,200}/i
var mat=chk.test(document.getElementById('fr_cntr_add').value);
if(mat==false)
{
alert("Please enter a valid center address");
document.getElementById('fr_cntr_add').focus();
return false;
}
}

return true;
}
