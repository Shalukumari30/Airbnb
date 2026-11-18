console.log("Validation script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".needs-validation");
  console.log("Forms found:", forms.length);

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    });
  });
});
