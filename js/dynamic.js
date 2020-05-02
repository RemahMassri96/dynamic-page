'use strict';

var message = "Hi there! Click OK to continue.";
alert(message);
/* The following line won't execute until you dismiss previous alert */
alert("This is another alert box.");

printName();

var correct = "AA";
var guess = "";
while (guess != correct){
  guess = prompt ("Question?", "");
  if (guess == correct){
    alert ("Correct");
  } else {
    alert ("that's not it...");
  }
}

function pressConfirm(){
    var result = confirm("Are you sure?");
 
    if(result) {
        document.write("You clicked OK button!");
    } else {
        document.write("You clicked Cancel button!");
    }
    
}

function printName(){
    var name = prompt("What's your name?");
 
    if(name.length > 0 && name != "null") {
        document.write("Hi, " + name);
    } else {
        document.write("Anonymous!");
    }
}




