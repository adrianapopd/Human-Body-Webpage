function setupNavbar() {
  const navbarElement = document.getElementById("navbar");
  if (navbarElement) {
    fetch("../navbar/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarElement.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error fetching navbar list:", error);
      });
  }
}

// Call function
setupNavbar();
