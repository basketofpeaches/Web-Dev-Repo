// pass the HTML element into a variable
// 
let theBody = document.querySelector('body');
// console.log(theBody);
let theButton = document.querySelector("button");
let theTxt = document.querySelector('h2');
//
// triggering an event with a callback function
theButton.addEventListener('click', thePotatoe);

let j = 0
function thePotatoe(){
	var x = Math.floor(Math.random() * 2);  
	var y = Math.floor(Math.random() * 25);
	var z = Math.floor(Math.random() * 25);
    let lineheight = (x);
        console.log("click!!!");
    theBody.style.lineHeight = lineheight;
    //theButton.style.backgroundColor = btgcolor;
    //theButton.style.color = textcolor[j]
    //theTxt.style.color = btgcolor[j];
    j = j+1
    if (j === 5){
    j = 0
 }}
 

// triggering an event with ES6 arrow notation:
document.addEventListener('keydown', theEvent => {
 if (theEvent.keyCode === 32){
  theTxt.textContent = "you pressed space";
 }
})

// common ways of triggering a function you'll often see online
document.addEventListener('keydown',function() {
 console.log("you pressed any key!")
})
