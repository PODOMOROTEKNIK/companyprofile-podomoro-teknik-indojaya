document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("arwinVariantList");

    // Jalankan hanya di halaman AMPLAS ROLL - WIN //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN AMPLAS ROLL - WIN
    ========================================= */

    const arwinVariants = [

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 60",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-60-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-60-merk-win-1732467430672336276?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 60",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-60-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-60-merk-win-1731761415001245076?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 80",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-80-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-80-merk-win-1732467042428093844?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 80",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-80-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-80-merk-win-1roll-1731761414874891668?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 100",
            shopee: "https://shopee.co.id/Amplas-Roll-4-INCHI-X-46-METER-100-Abrasive-Sand-Paper-Roll-Aluminium-Oxide-Kain-Grit-100-Merk-WIN-(Per-METER)-i.220946702.42318027378?extraParams=%7B%22display_model_id%22%3A266484254407%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-100-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-100-merk-win-1732467505495180692?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 100",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-100-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-100-merk-win-1731761414874760596?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 120",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-120-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-120-merk-win-1732467743148508564?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 120",
            shopee: "https://shopee.co.id/Amplas-Roll-4-INCHI-X-46-METER-120-Abrasive-Sand-Paper-Roll-Aluminium-Oxide-Kain-Grit-120-Merk-WIN-(1-ROLL)-i.220946702.27241261553?extraParams=%7B%22display_model_id%22%3A261483703735%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-120-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-120-merk-win-1731761414434293140?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 150",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-150-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-150-merk-win-1732467848846738836?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 150",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-150-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-150-merk-win-1roll-1731761414434162068?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/Amplas-Roll-4-INCHI-X-46-METER-180-Abrasive-Sand-Paper-Roll-Aluminium-Oxide-Kain-Grit-180-Merk-WIN-(Per-METER)-i.220946702.27991258876?extraParams=%7B%22display_model_id%22%3A216254063319%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-180-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-180-merk-win-1732467865963890068?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 180",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 240",
            shopee: "https://shopee.co.id/Amplas-Roll-4-INCHI-X-46-METER-240-Abrasive-Sand-Paper-Roll-Aluminium-Oxide-Kain-Grit-240-Merk-WIN-(Per-METER)-i.220946702.41818019425?extraParams=%7B%22display_model_id%22%3A228078966308%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-240-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-240-merk-win-1732467994196542868?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 240",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 320",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-320-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-320-merk-win-1732468042393159060?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 320",
            shopee: "https://shopee.co.id/Amplas-Roll-4-INCHI-X-46-METER-320-Abrasive-Sand-Paper-Roll-Aluminium-Oxide-Kain-Grit-320-Merk-WIN-(1-ROLL)-i.220946702.29991271537?extraParams=%7B%22display_model_id%22%3A286483514478%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "4 INCHI X 1 METER ",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/Amplas-Roll-4-INCHI-X-46-METER-400-Abrasive-Sand-Paper-Roll-Aluminium-Oxide-Kain-Grit-400-Merk-WIN-(Per-METER)-i.220946702.43918019024?extraParams=%7B%22display_model_id%22%3A99230939784%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-roll-4-inchi-x-46-meter-400-abrasive-sand-paper-roll-aluminium-oxide-kain-grit-400-merk-win-1732468092910011796?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 INCHI X 46 METER ",
            specification: "GRIT 400",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    arwinVariants.forEach((variant, index) => {

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