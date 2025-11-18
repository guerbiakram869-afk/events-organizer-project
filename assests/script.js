// ===============================
// DOM ELEMENTS
// ===============================

const form = document.getElementById("reservationForm");
const previewBtn = document.getElementById("previewBtn");
const summaryBox = document.getElementById("summaryBox");
const modalBody = document.getElementById("modalBody");


// ===============================
// SET MIN DATE TO TODAY
// ===============================

const dateInput = document.getElementById("eventDate");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);


// ===============================
// VALIDATION FUNCTION
// ===============================

function validateForm() {
  let valid = true;
  const requiredFields = form.querySelectorAll("[required]");

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      field.classList.add("is-invalid");
      valid = false;
    } else {
      field.classList.remove("is-invalid");
      field.classList.add("is-valid");
    }
  });

  return valid;
}


// ===============================
// UPDATE SUMMARY BOX LIVE
// ===============================

function updateSummary() {
  const name = document.getElementById("name").value;
  const eventType = document.getElementById("eventType").value;
  const date = document.getElementById("eventDate").value;
  const location = document.getElementById("eventLocation").value;

  summaryBox.innerHTML = `
    <p><strong>Nom:</strong> ${name || "-"}</p>
    <p><strong>Type:</strong> ${eventType || "-"}</p>
    <p><strong>Date:</strong> ${date || "-"}</p>
    <p><strong>Lieu:</strong> ${location || "-"}</p>
  `;
}

form.addEventListener("input", updateSummary);


// ===============================
// PREVIEW MODAL
// ===============================

previewBtn.addEventListener("click", () => {
  if (!validateForm()) return;

  modalBody.innerHTML = summaryBox.innerHTML;
});


// ===============================
// SUBMIT FORM
// ===============================

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  alert("🎉 Réservation envoyée avec succès ! (simulation)");
  form.reset();
  summaryBox.innerHTML = "<p>Aucune information pour le moment.</p>";

  form.querySelectorAll("input, select").forEach(el => {
    el.classList.remove("is-valid", "is-invalid");
  });
});
