<!DOCTYPE html>
<?php
include 'assets/php/data.php';
 ?>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Memorly</title>

    <link rel="stylesheet" type="text/css" href="assets/css/topic.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <script
    src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>



    <script
     src="https://code.jquery.com/jquery-3.3.1.js"
     integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
     crossorigin="anonymous"></script>


  </head>
  <body>
    <div id="container1">
      <h1 id="topicName">Topic</h1>
      <div id="retentionContainer">
        <h2 id='retentionTitle'>Retention</h2>
        <div id="retentionBarBase">
          <div id="retentionBarF">
            <div id="retentionBarO">

            </div>
          </div>
        </div>
        <p id="retentionDisplay">N/A</p>
        <div id="retentionCover">
        </div>
      </div>

      <div id="futureContainer">
        <h2 id="futureTitle">Next Review</h2>
        <p id='futureDisplay'>asd</p>
        <h2 style = '  position: absolute;
          top:70%;
          left: 33%;
          color : white;
          margin : 0;
          padding : 45px 45px;
          text-transform: uppercase;
          font-size: 40px;
          font-weight: 400;
          text-align: center;' >Days Left</h2>
          <div id="futureCover">
          </div>
      </div>

      <div id="recordContainer">
        <p style = '  position: absolute;
          top:5%;
          left: 18%;
          color : white;
          margin : 0;
          padding : 45px 45px;
          text-transform: uppercase;
          font-size: 50px;
          font-weight: 400;
          text-align: center;' >Record Session</p>
        <div id='starContainer'>
          <span  id='starItem1'><i class="fa fa-star" style="position:absolute;top:30%;left:35%;color: white;"></i></span>
          <span  id='starItem2'><i class="fa fa-star" style="position:absolute;top:30%;left:35%;color: white;"></i></span>
          <span  id='starItem3'><i class="fa fa-star" style="position:absolute;top:30%;left:35%;color: white;"></i></span>
          <span  id='starItem4'><i class="fa fa-star" style="position:absolute;top:30%;left:35%;color: white;"></i></span>
          <span  id='starItem5'><i class="fa fa-star" style="position:absolute;top:30%;left:35%;color: white;"></i></span>

        </div>
        <div id="recordCover">
        </div>
      </div>

      <div id="fileContainer">
        <h3>Files</h3>
        <div style='position:relative;background:transparent;width:100px;height:1px;'>
          <p id='uploadIcon' ><i class='fa fa-cloud-upload'    style='position:absolute;top:33%;left:30%;color: white;font-size:25px;' ></i></p>
        </div>
        <form action = "" method = "POST" enctype = "multipart/form-data">
         <input type = "file" name = "upload" id="uploadInput" />
        </form>
        <!-- <input type="file" name="upload" id="uploadInput" value="" placeholder="Upload New File"> -->
        <div id="fileContainer2" style="	display: flex;
        	flex-wrap: wrap;
        	justify-content: center;">
        </div>

        <div id="fileCover">
        </div>

      </div>


    </div>

    <script type="text/javascript" src="assets/js/data.js"></script>
    <script type="text/javascript" src="assets/js/topic.js"></script>
  </body>
</html>
