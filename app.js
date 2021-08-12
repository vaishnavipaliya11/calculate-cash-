var billAmt= document.querySelector("#bill-amount")
var cashAmt = document.querySelector("#cash-given")
var btnNext= document.querySelector("#btn-next")
var btnCheck = document.querySelector("#btn-check")
var errorMsg = document.querySelector(".errorMsg")
var notesTable = document.querySelector(".notesTable")
var typesOfNotes = document.querySelectorAll(".type-of-notes")
var cashAmtDiv = document.querySelector(".cash-amount-div")
console.log(cashAmtDiv);
console.log(typesOfNotes);
console.log(cashAmt);

function nextBtnClickHandler() {
console.log('clicked');
// cashAmtDiv.style.display="block"
// notesTable.style.display="block"

var a = Number(billAmt.value);
var b = Number(cashAmt.value);
console.log(a);
console.log(b);
typesOfNotes.innerText = "hello"
}

function checkBtnHandler(){
  var cash = cashAmt.value
  console.log(cash);
}

btnNext.addEventListener("click", nextBtnClickHandler)
btnNext.addEventListener('click', checkBtnHandler)
