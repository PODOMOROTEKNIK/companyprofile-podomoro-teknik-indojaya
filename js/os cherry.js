document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("oscherryVariantList");

    // Jalankan hanya di halaman OIL STONE - CHERRY
    if (!variantList) return;


    /* =========================================
       DATA VARIAN OIL STONE - CHERRY
    ========================================= */

    const oscherryVariants = [

        {
            name: "CHERRY OILSTONE 13x25x100",
            specification: "GRIT 320",
            shopee: "https://shopee.co.id/CHERRY-OILSTONE-13x25x100-320-Batu-Polesh-Batu-Gosok-High-Hardness-Oil-Stone-Polishing-High-Quality-Made-in-JAPAN-i.220946702.55055790081?extraParams=%7B%22display_model_id%22%3A302386249351%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/cherry-oilstone-13x25x100-320-batu-polesh-batu-gosok-high-hardness-oil-stone-polishing-high-quality-made-in-japan-1731761435982202260?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "CHERRY OILSTONE 13x25x100",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/CHERRY-OILSTONE-13x25x100-400-Batu-Polesh-Batu-Gosok-High-Hardness-Oil-Stone-Polishing-High-Quality-Made-in-JAPAN-i.220946702.29494188737?extraParams=%7B%22display_model_id%22%3A370521951952%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/cherry-oilstone-13x25x100-400-batu-polesh-batu-gosok-high-hardness-oil-stone-polishing-high-quality-made-in-japan-1731761435542979988?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "CHERRY OILSTONE 25x50x150",
            specification: "GRIT 320",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/cherry-oilstone-25x50x150-320-batu-polesh-batu-gosok-high-hardness-oil-stone-polishing-high-quality-made-in-japan-1731761397498480020?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "CHERRY OILSTONE 25x50x150",
            specification: "GRIT 400",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/cherry-oilstone-25x50x150-400-batu-polesh-batu-gosok-high-hardness-oil-stone-polishing-high-quality-made-in-japan-1731761400572642708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "CHERRY OILSTONE 25x50x205",
            specification: "GRIT 320",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/cherry-oilstone-25x50x205-320-batu-polesh-batu-gosok-high-hardness-oil-stone-polishing-high-quality-made-in-japan-1731761397476525460?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "CHERRY OILSTONE 25x50x205",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/CHERRY-OILSTONE-25x50x205-400-Batu-Polesh-Batu-Gosok-High-Hardness-Oil-Stone-Polishing-High-Quality-Made-in-JAPAN-i.220946702.54904569791?extraParams=%7B%22display_model_id%22%3A445426325113%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/cherry-oilstone-25x50x205-400-batu-polesh-batu-gosok-high-hardness-oil-stone-polishing-high-quality-made-in-japan-1731761380221748628?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    oscherryVariants.forEach((variant, index) => {

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