<!DOCTYPE html>
<html>
<head>
	<!-- Google Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Averia+Serif+Libre|Noto+Serif|Tangerine" rel="stylesheet">
	<!-- Styling for public area -->
	<link rel="stylesheet" href="static/css/public_styling.css">
	<meta charset="UTF-8">
	<title>LifeBlog | Home </title>
</head>
<body>
	<!-- container - wraps whole page -->
	<div class="container">
		<!-- navbar -->
		<div class="navbar">
			<div class="logo_div">
				<a href="index.php"><h1>LifeBlog</h1></a>
			</div>
			<ul>
			  <li><a class="active" href="index.php">Home</a></li>
			  <li><a href="#news">News</a></li>
			  <li><a href="#contact">Contact</a></li>
			  <li><a href="#about">About</a></li>
			</ul>
		</div>
		<!-- // navbar -->

		<!-- Page content -->
		<div class="content">
			<h2 class="content-title">Recent Articles</h2>
			<hr>
			<!-- more content still to come here ... -->
		</div>
		<!-- // Page content -->

		<!-- footer -->
		<div class="footer">
			<p>MyViewers &copy; <?php echo date('Y'); ?></p>
		</div>
		<!-- // footer -->

	</div>
	<!-- // container -->
</body>
</html>