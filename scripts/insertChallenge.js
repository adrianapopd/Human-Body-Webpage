// Function to add footer to the current page
function setupChallenge() {
  const challengeElement = document.getElementById("quizz");
  if (challengeElement) {
    fetch("../challenge/challenge-home.html")
      .then((response) => response.text())
      .then((data) => {
        challengeElement.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error fetching navbar list:", error);
      });
  }
}

// Call function
setupChallenge();
