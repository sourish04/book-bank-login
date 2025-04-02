document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "admin" && password === "1234") {
        document.getElementById("message").textContent = "Login Successful!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Invalid Credentials!";
        document.getElementById("message").style.color = "red";
    }
});
