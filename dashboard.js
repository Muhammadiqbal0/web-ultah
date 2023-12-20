document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get("username");

    if (username) {
        var welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.textContent = "Hi, " + decodeURIComponent(username) + "!";
    } else {
        // Redirect jika parameter username tidak ditemukan
        window.location.href = "index.html";
    }
});
