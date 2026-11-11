document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("dcbesdiaVariantList");

    // Jalankan hanya di halaman DIAMOND COMPOUND - BESDIA
    if (!variantList) return;


    /* =========================================
       DATA VARIAN DIAMOND COMPOUND - BESDIA
    ========================================= */

    const dcbesdiaVariants = [

        {
            name: "Grade 0.5 Mesh 28000",
            specification: "5g",
            shopee: "https://shopee.co.id/BESDIA-Grade-28000-Diamond-Compound-5-Gram-BESDIA-28000-White-i.220946702.29304089562?extraParams=%7B%22display_model_id%22%3A158687916102%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-28000-diamond-compound-grade-0-5-mesh-28000-28000-5-gram-besdia-1731761389712344468?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 1 Mesh 14.000",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-14000-diamond-compound-grade-1-mesh-14-000-14000-5-gram-besdia?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 3 Mesh 8.000",
            specification: "5g",
            shopee: "https://shopee.co.id/BESDIA-Grade-8000-Diamond-Compound-5-Gram-BESDIA-8000-White-i.220946702.27805729949?extraParams=%7B%22display_model_id%22%3A187662777026%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-8000-diamond-compound-grade-3-mesh-8-000-8000-5-gram-besdia?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 4.5 Mesh 5.000",
            specification: "5g",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "Grade 6 Mesh 3.000",
            specification: "5g",
            shopee: "https://shopee.co.id/BESDIA-Grade-3000-Diamond-Compound-5-Gram-BESDIA-3000-Orange-i.220946702.27203868181?extraParams=%7B%22display_model_id%22%3A207611999366%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-3000-diamond-compound-grade-6-mesh-3-000-3000-5-gram-besdia?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 8 Mesh 2.000",
            specification: "5g",
            shopee: "https://shopee.co.id/BESDIA-Grade-2000-Diamond-Compound-5-Gram-BESDIA-2000-Lilac-i.220946702.28104091453?extraParams=%7B%22display_model_id%22%3A137968756231%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-2000-diamond-compound-grade-8-mesh-2-000-2000-5-gram-besdia?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 9 Mesh 1.800",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-1800-diamond-compound-grade-9-mesh-1-800-1800-5-gram-besdia?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 11.5 Mesh 1.500",
            specification: "5g",
            shopee: "https://shopee.co.id/BESDIA-Grade-1500-Diamond-Compound-Grade-11.5-Mesh-1.500-1500-5-Gram-Besdia-i.220946702.41360860710?extraParams=%7B%22display_model_id%22%3A253688995696%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-1500-diamond-compound-grade-11-5-mesh-1-500-1500-5-gram-besdia?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 15 Mesh 1.200",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-1200-diamond-compound-5-gram-besdia-1200-blue-original-1731761400820696468?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 17.5 Mesh 1.000",
            specification: "5g",
            shopee: "https://shopee.co.id/BESDIA-Grade-1000-Diamond-Compound-5-Gram-BESDIA-1000-Dark-Green-i.220946702.25782867121?extraParams=%7B%22display_model_id%22%3A246109186602%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-1000-diamond-compound-grade-17-5-mesh-1-000-1000-5-gram-besdia?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 25 Mesh 800",
            specification: "5g",
            shopee: "https://shopee.co.id/BESDIA-Grade-800-Diamond-Compound-5-Gram-BESDIA-800-Brown-i.220946702.25232862039?extraParams=%7B%22display_model_id%22%3A176549373465%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/besdia-grade-800-diamond-compound-5-gram-besdia-800-brown-1731761435825440148?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "Grade 35 Mesh 600",
            specification: "5g",
            shopee: "https://shopee.co.id/BESDIA-600-Paste-Diamond-Compound-Mesh-600-Grade-35-Isi-5-Gram-BESDIA-600-Red-i.220946702.24282867909?extraParams=%7B%22display_model_id%22%3A207617745419%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/c2c2eb6c61ff4c978ecf3a8c256664d4~tplv-aphluv4xwc-white-pad-v1:200:200.webp?lk3s=a74d0a5d&x-expires=1789096694&x-signature=valIQkYXh8TVrTdLMv6Wyu82juU%3D&x-signature-webp=valIQkYXh8TVrTdLMv6Wyu82juU%3D&ect=4g"
        },

        {
            name: "Grade 50 Mesh 400",
            specification: "5g",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    dcbesdiaVariants.forEach((variant, index) => {

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