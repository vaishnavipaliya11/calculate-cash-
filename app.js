var billAmt= document.querySelector("#bill-amount")
var cashAmt = document.querySelector("#cash-given")
var btnNext= document.querySelector("#btn-next")
var btnCheck = document.querySelector("#btn-check")
var errorMsg = document.querySelector(".errorMsg")
var notesTable = document.querySelector(".notesTable")
var typesOfNotes = document.querySelectorAll(".type-of-notes")
var cashAmtDiv = document.querySelector(".cash-amount-div")

let noteArray=["2000","500","200","100","50","10","5","1"]

function nextBtnHandler(){
  if(Number( billAmt.value) > 0){
    cashAmtDiv.style.display="block";
    btnNext.style.display="none";
    errorMsg.style.display="none";
  }else {
    showError("please enter proper values")
  }
}

function checkBtnHandler() {

  var bill= Number(billAmt.value);
  var cash = Number(cashAmt.value);

  if(cash>0 && bill>0){
      if(cash>=bill){
        if(cash===bill){
          showError("no amount should be returned")
          notesTable.style.display="none";
        }else {
          calculateNoOfNotes(bill,cash)
          notesTable.style.display="block";
        }

      }else{
        showError("wanna wash plates ??")
        notesTable.style.display="none";
      }
  }else {
    showError("enter proper values greater than 0")
    notesTable.style.display="none"
  }
}

function calculateNoOfNotes(bill,cash) {
  notesTable.style.display="block"
  errorMsg.style.display="none";

  var diff = cash-bill;

  for(i=0; i<noteArray.length; i++){

    const noOfNotes = Math.trunc(diff/noteArray[i])
    diff = diff%noteArray[i];
    typesOfNotes[i].innerText= noOfNotes;

  }

}


function showError(msg) {
  errorMsg.style.display="block";
  errorMsg.innerText= msg
}


btnNext.addEventListener("click",nextBtnHandler)
btnCheck.addEventListener("click",checkBtnHandler)
