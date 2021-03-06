"use strict";

//Add Today Date in the header, start when the page is loaded

var loading = function loading() {
    var date = new Date().toDateString();

    var textDate = document.createTextNode(date);

    var element = document.getElementById("header-date");

    element.appendChild(textDate);
};

var addElement = document.getElementById("add");

addElement.addEventListener("click", value);

var value = function value() {
    var task = document.getElementsByTagName("input")[0];
    if (task.value.length === 0) {
        alert("Dude!! this is empty");
    } else {
        addTask(task);
    }
};

var count = 0;
var addTask = function addTask(inputElement) {
    if (count < 8) {
        var parentList = document.getElementById("list").childNodes[1];
        var trashIcon = document.createElement("i");
        trashIcon.setAttribute("class", "far fa-trash-alt");
        trashIcon.onclick = function () {
            count--;
            this.parentNode.remove();
        };
        var li = document.createElement("li");
        li.onclick = function () {
            this.style.textDecoration = "line-through";
        };
        var task = document.createTextNode(inputElement.value);
        li.appendChild(task);
        li.appendChild(trashIcon);
        parentList.appendChild(li);
        inputElement.value = "";
        count++;
    } else {
        alert("to much tasks");
    }
};
