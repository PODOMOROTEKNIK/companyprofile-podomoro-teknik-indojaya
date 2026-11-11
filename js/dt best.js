document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("dtbestVariantList");

    // Jalankan hanya di halaman AMPLAS KERTAS MATADOR
    if (!variantList) return;


    /* =========================================
       DATA VARIAN AMPLAS KERTAS MATADOR
    ========================================= */

    const dtbestVariants = [

        {
            name: "DIAMOND TAPER FILES SET",
            specification: "10 PCS",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/diamond-taper-files-set-10-pcs-kikir-diamond-set-merk-best?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    dtbestVariants.forEach((variant, index) => {

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