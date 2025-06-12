function submitQuiz() {
  const answers = {
    q1: "b",
    q2: "b",
    q3: "b"
  };
  let score = 0;
  let total = 3;

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  document.getElementById("result").innerHTML = `<h2>Your Score: ${score} / ${total}</h2>`;
}
