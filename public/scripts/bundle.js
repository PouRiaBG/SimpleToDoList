"use strict";

document.getElementsByTagName("body")[0].addEventListener("load", loading);

function loading() {
    var date = new Date().toDateString();

    var textDate = document.createTextNode(date);

    var element = document.getElementById("header-date");

    element.appendChild(textDate);
}
