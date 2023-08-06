const currentUserString = JSON.parse(localStorage.getItem("currentUser"));
let formData = JSON.parse(localStorage.getItem("formData")) || [];
document.getElementById("save-info-button").addEventListener("click", (e) => {
  e.preventDefault();
  let newFirstName = document.getElementById("firstname-input").value;
  let newLastName = document.getElementById("lastname-input").value;
  let newCurrentUser = {
    name: newFirstName,
    lastName: newLastName,
    email: currentUserString.email,
    password: currentUserString.password,
  };
  localStorage.setItem("currentUser", JSON.stringify(newCurrentUser));
  formData.push(newCurrentUser);
  console.log(formData);
  localStorage.setItem("formData", JSON.stringify(formData));
  alert("Information saved successfully!!");
  document.getElementById("firstname-input").value = "";
  document.getElementById("lastname-input").value = "";
});
let TruePass = currentUserString.password;
document
  .getElementById("change-password-button")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let oldPass = document.getElementById("old-password-input").value;
    let newPass = document.getElementById("new-password-input").value;
    let confirmPass = document.getElementById(
      "confirm-new-password-input"
    ).value;
    if (newPass !== confirmPass) {
      alert("New Password and Current Passwords are not matching");
    }
    if (oldPass === TruePass) {
      let newCurrentUser = {
        name: currentUserString.name,
        lastName: currentUserString.lastName,
        email: currentUserString.email,
        password: confirmPass,
      };
      localStorage.setItem("currentUser", JSON.stringify(newCurrentUser));
      formData.push(newCurrentUser);
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Password change successfully!!");
      document.getElementById("old-password-input").value = "";
      document.getElementById("new-password-input").value = "";
      document.getElementById("confirm-new-password-input").value = "";
    } else {
      alert("old password is not matching");
    }
  });

document.getElementById("logout-button").addEventListener("click", (e) => {
  localStorage.removeItem('currentUser');
  window.location.href('/shopping-cart/');
});
