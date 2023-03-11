<?php
include("config.php");

session_start();

				if($_SERVER["REQUEST_METHOD"] == "POST")
				{
					// username and password sent from Form
					$myusername=mysqli_real_escape_string($db,$_POST['username']);
					$mypassword=mysqli_real_escape_string($db,$_POST['password']);
					

					$sql="SELECT id FROM login WHERE username='$myusername' and passcode='$mypassword'";
					$result=mysqli_query($db,$sql);
					$row=mysqli_fetch_array($result,MYSQLI_ASSOC);
					$count=mysqli_num_rows($result);
                    

					// If result matched $myusername and $mypassword, table row must be 1 row
					if($count==1)
					{
					$_SESSION['login_user']=$myusername;

					echo("<script>location.href = 'index.html';</script>");
					}
					else
					{
					$error="Your Login Name or Password is invalid";
					}
				}

?>