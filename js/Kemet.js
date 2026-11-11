document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("kemetVariantList");

    // Jalankan hanya di halaman KEMET
    if (!variantList) return;


    /* =========================================
       DATA VARIAN KEMET
    ========================================= */

    const kemetVariants = [

        {
            name: "DIAMOND COMPOUND 1/10 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/KEMET-Diamond-Compound-1-10-KD-1-4-KD-1-KD-3-KD-6-KD-8-KD-10-KD-14-KD-25-KD-45-KD-5-Gram-i.220946702.24668072991?extraParams=%7B%22display_model_id%22%3A250446597995%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-grade-1-10-kd-diamond-compound-5-gram-kemet-made-in-uk-1733858176844203412?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 1/4 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/KEMET-Diamond-Compound-1-10-KD-1-4-KD-1-KD-3-KD-6-KD-8-KD-10-KD-14-KD-25-KD-45-KD-5-Gram-i.220946702.24668072991?extraParams=%7B%22display_model_id%22%3A250446597995%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-grade-1-4-micron-diamond-compound-5-gram-kemet-made-in-uk?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 1 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/Kemet-1-KD-C2-Diamond-Compound-5g-Made-in-UK-i.220946702.19294694667?extraParams=%7B%22display_model_id%22%3A232188355903%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-grade-1-kd-c2-diamond-compound-5-gram-kemet-made-in-uk?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 3 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/KEMET-Diamond-Compound-1-10-KD-1-4-KD-1-KD-3-KD-6-KD-8-KD-10-KD-14-KD-25-KD-45-KD-5-Gram-i.220946702.24668072991?extraParams=%7B%22display_model_id%22%3A250446597995%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-grade-3-kd-c2-diamond-compound-5-gram-kemet-made-in-uk?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 6 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/Kemet-6-KD-C2-Diamond-Compound-5g-Made-in-UK-i.220946702.23859304659?extraParams=%7B%22display_model_id%22%3A176176475949%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-6-kd-c2-diamond-compound-5g-made-in-uk?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 8 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/Kemet-8-KD-C1-Diamond-Compound-5g-Made-in-UK-Garansi-Original-i.220946702.21394688632?extraParams=%7B%22display_model_id%22%3A137749669908%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-8-kd-c1-diamond-compound-5g-made-in-uk-garansi-original?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 10 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/KEMET-Diamond-Compound-1-10-KD-1-4-KD-1-KD-3-KD-6-KD-8-KD-10-KD-14-KD-25-KD-45-KD-5-Gram-i.220946702.24668072991?extraParams=%7B%22display_model_id%22%3A250446597995%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-grade-10-kd-10-micron-diamond-compound-5-gram-kemet-made-in-uk?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 14 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/KEMET-Diamond-Compound-1-10-KD-1-4-KD-1-KD-3-KD-6-KD-8-KD-10-KD-14-KD-25-KD-45-KD-5-Gram-i.220946702.24668072991?extraParams=%7B%22display_model_id%22%3A250446597995%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-grade-14-kd-14-micron-diamond-compound-5-gram-kemet-made-in-uk?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 25 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/KEMET-Diamond-Compound-1-10-KD-1-4-KD-1-KD-3-KD-6-KD-8-KD-10-KD-14-KD-25-KD-45-KD-5-Gram-i.220946702.24668072991?extraParams=%7B%22display_model_id%22%3A250446597995%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-grade-25-kd-25-micron-diamond-compound-5-gram-kemet-made-in-uk?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 45 KD",
            specification: "5g",
            shopee: "https://shopee.co.id/KEMET-Diamond-Compound-1-10-KD-1-4-KD-1-KD-3-KD-6-KD-8-KD-10-KD-14-KD-25-KD-45-KD-5-Gram-i.220946702.24668072991?extraParams=%7B%22display_model_id%22%3A250446597995%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kemet-grade-45-kd-c2-diamond-compound-5-gram-kemet-made-in-uk?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMOND COMPOUND 60 KD",
            specification: "5g",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "DIAMOND COMPOUND 90 KD",
            specification: "5g",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    kemetVariants.forEach((variant, index) => {

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