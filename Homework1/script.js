
console.log("Hello");

var GreetingContainer;
// assign greeting to variable
GreetingContainer = "Hello";
console.log(GreetingContainer);

alert('Greetings: ' + GreetingContainer);


document.write('<p>' + GreetingContainer +
'</p>');



var arr = document.getElementsByClassName('msg');

// var atr = ['Soup', 'Chicke', 'Vegetables', 'Broccoli'];

// for(var i = 0; i < atr.length; i++){

// 	for(var i = 0; i < arr.length; i++){
// 	  console.log('index: ' + i);
// 	  arr[i].innerHTML = atr[i];
// 	}
// }


var arr = document.getElementsByClassName('msg');

for(var i = 0; i < arr.length; i++){
  console.log('index: ' + i);
  arr[i].innerHTML = "new message";
}





