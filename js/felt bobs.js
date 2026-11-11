document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("feltbobsVariantList");

    // Jalankan hanya di halaman FELT BOBS //
    if (!variantList) return;


    /* =========================================
       FELT BOBS
    ========================================= */

    const feltbobsVariants = [

        {
            name: "TABUNG",
            specification: "4X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-4-mm-batu-grinding-pins-wool-putih-abf-4x10x3-cylinder-tabung-shank-3-mm-taiwan-1734134865284793748?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "4X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-4-mm-batu-grinding-pins-wool-putih-abf-4x15x6-cylinder-kerucut-shank-2-mm-taiwan-1734128242541757844?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "5X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-5-mm-batu-grinding-pins-wool-putih-abf-5x12x3-cylinder-tabung-shank-3-mm-taiwan-1734129974328722836?extParam=whid%3D20241059%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "5X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-5-mm-batu-grinding-pins-wool-putih-abf-5x13x3-cylinder-kerucut-shank-3-mm-taiwan-1734128400624485780?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "6X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-6-mm-batu-grinding-pins-wool-putih-abf-6x12x3-cylinder-tabung-shank-3-mm-taiwan-1734129197704775060?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "6X3",
            shopee: "https://shopee.co.id/Felt-Bobs-6-MM-Batu-Grinding-Pins-Wool-Putih-ABF-6x15x45-Cylinder-Kerucut-Shank-3-mm-Made-in-Taiwan-i.220946702.50304988761?extraParams=%7B%22display_model_id%22%3A415460710739%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-6-mm-batu-grinding-pins-wool-putih-abf-6x15x3-cylinder-kerucut-shank-3-mm-taiwan-1734141796992320916?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "8X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-8-mm-batu-grinding-pins-wool-putih-abf-8x16x3-cylinder-tabung-shank-3-mm-taiwan-1734124777493530004?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "8X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-8-mm-batu-grinding-pins-wool-putih-abf-8x16x3-cylinder-kerucut-shank-3-mm-taiwan-1734142295589946772?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "10X3",
            shopee: "https://shopee.co.id/BESDIA-Felt-Bobs-AB-1018A-3-mm-Tabung-Shank-Felt-Bobs-10-x-18-mm-Tabung-Merk-BESDIA-i.220946702.41764439722?extraParams=%7B%22display_model_id%22%3A218657184280%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-10-mm-batu-grinding-pins-wool-putih-abf-10x18x3-cylinder-tabung-shank-3-mm-taiwan-1734123916636751252?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "10X3",
            shopee: "https://shopee.co.id/Felt-Bobs-10-MM-Batu-Grinding-Pins-Wool-Putih-10x18x45-Cylinder-Kerucut-Shank-3-mm-Made-in-Taiwan-i.220946702.26790305842?extraParams=%7B%22display_model_id%22%3A138395757463%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-10-mm-batu-grinding-pins-wool-putih-abf-10x17x3-cylinder-kerucut-shank-3-mm-taiwan-1734142982858114452?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "12X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-12-mm-batu-grinding-pins-wool-putih-abf-12x18x3-cylinder-tabung-shank-3-mm-taiwan-1734122237485680020?extParam=whid%3D20241059%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "12X3",
            shopee: "https://shopee.co.id/Felt-Bobs-Grinding-Pins-ABF-Dia.-12x18x45-Kerucut-Cylinder-Shank-3-mm-Taiwan-i.220946702.27186641545?extraParams=%7B%22display_model_id%22%3A300085244949%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-12-mm-batu-grinding-pins-wool-putih-abf-12x20x3-cylinder-kerucut-shank-3-mm-taiwan-1734143875463349652?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "14X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-14-mm-batu-grinding-pins-wool-putih-abf-14x20x3-cylinder-tabung-shank-3-mm-taiwan-1734124959876023700?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "14X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-14-mm-batu-grinding-pins-wool-putih-abf-14x20x3-cylinder-kerucut-shank-3-mm-taiwan-1734144914589779348?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "16X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-16-mm-batu-grinding-pins-wool-putih-abf-16x20x3-cylinder-tabung-shank-3-mm-taiwan-1734127328541705620?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "16X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-16-mm-batu-grinding-pins-wool-putih-abf-16x20x3-cylinder-kerucut-shank-3-mm-taiwan-1734153519053964692?extParam=whid%3D20241059%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "18X3",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "KERUCUT",
            specification: "18X3",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "20X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-20-mm-batu-grinding-pins-wool-putih-abf-20x20x3-cylinder-tabung-shank-3-mm-taiwan-1734127904168773012?extParam=whid%3D20241059%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "20X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-20-mm-batu-grinding-pins-wool-putih-abf-20x23x3-cylinder-kerucut-shank-3-mm-taiwan-1734153765900813716?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "25X6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-25-mm-batu-grinding-pins-wool-putih-abf-25x25x6-cylinder-tabung-shank-6-mm-taiwan-1734103571684361620?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "25X6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/felt-bobs-25-mm-batu-grinding-pins-wool-putih-abf-25x25x6-cylinder-kerucut-shank-6-mm-taiwan-1734120819466208660?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    feltbobsVariants.forEach((variant, index) => {

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