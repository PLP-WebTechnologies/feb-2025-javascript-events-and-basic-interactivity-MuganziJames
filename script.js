const changeBtn = document.getElementById("changeBtn");
const secretBtn = document.getElementById("secretBtn");
const keyOutput = document.getElementById("keyOutput");
const hoverBox = document.getElementById("hoverBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const galleryImg = document.getElementById("galleryImg");
const tabButtons = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

changeBtn.addEventListener("click", () => {
  if (changeBtn.textContent === "Make Some Magic") {
    changeBtn.textContent = "Undo the Magic";
    changeBtn.style.background = "#d97706";
  } else {
    changeBtn.textContent = "Make Some Magic";
    changeBtn.style.background = "#4f46e5";
  }
});

secretBtn.addEventListener("dblclick", () => {
  document.body.style.background = document.body.style.background
    ? ""
    : "#fee2e2";
});

window.addEventListener("keydown", (e) => {
  keyOutput.textContent = e.key;
});

hoverBox.addEventListener(
  "mouseenter",
  () => (hoverBox.style.background = "#bbf7d0")
);
hoverBox.addEventListener(
  "mouseleave",
  () => (hoverBox.style.background = "#ddd")
);

const images = [
  "https://picsum.photos/400/300?random=1",
  "https://picsum.photos/400/300?random=2",
  "https://picsum.photos/400/300?random=3",
];
let current = 0;
prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  galleryImg.src = images[current];
});
nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  galleryImg.src = images[current];
});

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabPanels.forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

[nameInput, emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => {
    validateName();
    validateEmail();
    validatePassword();
  });
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid = validateName() & validateEmail() & validatePassword();
  if (valid) {
    formMessage.textContent = "Success! You are in.";
    signupForm.reset();
  } else {
    formMessage.textContent = "Please fix the errors above.";
  }
});
