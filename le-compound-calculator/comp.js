const depositBox = document.querySelector("#deposit");
const rateBox = document.querySelector("#rate");
const yearBox = document.querySelector("#years");
const finalAmount = document.querySelector("#amount");
const dropDown = document.querySelector("#dropdown");

depositBox.addEventListener("input", computeInterest);
rateBox.addEventListener("input", computeInterest);
yearBox.addEventListener("input", computeInterest);
dropDown.addEventListener("select", computeInterest);

function computeInterest() {
  const deposit = Number(depositBox.value);
  const insidePar = 1 + Number(rateBox.value) / 100 / Number(dropDown.value);
  const exp = Number(yearBox.value) * Number(dropDown.value);
  const amount = deposit * insidePar ** exp;
  finalAmount.textContent = amount.toFixed(2);
}
