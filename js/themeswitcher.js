document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('theme-switcher');
    let currentTheme = "dark"; // Always set to dark mode
    setTheme(currentTheme);

    themeSwitcher.addEventListener('click', function () {
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(currentTheme);
    });

    function setTheme(theme) {
        const icon = themeSwitcher.querySelector('i');
        if (icon) {
            icon.className = theme === "dark" ? 'bi bi-moon' : 'bi bi-sun';
        }
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        themeSwitcher.innerHTML = theme === "dark" ? '<i class="bi bi-moon"></i>' : '<i class="bi bi-sun"></i>';
    }
});