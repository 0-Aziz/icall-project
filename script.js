function submitQuiz() {
  const answers = {
    q1: "b", q2: "b", q3: "b", q4: "b", q5: "b",
    q6: "d", q7: "b", q8: "b", q9: "b", q10: "b"
  };

  let score = 0;
  const total = Object.keys(answers).length;

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  const percentage = (score / total) * 100;
  document.getElementById("result").innerHTML = `
    <h2>Your Score: ${score} / ${total} (${percentage.toFixed(1)}%)</h2>
    <p>${getFeedback(percentage)}</p>
  `;
}

function getFeedback(percentage) {
  if (percentage >= 90) return "Excellent! You clearly understood the material.";
  else if (percentage >= 70) return "Well done! Review a few concepts to improve.";
  else if (percentage >= 50) return "Keep studying! Revisit what you learned.";
  else return "Review the material and try again!";
}
