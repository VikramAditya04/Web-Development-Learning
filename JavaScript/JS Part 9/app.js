// Qs1. Create a new input and button element on the page using JavaScript only. Set the  
// text of button to "Click me"

let input = document.createElement('input');
document.querySelector("body").append(input);

let btn = document.createElement('button');
btn.innerHTML = "click me";
document.querySelector("body").append(btn);

// Qs2. Add following attributes to the element : 
// Change placeholder value of input to "username" 
// Change the id of button to "btn' 

input.setAttribute('placeholder', 'username');
btn.setAttribute('id', 'btn');

// Qs3. Access the btn using the querySelector and button id. Change the button background 
// color to blue and text color to white.

let button = document.querySelector('#btn');
// button.style.backgroundColor = 'blue';
// button.style.color = 'white';
button.classList.add("blue");

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.

let heading = document.createElement("h1");
heading.innerHTML = "DOM Practice";
// heading.innerHTML = " <u>DOM Practice</u> ";
heading.style.color = "purple";
heading.style.textDecoration = "underline";
document.querySelector("body").append(heading);

// Qs5. Create a p tag on the page and set its text to "DOM concepts Practice", 
// where DOM is bold. 

let para = document.createElement("p");
para.innerHTML = "<b>DOM</b> concepts Practice";
document.querySelector("body").append(para);