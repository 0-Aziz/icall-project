function submitQuiz() {
  const answers = {
    q1: "b", q2: "b", q3: "b", q4: "b", q5: "b",
    q6: "d", q7: "b", q8: "b", q9: "b", q10: "b"
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
