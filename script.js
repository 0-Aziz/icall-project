function submitQuiz() {
  const answers = {
    q1: "b", // Intrinsic motivation
    q2: "b", // Sustained effort
    q3: "b", // Compensates for deficiencies
    q4: "b", // Metacognitive strategy
    q5: "b", // Varies across contexts
    q6: "d", // Competition (not an ACTFL standard)
    q7: "b", // Real-world assessment
    q8: "b", // Shoe size (irrelevant)
    q9: "b", // Learning style preferences
    q10: "b" // Enhances autonomy
  };

  let score = 0;
  const total = Object.keys(answers).length; // Total questions (10)

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  // Display result with percentage
  const percentage = (score / total) * 100;
  document.getElementById("result").innerHTML = `
    <h2>Your Score: ${score} / ${total} (${percentage.toFixed(1)}%)</h2>
    <p>${getFeedback(percentage)}</p>
  `;
}

function getFeedback(percentage) {
  if (percentage >= 90) return "Excellent! You mastered the material.";
  else if (percentage >= 70) return "Good job! You understand most concepts.";
  else if (percentage >= 50) return "Keep practicing! Review the PDF for better results.";
  else return "Try again after reviewing the key concepts.";
}
