document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("talgammaVariantList");

    // Jalankan hanya di halaman TURBO AIR LAPPERS - GAMMA //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN TURBO AIR LAPPERS - GAMMA
    ========================================= */

    const talgammaVariants = [

        {
            name: "UTR - 20",
            specification: "PURPLE",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-utr-20-turbo-air-lapping-stroke-0-15-mm-45-000-spm-high-speed-utr-20-turbo-lapper-air-grinder-tool-mesin-polesh-besdia-taiwan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "UTR - 30",
            specification: "BROWN",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-utr-30-turbo-air-lapping-utr-30-stroke-0-3-mm-40-000-spm-turbo-lapper-air-grinder-tool-mesin-polesh-besdia-taiwan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "UTR - 70",
            specification: "BLUE",
            shopee: "https://shopee.co.id/BESDIA-UTR-70-Turbo-Air-Lapping-UTR-70-Stroke-0.7-mm-35.000-spm-Turbo-Lapper-Air-Grinder-Tool-Mesin-Polesh-Besdia-Taiwan-i.220946702.29867265818?extraParams=%7B%22display_model_id%22%3A207966399966%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/utr-120-turbo-air-lapper-cal-hawk-taiwan-good-quality-utr-120-cal-hawk-stroke-1-2-mm-1733983179057300884?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    talgammaVariants.forEach((variant, index) => {

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