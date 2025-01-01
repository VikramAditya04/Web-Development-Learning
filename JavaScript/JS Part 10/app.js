let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let color = document.querySelector(".color");
    color.style.backgroundColor = randomColor();
    
    let newColor = document.querySelector(".color p");
    newColor.innerHTML = randomColor();

});

// function for generating random color

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    return `rgb(${r}, ${g}, ${b})`;  
}