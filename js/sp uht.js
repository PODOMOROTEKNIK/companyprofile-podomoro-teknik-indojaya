document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("spuhtVariantList");

    // Jalankan hanya di halaman SAND PAPER - UHT //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN SAND PAPER - UHT
    ========================================= */

    const spuhtVariants = [

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 60",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 60",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 80",
            shopee: "https://shopee.co.id/UHT-Sand-Paper-1-PCS-80-Dia.-30-mm-Amplas-Kertas-Bulat-Poliper-Pad-Grit-80-UHT-Micro-Air-Grinder-MAG-123N-i.220946702.52755747015?extraParams=%7B%22display_model_id%22%3A445519719464%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-80-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-80-uht-micro-air-grinder-mag-123n-1731723816887485711?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 80",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-80-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-80-uht-micro-air-grinder-mag-123n-1731723816887485711?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 100",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-100-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-100-uht-micro-air-grinder-mag-123n-1731723834397984015?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 100",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-100-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-100-uht-micro-air-grinder-mag-123n-1731723834397984015?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 120",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-120-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-120-uht-micro-air-grinder-mag-123n-1731723816148763919?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 120",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-120-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-120-uht-micro-air-grinder-mag-123n-1731723816148763919?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 150",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-150-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-150-uht-micro-air-grinder-mag-123n-1731723785271543055?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 150",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-150-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-150-uht-micro-air-grinder-mag-123n-1731723785271543055?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/UHT-Sand-Paper-1-PCS-180-Dia.-30-mm-Amplas-Kertas-Bulat-Poliper-Pad-Grit-180-UHT-Micro-Air-Grinder-MAG-123N-i.220946702.43178544423?extraParams=%7B%22display_model_id%22%3A360519897005%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-180-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-180-uht-micro-air-grinder-mag-123n-1731723812828972303?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 180",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-180-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-180-uht-micro-air-grinder-mag-123n-1731723812828972303?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 240",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-240-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-240-uht-micro-air-grinder-mag-123n-1731723803843003663?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 240",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-240-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-240-uht-micro-air-grinder-mag-123n-1731723803843003663?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 400",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-400-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-400-uht-micro-air-grinder-mag-123n-1731723714038433039?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 400",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-400-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-400-uht-micro-air-grinder-mag-123n-1731723714038433039?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 PCS",
            specification: "GRIT 600",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-600-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-600-uht-micro-air-grinder-mag-123n-1731723555330426127?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "SAND PAPER 30 MM - 1 BOX",
            specification: "GRIT 600",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/uht-sand-paper-600-dia-30-mm-amplas-kertas-bulat-poliper-pad-grit-600-uht-micro-air-grinder-mag-123n-1731723555330426127?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    spuhtVariants.forEach((variant, index) => {

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