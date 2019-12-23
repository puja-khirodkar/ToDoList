var taskList = [];
var table = document.getElementById("taskTable");
var task;
function insertTask() {
     task = document.getElementById("task").value;
    taskList.push(task);
    updateList(task)
}

function updateList(task) {
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var finiishTaskButton =document.createElement("button")
    finiishTaskButton.innerText = "Done"
    finiishTaskButton.classList.add("waves-effect", "btn-flat")
    td1.appendChild(document.createTextNode(task));
    td2.appendChild(finiishTaskButton);
    finiishTaskButton.onclick = function () {
      deleteTask(task);
    };
    tr.appendChild(td1)
    tr.appendChild(td2)
    table.appendChild(tr)
}

function deleteTask(task){
  var i;
  var rowCount =  table.rows.length;
  var rows = document.getElementById("taskTable").rows;
  for (let row of table.rows) 
  {
      for(let cell of row.cells) 
      {   
        if(cell.innerText == task){
          table.deleteRow(row.rowIndex);
          break;
        }
         
      }
  }
}
