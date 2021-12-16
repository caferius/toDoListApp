//alert("oha");
'use strict';

let btn = document.getElementById("btn"); //button for adding task.

let readTask = () => { //function for adding tasks to the list
    let list = document.getElementById("list");//list for tasks.
    let data = document.getElementById("data").value;
    let task = document.createElement("li");
    let taskNode = document.createTextNode(data);
    let removeBtn = document.createElement("button");
    let removeBtnNode = document.createTextNode("remove");

    removeBtn.setAttribute("class", "btn btn-danger btn-sm remove");
    removeBtn.appendChild(removeBtnNode);

    task.appendChild(taskNode);
    task.appendChild(removeBtn);

    list.appendChild(task);

    removeBtn.addEventListener("click", function (e) {
        //e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
        e.currentTarget.parentElement.remove();//deleting parent node.
    })
}

btn.addEventListener("click", readTask); //readTask function executes when button clicks.
