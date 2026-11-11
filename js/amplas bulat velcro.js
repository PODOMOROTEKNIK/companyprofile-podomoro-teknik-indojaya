document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("amplasbulatVariantList");

    // Jalankan hanya di halaman AMPLAS BULAT VELCRO
    if (!variantList) return;


    /* =========================================
       DATA VARIAN AMPLAS BULAT VELCRO
    ========================================= */

    const amplasbulatVariants = [

        {
            name: "GRIT 40",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 40",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 60",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 60",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 80",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 80",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 100",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 100",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 120",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 150",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 180",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 180",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 220",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 220",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 240",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 240",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 320",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 320",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 400",
            specification: "PCS",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-pcs-i.220946702.41011734094?extraParams=%7B%22display_model_id%22%3A196193393732%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-120-1732142715355563412?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 400",
            specification: "BOX",
            shopee: "https://shopee.co.id/Amplas-Bundar-Taiyo-Velcro-Amplas-Bulat-Taiyo-Bundar-4-inchi-Abrasive-4''-40-60-80-100-120-150-180-220-240-320-400-1-Box-i.220946702.27239556322?extraParams=%7B%22display_model_id%22%3A234399909600%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-bundar-taiyo-velcro-amplas-bulat-taiyo-bundar-4-inchi-abrasive-4-40-60-80-100-120-150-180-220-240-320-400-1-box-1732142803544802708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    amplasbulatVariants.forEach((variant, index) => {

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