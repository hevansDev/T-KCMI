var results = JSON.parse(localStorage.getItem("results"));

document.getElementById("competing").innerHTML+=results["competing"];
document.getElementById("collaborating").innerHTML+=results["collaborating"];
document.getElementById("compromising").innerHTML+=results["compromising"];
document.getElementById("avoiding").innerHTML+=results["avoiding"];
document.getElementById("accommodating").innerHTML+=results["accommodating"];