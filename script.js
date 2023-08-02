document.getElementById("my-cart").addEventListener("click", () => {
  alert("To check your cart you have to Login first");
});
document.getElementById("login-btn").addEventListener("click", () => {
  window.location.href = "/login";
});
document.getElementById("signup-btn").addEventListener("click", () => {
  window.location.href = "/signup";
});
