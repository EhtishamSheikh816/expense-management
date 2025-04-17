const getInpBudge = document.getElementById("inpBudge");
const getInpTxt = document.getElementById("inpTxt");
const getInpNo = document.getElementById("inpNo");
const getTotalBudge = document.getElementById("totalBudge");
const getTotalExpenses = document.getElementById("totalExpenses");
const getRemainingBudge = document.getElementById("remainingBudge");
const getRow = document.getElementById("row");
let arr = [];
let totalExpenses = 0;

function addBudge() {
  if (getInpBudge.value === "" || getInpBudge.value <= 0) {
    alert("Please enter a valid budget amount.");
    return;
  }
  getTotalBudge.innerHTML = `$${getInpBudge.value}`;
  getInpBudge.value = "";
}

function add() {
  let txtVal = getInpTxt.value.trim();
  let numVal = parseFloat(getInpNo.value.trim());

  if (
    getInpTxt.value == "" ||
    getInpNo.value == "" ||
    getInpNo.value <= 0 ||
    getTotalBudge.innerHTML == "$0"
  ) {
    alert("Please enter a valid expense, amount and budget.");
    return;
  }

  getRow.innerHTML += `
  <tr id="tr1">
  <td> ${1} </td>
  <td> ${txtVal} </td>
  <td> ${numVal} </td>
  <td id="tdBtn">
  <i class="fa-solid fa-pen-to-square" id="btn4" onclick"edt(e)"></i>
  <i class="fa-solid fa-trash" id="btn3" onclick="rmve(this)"></i>
  </td>
  </tr>`;

  arr.push(numVal);
  sum = arr.reduce((acc, curr) => acc + curr);
  if (sum > getTotalBudge.innerHTML.replace("$", "")) {
    alert("You have reached your budget limit.");
    return;
  }
  getTotalExpenses.innerHTML = `$${sum}`

  getInpTxt.value = ""
  getInpNo.value = ""
}
