document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "yes, i can play take five.",
        "available for hire, lessons, and everything everywhere all at once.",
        "catch a show! ticket links below.",
    ];

    const el = document.getElementById("typewriter");
    let ti = 0, ci = 0, deleting = false;

    function type() {
        const cur = texts[ti];

        if (deleting) {
            el.textContent = cur.substring(0, ci - 1);
            ci--;
        } else {
            el.textContent = cur.substring(0, ci + 1);
            ci++;
        }

        let speed = deleting ? 25 : 60;

        if (!deleting && ci === cur.length) {
            speed = 2000;
            if (ti < texts.length - 1) deleting = true;
        } else if (deleting && ci === 0) {
            deleting = false;
            ti++;
            speed = 400;
        }

        if (ti < texts.length) setTimeout(type, speed);
    }

    setTimeout(type, 1000);

    const themeToggle = document.getElementById("theme-toggle");
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "Light mode";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
        });
    }
});