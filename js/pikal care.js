document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("pikalcareVariantList");

    // Jalankan hanya di halaman AMPLAS KERTAS MATADOR
    if (!variantList) return;


    /* =========================================
       DATA VARIAN AMPLAS KERTAS MATADOR
    ========================================= */

    const pikalcareVariants = [

        {
            name: "PASTA POLES",
            specification: "150g",
            shopee: "https://shopee.co.id/PIKAL-CARE-150-Gram-Pasta-Poles-Logam-Penghilang-Penggosok-Baja-Tahan-Karat-150-Gram-Original-i.220946702.41761429790?extraParams=%7B%22display_model_id%22%3A280960183091%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/pikal-care-150-gram-pasta-poles-logam-penghilang-penggosok-baja-tahan-karat-150-gram-original-1732120622715209108?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    pikalcareVariants.forEach((variant, index) => {

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