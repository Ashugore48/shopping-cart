document.getElementById('myCart-btn').addEventListener('click', (e)=>{
  alert('To check your cart you have to Login first');
})

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const loginEmail = document.getElementById("login-email-input").value;
    const loginPassword = document.getElementById("login-password-input").value;
    let formData = JSON.parse(localStorage.getItem("formData")) || [];
    let exist = false;
    let userdata = JSON.parse(localStorage.getItem("formData")) || [];
    let currentUser;
    userdata.forEach((currEle) => {
      if(currEle.email === loginEmail && currEle.password === loginPassword){
        exist = true;
        currentUser = currEle;
      }
      
    });

    if (!exist) {
      alert("Incorrect Login Credential");
    } else {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      window.location.href = "/shopping-cart/shop/index.html";
    }
  });
