'use strict';

var message = "Hi there! Click OK to continue.";
alert(message);
/* The following line won't execute until you dismiss previous alert */
alert("This is another alert box.");

printName();
userOrder();

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

function userOrder (){
    var userOrder = prompt(' what would you like to order ? flower or coffe');
    var item ='';

    if(userOrder === 'flower'){
        document.write('<img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"');

    }else if (userOrder === 'coffe'){
        document.write('<img src="https://static.turbosquid.com/Preview/2014/07/07__23_41_37/coffe_cup_preview_01.jpg6e737ca4-a947-4afb-8073-7748907cba17DefaultHQ.jpg"');
    }


}
