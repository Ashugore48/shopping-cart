// Function to update the formData array in local storage
function updateFormData(newCurrentUser) {
  const key = "formData";
  const arrayJSON = localStorage.getItem(key);
  const myArray = JSON.parse(arrayJSON) || [];

  if (Array.isArray(myArray)) {
    const objectToDelete = newCurrentUser.email;
    const indexToDelete = myArray.findIndex(
      (item) => item.email === objectToDelete
    );

    if (indexToDelete !== -1) {
      myArray.splice(indexToDelete, 1);
    }

    myArray.push(newCurrentUser);
    localStorage.setItem(key, JSON.stringify(myArray));
  } else {
    console.error("formData is not an array.");
  }
}

const currentUserString = JSON.parse(localStorage.getItem("currentUser"));

if (currentUserString !== null) {
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
    updateFormData(newCurrentUser);

    alert("Information saved successfully!!");
    document.getElementById("firstname-input").value = "";
    document.getElementById("lastname-input").value = "";
  });

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
      } else if (oldPass === currentUserString.password) {
        let newCurrentUser = {
          name: currentUserString.name,
          lastName: currentUserString.lastName,
          email: currentUserString.email,
          password: confirmPass,
        };
        localStorage.setItem("currentUser", JSON.stringify(newCurrentUser));
        updateFormData(newCurrentUser);

        alert("Password changed successfully!!");
        document.getElementById("old-password-input").value = "";
        document.getElementById("new-password-input").value = "";
        document.getElementById("confirm-new-password-input").value = "";
      } else {
        alert("Old password is not matching");
      }
    });

  document.getElementById("logout-button").addEventListener("click", (e) => {
    localStorage.removeItem("currentUser");
    window.location.href = "/shopping-cart/";
  });
} else {
  window.location.href = "/shopping-cart/";
  alert("User not found");
}
// If User closes the window
window.addEventListener("beforeunload", function (event) {
  localStorage.removeItem("currentUser");
});
