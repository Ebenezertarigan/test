// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Simpan preferensi dark mode di localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// Cek preferensi dark mode saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});
