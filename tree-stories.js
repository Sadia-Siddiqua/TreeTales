document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        if (body.classList.contains("dark-mode")) {
            modeToggle.textContent = "Switch to Light Mode";
        } else {
            modeToggle.textContent = "Switch to Dark Mode";
        }
    });

    // Extra functionality for Tree Stories
    console.log("Welcome to the Tree Stories section!");
});