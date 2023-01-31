document.querySelector("#add").addEventListener("click", ()=>{
    const input = document.querySelector("#input").value;
    if (input.trim()==""){
        alert("please, write a new task")
    }else{
        document.querySelector("#task-list").innerHTML += `<div class="list">
        <span>${input}</span>
        <button id="delete">remove</button>
    </div>`
    document.querySelector("#input").value = "";

    const removeTask = document.querySelectorAll("#delete");
    for (let i =0; i<removeTask.length; i++){
        removeTask[i].onclick = function(){
            removeTask[i].parentNode.remove();
        }
    }
    }
})