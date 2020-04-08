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
var count = 0
function addTask(inputElement){
   if (count < 8){
        const parentList = document.getElementById("list").childNodes[1];
        const trashIcon = document.createElement("i");
        trashIcon.setAttribute("class","far fa-trash-alt")
        trashIcon.onclick = function(){
            count --
            this.parentNode.remove()
            
        }
        const li = document.createElement("li")
        li.onclick = function(){
            this.style.textDecoration = "line-through"
        }
        var task = document.createTextNode(inputElement.value)
        li.appendChild(task)
        li.appendChild(trashIcon)
        parentList.appendChild(li)
        inputElement.value = ""
        count ++
   }else{
       alert("to much tasks")
   }
    
}
