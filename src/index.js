//Add Today Date in the header

function loading(){
    let date = new Date().toDateString()

    let textDate = document.createTextNode(date)

    let element = document.getElementById("header-date");

    element.appendChild(textDate)
}

let addElement = document.getElementById("add");

addElement.addEventListener("click",value);


function value(){
    const task = document.getElementsByTagName("input")[0];
    if(task.value.length === 0){
        alert("Dude!! this is empty")
    }else{
        addTask(task);
    }
}

function addTask(inputElement){
    const parentList = document.getElementById("list").childNodes[1];
    const trashIcon = document.createElement("i");
    const removeAttr = document.createAttribute("onclick");
    removeAttr.value = "this.parentNode.remove()"
    trashIcon.setAttributeNode(removeAttr)
    trashIcon.setAttribute("class","far fa-trash-alt")
    //remove element 
    
    const li = document.createElement("li")
    var task = document.createTextNode(inputElement.value)
    li.appendChild(task)
    li.appendChild(trashIcon)
    parentList.appendChild(li)
    inputElement.value = ""
    
}
