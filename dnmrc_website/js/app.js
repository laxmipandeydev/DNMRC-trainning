// email.js
// This file uses EmailJS (https://www.emailjs.com/) to send form data to your email.
// Steps:
// 1. Create free account at EmailJS and obtain: userID, serviceID, templateID.
// 2. Replace the placeholders below: YOUR_EMAILJS_USER_ID, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID.
// 3. In your EmailJS template, add the template parameters used below (name, email, phone, course, status, message).
// 4. Upload the site to hosting (Netlify, GitHub Pages, etc.) or test locally with a web server.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("regForm");
  const msg = document.getElementById("formMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.textContent = "Sending...";

    // collect form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      course: form.course.value,
      status: form.status.value,
      message: form.message.value,
    };

    // send via EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        msg.style.color = "green";
        msg.textContent = "Thank you — your registration has been sent.";
        form.reset();
      },
      function (err) {
        console.error("FAILED...", err);
        msg.style.color = "red";
        msg.innerHTML =
          "Failed to send. As a workaround, you can email <strong>dnmrc0502@gmail.com</strong> with your details.";
      }
    );
  });
});
