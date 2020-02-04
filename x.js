
var z = document.getElementById("t")

function btn_click()
{
  var a = z.insertRow()
  var x = a.insertCell()
  var cell = a.insertCell()
  x.innerHTML = document.getElementById("tb1").value

  var btnRemove = document.createElement("INPUT");
  btnRemove.type = "button";
  btnRemove.value = "del";
  btnRemove.setAttribute("onclick", "del(this);");
  cell.appendChild(btnRemove);
}

function del(button) {
    //Determine the reference of the Row using the Button.
    var row = button.parentNode.parentNode;
    var name = row.getElementsByTagName("TD")[0].innerHTML;
    var table = document.getElementById("t");
    table.deleteRow(row.rowIndex);
};
