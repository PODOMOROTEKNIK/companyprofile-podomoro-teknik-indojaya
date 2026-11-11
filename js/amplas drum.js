document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("amplasdrumVariantList");

    // Jalankan hanya di halaman AMPLAS DRUM
    if (!variantList) return;


    /* =========================================
       DATA VARIAN AMPLAS DRUM
    ========================================= */

    const amplasdrumVariants = [

        {
            name: "DIAMETER M6 M8 M10 M12",
            specification: "GRIT 80",
            shopee: "https://shopee.co.id/Amplas-Drum-Ring-80-1-4-5-16-3-8-1-2''-Sanding-Ring-Paper-Mini-Grinder-Amplas-Kertas-Cincin-6-8-10-12-mm-Grit-80-i.220946702.41002958833?extraParams=%7B%22display_model_id%22%3A300244084525%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-drum-ring-80-1-4-5-16-3-8-1-2-sanding-ring-paper-mini-grinder-amplas-kertas-cincin-6-8-10-12-mm-grit-80-1731545257916400911?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMETER M6 M8 M10 M12",
            specification: "GRIT 120",
            shopee: "https://shopee.co.id/Amplas-Drum-Ring-120-1-4-5-16-3-8-1-2''-Sanding-Ring-Paper-Mini-Grinder-Amplas-Kertas-Cincin-6-8-10-12-mm-Grit-120-i.220946702.26587160298?extraParams=%7B%22display_model_id%22%3A265244796488%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-drum-ring-120-1-4-5-16-3-8-1-2-sanding-ring-paper-mini-grinder-amplas-kertas-cincin-6-8-10-12-mm-grit-120-1731545227702600975?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMETER M6 M8 M10 M12",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/Amplas-Drum-Ring-180-1-4-5-16-3-8-1-2''-Sanding-Ring-Paper-Mini-Grinder-Amplas-Kertas-Cincin-6-8-10-12-mm-Grit-180-i.220946702.42902959132?extraParams=%7B%22display_model_id%22%3A295244228154%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-drum-ring-180-1-4-5-16-3-8-1-2-sanding-ring-paper-mini-grinder-amplas-kertas-cincin-6-8-10-12-mm-grit-180-1731545198136296719?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMETER M6 M8 M10 M12",
            specification: "GRIT 240",
            shopee: "https://shopee.co.id/Amplas-Drum-Ring-240-1-4-5-16-3-8-1-2''-Sanding-Ring-Paper-Mini-Grinder-Amplas-Kertas-Cincin-6-8-10-12-mm-Grit-240-i.220946702.42152959534?extraParams=%7B%22display_model_id%22%3A280244281771%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-drum-ring-240-1-4-5-16-3-8-1-2-sanding-ring-paper-mini-grinder-amplas-kertas-cincin-6-8-10-12-mm-grit-240-1731545178865632527?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMETER M6 M8 M10 M12",
            specification: "GRIT 320",
            shopee: "https://shopee.co.id/Amplas-Drum-Ring-320-1-4-5-16-3-8-1-2''-Sanding-Ring-Paper-Mini-Grinder-Amplas-Kertas-Cincin-6-8-10-12-mm-Grit-320-i.220946702.43752964385?extraParams=%7B%22display_model_id%22%3A260244949715%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-drum-ring-320-1-4-5-16-3-8-1-2-sanding-ring-paper-mini-grinder-amplas-kertas-cincin-6-8-10-12-mm-grit-320-1731545139801982223?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "DIAMETER M6 M8 M10 M12",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/Amplas-Drum-Ring-400-1-4-5-16-3-8-1-2''-Sanding-Ring-Paper-Mini-Grinder-Amplas-Kertas-Cincin-6-8-10-12-mm-Grit-400-i.220946702.26887155529?extraParams=%7B%22display_model_id%22%3A265244986971%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-drum-ring-400-1-4-5-16-3-8-1-2-sanding-ring-paper-mini-grinder-amplas-kertas-cincin-6-8-10-12-mm-grit-400-1731544459613013263?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    amplasdrumVariants.forEach((variant, index) => {

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