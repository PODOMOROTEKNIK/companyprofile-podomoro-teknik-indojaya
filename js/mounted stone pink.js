document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("mountedstonepinkVariantList");

    // Jalankan hanya di halaman MOUNTED STONE PINK //
    if (!variantList) return;


    /* =========================================
       MOUNTED STONE PINK
    ========================================= */

    const mountedstonepinkVariants = [

        {
            name: "TABUNG",
            specification: "3X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-3-MM-TABUNG-Shank-3-Batu-Grinding-Pink-Kepala-3-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.40514253641?extraParams=%7B%22display_model_id%22%3A291175067536%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-3-mm-tabung-shank-3-batu-grinding-pink-kepala-4-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1732314265847760276?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "3X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-3-mm-kerucut-shank-3-batu-grinding-pink-kepala-3-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731475478765995279?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "4X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-4-MM-TABUNG-Shank-3-Batu-Grinding-Pink-Kepala-4-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.43064254812?extraParams=%7B%22display_model_id%22%3A281175384019%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-4-mm-tabung-shank-3-batu-grinding-pink-kepala-4-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731769124841358740?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "4X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-4-mm-kerucut-shank-3-batu-grinding-pink-kepala-4-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1734107852693407124?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "5X3",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "KERUCUT",
            specification: "5X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-5-mm-kerucut-shank-3-batu-grinding-pink-kepala-5-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1734107674243204500?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "6X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-6-MM-TABUNG-Shank-3-Batu-Grinding-Pink-Kepala-6-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.25596617693?extraParams=%7B%22display_model_id%22%3A286263220948%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-6-mm-tabung-shank-3-batu-grinding-pink-kepala-6-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731485317478188303?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "6X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-6-MM-KERUCUT-Shank-3-Batu-Grinding-Pink-Kepala-6-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.44316794821?extraParams=%7B%22display_model_id%22%3A261386731030%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-6-mm-kerucut-shank-3-batu-grinding-pink-kepala-6-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1734107014839960980?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "8X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-8-MM-TABUNG-Shank-3-Batu-Grinding-Pink-Kepala-8-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.42315291372?extraParams=%7B%22display_model_id%22%3A286263181779%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-8-mm-tabung-shank-3-batu-grinding-pink-kepala-8-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731761435921712532?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "8X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-8-mm-kerucut-shank-3-batu-grinding-pink-kepala-8-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731761435887699348?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "10X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-10-MM-TABUNG-Shank-3-Batu-Grinding-Pink-Kepala-10-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.41065286511?extraParams=%7B%22display_model_id%22%3A281263051356%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-10-mm-tabung-shank-3-batu-grinding-pink-kepala-10-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731761435887830420?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "10X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-10-mm-kerucut-shank-3-batu-grinding-pink-kepala-10-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731485261704037647?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "12X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-12-MM-TABUNG-Shank-3-Batu-Grinding-Pink-Kepala-12-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.40465285885?extraParams=%7B%22display_model_id%22%3A281262852068%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-12-mm-tabung-shank-3-batu-grinding-pink-kepala-12-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731761400947574164?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "12X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-12-MM-KERUCUT-Shank-3-Batu-Grinding-Pink-Kepala-12-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.44201890653?extraParams=%7B%22display_model_id%22%3A275154417675%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-12-mm-kerucut-shank-3-batu-grinding-pink-kepala-12-mm-shank-3-mm-batu-mata-grinder-router-produk-taiwan-1731485263223686415?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "13X3",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-13-MM-TABUNG-Shank-3-Batu-Grinding-Pink-Kepala-13-mm-Shank-3-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.55356298840?extraParams=%7B%22display_model_id%22%3A330570301424%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "KERUCUT",
            specification: "13X3",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "14X6",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "KERUCUT",
            specification: "14X6",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "16X6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-16-mm-tabung-shank-6-batu-grinding-pink-kepala-16-mm-shank-6-mm-batu-mata-grinder-router-produk-taiwan-1731485333172487439?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "16X6",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "20X6",
            shopee: "https://shopee.co.id/Mounted-Stone-Pink-20-MM-TABUNG-Shank-6-Batu-Grinding-Pink-Kepala-20-mm-Shank-6-mm-Batu-Mata-Grinder-Router-Produk-Taiwan-i.220946702.44415274664?extraParams=%7B%22display_model_id%22%3A253800972475%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-20-mm-tabung-shank-6-batu-grinding-pink-kepala-20-mm-shank-6-mm-batu-mata-grinder-router-produk-taiwan-1731761400628282772?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "20X6",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "25X6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-stone-pink-25-mm-tabung-shank-6-batu-grinding-pink-kepala-25-mm-shank-6-mm-batu-mata-grinder-router-produk-taiwan-1731485357776143631?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "25X6",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    mountedstonepinkVariants.forEach((variant, index) => {

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