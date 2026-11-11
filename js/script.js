/* =========================================
   PTI WEBSITE - GLOBAL SCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-stagger"
    );

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


        revealElements.forEach((element) => {
            revealObserver.observe(element);
        });

    }

});

/* =====================================================
   MOBILE NAVIGATION
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!navToggle || !navMenu) return;


    /* =========================
       OPEN / CLOSE MENU
    ========================= */

    navToggle.addEventListener("click", () => {

        const isOpen =
            navToggle.classList.toggle("active");

        navMenu.classList.toggle("active", isOpen);

        navToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu" : "Buka menu"
        );

    });


    /* =========================
       CLOSE AFTER CLICK LINK
    ========================= */

    const navLinks =
        navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navToggle.classList.remove("active");

            navMenu.classList.remove("active");

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            navToggle.setAttribute(
                "aria-label",
                "Buka menu"
            );

        });

    });


    /* =========================
       CLOSE WHEN RESIZE TO DESKTOP
    ========================= */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {

            navToggle.classList.remove("active");

            navMenu.classList.remove("active");

            navToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            navToggle.setAttribute(
                "aria-label",
                "Buka menu"
            );

        }

    });

});

// Navbar mengecil saat scroll
document.addEventListener("DOMContentLoaded", () => {
    const navbars = document.querySelectorAll(".site-header, .navbar");
    if (!navbars.length) return;

    const updateNavbar = () => {
        navbars.forEach(navbar => {
            navbar.classList.toggle("scrolled", window.scrollY > 30);
        });
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
});