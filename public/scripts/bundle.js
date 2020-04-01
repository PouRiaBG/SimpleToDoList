"use strict";

var p = document.getElementsByTagName("p")[0];

p.addEventListener("click", color);

console.log(p);

function color() {
    p.style.color = "red";
}
