<?php

if(isset($_GET['subject'])){
  //echo $_GET['subject'];

}
if(isset($_POST['load'])){
  //echo $_GET['subject'];
  $dataaa = $_POST['load'];
}

 ?>

 <html>
 <head>
 	<title>Memorly</title>
 	<link rel="stylesheet" type="text/css" href="assets/css/topics.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">


 	<script
   src="https://code.jquery.com/jquery-3.3.1.js"
   integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
   crossorigin="anonymous"></script>


 </head>
 <body>
   <div id="container1">
     	<h1>Topics</h1>
      <input type="text" id="topicNameInput" value="" placeholder="Add New Topic">
     	<div id="topicContainer">

     	</div>
    </div>
  <p id="dataElement"></p>


    <script type="text/javascript" src="assets/js/data.js"></script>
   <script type="text/javascript" src="assets/js/topics.js"></script>

   </script>

 </body>
 </html>
