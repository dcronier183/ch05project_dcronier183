/*
this function grabs all the fields with the required class and counts how many
of them are still empty. then it puts a message in the span so the user can see
how many they still have to fill out. it returns the number so my other function
can use it.
*/
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
/*
this one checks if the email is at least 8 characters. if its too short it adds
the invalid class so the box turns red and returns false. if its long enough it
takes the class back off and returns true.
*/
function validateEmail() {
    var email = document.getElementById("email");

    if (email.value.length < 8) {
        email.classList.add("invalid");
        return false;
    }

    email.classList.remove("invalid");
    return true;
}
/*
this runs both of the other functions when you click submit. if nothing is
missing and the email is good it submits the form. if not it throws an alert
telling you what to fix.
*/
function validateForm() {
    var missing = checkMissing();
    var emailOk = validateEmail();

    if (missing === 0 && emailOk === true) {
        document.querySelector("form").submit();
    } else {
        alert("Please complete all required fields and make sure your email is at least 8 characters.");
    }
}
// runs validateForm when the submit button gets clicked
document.getElementById("submit-btn").addEventListener("click", validateForm);
