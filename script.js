function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * rate * years) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  var result = document.getElementById("result");

  if (principal <= 0) {
    alert("Please enter a positive number");
    result.innerHTML = "";
    document.getElementById("principal").focus();
    return;
  }

  result.innerHTML =
    "If you deposit <mark>$" +
    principal +
    "</mark> at a rate of <mark>" +
    rate +
    "%</mark> for <mark>" +
    years +
    "</mark> years, you will receive <mark>$" +
    interest +
    "</mark> in <mark>" +
    year +
    "</mark>.";
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_value").innerText = rateval;
}
