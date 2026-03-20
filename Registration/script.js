const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    let valid = true;

    // Clear errors
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    // Name
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email
    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    // Age
    if (age === "" || age < 1 || age > 120) {
        document.getElementById("ageError").innerText = "Enter valid age";
        valid = false;
    }

    // Phone (simple 10 digit check)
    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter valid 10-digit phone";
        valid = false;
    }

    // Gender
    if (!gender) {
        document.getElementById("genderError").innerText = "Select gender";
        valid = false;
    }

    // Password
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Minimum 6 characters";
        valid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        document.getElementById("confirmError").innerText = "Passwords do not match";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
    }
});