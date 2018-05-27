
var subjects = [];
var uploadsDirNames  = [];
//LoadData();



function AddSubject(name){
  subjects.push(new Subject(name));
}
function GetSubjects(){
  return subjects;
}
function SaveData(){

  //make data object
  var dataObj = new Data(subjects);
  //convert to json
  var dataString = JSON.stringify(dataObj);


  $.post( "/memorly/assets/php/data.php", {save:dataString} )
  .done(function( data ) {
    //alert( "Data Saved: " + data );
  });
}
function LoadData(){
  var loadString ='{}';
  $.post( "/memorly/assets/php/data.php", {load:''} )
  .done(function( data ) {
    //alert(data);
    loadString = data;
    // console.log(loadString);
    var loadedObj = JSON.parse(loadString);
    // console.log(loadedObj.subjects[0]);
    subjects = loadedObj.subjects;

    /// CONVERT TO CLASS OBJECT
    for (var i = 0; i < subjects.length; i++) {
      newSubject = new Subject(subjects[i].name);
      for (var ii = 0; ii < subjects[i].topics.length; ii++) {
        newTopic = new Topic(subjects[i].topics[ii].title);
        newTopic.date = subjects[i].topics[ii].date;
        newTopic.strength = subjects[i].topics[ii].strength;
        newSubject.topics.push(newTopic);
      }
      subjects[i] = newSubject;
      //console.log("added:"+subjects[i].name);
    }

    //////////////////////////////////////////////


////////////////////////////////////////////////////////////////////

    if(window.location.href.includes("subjects.php")){
      BuildSubjects();
    } else if(window.location.href.includes("topics.php")){
      LoadTopicData();
    } else if(window.location.href.includes("topic.php")){
      LoadTopicInfo();
      // $.post( "/memorly/assets/php/data.php", {findFiles:"/xampp/htdocs/memorly/assets/uploads"} )
      // .done(function( data ) {
      //   data = JSON.parse(data);
      //   console.log(data);
      //   uploadsDirNames = data;
      //   LoadTopicInfo();
      // });
      //GetUploadFilesInDir().done(LoadTopicInfo());
    }


  });
}



////ADD ADDTOPIC
function DeleteFile(path){
  $.get( "/memorly/assets/php/data.php", {deleteFile:path} ).done(function(data){
    location.reload();
  });
}




/////////DATA MINING
function FindSubjectByName(name){
  //console.log("Subject count is:"+subjects.length.toString());
  for (var i = 0; i < subjects.length; i++) {
    //console.log("added subject:"+subjects[i].name);
    if(subjects[i].name == name){
      //console.log("added subject:"+subjects[i].name);
      return subjects[i];
    }
  }
  return null;
}

function DeleteSubject(name){
  for (var i = 0; i < subjects.length; i++) {
    //console.log("added subject:"+subjects[i].name);
    if(subjects[i].name == name){
      console.log("added subject:"+subjects[i].name);
      subjects.splice(i,1);
    }
  }
  SaveData();
}

////////

function RemoveFromArray(array,item){
  for (var i = 0; i < array.length; i++) {
    if(array[i]==item){
      array.splice(i,1);
      return array;
    }
    return null;
  }
}


//////////




class Data{
  constructor (subjects){
    this.subjects = subjects;
  }
}


class Subject{
  constructor (name){
    this.name = name;
    this.topics = [];
  }
  AddTopic(ttitle){
    this.topics.push(new Topic(ttitle));
    //console.log(this.topics);
  }
  FindTopic(name){
    for (var i = 0; i < this.topics.length; i++) {
      if(this.topics[i].title==name){
        return i;
      }
    }
  }
  DeleteTopic(name){
    for (var i = 0; i < this.topics.length; i++) {
      if(this.topics[i].title==name){
        this.topics.splice(i,1);
        SaveData();
      }
    }
  }
}
class Topic{
  constructor(title){
    this.title = title;
    //this.date = new Date()).getTime()/86400000).toString();
    this.date = (new Date().getTime()/86400).toString();
    this.strength = 1;
    //console.log((new Date()).getTime());
  }
  CalculateRetention(){
    var oldTime = parseInt(this.date)/1000;
    var newTime = (new Date().getTime()/86400000);
    var dayspassed = ((newTime - oldTime));
    console.log(dayspassed);
    var retention = Math.round((Math.exp(-(dayspassed*2)/(this.strength)))*100);
    return retention;
  }
  Results(rating){
    this.date = ((new Date()).getTime()/1000).toString();
    if(rating<=2){
      this.strength=1;
    } else if(rating<=3) {
      if(this.strength>1){
        this.strength = this.strength*(0.5);
      } else {
        this.strength++;
        //this.strength = this.strength*(0.5);
      }
    }
     else if(rating<=4) {
      if(this.strength>1){
        this.strength = this.strength*(1.5);
      } else {
        this.strength++;
        this.strength = this.strength*(1.5);
      }
    } else {
      if(this.strength>1){
        this.strength = this.strength*2;
      } else {
        this.strength++;
        //this.strength = this.strength*2;
      }
    }
    this.date = (new Date().getTime()/86400).toString();
    SaveData();
  }

}
