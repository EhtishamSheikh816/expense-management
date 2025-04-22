const getInpBudge = document.getElementById("inpBudge");
const getInpTxt = document.getElementById("inpTxt");
const getInpNo = document.getElementById("inpNo");
const getTotalBudge = document.getElementById("totalBudge");
const getTotalExpenses = document.getElementById("totalExpenses");
const getRemainingBudge = document.getElementById("remainingBudge");
const getRow = document.getElementById("row");
let arr = [];
let rowArr = []
let totalExpenses = 0;
let count = 0



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

  let rowLen = getRow.children.length + 1
  rowArr.push(rowLen)
  rowArr.forEach((i)=>{
    count = i
  })

getRow.innerHTML += `
<tr id="tr1">
  <td> ${count} </td>
  <td> ${txtVal} </td>
  <td> ${numVal} </td>
  <td id="tdBtn">
  <i class="fa-solid fa-pen-to-square" id="btn4" onclick="edt(this)"></i>
  <i class="fa-solid fa-trash" id="btn3" onclick="remve(this)"></i>
  </td>
  </tr>`;

  arr.push(numVal);
  sum = arr.reduce((acc, curr) => acc + curr);
  if (sum > getTotalBudge.innerHTML.replace("$", "")) {
    alert("You have reached your budget limit.");
    // getRow.innerHTML = "";
    getInpTxt.value = "";
    getInpNo.value = "";
    return;
  }
  getTotalExpenses.innerHTML = `$${sum}`;

  let minus = getTotalBudge.innerHTML.replace("$", "") - sum;
  getRemainingBudge.innerHTML = `$${minus}`;

  getInpTxt.value = "";
  getInpNo.value = "";
}

const edt = (e) => {
  let parent = e.parentNode.parentNode
  getInpTxt.value = parent.children[1].textContent.trim()
  getInpNo.value = parent.children[2].textContent.trim()
  parent.remove()
}

function remve(e) {
  e.parentNode.parentNode.remove();
  alert( "Expense removed successfully.");
}

function clrAll() {
  getRow.innerHTML = "";
  getTotalBudge.innerHTML = "$0";
  getTotalExpenses.innerHTML = "$0";
  getRemainingBudge.innerHTML = "$0";
  getInpBudge.value = "";
  getInpTxt.value = "";
  getInpNo.value = "";
  arr = [];
  totalExpenses = 0;
  alert("All data cleared successfully.");
}
