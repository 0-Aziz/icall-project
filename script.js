function submitQuiz() {
  const answers = {
    q1: "b", // Learning due to personal interest
    q2: "b", // They demonstrate sustained effort
    q3: "b", // The psychological and neurobiological factors that enable humans to acquire, use, comprehend, and produce language
    q4: "b", // The study of how language varies and changes according to social factors
    q5: "b", // To examine how context contributes to meaning
    q6: "d", // Sentence structure and the rules for forming grammatical sentences
    q7: "b", // The study of the sound system of a language
    q8: "b", // The structure of words and how they are formed
    q9: "b", // The study of meaning in language
    q10: "b" // Real-world problems such as language teaching, translation, and forensic linguistics
  };

  let score = 0;
  const total = Object.keys(answers).length;

  // Highlight correct answers and count score
  for (let q in answers) {
    const correctAnswer = answers[q];
    const selected = document.querySelector(`input[name="${q}"]:checked`);

    // Highlight all correct answers in green
    document.querySelectorAll(`input[name="${q}"][value="${correctAnswer}"]`).forEach(el => {
      el.parentElement.style.backgroundColor = '#e6f7e6';
      el.parentElement.style.borderColor = 'var(--success)';
    });

    if (selected) {
      if (selected.value === correctAnswer) {
        score++;
      } else {
        // Highlight wrong answers in red
        selected.parentElement.style.backgroundColor = '#ffebeb';
        selected.parentElement.style.borderColor = 'var(--danger)';
      }
    }
  }

  const percentage = Math.round((score / total) * 100);
  let feedback = '';
  let resultClass = '';

  if (percentage >= 90) {
    feedback = 'Excellent! You clearly understood the material.';
    resultClass = 'success';
  } else if (percentage >= 70) {
    feedback = 'Well done! Review a few concepts to improve.';
    resultClass = 'success';
  } else if (percentage >= 50) {
    feedback = 'Keep studying! Revisit what you learned.';
    resultClass = 'warning';
  } else {
    feedback = 'Review the material and try again!';
    resultClass = 'danger';
  }

  document.getElementById("result").innerHTML = `
    <div class="result-box ${resultClass}">
      <h2>Your Score: ${score}/${total} (${percentage}%)</h2>
      <p>${feedback}</p>
    </div>
  `;

  // Scroll to results
  document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}
