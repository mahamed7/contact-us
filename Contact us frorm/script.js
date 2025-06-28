document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const status = document.getElementById("formStatus");

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    status.style.color = "red";
    status.textContent = "Please fill in all fields.";
    return;
  }

  // Basic email format validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    status.style.color = "red";
    status.textContent = "Enter a valid email address.";
    return;
  }

  // Simulate success
  status.style.color = "green";
  status.textContent = "Message sent successfully!";
  this.reset(); // clear the form
});
