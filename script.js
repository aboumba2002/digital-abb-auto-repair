const serviceForm = document.querySelector("#lead-form form");

serviceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thanks for choosing Digital ABB Auto Repair. We will contact you shortly to confirm your service request.");
  serviceForm.reset();
});
