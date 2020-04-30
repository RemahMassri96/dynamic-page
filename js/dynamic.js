'use strict';

var message = "Hi there! Click OK to continue.";
alert(message);
 
/* The following line won't execute until you dismiss previous alert */
alert("This is another alert box.");

var result = confirm("Are you sure?");
 
if(result) {
    document.write("You clicked OK button!");
} else {
    document.write("You clicked Cancel button!");
}


var name = prompt("What's your name?");
 
if(name.length > 0 && name != "null") {
    document.write("Hi, " + name);
} else {
    document.write("Anonymous!");
}