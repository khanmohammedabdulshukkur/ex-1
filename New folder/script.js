// Script for the Registration form submission
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    if(name && email && course) {
        alert(`Thank you for registering, ${name}! We have sent a confirmation email to ${email}.`);
    } else {
        alert("Please fill out all the fields.");
    }
});
