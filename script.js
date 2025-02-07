function run() {
    let html = document.getElementById("html").value;
    let css = "<style>" + document.getElementById("css").value + "</style>";
    let js = "<script>" + document.getElementById("js").value + "<\/script>"; 
    let output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(html + css + js);
    output.close();
}

function clearcode() {
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";
}

const toggleButton = document.getElementById("toggle");
const textareas = document.querySelectorAll(".mode");

// Function to apply dark mode
function applyDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        textareas.forEach(textarea => textarea.classList.add("dark-mode"));
        document.getElementById("output").classList.add("dark-mode");

        toggleButton.textContent = "Light Mode";
        toggleButton.style.backgroundColor = "#fff";  
        toggleButton.style.color = "#000"; 
    } else {
        document.body.classList.remove("dark-mode");
        textareas.forEach(textarea => textarea.classList.remove("dark-mode"));
        document.getElementById("output").classList.remove("dark-mode");

        toggleButton.textContent = "Dark Mode";
        toggleButton.style.backgroundColor = "#2b2b2b";
        toggleButton.style.color = "#fff";  
    }
}

// Load dark mode setting from localStorage
const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
applyDarkMode(isDarkMode);

toggleButton.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    applyDarkMode(isDark);

    // Save dark mode state to localStorage
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
});
