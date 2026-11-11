document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("artaiyoVariantList");

    // Jalankan hanya di halaman AMPLAS ROLL - TAIYO //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN AMPLAS ROLL - TAIYO
    ========================================= */

    const artaiyoVariants = [

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 40",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 40",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 60",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 60",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 80",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 80",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 100",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 100",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 220",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 220",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 240",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 240",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 320",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 320",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 1 METER",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "10 CM X 46 METER",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/TAIYO-Amplas-Gulung-Amplas-Bangunan-Amplas-roll-Amplas-meteran-Amplas-Kayu-Amplas-Besi-Untuk-Tembok-60-80-100-120-150-180-240-320-400-i.220946702.48809635101?extraParams=%7B%22display_model_id%22%3A277575814723%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-gulung-amplas-roll-amplas-meteran-amplas-kayu-amplas-besi-untuk-tembok-60-80-100-120-150-180-240-320-400-1735341549538346388-1735341920670156180?extParam=src%3Dshop%26whid%3D20241059&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    artaiyoVariants.forEach((variant, index) => {

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