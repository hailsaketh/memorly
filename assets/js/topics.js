var subject = null;
var topics = ['test','testing'];

LoadData();

function LoadTopicData(){
  var newText = window.location.href;
  var left_text = newText.split("?").pop();
  var cutLink = left_text.substr(8);
  cutLink = cutLink.replace(/\%/g, ' ');
  cutLink = cutLink.replace(/20/g, '');

  subject = FindSubjectByName(cutLink);
  //console.log(cutLink);
  BuildTopics();
}


function BuildTopics(){

	//clear boxes
	$(".topicBox").remove();

  //
  topics = [];
  for (var i = 0; i < subject.topics.length; i++) {
    topics.push(subject.topics[i]);
  }

//build the list of topics
var nameList = [];
for (var i = 0; i < topics.length; i++) {
  nameList.push(topics[i].title);
}


  var toggleColor = true;

	for (var i = 0; i < nameList.length; i++) {
		//add a new div
		var newDiv = document.createElement("div");
		$("#topicContainer").append(newDiv);
		$(newDiv).attr('class','topicBox');

    if(toggleColor==true){
      $(newDiv).css('background-color','white');
      toggleColor = false;
    } else {
      $(newDiv).css('background-color','#f7f7f7');
      toggleColor = true;
    }
		//
		//Add a Title For Div
		var newP = document.createElement("p");
		newDiv.appendChild(newP);
		$(newP).attr('class','topicTitle');

		var newPnode = document.createTextNode(nameList[i]);
		newP.appendChild(newPnode);



    //check notification of color and then add alert
    if(subject.topics[i].CalculateRetention()<=75){
      //append the alert
      $(newDiv).append("<p class='alertIcon' ><i class='fa fa-exclamation-circle'    style='position:absolute;top:30%;left:35%;color: white;' ></i></p>");
    }

    // TRASHCAN ITEM +
    $(newDiv).append("<li class='trashIcon' ><i class='fa fa-trash'    style='position:absolute;top:30%;left:35%;color: white;' ></i></li>");



	}

  $(".topicTitle").click(function(){
    var newText = window.location.href;
    var cutLink = newText.replace("topics.php?"+newText.split("?").pop(),"");
    window.location.assign(cutLink+"topic.php?topic="+subject.name+"_"+subject.FindTopic($(this).text()));
  });

  $(".trashIcon").click(function(){
    var nameofTop = $(this).parent().find("p").text();
    FindSubjectByName(subject.name).DeleteTopic(nameofTop);
    BuildTopics();
  });


}




$("#topicNameInput").keypress(function(event){
  if(event.which === 13){
  	var newname = $("#topicNameInput").val();
    $("#topicNameInput").val("");
    subject.AddTopic(newname);
  	BuildTopics();
  	SaveData();
  }

});
