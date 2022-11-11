const submitButton = document.getElementById("submit");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");

function checkForValidInput(e) {
    errorMessage.innerText = "";
    if (password.value !== confirmPassword.value) {
        errorMessage.append("Passwords must be the same");
        errorMessage.append(document.createElement("br"));
        e.preventDefault();
    }
    if (password.value.length < 8) {
        errorMessage.append("Password must be at least 8 characters");
        e.preventDefault();
    }
}

submitButton.addEventListener("click", checkForValidInput);