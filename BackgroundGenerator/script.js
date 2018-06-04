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