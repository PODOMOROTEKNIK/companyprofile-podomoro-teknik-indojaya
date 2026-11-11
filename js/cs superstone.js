document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("cssuperstoneVariantList");

    // Jalankan hanya di halaman CERAMIC STONE - SUPERSTONE //
    if (!variantList) return;


    /* =========================================
       CERAMIC STONE - SUPERSTONE
    ========================================= */

    const cssuperstoneVariants = [

        {
            name: "1X2X100",
            specification: "GRIT 1500",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/new-superstone-1500-nsy102-1x2x100-mm-ceramic-fiber-stone-new-super-stone-nsy102-grit-1500-polishing-stone-oilstone-1731761403694122388?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X2X100",
            specification: "GRIT 2000",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/new-superstone-2000-nsc102-1x2x100-mm-ceramic-fiber-stone-new-super-stone-nsc102-grit-2000-polishing-stone-oilstone-1731761397743715732?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X2X100",
            specification: "GRIT 3000",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/new-superstone-3000-nss102-1x2x100-mm-ceramic-fiber-stone-new-super-stone-nss102-grit-3000-polishing-stone-oilstone-1731761435838809492?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    cssuperstoneVariants.forEach((variant, index) => {

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