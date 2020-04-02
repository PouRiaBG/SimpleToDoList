//Add Today Date in the header

function loading(){
    let date = new Date().toDateString()

    let textDate = document.createTextNode(date)

    let element = document.getElementById("header-date");

    element.appendChild(textDate)
}
