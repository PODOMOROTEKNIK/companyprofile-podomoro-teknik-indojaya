document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("diamondtaperbesdiaVariantList");

    // Jalankan hanya di halaman DIAMOND TAPER FILES - BESDIA
    if (!variantList) return;


    /* =========================================
       DATA VARIAN DIAMOND TAPER FILES - BESDIA
    ========================================= */

    const diamondtaperbesdiaVariants = [

        {
            name: "DIAMOND TAPER FILES SET",
            specification: "MTP - 120",
            shopee: "https://shopee.co.id/Diamond-Taper-Files-Set-MTP-120-Kikir-Diamond-Set-MTP-120-BEST-i.220946702.20086952132?extraParams=%7B%22display_model_id%22%3A232368067151%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/diamond-taper-set-mtp-120-a1-100-kikir-diamond-set-mtp-120-besdia-1731761386854778260?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    diamondtaperbesdiaVariants.forEach((variant, index) => {

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