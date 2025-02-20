document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
 
    var name = document.getElementById("username").value.trim();
    var age = document.getElementById("age").value;
    var email = document.getElementById("e-mail").value;
    var pincode = document.getElementById("pincode").value;
    var password = document.getElementById("password").value;
    var display = document.getElementById("display");
    var errors = [];
 
    // Name validation (only alphabets and spaces allowed)
    var namePattern = /^[A-Za-z ]+$/;
    if (!namePattern.test(name)) {
        errors.push("Name should contain only alphabets and spaces.");
    }
 
    // Age validation (between 18 and 60)
    if (age < 18 || age > 60 || isNaN(age)) {
        errors.push("Age should be a number between 18 and 60.");
    }
 
    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errors.push("Enter a valid email address.");
    }
 
    // PIN code validation (6 digits only)
    var pinPattern = /^\d{6}$/;
    if (pincode && !pinPattern.test(pincode)) {
        errors.push("PIN code must be exactly 6 digits.");
    }
 
    // Password validation (min 8 chars, at least 1 uppercase, 1 lowercase, 1 number, and 1 special character)
    var passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        errors.push("Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
    }
 
    // Display validation results
    if (errors.length > 0) {
        display.innerHTML = errors.join("<br>");
        display.style.color = "red";
    } else {
        display.innerHTML = "Form submitted successfully!";
        display.style.color = "green";
    }
 });