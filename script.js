const contactUsForm = document.getElementById("contactUsForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const generalQuery = document.getElementById("generalQuery");
const generalQueryContainer = document.getElementById("generalQueryContainer");
const supportQuery = document.getElementById("supportQuery");
const supportQueryContainer = document.getElementById("supportQueryContainer");
const message = document.getElementById("message");
const newsletter = document.getElementById("newsletter");
const formSubmitButton = document.getElementById("formSubmitButton");
const successMessage = document.getElementById("successMessage");
const nameAndEmailInputs = document.querySelectorAll(".names-and-email-inputs");

nameAndEmailInputs.forEach((input) => {
  input.addEventListener("mouseleave", (event) => {
    if (event.target.id === "firstName") input.placeholder = "Jhon";
    else if (event.target.id === "lastName") input.placeholder = "Appleseed";
    else if (event.target.id === "email")
      input.placeholder = "email@example.com";
  });
  input.addEventListener("mouseenter", () => (input.placeholder = ""));
});

generalQueryContainer.addEventListener("click", () => {
  generalQuery.checked = true;
  if (generalQuery.checked) {
    generalQuery.parentElement.style.backgroundColor = "var(--Green-200)";
    supportQuery.parentElement.style.backgroundColor = "transparent";
  }
});

supportQueryContainer.addEventListener("click", () => {
  supportQuery.checked = true;
  if (supportQuery.checked) {
    supportQuery.parentElement.style.backgroundColor = "var(--Green-200)";
    generalQuery.parentElement.style.backgroundColor = "transparent";
  }
});

function displayError(elementId, tip) {
  const errorElement = document.getElementById(`${elementId}Error`);
  if (tip) {
    errorElement.style.display = "block";
  } else {
    errorElement.style.display = "none";
  }
}

function validateFirstName() {
  if (firstName.value.trim() === "") {
    displayError("firstName", true);
    message.style.borderColor = "var(--Red)";
    return false;
  } else {
    displayError("firstName", false);
    message.style.borderColor = "var(--Grey-500)";
    return true;
  }
}

function validateLastName() {
  if (lastName.value.trim() === "") {
    displayError("lastName", true);
    message.style.borderColor = "var(--Red)";
    return false;
  } else {
    displayError("lastName", false);
    message.style.borderColor = "var(--Grey-500)";
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    message.style.borderColor = "var(--Red)";
    return false;
  } else {
    displayError("email", false);
    message.style.borderColor = "var(--Grey-500)";
    return true;
  }
}

function validateQuery() {
  const queries = document.querySelectorAll(".query-type-inputs");
  let isChecked = false;
  queries.forEach((query) => {
    if (query.checked) {
      isChecked = true;
    }
  });
  displayError("query", !isChecked);
  return isChecked;
}

function validateMessage() {
  if (message.value.trim() === "") {
    displayError("message", true);
    message.style.borderColor = "var(--Red)";
    return false;
  } else {
    displayError("message", false);
    message.style.borderColor = "var(--Grey-500)";
    return true;
  }
}

function validateNewsletter() {
  if (!newsletter.checked) {
    displayError("newsletter", true);
    return false;
  } else {
    displayError("newsletter", false);
    return true;
  }
}

formSubmitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const validations = [
    validateFirstName(),
    validateLastName(),
    validateEmail(),
    validateQuery(),
    validateMessage(),
    validateNewsletter(),
  ];

  const isFormValid = validations.every(Boolean);

  if (isFormValid) {
    successMessage.style.display = "flex";
    contactUsForm.reset();
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  } else {
    console.log("forms has an error");
  }
});
