// form validation
function checkMissing() {
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
}
