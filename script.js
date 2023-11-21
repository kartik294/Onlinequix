function submitQuiz() {
  const correctAnswers = ["a", "d", "a", "d", "a", "a"]; // Your correct answers array
  const totalQuestions = 6; // Total number of questions
  let correctCount = 0;
  let incorrectCount = 0;

  for (let i = 1; i <= totalQuestions; i++) {
    const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswers[i - 1]) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    }
  }

  const resultText = document.getElementById("resultText");
  const correctCountElem = document.getElementById("correctCount");
  const incorrectCountElem = document.getElementById("incorrectCount");
  const resultSection = document.getElementById("result");

  resultText.textContent = `Result: ${correctCount}/${totalQuestions}`;
  correctCountElem.textContent = `Correct: ${correctCount} answers`;
  incorrectCountElem.textContent = `Incorrect: ${incorrectCount} answers`;

  if (correctCount === totalQuestions) {
    resultText.textContent = "Congratulations! All answers are correct!";
  } else {
    resultText.textContent = `You got ${correctCount} correct and ${incorrectCount} incorrect answers.`;
  }

  resultSection.style.display = "block";
}
