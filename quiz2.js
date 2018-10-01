//********** Question 1 **********
var q1a1 = document.getElementById('q1a1'),
    q1a2 = document.getElementById('q1a2'),
    q1a3 = document.getElementById('q1a3'),
    solution1 = document.getElementById('solution1');

var mistakes = 0;

//Q1 Wrong Answer
q1a1.addEventListener("click", function() {
    q1a1.style.backgroundColor = "red";
    solution1.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//Q1 Correct Answer
q1a2.addEventListener("click", function() {
    q1a2.style.backgroundColor = "green";
    solution1.textContent = "Correct Answer!";
});

//Q1 Wrong Answer
q1a3.addEventListener("click", function() {
    q1a3.style.backgroundColor = "red";
    solution1.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//********** Question 2 **********
var q2a1 = document.getElementById('q2a1'),
    q2a2 = document.getElementById('q2a2'),
    q2a3 = document.getElementById('q2a3'),
    solution2 = document.getElementById('solution2');

//Q2 Wrong Answer
q2a1.addEventListener("click", function() {
    q2a1.style.backgroundColor = "red";
    solution2.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//Q2 Wrong Answer
q2a2.addEventListener("click", function() {
    q2a2.style.backgroundColor = "red";
    solution2.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//Q2 Correct Answer
q2a3.addEventListener("click", function() {
    q2a3.style.backgroundColor = "green";
    solution2.textContent = "Correct Answer!";
});

//********** Question 3 **********
var q3a1 = document.getElementById('q3a1'),
    q3a2 = document.getElementById('q3a2'),
    q3a3 = document.getElementById('q3a3'),
    solution3 = document.getElementById('solution3');

//Q3 Wrong Answer
q3a1.addEventListener("click", function() {
    q3a1.style.backgroundColor = "red";
    solution3.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//Q3 Correct Answer
q3a2.addEventListener("click", function() {
    q3a2.style.backgroundColor = "green";
    solution3.textContent = "Correct Answer!";
});

//Q3 Wrong Answer
q3a3.addEventListener("click", function() {
    q3a3.style.backgroundColor = "red";
    solution3.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//********** Question 4 **********
var q4a1 = document.getElementById('q4a1'),
    q4a2 = document.getElementById('q4a2'),
    q4a3 = document.getElementById('q4a3'),
    solution4 = document.getElementById('solution4');

//Q4 Correct Answer
q4a1.addEventListener("click", function() {
    q4a1.style.backgroundColor = "green";
    solution4.textContent = "Correct Answer!";
});

//Q4 Wrong Answer
q4a2.addEventListener("click", function() {
    q4a2.style.backgroundColor = "red";
    solution4.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//Q4 Wrong Answer
q4a3.addEventListener("click", function() {
    q4a3.style.backgroundColor = "red";
    solution4.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//********** Question 5 **********
var q5a1 = document.getElementById('q5a1'),
    q5a2 = document.getElementById('q5a2'),
    q5a3 = document.getElementById('q5a3'),
    solution5 = document.getElementById('solution5'),
    score = document.getElementById('score');

//Q5 Correct Answer
q5a1.addEventListener("click", function() {
    q5a1.style.backgroundColor = "green";
    solution5.textContent = "Correct Answer!";
    
    console.log(mistakes);
    
    //Player Feedback
    if (mistakes >= 5) {
        score.textContent = "Gosh, looks like you may need to pay more attention to the lectures...";
    } else if (mistakes >= 3) {
        score.textContent = "Unlucky, you made " + mistakes + " errors. Keep trying, you'll get there!";
    } else if (mistakes >= 1) {
        score.textContent = "Good job! You only made " + mistakes + " errors.";
    } else {
        score.textContent = "Congrats! You made " + mistakes + " errors. Perfect score!";
    }
    
    //create New button
        var next = document.createElement("link");
        next.innerHTML="<a href='fall_rom4.html'>Next Lesson</a>";
        next.style.display = "block";
        next.style.color = "#ffffff";
        next.style.textDecoration = "none";
        next.style.border = "none";
        next.classList += "mx-auto account-button but-transform mt-4";
        score.appendChild(next);
});

//Q5 Wrong Answer
q5a2.addEventListener("click", function() {
    q5a2.style.backgroundColor = "red";
    solution5.textContent = "Incorrect - try again!";
    mistakes += 1;
});

//Q5 Wrong Answer
q5a3.addEventListener("click", function() {
    q5a3.style.backgroundColor = "red";
    solution5.textContent = "Incorrect - try again!";
    mistakes += 1;
});


