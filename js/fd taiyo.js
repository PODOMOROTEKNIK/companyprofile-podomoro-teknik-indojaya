document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("fdtaiyoVariantList");

    // Jalankan hanya di halaman FLAP DISC - TAIYO //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN FLAP DISC - TAIYO
    ========================================= */

    const fdtaiyoVariants = [

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 PCS",
            specification: "GRIT 40",
            shopee: "https://shopee.co.id/TAIYO-Gerinda-Amplas-4-Amplas-Susun-Flap-Disc-Wheel-Bundar-TAIYO-i.220946702.43851068644?extraParams=%7B%22display_model_id%22%3A280085211481%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/taiyo-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-40-1732656552101840276?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 DUS",
            specification: "GRIT 40",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/flap-disc-taiyo-1-dus-isi-200-pcs-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-40-1732656802913682836?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 PCS",
            specification: "GRIT 60",
            shopee: "https://shopee.co.id/TAIYO-Gerinda-Amplas-4-Amplas-Susun-Flap-Disc-Wheel-Bundar-TAIYO-i.220946702.43851068644?extraParams=%7B%22display_model_id%22%3A280085211481%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/taiyo-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-60-1732656767343953300?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 DUS",
            specification: "GRIT 60",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/flap-disc-taiyo-1-dus-isi-200-pcs-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-60-1732656998476776852?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 PCS",
            specification: "GRIT 80",
            shopee: "https://shopee.co.id/TAIYO-Gerinda-Amplas-4-Amplas-Susun-Flap-Disc-Wheel-Bundar-TAIYO-i.220946702.43851068644?extraParams=%7B%22display_model_id%22%3A280085211481%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/taiyo-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-80-1732700708767958420?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },
        
        {
            name: "FLAP DISC 4inc (100 X 16) - 1 DUS",
            specification: "GRIT 80",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/flap-disc-taiyo-1-dus-isi-200-pcs-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-80-1732701246624662932?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 PCS",
            specification: "GRIT 100",
            shopee: "https://shopee.co.id/TAIYO-Gerinda-Amplas-4-Amplas-Susun-Flap-Disc-Wheel-Bundar-TAIYO-i.220946702.43851068644?extraParams=%7B%22display_model_id%22%3A280085211481%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/taiyo-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-100-1732702126870791572?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 DUS",
            specification: "GRIT 100",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/flap-disc-taiyo-1-dus-isi-200-pcs-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-100-1732702127468348820?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 PCS",
            specification: "GRIT 120",
            shopee: "https://shopee.co.id/TAIYO-Gerinda-Amplas-4-Amplas-Susun-Flap-Disc-Wheel-Bundar-TAIYO-i.220946702.43851068644?extraParams=%7B%22display_model_id%22%3A280085211481%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/taiyo-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-120-1732656776472003988?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 DUS",
            specification: "GRIT 120",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/flap-disc-taiyo-1-dus-isi-200-pcs-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-120-1732657079079437716?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 PCS",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/TAIYO-Gerinda-Amplas-4-Amplas-Susun-Flap-Disc-Wheel-Bundar-TAIYO-i.220946702.43851068644?extraParams=%7B%22display_model_id%22%3A280085211481%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/taiyo-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-180-1732656844544181652?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },
        
        {
            name: "FLAP DISC 4inc (100 X 16) - 1 DUS",
            specification: "GRIT 180",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/flap-disc-taiyo-1-dus-isi-200-pcs-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-180-1732657084591146388?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 PCS",
            specification: "GRIT 240",
            shopee: "https://shopee.co.id/TAIYO-Gerinda-Amplas-4-Amplas-Susun-Flap-Disc-Wheel-Bundar-TAIYO-i.220946702.43851068644?extraParams=%7B%22display_model_id%22%3A280085211481%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/taiyo-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-240-1732656799016125844?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP DISC 4inc (100 X 16) - 1 DUS",
            specification: "GRIT 240",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/flap-disc-taiyo-1-dus-isi-200-pcs-gerinda-amplas-4-amplas-susun-flap-disc-wheel-bundar-taiyo-240-1732657223849117076?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    fdtaiyoVariants.forEach((variant, index) => {

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