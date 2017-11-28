var app = document.querySelector("#app");
app.innerHTML = "test";

function addData() {  /*
  firebase.database().ref('category/').set({
  	name: document.querySelector('#txtData').value
  });*/

  firebase.database().ref().child('category').push({
  	"categoryname":document.querySelector('#txtData').value	
  });

  console.log("user has been created.");
  app.innerHTML = "user has been created."	;
}

function readData(){
  firebase.database().ref('category/').once('value').then(function(snapshot){
  	console.log(snapshot.val());
  });

  console.log("user has been retrieved.");
  app.innerHTML = "user has been retrieved.";
}