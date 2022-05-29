const note = document.querySelector("#note");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const passportNumber = document.querySelector("#passportNumber");
const form = document.querySelector("#registration-contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "../html/registrationLast.html";
});

const store = (key, value) => localStorage.setItem(key, value);

note.addEventListener("change", (e) => store("note", e.target.value));
phone.addEventListener("change", (e) => store("phone", e.target.value));
email.addEventListener("change", (e) => store("email", e.target.value));
passportNumber.addEventListener("change", (e) =>
  store("passportNumber", e.target.value)
);
