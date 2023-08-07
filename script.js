document.getElementById("my-cart").addEventListener("click", () => {
  alert("To check your cart you have to Login first");
});
document.getElementById("login-btn").addEventListener("click", () => {
  window.location.href = "/shopping-cart/login/index.html";
});
document.getElementById("signup-btn").addEventListener("click", () => {
  window.location.href = "/shopping-cart/signup/index.html";
});

// If User closes the window
window.addEventListener("beforeunload", function (event) {
  localStorage.removeItem("currentUser");
});
