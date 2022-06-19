var question = 0;

var questions = JSON.parse(questions);
setQuestion();


function setQuestion() {
    document.querySelector('input[name="questionForm"]').checked=false;
    document.getElementById("answerA").innerHTML=questions[question].A;
    document.getElementById("answerB").innerHTML=questions[question].B;
}

function getAnswer() {
    if (document.querySelector('input[name="questionForm"]').checked) {
        return true;
    }
    return false;
}

function nextQuestion() {
    if (getAnswer()){
        if (question < questions.length-1) {
            question++;
        }
        setQuestion();
    }
}

function prevQuestion() {
    if (question > 0) {
        question--;
    }
    setQuestion();
}

