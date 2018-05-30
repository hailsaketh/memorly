<?php

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'memorly';

//$dbc = @mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)
//OR die('Could not connect to MySQL' .mysqli_connect_error());
//
/////cookie
//
//if(isset($_COOKIE["data"])){
//} else{
//    $data = "";
//    setcookie("data", $data, time() + (10 * 365 * 24 * 60 * 60));
//}
///cookie



// $query = "SELECT Data FROM data";
// $response = @mysqli_query($dbc,$query);
// if($response){
//   while($row= mysqli_fetch_array($response)){
//     echo $row['Data'];
//   }
// }


if(isset($_POST["save"])){
  echo "save intitiated".$_POST['save'];
  $save_string = $_POST['save'];
//  $sql = "UPDATE data SET Data='".$save_string."' WHERE User=1";
//
//if ($dbc->query($sql) === TRUE) {
//    echo "Record updated successfully";
//} else {
//    echo "Error updating record: " . $dbc->error;
//}//
    //
  setcookie("data", $save_string, time() + (10 * 365 * 24 * 60 * 60));
    
}


if(isset($_POST["load"])){
//  $query = "SELECT Data FROM data";
//  $response = @mysqli_query($dbc,$query);
//  if($response){
//    while($row= mysqli_fetch_array($response)){
//      echo $row['Data'];
//    }
//  }
    
    if(isset($_COOKIE["data"])){
        echo $_COOKIE["data"];
    }
    
}

if(isset($_POST["findFiles"])){
  $dir = $_POST['findFiles'];
  $files1 = scandir($dir);
  echo(json_encode($files1));
}




if(isset($_FILES['upload'])){
  // echo "works";
   $errors= array();
   $file_name = $_FILES['upload']['name'];
   $file_size =$_FILES['upload']['size'];
   $file_tmp =$_FILES['upload']['tmp_name'];
   $file_type=$_FILES['upload']['type'];
   //$file_ext=strtolower(end(explode('.',$_FILES['upload']['name'])));
   $pathToDir = "assets/uploads/".str_replace("-","/",$_POST['uploadExtra'])."/";
   $file_name = str_replace("-","/",$_POST['uploadExtra'])."/".$file_name;
   //$file_name = str_replace("-","/",$);

   $expensions= array("jpeg","jpg","png","pdf");

   // if(in_array($file_ext,$expensions)=== false){
   //    $errors[]="extension not allowed, please choose a JPEG or PNG file.";
   // }

   // if($file_size > 2097152){
   //    $errors[]='File size must be excately 2 MB';
   // }

   if(empty($errors)==true){
      if (!file_exists($pathToDir)) {
       mkdir($pathToDir, 0777, true);
      }
      move_uploaded_file($file_tmp,"assets/uploads/".$file_name);
      //echo "Success";
   }else{
      //print_r($errors);
   }
}

if(isset($_GET['deleteFile'])){
  $target = $_GET['deleteFile'];
  unlink($_SERVER['DOCUMENT_ROOT']."/memorly/".$target);
}




 ?>
