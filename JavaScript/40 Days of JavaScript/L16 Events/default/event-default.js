console.log("Event Defaults");

document.getElementById("websiteLink").addEventListener("click", function (e) {
    console.log("Navigating to website!");
    // e.preventDefault();
    // console.log("Default link behavior prevented!");
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e);
    // Get the form data using the getElementById method and log it to the console
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(`Username: ${username}, Password: ${password}`);

    // Get the form data using the FormData API and log it to the console
    const formData = new FormData(e.target);
    const formUsername = formData.get("username");
    const formPassword = formData.get("password");
    console.log(`Username: ${formUsername}, Password: ${formPassword}`);
    console.log("Form submission prevented!");
});