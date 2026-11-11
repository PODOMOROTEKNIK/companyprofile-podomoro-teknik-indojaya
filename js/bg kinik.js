document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("bgkinikVariantList");

    // Jalankan hanya di halaman BATU GERINDA ASAH - KINIK //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN BATU GERINDA ASAH - KINIK
    ========================================= */

    const bgkinikVariants = [

        {
            name: "1ADA46J6V  / 180x13x31.75",
            specification: "7inc - #46",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/kinik-grinding-wheel-1a-180x19x31-75-da-46-j-6-v-batu-gerinda-asah-7-inch-180-x-19-x-31-75-mm-grit-46-blue-biru-kinik-made-in-taiwan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "38A60KV1A  / 180x19x31.75",
            specification: "7inc - #60",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "WA60KV1A  / 180x19x31.75",
            specification: "7inc - #60",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "38A46KV1A / 205x25x31.75",
            specification: "8inc - #48",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "38A46KV1A / 255x25x31.75",
            specification: "10inc - #48",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "WA60JV1A / 355x50x127",
            specification: "14inc - #60",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "WA80JV1A / 355x50x127",
            specification: "14inc - #80",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    bgkinikVariants.forEach((variant, index) => {

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