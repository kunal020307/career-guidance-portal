// Example: alert on button click
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    alert("Explore our services to find your dream career!");
  });
});

// Contact Form Validation and Message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name === "" || email === "" || message === "") {
      msg.textContent = "Please fill out all fields.";
      msg.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      msg.textContent = "Please enter a valid email address.";
      msg.style.color = "red";
      return;
    }

    // Simulate successful submission
    msg.textContent = "Thank you! Your message has been sent successfully.";
    msg.style.color = "green";
    form.reset();
  });
});
