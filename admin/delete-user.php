<?php 
		require_once('functions/function.php');
		$id=$_GET['d'];
		$del="DELETE FROM web_user WHERE user_id='$id'";
		mysqli_query($con,$del);
		header('Location: all-user.php');
?>