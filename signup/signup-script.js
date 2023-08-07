document.getElementById("myCart-btn").addEventListener("click", (e) => {
  alert("To check your cart you have to Login first");
});

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("firstname-input").value;
    const lastName = document.getElementById("lastname-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const confirmPassword = document.getElementById(
      "confirm-password-input"
    ).value;
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    let Newuser = {
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };
    let formData = JSON.parse(localStorage.getItem("formData")) || [];

    formData.push(Newuser);
    localStorage.setItem("formData", JSON.stringify(formData));
    document.getElementById("signupForm").reset();
    document.getElementById("firstname-input").focus();
    alert("Signup successful");
  });

// If User closes the window
window.addEventListener("beforeunload", function (event) {
  localStorage.removeItem("currentUser");
});
