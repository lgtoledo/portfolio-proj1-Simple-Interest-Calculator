function compute() {
  console.log("ejecutando compute()");
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * rate * years) / 100;
  var year = new Date().getFullYear() + parseInt(year);

  var result = document.getElementById("result");
  result.innerHTML =
    "If you deposit $" +
    principal +
    " at a rate of " +
    rate +
    "% for " +
    years +
    " years, you will receive $" +
    interest +
    " in " +
    year +
    ".";

  if (principal <= 0) {
    result.innerHTML = "Please enter a positive number";
  }
}

function updateRate() {
  console.log("ejecutando updateRate()");
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_value").innerText = rateval;
}
