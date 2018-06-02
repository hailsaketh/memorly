var topic = null;
var subject = null;
LoadData();

//
var date = new Date();
console.log(date);
//


function LoadTopicInfo(){
  var newText = window.location.href;
  var left_text = newText.split("?").pop();
  var subjectLink = left_text.substr(6).split("_").shift();
  subjectLink = subjectLink.replace(/\%/g, ' ');
  subjectLink = subjectLink.replace(/20/g, '');
  var topicLink = left_text.substr(6).split("_").pop();
  topicLink = topicLink.replace(/\%/g, ' ');
  topicLink = topicLink.replace(/20/g, '');
  subject = FindSubjectByName(subjectLink);
  topic = subject.topics[parseInt(topicLink)];
  //console.log(topic.CalculateRetention());
  BuildTopicPage();
}

function BuildTopicPage(){
  // Topic name
  $("#topicName").text(topic.title);


  //set retention
  var ret = topic.CalculateRetention();
  $("#retentionDisplay").html(ret+"%");
  //retentionBar
  $('#retentionBarF').css('height',ret.toString()+"%");




  //////////// future
  var hypDays = -(Math.log(0.7)*topic.strength*2);
  var totalDays = Math.round(hypDays + (Math.log(topic.CalculateRetention()/100)*topic.strength*2));
  $('#futureDisplay').text(totalDays.toString());


////////////RECORD
  $("#starItem1").click(function(){
    topic.Results(1);
    //window.history.back();
  });
  $("#starItem2").click(function(){
    topic.Results(2);
    //window.history.back();
  });
  $("#starItem3").click(function(){
    topic.Results(3);
    //window.history.back();
  });
  $("#starItem4").click(function(){
    topic.Results(4);
    //window.history.back();
  });
  $("#starItem5").click(function(){
    topic.Results(5);
    //window.history.back();
  });


  /////////////Files



//
//  $.post( "/memorly/assets/php/data.php", {findFiles:"/xampp/htdocs/memorly/assets/uploads/"+subject.name+"/"+topic.title} )
//  .done(function( data ) {
//    data = JSON.parse(data);
//    console.log(data);
//    var fileNames = data;
//    var toggleColor1 = false;
//    console.log(fileNames);
//    for (var i = 2; i < fileNames.length; i++) {
//        //add a new div
//        var newDiv = document.createElement("div");
//        $('#fileContainer2').append(newDiv);
//        $(newDiv).attr('class','fileNameItem');
//        //Add a Title For Div
//        var newP = document.createElement("p");
//        $(newDiv).append(newP);
//        $(newP).attr('class','fileNameItemText');
//
//        if(toggleColor1==true){
//          $(newDiv).css('background-color','white');
//          toggleColor1 = false;
//        } else {
//          $(newDiv).css('background-color','#c9e3db');
//          toggleColor1 = true;
//        }
//        $(newDiv).append("<li class='fileTrashIcon' ><i class='fa fa-trash'    style='position:absolute;top:30%;left:40%;color: white;' ></i></li>");
//
//        var newPnode = document.createTextNode(fileNames[i]);
//        newP.appendChild(newPnode);
//
//    }
//    $(".fileTrashIcon").click(function(){
//      var fname = $(this).parent().text();
//      var newText = window.location.href;
//      var cutLink = newText.replace("topic.php?"+newText.split("?").pop(),"");
//      DeleteFile("/assets/uploads/"+ subject.name + "/" + topic.title + "/" + fname);
//      location.reload();
//    });
//    $('.fileNameItem').click(function(){
//      var fname = $(this).text();
//      var newText = window.location.href;
//      var cutLink = newText.replace("topic.php?"+newText.split("?").pop(),"");
//      window.location.assign(cutLink+"/assets/uploads/"+ subject.name + "/" + topic.title + "/" + fname);
//    });

  //});



  // var toggleColor1 = false;
  // console.log(fileNames);
  // for (var i = 2; i < fileNames.length; i++) {
  //     //add a new div
  //     var newDiv = document.createElement("div");
  //     $('#fileContainer2').append(newDiv);
  //     $(newDiv).attr('class','fileNameItem');
  //     //Add a Title For Div
  //     var newP = document.createElement("p");
  //     $(newDiv).append(newP);
  //     $(newP).attr('class','fileNameItemText');
  //
  //     if(toggleColor1==true){
  //       $(newDiv).css('background-color','white');
  //       toggleColor1 = false;
  //     } else {
  //       $(newDiv).css('background-color','#c9e3db');
  //       toggleColor1 = true;
  //     }
  //
  //     var newPnode = document.createTextNode(fileNames[i]);
  //     newP.appendChild(newPnode);
  //
  // }

  // $('.fileNameItem').click(function(){
  //   var fname = $(this).text();
  //   var newText = window.location.href;
  //   var cutLink = newText.replace("topic.php?"+newText.split("?").pop(),"");
  //   window.location.assign(cutLink+"/assets/uploads/"+fname);
  // })


}

// $("#failButton").click(function(){
//   topic.Results(1);
//   SaveData();
// });
//
// $("#passButton").click(function(){
//   topic.Results(2);
//   SaveData();
// });
// <form action = '' method = 'POST' enctype = 'multipart/form-data'>
//    <input type = 'file' name = 'image' />
//    <input type = 'submit'/>
//
//    <ul>
//       <li>Sent file: <?php echo $_FILES['image']['name'];  ?>
//       <li>File size: <?php echo $_FILES['image']['size'];  ?>
//       <li>File type: <?php echo $_FILES['image']['type'] ?>
//    </ul>
//
// </form>
// //
//
// $("#deleteTopic").click(function(){
//   subject.DeleteTopic(topic.title);
//   var newText = window.location.href;
//   var cutLink = newText.replace("topic.php?"+newText.split("?").pop(),"");
//   window.location.assign(cutLink+"subjects.php");
// });


///UPLOAD FILES------------------
$("#uploadIcon").click(function(){
  $('#fileContainer').find('form').append("<input type='text' name='uploadExtra' value='' id='uploadextra'>");
  $('#fileContainer').find('form').find('#uploadextra').val(subject.name+"-"+topic.title);
  //alert ($('#fileContainer').find('form').find('#uploadextra').val());
  $('#fileContainer').find('form').submit();
});
