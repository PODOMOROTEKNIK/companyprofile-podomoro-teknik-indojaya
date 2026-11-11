document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("swshinwaVariantList");

    // Jalankan hanya di halaman SKILL WRITER III - SHINWA
    if (!variantList) return;


    /* =========================================
       DATA VARIAN SKILL WRITER III - SHINWA
    ========================================= */

    const swshinwaVariants = [

        {
            name: "100 ML - BLUE",
            specification: "1 PCS",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "100 ML - BLUE",
            specification: "1 BOX",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "100 ML - RED",
            specification: "1 PCS",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "100 ML - RED",
            specification: "1 BOX",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "120 ML - BLUE",
            specification: "1 PCS",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "120 ML - BLUE",
            specification: "1 BOX",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "120 ML - RED",
            specification: "1 PCS",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "120 ML - RED",
            specification: "1 BOX",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    swshinwaVariants.forEach((variant, index) => {

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