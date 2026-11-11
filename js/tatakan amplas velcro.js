document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("tatakanamplasvelcroVariantList");

    // Jalankan hanya di halaman TATAKAN AMPLAS VELCRO //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN TATAKAN AMPLAS VELCRO
    ========================================= */

    const tatakanamplasvelcroVariants = [

        {
            name: "Pad Amplas 4 Inch",
            specification: "100x16 mm",
            shopee: "https://shopee.co.id/Tatakan-Amplas-Bulat-VELCRO-Velcro-Pad-Pad-Amplas-4-Inch-Untuk-Gerinda-Tangan-100x16-mm-i.220946702.25050028841?extraParams=%7B%22display_model_id%22%3A138780528515%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/tatakan-amplas-rubber-pad-4-inch-velcro-pad-100-x-16-mm-m10x1-5-1731761410801960340?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    tatakanamplasvelcroVariants.forEach((variant, index) => {

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