let billAmount = document.querySelector("#billamount");
let tip = document.getElementById("tip");
let output = document.getElementById("output")

function calculate() {
    billValue = billAmount.value;
    tipValue = tip.value;
    total = billValue * (1 + tipValue / 100);
    output.innerText = total
}