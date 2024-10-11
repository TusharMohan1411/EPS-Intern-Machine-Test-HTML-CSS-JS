// Navbar Script
const navBars = document.getElementById("bars");
const navItems = document.getElementById("navItems");

navBars.addEventListener("click", () => {
  navItems.classList.toggle("open-nav");
});

// Form Valiadtion Script
const form = document.querySelector(".contact-form");
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');
const email = document.querySelector('input[name="email"]');
const phone = document.querySelector('input[name="phone"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (firstName.value.trim() === "") {
    alert("First Name is required");
  } else if (lastName.value.trim() === "") {
    alert("Last Name is required");
  } else if (email.value.trim() === "") {
    alert("Please enter a valid email address");
  } else if (
    phone.value.trim() === "" ||
    isNaN(phone.value) ||
    phone.value.length < 10
  ) {
    alert("Please enter a valid phone number");
  } else if (password.value.trim() === "" || password.value.length < 8) {
    alert("Password must be at least 8 characters long");
  } else {
    console.log({
      first_name: firstName.value,
      last_name: lastName.value,
      phone_number: phone.value,
      email: email.value,
      password: password.value,
    });

    alert("Form submitted successfully");

    firstName.value = "";
    lastName.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
  }
});
