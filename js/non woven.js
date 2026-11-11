document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("nonwovenVariantList");

    // Jalankan hanya di halaman NON WOVEN
    if (!variantList) return;


    /* =========================================
       DATA VARIAN NON WOVEN
    ========================================= */

    const nonwovenVariants = [

        {
            name: "4 inc",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    nonwovenVariants.forEach((variant, index) => {

        const card = document.createElement("div");

        card.className = "variant-card reveal-stagger";


        card.innerHTML = `

            <div class="variant-info">

                <span class="variant-label">
                    VARIANT ${String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                    ${variant.name}
                </h3>

                <p class="variant-specification">
                    ${variant.specification}
                </p>

            </div>


            <div class="variant-actions">

                <a
                    href="${variant.shopee || '#'}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="marketplace-button shopee-button ${
                        variant.shopee ? "" : "disabled"
                    }"
                >
                    Shopee
                </a>


                <a
                    href="${variant.tokopedia || '#'}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="marketplace-button tokopedia-button ${
                        variant.tokopedia ? "" : "disabled"
                    }"
                >
                    Tokopedia
                </a>

            </div>

        `;


        variantList.appendChild(card);

    });

document.dispatchEvent(new Event("variantsRendered"));

});