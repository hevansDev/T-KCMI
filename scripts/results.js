function validateAnswers() {
    var valid = true;
    for (i=0; i < 30; i++) {
        var number = i + 1;
        var A = document.getElementById("radio"+number+"A").checked;
        var B = document.getElementById("radio"+number+"B").checked;
        if (!(A || B)) {
            valid = false;
            document.getElementById("radio"+number+"A").focus();
            break;
        }
    }
    if (valid) {getResults();};
}

function getResults() {
    var results = {"competing":0,
                   "collaborating":0,
                   "compromising":0,
                   "avoiding":0,
                   "accommodating":0};
    for (i=0; i < 30; i++) {
        var number = i + 1;
        var A = document.getElementById("radio"+number+"A");
        var B = document.getElementById("radio"+number+"B");

        var answer;
        if (A.checked) {
            answer = A;
        } else if (B.checked) {
            answer = B;
        }
        results[answer.value] += 1;
    }
    displayResults(results);
}

function displayResults(results) {
    document.getElementById("competing").innerHTML= "Competing "+results["competing"];
    document.getElementById("collaborating").innerHTML="Collaborating " +results["collaborating"];
    document.getElementById("compromising").innerHTML="Compromising "+results["compromising"];
    document.getElementById("avoiding").innerHTML="Avoiding "+results["avoiding"];
    document.getElementById("accommodating").innerHTML="Accommodating "+results["accommodating"];

}


function setAnswers() {
    for (i=0; i < 30; i++) {
        var number = i + 1;
        var A = document.getElementById("radio"+number+"A").checked = true;
    }
}