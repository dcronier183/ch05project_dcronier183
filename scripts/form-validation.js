function checkMissing() {
    var fields = document.querySelectorAll(".required");
    var missing = 0;

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value === "") {
            missing++;
        }
    }

    var span = document.getElementById("missing-count");

    if (missing > 0) {
        span.textContent = missing + " required field(s) still need to be completed.";
    } else {
        span.textContent = "All required fields are complete.";
    }

    return missing;
}

function validateEmail() {
    var email = document.getElementById("email");

    if (email.value.length < 8) {
        email.classList.add("invalid");
        return false;
    }

    email.classList.remove("invalid");
    return true;
}

function validateForm() {
    var missing = checkMissing();
    var emailOk = validateEmail();

    if (missing === 0 && emailOk === true) {
        document.querySelector("form").submit();
    } else {
        alert("Please complete all required fields and make sure your email is at least 8 characters.");
    }
}

document.getElementById("submit-btn").addEventListener("click", validateForm);
