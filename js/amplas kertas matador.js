document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("amplaskertasmatadorVariantList");

    // Jalankan hanya di halaman AMPLAS BULAT VELCRO
    if (!variantList) return;


    /* =========================================
       DATA VARIAN AMPLAS BULAT VELCRO
    ========================================= */

    const amplaskertasmatadorVariants = [

        {
            name: "GRIT 60/P60",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "GRIT 80/P80",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "GRIT 100/P100",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "GRIT 120/P120",
            specification: "GRIT",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-p120-grit-120-amplas-kertas-matador-germany-1731825848246306196?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 150/P150",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "GRIT 180/P180",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "GRIT 220/P220",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "GRIT 240/P240",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },
        
        {
            name: "GRIT 320/P320",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "GRIT 400/P400",
            specification: "GRIT",
            shopee: "https://shopee.co.id/Amplas-MATADOR-991A-P400-Grit-400-Amplas-Kertas-Matador-Germany-i.220946702.43152798044?extraParams=%7B%22display_model_id%22%3A280230415101%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-p400-grit-400-amplas-kertas-matador-germany-1731543897181947151?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 600/P600",
            specification: "GRIT",
            shopee: "https://shopee.co.id/Amplas-MATADOR-991A-P600-Grit-600-Amplas-Kertas-Matador-Germany-i.220946702.42852793413?extraParams=%7B%22display_model_id%22%3A227849284770%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-p600-grit-600-amplas-kertas-matador-germany-1731543846087787791?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 800/P800",
            specification: "GRIT",
            shopee: "https://shopee.co.id/Amplas-MATADOR-991A-P800-Grit-800-Amplas-Kertas-Matador-Germany-i.220946702.44452798457?extraParams=%7B%22display_model_id%22%3A290230582641%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-60-80-100-120-150-180-220-240-320-400-600-800-1000-1200-2000-2500-3000-5000-7000-amplas-kertas-matador-1731544038001968399?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 1000/P1000",
            specification: "GRIT",
            shopee: "https://shopee.co.id/Amplas-MATADOR-991A-P1000-Grit-1000-Amplas-Kertas-Matador-Germany-i.220946702.43152797918?extraParams=%7B%22display_model_id%22%3A248471302359%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-60-80-100-120-150-180-220-240-320-400-600-800-1000-1200-2000-2500-3000-5000-7000-amplas-kertas-matador-1731544038002361615?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 1200/P1200",
            specification: "GRIT",
            shopee: "https://shopee.co.id/Amplas-MATADOR-991A-P1200-Grit-1200-Amplas-Kertas-Matador-Germany-i.220946702.44302807762?extraParams=%7B%22display_model_id%22%3A300230517019%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-p1200-grit-1200-amplas-kertas-matador-germany-1731543972191569167?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 2000/P2000",
            specification: "GRIT",
            shopee: "https://shopee.co.id/Amplas-MATADOR-991A-P2000-Grit-2000-Amplas-Kertas-Matador-Germany-i.220946702.55350088086?extraParams=%7B%22display_model_id%22%3A350007462646%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-p2000-grit-2000-amplas-kertas-matador-germany-1731543960094934287?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 2500/P2500",
            specification: "GRIT",
            shopee: "https://shopee.co.id/Amplas-MATADOR-991A-P2500-Grit-2500-Amplas-Kertas-Matador-Germany-i.220946702.25195386408?extraParams=%7B%22display_model_id%22%3A290230540156%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-60-80-100-120-150-180-220-240-320-400-600-800-1000-1200-2000-2500-3000-5000-7000-amplas-kertas-matador-1731544038002361615?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 3000/P3000",
            specification: "GRIT",
            shopee: "https://shopee.co.id/Amplas-MATADOR-991A-P3000-Grit-3000-Amplas-Kertas-Matador-Germany-i.220946702.29291255809?extraParams=%7B%22display_model_id%22%3A179056726690%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-p3000-grit-3000-amplas-kertas-matador-germany-1731498649437635855?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 5000/P5000",
            specification: "GRIT",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/amplas-matador-991a-st5000-grit-5000-amplas-kertas-matador-germany-1731900696435590548?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "GRIT 7000/P7000",
            specification: "GRIT",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    amplaskertasmatadorVariants.forEach((variant, index) => {

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