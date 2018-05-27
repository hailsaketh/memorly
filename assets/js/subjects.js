
var subNames = [];
LoadData();
//BuildSubjects();

function BuildSubjects(){

	//clear boxes
	$(".subjectBox").remove();
	subNames = [];
	for (var i = 0; i < subjects.length; i++) {
		subNames.push(subjects[i].name);
	}
//build the list of subjects
	for (var i = 0; i < subNames.length; i++) {
		//add a new div
		var newDiv = document.createElement("div");
		document.getElementById("subjectContainer").appendChild(newDiv);
		$(newDiv).attr('class','subjectBox');
		$(newDiv).css('background','#F67280');
		//
		//Add a Title For Div
		var newP = document.createElement("p");
		newDiv.appendChild(newP);
		$(newP).attr('class','subjectTitle');
		var newPnode = document.createTextNode(subNames[i]);
		newP.appendChild(newPnode);

		//delete option
		$(newDiv).append("<span class='trashIcon' ><i class='fa fa-trash'    style=' position:absolute;top:30%;left:35%;color: white;' ></i></span>");
		// $(".subjectBox").click(function(){
		// 	console.log($(this).text());
		// 	var cutLink = window.location.href.slice(0, -12);
		// 	var nameofSub = $(this).find("p").text();
		// 	window.location.replace(cutLink+"topics.php?subject="+nameofSub);
		// });
		/////////ARTWORK
		if(subNames[i].toLowerCase().includes("math")){
			var cutLink = window.location.href.slice(0, -12);
			var nameofSub = $(this).text();
			var imgurl = cutLink+"/assets/artwork/math.jpg";
			console.log(imgurl);
			var newImg = document.createElement("img");
			newDiv.appendChild(newImg)
			$(newImg).attr('src',imgurl);
			$(newImg).attr('class','subjectArt');
		} else if(subNames[i].toLowerCase().includes("chem")){
					var cutLink = window.location.href.slice(0, -12);
					var nameofSub = $(this).text();
					var imgurl = cutLink+"/assets/artwork/chemistry.jpg";
					console.log(imgurl);
					var newImg = document.createElement("img");
					newDiv.appendChild(newImg)
					$(newImg).attr('src',imgurl);
					$(newImg).attr('class','subjectArt');
		}else if(subNames[i].toLowerCase().includes("bio")){
					var cutLink = window.location.href.slice(0, -12);
					var nameofSub = $(this).text();
					var imgurl = cutLink+"/assets/artwork/biology.jpg";
					console.log(imgurl);
					var newImg = document.createElement("img");
					newDiv.appendChild(newImg)
					$(newImg).attr('src',imgurl);
					$(newImg).attr('class','subjectArt');
		}else if(subNames[i].toLowerCase().includes("psych")){
					var cutLink = window.location.href.slice(0, -12);
					var nameofSub = $(this).text();
					var imgurl = cutLink+"/assets/artwork/psych.jpg";
					console.log(imgurl);
					var newImg = document.createElement("img");
					newDiv.appendChild(newImg)
					$(newImg).attr('src',imgurl);
					$(newImg).attr('class','subjectArt');
		}else if(subNames[i].toLowerCase().includes("physics")){
					var cutLink = window.location.href.slice(0, -12);
					var nameofSub = $(this).text();
					var imgurl = cutLink+"/assets/artwork/physics.jpg";
					console.log(imgurl);
					var newImg = document.createElement("img");
					newDiv.appendChild(newImg)
					$(newImg).attr('src',imgurl);
					$(newImg).attr('class','subjectArt');
		}else if(subNames[i].toLowerCase().includes("english")){
					var cutLink = window.location.href.slice(0, -12);
					var nameofSub = $(this).text();
					var imgurl = cutLink+"/assets/artwork/english.jpg";
					console.log(imgurl);
					var newImg = document.createElement("img");
					newDiv.appendChild(newImg)
					$(newImg).attr('src',imgurl);
					$(newImg).attr('class','subjectArt');
		}else if(subNames[i].toLowerCase().includes("sat")){
					var cutLink = window.location.href.slice(0, -12);
					var nameofSub = $(this).text();
					var imgurl = cutLink+"/assets/artwork/sat.jpg";
					console.log(imgurl);
					var newImg = document.createElement("img");
					newDiv.appendChild(newImg);
					$(newImg).attr('src',imgurl);
					$(newImg).attr('class','subjectArt');
		} else {
			
		}

	}

	$(".subjectTitle").click(function(){
		console.log($(this).text());
		var cutLink = window.location.href.slice(0, -12);
		var nameofSub = $(this).text();
		window.location.assign(cutLink+"topics.php?subject="+nameofSub);
	});

//////////////////////////

	$(".trashIcon").click(function(){
		var nameofSub = $(this).parent().find("p").text();
	  DeleteSubject(nameofSub);
		subnames = RemoveFromArray(subNames,nameofSub);
		BuildSubjects();
	});

	////////ARTWORK


}

//ON CLicking Subejct

// $(".subjectBox").click(function(){
// 	console.log("Clicked Subject");
// });


//ON Clicking Add Subject Button
$("#subjectNameInput").keypress(function(event){
	if(event.which === 13){
		var newname = $("#subjectNameInput").val();
		$('#subjectNameInput').val("");
		AddSubject(newname);
		BuildSubjects();


		// $.get( "/memorly/assets/php/data.php", {save:"saa"} )
	  // .done(function( data ) {
	  //   alert( "Data Loaded: " + data );
	  // });
		SaveData();
	}
});


// save function
