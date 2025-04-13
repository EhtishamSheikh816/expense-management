const getInpTxt = document.getElementById("inpTxt");
const getInpNo = document.getElementById("inpNo");
const getRow = document.getElementById("row");
const getPara = document.getElementById("para");

function add() {
  if (getInpTxt.value === "" || getInpNo.value === "") {
    alert("Please fill in the fields");
    return;
  }
  getRow.innerHTML += `
  <tr>
    <td> ${1} </td>
    <td> ${getInpTxt.value} </td>
    <td> ${getInpNo.value} </td>
    <td id="tdBtn" onclick="rmve(this)" > <button class="btn btn3" >Remove</button> </td>
  </tr>`;
  getInpTxt.value = "";
  getInpNo.value = "";
}

function clrAll() {
  getRow.innerHTML = "";
}

function rmve(e) {
  console.log(e.parentNode.remove());
}
