document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("bgtaiyoVariantList");

    // Jalankan hanya di halaman BATU GERINDA - TAIYO //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN BATU GERINDA - TAIYO
    ========================================= */

    const bgtaiyoVariants = [

        {
            name: "TAIYO Poles - 1 pcs",
            specification: "100X6X16",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-gerinda-4-in-taiyo-poles-100x6x16-mm-batu-gerinda-4-x1-4-x5-8-mata-asah-grinding-wheel-4-taiyo-1731627186447222031?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TAIYO Poles - 1 dus",
            specification: "100X6X16",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-gerinda-4-in-taiyo-poles-100x6x16-mm-s-batu-gerinda-4-x1-4-x5-8-harga-1-dus-mata-asah-grinding-wheel-4-taiyo-1732100996917003668?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    bgtaiyoVariants.forEach((variant, index) => {

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