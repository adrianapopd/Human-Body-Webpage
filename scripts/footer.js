document.addEventListener("DOMContentLoaded", function () {
  function setupFooter() {
    const footerElement = document.getElementById("footerA");
    if (footerElement) {
      fetch("../footer/footer.html")
        .then((response) => response.text())
        .then((data) => {
          footerElement.innerHTML = data;
          toggleFooter();
          window.addEventListener("resize", toggleFooter);
          window.addEventListener("scroll", toggleFooter);
        })
        .catch((error) => {
          console.error("Error fetching footer:", error);
        });
    }
  }

  // Function to toggle footer based on content height
  function toggleFooter() {
    const footer = document.getElementById("footerA");
    const mainContent = document.querySelector("main");

    if (
      mainContent.offsetHeight <= window.innerHeight ||
      mainContent.offsetHeight > window.innerHeight
    ) {
      footer.style.display = "block";
    } else {
      footer.style.display = "none";
    }
  }

  // Call function
  setupFooter();
});
