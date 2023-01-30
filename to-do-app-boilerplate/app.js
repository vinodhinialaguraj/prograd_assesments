var listodo = [];
var inp = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;
function click() { 
listodo.push(inp.value);
console.log(listodo);
inp.value = "";
showList();
}
function showList() {
todolist.innerHTML = " ";
listodo.forEach(function (n, i) {
todolist.innerHTML +=
"<li>" +
n +
"<a onclick='edit("+i+")'>edit</a>" +
"<a onclick='deletee("+ i+")'>delete | </a></li>";
  });
}
function deletee(i) { 
  listodo.splice(i, 1);
  showList();
}
function edit(i) {
  var newtxt = prompt("New value");
  listodo.splice(i, 1, newtxt);
  showList();
}