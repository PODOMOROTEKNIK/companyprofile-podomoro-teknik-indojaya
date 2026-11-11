/* =========================================
   SCROLL REVEAL
========================================= */

function initScrollReveal() {

    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-stagger"
    );

    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
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

        if (!element.classList.contains("active")) {
            observer.observe(element);
        }

    });
}


/* =========================================
   SCROLL REVEAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.01,
            rootMargin: "0px 0px -70px 0px"
        }
    );


    function observeRevealElements() {

        const revealElements = document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-stagger"
        );

        revealElements.forEach((element) => {

            if (!element.dataset.revealObserved) {

                element.dataset.revealObserved = "true";

                observer.observe(element);

            }

        });

    }


    // Elemen yang sudah ada sejak awal
    observeRevealElements();


    // Elemen yang dibuat oleh JavaScript setelah halaman load
    document.addEventListener("variantsRendered", () => {

        observeRevealElements();

    });

});