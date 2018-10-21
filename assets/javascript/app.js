$(document).ready(function () {
    var userScore = {
        correct: 0,
        incorrect: 0
    };

    var questionVar = ["#question1", "#question2", "#question3"];
    var count = 10;

    var counter = setInterval(timer, 1000);
    
    function timer() {
        count = count - 1;
        if (count === 0) {
            clearInterval(counter);
            alert("Time's Up!")
            for (var i = 0; i < questionVar.length; i++) {
                clearInterval(counter);
                checkAnswer($(questionVar[i]));
            }
            alert("Your score is... Correct: " + userScore.correct + " --- Incorrect: " + userScore.incorrect);
        }
        document.getElementById("timerDiv").innerHTML = count + " secs";
    }

    timer();

    $("#submitBut").on("click", function () {
        for (var i = 0; i < questionVar.length; i++) {
            clearInterval(counter);
            checkAnswer($(questionVar[i]));
        }
        alert("Your score is... Correct: " + userScore.correct + " --- Incorrect: " + userScore.incorrect);
    });

    function checkAnswer(questionVar) {
        if ((questionVar.find('input[type="radio"]:checked').attr("value")) == "1") {
            userScore.correct++;
        } else if ((questionVar.find('input[type="radio"]:checked').attr("value")) == "2") {
            userScore.incorrect++;
        };
    }


    //For some reason, I can't get this reset button working. I've tried various different methods, but ran out of time.
    $("#resetBut").on("click", function () {
        if (('input[type="radio"]:checked')) {
            $('input[type="radio"]').attr('checked', false);
        }
        userScore.correct = 0;
        userScore.incorrect = 0;
        count = 10;
    });
});