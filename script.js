
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {

    if (inputBox.value === '') {
        alert("Please provide a valid input.");
    } // end of if

    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    } // end of else

    inputBox.value = "";
    saveData();
} // end of func

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } // end of if

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } // end of if
}, false); // end of EventListener

// Add a task if the enter key is pressed within the input box
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();
