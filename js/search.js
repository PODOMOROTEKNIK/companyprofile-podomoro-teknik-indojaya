document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-button");
    const productCards = document.querySelectorAll(".product-card");

    const searchInput = document.getElementById("productSearch");
    const searchButton = document.getElementById("searchButton");
    const productGrid = document.getElementById("productGrid");

    let activeCategory = "all";


    function filterProducts() {

        const searchKeyword = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        let visibleProducts = 0;

        const productArea = document.querySelector(".product-area");

        if (productArea) {
            productArea.classList.add("active");
        }

        productCards.forEach(card => {

            const category = card.dataset.category || "";
            const productText = card.textContent.toLowerCase();

            const categoryMatch =
                activeCategory === "all" ||
                category === activeCategory;

            const searchMatch =
                searchKeyword === "" ||
                productText.includes(searchKeyword);


            if (categoryMatch && searchMatch) {

            card.style.display = "";
            card.classList.remove("filter-show");

            visibleProducts++;

            } else {

                card.style.display = "none";
                card.classList.remove("filter-show");

            }

        });

            let visibleCards = Array.from(productCards).filter(card => {
            return card.style.display !== "none";
            });

            visibleCards.forEach((card, index) => {

                card.style.setProperty(
                    "--filter-delay",
                    `${index * 0.06}s`
                );

                void card.offsetWidth;

                card.classList.add("filter-show");

        });

        // Tidak ada hasil
        let noResults = document.getElementById("noResults");

        if (visibleProducts === 0) {

            if (!noResults && productGrid) {

                noResults = document.createElement("p");

                noResults.id = "noResults";
                noResults.textContent = "Produk tidak ditemukan.";

                productGrid.appendChild(noResults);

            }

        } else {

            if (noResults) {
                noResults.remove();
            }

        }

    }


    // ==============================
    // FILTER KATEGORI
    // ==============================

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            activeCategory = button.dataset.category;

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            filterProducts();

        });

    });


    // ==============================
    // SEARCH SAAT MENGETIK
    // ==============================

    if (searchInput) {

        searchInput.addEventListener("input", () => {
            filterProducts();
        });

    }


    // ==============================
    // TOMBOL CARI
    // ==============================

    if (searchButton) {

        searchButton.addEventListener("click", () => {
            filterProducts();
        });

    }


    // ==============================
    // ENTER
    // ==============================

    if (searchInput) {

        searchInput.addEventListener("keydown", event => {

            if (event.key === "Enter") {
                filterProducts();
            }

        });

    }

});