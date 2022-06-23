var question = 1;

var answers = new Array(30);

var results = {"competing":0,
                "collaborating":0,
                "compromising":0,
                "avoiding":0,
                "accommodating":0};

var questions = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'questions.json',
        'dataType': 'json',
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

setQuestion();


function setQuestion() {

    document.querySelector('input[id="optionA"]').checked=false;
    document.querySelector('input[id="optionB"]').checked=false;
    if (answers[question] != undefined) {
        document.querySelector('input[id='+answers[question]+']').checked=true;
    }
    
    document.getElementById("answerA").innerHTML=questions[question].A.text;
    document.getElementById("answerB").innerHTML=questions[question].B.text;
    document.getElementById("question").innerHTML=question+"/30";
}

function getAnswer() {
    if ((document.querySelector('input[id="optionA"]').checked)|(document.querySelector('input[id="optionB"]').checked)) {
        answers[question-1] = document.querySelector('input[name="questionForm"]:checked').value;
        return true;
    }
    return false;
}

function nextQuestion() {
    if (getAnswer()){
        if (question < 30) {
            question++;
            setQuestion();
        } else {
            getResults();
        }

    }
}

function prevQuestion() {
    if (question > 0) {
        question--;
    }
    setQuestion();
}

function getResults() {
    console.log(answers.length);
    for (i=0; i < 30; i++) {
        q = questions[i+1];
        a = answers[i];
        v = q[a].type;
        results[v]+=1
    }
    console.log(results)
}
