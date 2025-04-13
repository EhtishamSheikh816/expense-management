const getInpTxt = document.getElementById("inpTxt");
const getInpNo = document.getElementById("inpNo");
const getRow = document.getElementById("row");
const getPara = document.getElementById("para");

function add() {
  getPara.innerHTML = (getInpNo.value.split().reduce((acc, crr) => acc + crr));
  if (getInpTxt.value === "" || getInpNo.value === "") {
    alert("Please fill in the fields");
    return;
  }
  getRow.innerHTML += `
  <tr>
    <td> ${1} </td>
    <td> ${getInpTxt.value} </td>
    <td> ${getInpNo.value} </td>
    <td id="tdBtn">
    <button class="btn btn4" onclick="edt(this)">Edit</button>
    <button class="btn btn3" onclick="rmve(this)">Remove</button>
    </td>
  </tr>`;
  getInpTxt.value = "";
  getInpNo.value = "";
}

function clrAll() {
  getRow.innerHTML = "";
}

function edt(e) {
  console.log(e.parentNode.parentNode);
  
}

function rmve(e) {
  e.parentNode.remove();
}
