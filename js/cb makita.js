document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("cbmakitaVariantList");

    // Jalankan hanya di halaman CARBON BRUSH - MAKITA //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN CARBON BRUSH - MAKITA
    ========================================= */

    const cbmakitaVariants = [

        {
            name: "MAKITA CB - 51",
            specification: "5X8X12",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/carbon-brush-makita-cb-51-55-64-85-100-153-203-325-411-419-arang-spul-brostel-bostel-mesin-gerinda-1-set-2-pcs-original-cb-51-aa306?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "MAKITA CB - 100",
            specification: "6X10X14",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/carbon-brush-makita-cb-51-55-64-85-100-153-203-325-411-419-arang-spul-brostel-bostel-mesin-gerinda-1-set-2-pcs-original-cb-51-aa306?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "MAKITA CB - 325",
            specification: "5X11X16",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/carbon-brush-makita-cb-51-55-64-85-100-153-203-325-411-419-arang-spul-brostel-bostel-mesin-gerinda-1-set-2-pcs-original-cb-51-aa306?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "MAKITA CB - 411A",
            specification: "5X9X12",
            shopee: "https://shopee.co.id/Makita-CB-411A-Carbon-Brush-Spul-Arang-Mesin-Gerinda-Sepul-Bostel-CB-411-A-1-SET-2-PCS-i.220946702.41567754306?extraParams=%7B%22display_model_id%22%3A291462022398%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/carbon-brush-makita-cb-51-55-64-85-100-153-203-325-411-419-arang-spul-brostel-bostel-mesin-gerinda-1-set-2-pcs-original-cb-51-aa306?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "MAKITA CB - 419",
            specification: "6X9X12",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/carbon-brush-makita-cb-51-55-64-85-100-153-203-325-411-419-arang-spul-brostel-bostel-mesin-gerinda-1-set-2-pcs-original-cb-51-aa306?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "MAKITA CB - 153",
            specification: "6X13X17",
            shopee: "https://shopee.co.id/Makita-CB-153A-Carbon-Brush-Spul-Arang-Mesin-Gerinda-Sepul-Bostel-CB-153-A-1-SET-2-PCS-i.220946702.41367760495?extraParams=%7B%22display_model_id%22%3A291462178692%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/carbon-brush-makita-cb-51-55-64-85-100-153-203-325-411-419-arang-spul-brostel-bostel-mesin-gerinda-1-set-2-pcs-original-cb-51-aa306?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
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