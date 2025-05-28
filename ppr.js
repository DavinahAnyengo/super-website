document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const errorMsg = document.getElementById("error-msg");
  const loginSection = document.getElementById("login-section");
  const siteSection = document.getElementById("site-section");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
      errorMsg.textContent = "Phone number must be exactly 10 digits.";
      return;
    }

    if (password !== "@Kanga12") {
      errorMsg.textContent = "Incorrect password";
      return;
    }

    // Login successful
    errorMsg.textContent = "";
    loginSection.style.display = "none";
    siteSection.classList.remove("hidden");

    const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }

  
});

  });
});
window.onload = function () {
  // Check if details were saved in localStorage
  const savedEmail = localStorage.getItem("rememberedEmail");
  const savedPhone = localStorage.getItem("rememberedPhone");

  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
  }

  if (savedPhone) {
    document.getElementById("phone").value = savedPhone;
  }

  if (savedEmail || savedPhone) {
    document.getElementById("rememberMe").checked = true;
  }

  // When the form is submitted
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPhone", phone);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPhone");
    }
alert("Login submitted (this is a demo).");
  });
};