function generateProblem() {
    const operands = ['+', '-', '*']; 
    const operator = operands[Math.floor(Math.random() * operands.length)];
    let num1 = Math.floor(Math.random() * 10) + 1; 
    let num2 = Math.floor(Math.random() * 10) + 1;


    if (operator === '-' && num1 < num2) {
        [num1, num2] = [num2, num1]; 
    }

    const problem = `${num1} ${operator} ${num2}`;
    document.getElementById('problem').textContent = problem;
    return eval(problem);
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = generateProblem();
    const result = document.getElementById('result');

    if (isNaN(userAnswer)) {
        result.textContent = "Please enter a valid number!";
    } else if (userAnswer === correctAnswer) {
        result.textContent = "Correct! 🎉";
    } else {
        result.textContent = `Incorrect. The correct answer was ${correctAnswer}. 😢`;
    }
}