document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("cbmakitaVariantList");

    // Jalankan hanya di halaman CARBON BRUSH - MAKITA //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN CARBON BRUSH - MAKITA
    ========================================= */

    const cbmakitaVariants = [

        {
            name: "End Brush Soft",
            specification: "6 mm",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/end-brush-soft-for-cleaning-ukuran-6-mm-merk-mtd-taiwan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    cbmakitaVariants.forEach((variant, index) => {

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