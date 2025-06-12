function submitQuiz() {
  const answers = {
    q1: "d", // Learning due to personal interest
    q2: "a", // They demonstrate sustained effort
    q3: "c", // The psychological and neurobiological factors that enable humans to acquire, use, comprehend, and produce language
    q4: "d", // The study of how language varies and changes according to social factors
    q5: "a", // To examine how context contributes to meaning
    q6: "d", // Sentence structure and the rules for forming grammatical sentences
    q7: "c", // The study of the sound system of a language
    q8: "a", // The structure of words and how they are formed
    q9: "d", // The study of meaning in language
    q10: "c" // Real-world problems such as language teaching, translation, and forensic linguistics
  };

  let score = 0;
  const total = Object.keys(answers).length;

  // Reset previous styling before calculating new results
  document.querySelectorAll('.option').forEach(el => {
    el.classList.remove('correct-answer-style', 'wrong-answer-style');
  });

  // Highlight correct answers and count score
  for (let q in answers) {
    const correctAnswer = answers[q];
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    
    // Always apply correct-answer-style to the correct option label
    document.querySelector(`input[name="${q}"][value="${correctAnswer}"]`).parentElement.classList.add('correct-answer-style');

    if (selected) {
      if (selected.value === correctAnswer) {
        score++;
        // If selected is correct, no need to do anything as it's already styled green.
      } else {
        // If selected is wrong, remove green from selected and add red
        selected.parentElement.classList.remove('correct-answer-style'); // In case it was the correct one but user chose it. (This scenario won't happen but good for robustness)
        selected.parentElement.classList.add('wrong-answer-style');
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