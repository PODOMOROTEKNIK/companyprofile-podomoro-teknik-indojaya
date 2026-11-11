document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("dcelgindymoVariantList");

    // Jalankan hanya di halaman DIAMOND COMPOUND - ELGIN DYMO //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN DIAMOND COMPOUND - ELGIN DYMO
    ========================================= */

    const dcelgindymoVariants = [

        {
            name: "1/4 DYMO MESH 40.000",
            specification: "18g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-40-000-original-1732499827922273684?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1/2 DYMO MESH 20.000",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-20-000-original?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1 DYMO MESH 14.000",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-14-000-14-000-18gr-1732499425399637396?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "2 DYMO MESH 10.000",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-10-000-diamond-compound-made-in-usa-grade-10-000-18gr?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "3 DYMO MESH 8.000",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-8000-grade-8-18gr-1732499544912987540?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "4 DYMO MESH 6.000",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-6000-18gr?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "6 DYMO MESH 3.000",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-3000-18gr?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "9 DYMO MESH 1.800",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-1800-grade-18-18gr-1732499602560026004?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "12 DYMO MESH 1.500",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-1500-grade-15-18gr-1732499603295405460?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "15 DYMO MESH 1.200",
            specification: "18g",
            shopee: "https://shopee.co.id/ELGIN-DYMO-Size-1-2-1-2-3-4-6-9-15-Dymo-Paste-Diamond-Compound-Grade-20.000-14.000-10.000-8.000-6.000-3.000-1.800-1.200-Made-In-USA-High-Quality-i.220946702.25818904790?extraParams=%7B%22display_model_id%22%3A222598156225%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-1200-grade-15-18gr?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "20 DYMO MESH 1.000",
            specification: "18g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-1000-grade-1000-18gr-1732499421991110036?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "30 DYMO MESH 800",
            specification: "18g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-800-grade-800-18gr-1732499746845590932?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "45 DYMO MESH 600",
            specification: "18g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-600-grade-600-18gr-1732499773150561684?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "60 DYMO MESH 320",
            specification: "18g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/elgin-dymo-diamond-compound-made-in-usa-grade-320-grade-320-18gr-1732499774027433364?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    dcelgindymoVariants.forEach((variant, index) => {

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