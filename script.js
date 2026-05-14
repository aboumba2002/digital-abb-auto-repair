const form = document.getElementById("leadForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    vehicle: form.vehicle.value,
    problem: form.problem.value,
  };

  try {
    const response = await fetch(
      "https://aboumba2012.app.n8n.cloud/webhook-test/auto-repair-lead",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Request submitted successfully!");
      form.reset();
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    alert("Error connecting to server.");
  }
});
