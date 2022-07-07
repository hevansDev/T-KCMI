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
    const resultsElement = document.createElement("div");
    resultsElement.id = "results";
    resultsElement.className = "jumbotron d-flex flex-column";

    const title = document.createElement("h1");
    title.innerHTML="Your Results";

    const competing = document.createElement("h2");
    competing.innerHTML= "Competing "+results["competing"];

    const collaborating = document.createElement("h2");
    collaborating.innerHTML="Collaborating " +results["collaborating"];

    const compromising = document.createElement("h2");
    compromising.innerHTML="Compromising "+results["compromising"];

    const avoiding = document.createElement("h2");
    avoiding.innerHTML="Avoiding "+results["avoiding"];

    const accommodating = document.createElement("h2");
    accommodating.innerHTML="Accommodating "+results["accommodating"];

    resultsElement.appendChild(title);
    resultsElement.appendChild(competing);
    resultsElement.appendChild(collaborating);
    resultsElement.appendChild(compromising);
    resultsElement.appendChild(avoiding);
    resultsElement.appendChild(accommodating);
    document.getElementById("main").appendChild(resultsElement);

    window.scrollTo(0, document.body.scrollHeight);
}


function setAnswers() {
    for (i=0; i < 30; i++) {
        var number = i + 1;
        var A = document.getElementById("radio"+number+"A").checked = true;
    }
}