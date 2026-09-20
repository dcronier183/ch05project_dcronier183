// form validation
function checkMissing() {
    function validateEmail() {
    var email = document.getElementById("email");

    if (email.value.length < 8) {
        email.classList.add("invalid");
        return false;
    }

    email.classList.remove("invalid");
    return true;
    }

    return true;
}
    // find every field with required class
    var fields = document.querySelectorAll(".required");
    var missing = 0;

    // Count how many are still empty
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value === "") {
            missing++;
        }
    }

    // update span with result
    var span = document.getElementById("missing-count");

    if (missing > 0) {
        span.textContent = missing + " required field(s) still need to be completed.";
    } else {
        span.textContent = "All required fields are complete.";
    }
    return missing;
}
document.querySelector("form").addEventListener("submit", function(event) {
    var missing = checkMissing();

    //stops the form from submitting if is empty
    if (missing > 0) {
        event.preventDefault();
    }
});
