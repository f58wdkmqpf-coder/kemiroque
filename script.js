// Confirmation simple pour le formulaire de contact
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Votre demande a bien été envoyée. Nous vous recontacterons rapidement.");
    form.reset();
  });
}
