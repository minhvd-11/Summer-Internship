var myNodeList = document.getElementsByTagName('li');
var i;
for (i = 0; i < myNodeList.length; i++) {
    var button = document.createElement('button');
    var txt = document.createTextNode("x");
    button.className = "close";
    button.appendChild(txt);
    myNodeList[i].appendChild(button);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
});


function clickResponse(event) {
    if (event.target.style.backgroundColor == "rgb(173, 216, 230)") {
        event.target.style.backgroundColor = "rgb(144, 238, 144)";
        event.target.firstChild.innerHTML += ' (completed)';
    } else if (event.target.style.backgroundColor == "rgb(144, 238, 144)") {
        event.target.style.backgroundColor = "rgb(173, 216, 230)";
        event.target.firstChild.innerHTML = event.target.firstChild.innerHTML.slice(0, -11)
    }
}

function addToDoList() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("To-Do-Work").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.style.backgroundColor = "#ADD8E6";
    li.addEventListener('click', clickResponse);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("ToDoList").appendChild(li);
    }
    document.getElementById("To-Do-Work").value = "";

    var button = document.createElement("button");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}