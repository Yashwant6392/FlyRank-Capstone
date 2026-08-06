const form = document.getElementById("settingsForm");
const saveButton = document.getElementById("saveButton");
const formMessage = document.getElementById("formMessage");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const themeSelect = document.getElementById("theme");
const notificationsCheckbox = document.getElementById("notifications");

const MIN_NAME_LENGTH = 3;
const MAX_NAME_LENGTH = 50;
const MIN_PASSWORD_LENGTH = 8;
const NAME_PATTERN = /^[A-Za-z ]+$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const touchedFields = new Set();
let isSubmitting = false;

function showError(input, message) {
  const errorElement = document.getElementById(`${input.id}Error`);
  if (!errorElement) {
    return;
  }

  errorElement.textContent = message;
  input.setAttribute("aria-invalid", "true");
  input.classList.remove("valid");
  input.classList.add("invalid");
  input.setAttribute("aria-describedby", `${input.id}Error`);
}

function clearError(input) {
  const errorElement = document.getElementById(`${input.id}Error`);
  if (!errorElement) {
    return;
  }

  errorElement.textContent = "";
  input.setAttribute("aria-invalid", "false");
  input.classList.remove("invalid");
  input.classList.remove("valid");
  input.removeAttribute("aria-describedby");
}

function showSuccess(message) {
  formMessage.textContent = message;
  formMessage.classList.remove("error");
  formMessage.classList.add("success");
}

function showFailure(message) {
  formMessage.textContent = message;
  formMessage.classList.remove("success");
  formMessage.classList.add("error");
}

function validateName(value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Full name is required.";
  }

  if (trimmedValue.length < MIN_NAME_LENGTH) {
    return "Full name must be at least 3 characters.";
  }

  if (trimmedValue.length > MAX_NAME_LENGTH) {
    return "Full name must be at most 50 characters.";
  }

  if (!NAME_PATTERN.test(trimmedValue)) {
    return "Full name can only contain letters and spaces.";
  }

  return "";
}

function validateEmail(value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Email is required.";
  }

  if (!EMAIL_PATTERN.test(trimmedValue)) {
    return "Please enter a valid email address.";
  }

  return "";
}

function validatePassword(value) {
  if (!value) {
    return "Password is required.";
  }

  if (value.length < MIN_PASSWORD_LENGTH) {
    return "Password must be at least 8 characters.";
  }

  if (!PASSWORD_PATTERN.test(value)) {
    return "Password must include uppercase, lowercase, number, and a special character.";
  }

  return "";
}

function validateConfirmPassword(passwordValue, confirmValue) {
  if (!confirmValue) {
    return "Please confirm your password.";
  }

  if (confirmValue !== passwordValue) {
    return "Passwords do not match.";
  }

  return "";
}

function validateTheme(value) {
  return value ? "" : "Please select a theme.";
}

function getFieldError(input) {
  const value = input.value;

  switch (input.id) {
    case "fullName":
      return validateName(value);
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    case "confirmPassword":
      return validateConfirmPassword(passwordInput.value, value);
    case "theme":
      return validateTheme(value);
    default:
      return "";
  }
}

function updateFieldState(input, shouldShowError) {
  const errorMessage = getFieldError(input);

  if (shouldShowError && errorMessage) {
    showError(input, errorMessage);
    return false;
  }

  if (shouldShowError) {
    clearError(input);
    input.classList.add("valid");
    return true;
  }

  return !errorMessage;
}

function validateForm(showErrors = true) {
  const inputs = [fullNameInput, emailInput, passwordInput, confirmPasswordInput, themeSelect];
  let isValid = true;

  inputs.forEach((input) => {
    const valid = updateFieldState(input, showErrors);
    if (!valid) {
      isValid = false;
    }
  });

  return isValid;
}

function updateSubmitButton() {
  const isValid = validateForm(false);
  saveButton.disabled = !isValid || isSubmitting;
}

function applyTheme(theme) {
  document.body.classList.remove("theme-dark", "theme-light");

  if (theme === "dark") {
    document.body.classList.add("theme-dark");
  } else if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.add(prefersDark ? "theme-dark" : "theme-light");
  } else {
    document.body.classList.add("theme-light");
  }
}

function markTouched(input) {
  touchedFields.add(input.id);
}

function clearMessages() {
  formMessage.textContent = "";
  formMessage.className = "message";
}

function resetForm() {
  form.reset();
  clearMessages();
  touchedFields.clear();
  [fullNameInput, emailInput, passwordInput, confirmPasswordInput, themeSelect].forEach((input) => {
    input.classList.remove("valid", "invalid");
    input.setAttribute("aria-invalid", "false");
  });

  const themeValue = themeSelect.value || "light";
  themeSelect.value = themeValue;
  applyTheme(themeValue);
  updateSubmitButton();
}

function saveSettings(event) {
  event.preventDefault();

  if (isSubmitting) {
    return;
  }

  touchedFields.add(fullNameInput.id);
  touchedFields.add(emailInput.id);
  touchedFields.add(passwordInput.id);
  touchedFields.add(confirmPasswordInput.id);
  touchedFields.add(themeSelect.id);

  clearMessages();

  if (!validateForm(true)) {
    showFailure("Please correct the highlighted fields.");
    updateSubmitButton();
    return;
  }

  isSubmitting = true;
  saveButton.disabled = true;
  saveButton.textContent = "Saving...";
  showSuccess("Saving your settings...");

  setTimeout(() => {
    const selectedTheme = themeSelect.value || "light";

    fullNameInput.value = fullNameInput.value.trim();
    emailInput.value = emailInput.value.trim();
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    notificationsCheckbox.checked = false;
    form.reset();

    themeSelect.value = selectedTheme;
    applyTheme(selectedTheme);
    clearMessages();
    showSuccess("Settings saved successfully.");
    isSubmitting = false;
    updateSubmitButton();
    saveButton.textContent = "Save Settings";
  }, 1000);
}

[fullNameInput, emailInput, passwordInput, confirmPasswordInput, themeSelect].forEach((input) => {
  input.addEventListener("input", () => {
    markTouched(input);
    updateFieldState(input, true);
    updateSubmitButton();
  });

  input.addEventListener("blur", () => {
    markTouched(input);
    updateFieldState(input, true);
    updateSubmitButton();
  });
});

themeSelect.addEventListener("change", () => {
  markTouched(themeSelect);
  updateFieldState(themeSelect, true);
  applyTheme(themeSelect.value);
  updateSubmitButton();
});

notificationsCheckbox.addEventListener("change", () => {
  clearMessages();
});

form.addEventListener("submit", saveSettings);

applyTheme("light");
updateSubmitButton();
