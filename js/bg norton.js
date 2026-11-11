document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("bgnortonVariantList");

    // Jalankan hanya di halaman BATU GERINDA NORTON
    if (!variantList) return;


    /* =========================================
       DATA VARIAN BATU GERINDA NORTON
    ========================================= */

    const bgnortonVariants = [

        {
            name: "WA46K7V-1A",
            specification: "180x6x31.75mm",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/norton-batu-gerinda-duduk-7-inch-180x6x31-75mm-putih-wa46k7v-1a-grinding-wheel-white-38a120-k7vbe-t1a-1731761397477115284?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    bgnortonVariants.forEach((variant, index) => {

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