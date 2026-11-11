document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("dchyprezVariantList");

    // Jalankan hanya di halaman DIAMOND COMPOUND - HYPREZ //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN DIAMOND COMPOUND - HYPREZ
    ========================================= */

    const dchyprezVariants = [

        {
            name: "HYPREZ 1-FS-48 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-1-fs-48-diamond-compound-5-gram-engis-hyprez-five-star-1-fs-48-konsentrasi-standard-1732499403551638932?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 1-FS-480 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-1-fs-480-diamond-compound-5-gram-engis-hyprez-five-star-1-fs-480-konsentrasi-standard-1732499358998693268?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 14-FS-40 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-14-fs-40-diamond-compound-5-gram-engis-hyprez-five-star-14-fs-40-konsentrasi-standard-1732499389269575060?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 25-FS-40 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-25-fs-40-diamond-compound-5-gram-engis-hyprez-five-star-25-fs-40-konsentrasi-standard-1732499364019799444?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 3-FS-47 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-3-fs-47-diamond-compound-5-gram-engis-hyprez-five-star-3-fs-47-konsentrasi-standard-1732499357424190868?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 45-FS-40 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-45-fs-40-diamond-compound-5-gram-engis-hyprez-five-star-45-fs-40-konsentrasi-standard-1732499406392165780?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 6-FS-45 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-6-fs-45-diamond-compound-5-gram-engis-hyprez-five-star-6-fs-45-konsentrasi-standard-1732499400513389972?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 60-FS-30 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-60-fs-30-diamond-compound-5-gram-engis-hyprez-five-star-60-fs-30-konsentrasi-standard-1732499405164610964?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 8-FS-40 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-8-fs-40-diamond-compound-5-gram-engis-hyprez-five-star-8-fs-40-konsentrasi-standard-1732499465519334804?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "HYPREZ 90-FS-30 ",
            specification: "5g",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/hyprez-90-fs-30-diamond-compound-5-gram-engis-hyprez-five-star-90-fs-30-konsentrasi-standard-1732499339279762836?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];

    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    dchyprezVariants.forEach((variant, index) => {

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