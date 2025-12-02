// Simulated user
let user = {
    email: "user@example.com",
    password: "password123"
};

// Login function
function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(email === user.email && password === user.password){
        window.location.href = "home.html";
    } else {
        message.textContent = "Invalid email or password!";
    }
}

// Forgot password function
function sendResetLink(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if(email === user.email){
        message.style.color = "green";
        message.textContent = "Reset link sent! Click below to reset your password.";
        document.getElementById("reset-link").style.display = "block";
    } else {
        message.style.color = "red";
        message.textContent = "Email not found!";
    }
}

// Reset password function
function resetPassword(event){
    event.preventDefault();
    const newPass = document.getElementById("new-password").value;
    const confirmPass = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");

    if(newPass === confirmPass && newPass !== ""){
        user.password = newPass;
        message.style.color = "green";
        message.textContent = "Password reset successfully! Go back to login.";
        document.getElementById("login-link").style.display = "block";
    } else {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
    }
}
