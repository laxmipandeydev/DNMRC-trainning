// js/contact-form.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert("Thank you — your registration has been received.");
    form.reset();
  });
});
