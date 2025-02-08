function run() {
    let html = document.getElementById("html").value;
    let css = "<style>" + document.getElementById("css").value + "</style>";
    let js = "<script>" + document.getElementById("js").value + "<\/script>"; 
    let output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(html + css + js);
    output.close();
}

// Save code to localStorage
function saveCode(){
    localStorage.setItem("html", document.getElementById("html").value);
    localStorage.setItem("css", document.getElementById("css").value);                     
    localStorage.setItem("js", document.getElementById("js").value);        
}

// Load saved code on page load
window.onload = function(){
    document.getElementById("html").value = localStorage.getItem("html") || "";
    document.getElementById("css").value = localStorage.getItem("css") || "";
    document.getElementById("js").value = localStorage.getItem("js") || "";

    // Apply dark mode setting
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
    applyDarkMode(isDarkMode);
}

document.getElementById("html").addEventListener("input", saveCode);
document.getElementById("css").addEventListener("input", saveCode);
document.getElementById("js").addEventListener("input", saveCode);

function clearcode() {
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";
    localStorage.removeItem("html");
    localStorage.removeItem("css");
    localStorage.removeItem("js");

    let output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(" ");
    output.close();
}

// Dark mode toggle
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
toggleButton.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    applyDarkMode(isDark);

    // Save dark mode state to localStorage
    localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
});
