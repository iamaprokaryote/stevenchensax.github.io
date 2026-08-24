document.addEventListener("DOMContentLoaded", () => {
    const texts = [
        "welcome to my website!",
        "yes, i can play take five.",
        "available for hire, lessons, and more.",
    ];

    const el = document.querySelector(".typewriter");
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

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", (event) => {
            if (!link.hash) return;

            const section = document.querySelector(`.${link.hash.slice(1)}`);

            if (section) {
                event.preventDefault();
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});