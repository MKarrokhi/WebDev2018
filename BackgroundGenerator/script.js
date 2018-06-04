var css = document.querySelector("h3");
var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var body = document.getElementById("grad");

// console.log(css);
// console.log(c1);
// console.log(c2);

// body.style.background = "violet";

function setGradient(){
    body.style.background = "linear-gradient(to right, " + c1.value
    + ", " + c2.value + ")";

    css.textContent = body.style.background + ";";
}

c1.addEventListener("input", setGradient)
c2.addEventListener("input", setGradient)


// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// Good luck!