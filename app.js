const getInpTxt = document.getElementById("inpTxt");
const getInpNo = document.getElementById("inpNo");
const getRow = document.getElementById("row");
const getPara = document.getElementById("para");
let arry = [];
let sum = 0;

function add() {
  let numVal = parseFloat(getInpNo.value.trim());
  let txtVal = getInpTxt.value.trim();
  let upprCase = txtVal.charAt(0).toUpperCase() + txtVal.toLowerCase().slice(1);

  if (getInpTxt.value === "" || getInpNo.value === "" || numVal <= 0) {
    alert("Please fill in the fields and valid amount");
    return;
  }
  getRow.innerHTML += `
  <tr>
    <td> ${1} </td>
    <td> ${upprCase} </td>
    <td> ${numVal} </td>
    <td id="tdBtn">
    <i class="fa-solid fa-pen-to-square" id="btn4" onclick"edt(e)"></i>
    <i class="fa-solid fa-trash" id="btn3" onclick="rmve(this)"></i>
    </td>
  </tr>`;
  // arry.push(numVal);
  // sum = arry.reduce((acc, curr) => acc + curr);
  // getPara.innerHTML = `<span id="dolr">$</span>${sum}`;
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
  e.parentNode.parentNode.remove();
}
