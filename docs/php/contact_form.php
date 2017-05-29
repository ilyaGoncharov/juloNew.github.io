<?php
$name = $_POST['name1'];
$company1 = $_POST['company1'];
$message = $_POST['message1'];
$email = $_POST['email1'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
/*if (!preg_match("/^[0-9]{10}$/", $contact)) {
echo "<span>* Please Fill Valid Contact No. *</span>";
} else {*/
$subject = $name;
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:' . $email. "\r\n"; // Sender's Email
$headers .= 'Cc:' . $email. "\r\n"; // Carbon copy to Sender

/*$template = '<div style="padding:50px; color:white;"> ' . $name . ',<br/>'
. '<br/>Thank you...! For Contacting Us.<br/><br/>'
. 'Имя:' . $name . '<br/>'
. 'Email:' . $email . '<br/>'
. 'Компания:' . $company . '<br/>'
. 'Сообщение:' . $message . '<br/><br/>'
. 'Это письмо отправлено с сайта JULO'
. '<br/>'
. 'We Will contact You as soon as possible .</div>';
$sendmessage = "<div style=\"background-color:#7E7E7E; color:white;\">" . $template . "</div>";*/

// Message lines should not exceed 70 characters (PHP rule), so wrap it.
$sendmessage = wordwrap($sendmessage, 70);
// Send mail by PHP Mail Function.
mail("karnebero@gmail.com.com", $subject, $sendmessage, $headers);
echo "Сообщение отправленно!";
/*}*/
} else {
echo "<span>* Упс, что-то пошло не так*</span>";
}
?>