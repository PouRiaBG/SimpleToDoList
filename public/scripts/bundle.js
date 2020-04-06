"use strict";

//Add Today Date in the header

function loading() {
    var date = new Date().toDateString();

    var textDate = document.createTextNode(date);

    var element = document.getElementById("header-date");

    element.appendChild(textDate);
}

var addElement = document.getElementById("add");

addElement.addEventListener("click", value);

function value() {
    var task = document.getElementsByTagName("input")[0];
    if (task.value.length === 0) {
        alert("Dude!! this is empty");
    } else {
        addTask(task);
    }
}

function addTask(inputElement) {
    var parentList = document.getElementById("list").childNodes[1];
    var trashIcon = document.createElement("i");
    var removeAttr = document.createAttribute("onclick");
    removeAttr.value = "this.parentNode.remove()";
    trashIcon.setAttributeNode(removeAttr);
    trashIcon.setAttribute("class", "far fa-trash-alt");
    //remove element 

    var li = document.createElement("li");
    var task = document.createTextNode(inputElement.value);
    li.appendChild(task);
    li.appendChild(trashIcon);
    parentList.appendChild(li);
    inputElement.value = "";
}
