// If User closes the window
window.addEventListener("beforeunload", function(event) {
    localStorage.removeItem("currentUser");
  });