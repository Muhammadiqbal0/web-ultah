function checkLogin() {
    var username = document.getElementById("username").value;

    // Contoh sederhana, gantilah dengan validasi sesuai kebutuhan
    if (username === username) {
        // Mengarahkan pengguna ke halaman dashboard dengan menyertakan parameter username
        window.location.href = "dashboard.html?username=" + encodeURIComponent(username);
    } else {
        alert("Login gagal. Periksa kembali username dan password.");
    }
}
