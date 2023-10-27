const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.body.dataset.theme = currentTheme;
}

document.getElementById("themeToggle").addEventListener("click", function() {
    let theme = "light";
    if (document.body.dataset.theme === "light") {
        theme = "dark";
    }
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
});
