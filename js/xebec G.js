document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("xebecGVariantList");

    // Jalankan hanya di halaman XEBEC
    if (!variantList) return;


    /* =========================================
       DATA VARIAN XEBEC
    ========================================= */

    const xebecVariants = [

        {
            name: "1X4 - G SERIES",
            specification: "GRIT 180",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-180-gg-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-gg-1004m-grit-180-japan-1733026255740831124?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X4 - G SERIES",
            specification: "GRIT 220",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-220-gd-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-gd-1004m-grit-220-japan-1733026226566366612?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "2501X4 - G SERIES",
            specification: "GRIT 250",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X4 - G SERIES",
            specification: "GRIT 400",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-400-go-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-go-1004m-grit-400-japan-1733026276322674068?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },
        
        {
            name: "1X4 - G SERIES",
            specification: "GRIT 600",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-600-gp-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-gp-1004m-grit-600-japan-1733026281030387092?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        
        {
            name: "1X4 - G SERIES",
            specification: "GRIT 800",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-800-gb-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-gb-1004m-grit-800-japan-1733026196613858708?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },
      
        {
            name: "1X4 - G SERIES",
            specification: "GRIT 1000",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1000-gw-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-gw-1004m-grit-1000-japan-1733026253991413140?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },
    
        {
            name: "1X4 - G SERIES",
            specification: "GRIT 1200",
            shopee: "https://shopee.co.id/Ceramic-Xebec-1200-1x4x100-Ceramic-Fiber-Stone-Merk-XEBEC-i.220946702.24261753733?extraParams=%7B%22display_model_id%22%3A214901606314%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1200-gr-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-gr-1004m-grit-1200-japan-1733026225748280724?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - G SERIES",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/XEBEC-1006M-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-1006-1x6x100-mm-Grit-180-220-250-400-600-800-1000-1200-i.220946702.26562981474?extraParams=%7B%22display_model_id%22%3A128065288008%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-180-gg-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-gg-1006m-grit-180-polishing-stone-oilstone-super-japan-1733024587368531348?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - G SERIES",
            specification: "GRIT 220",
            shopee: "https://shopee.co.id/XEBEC-1006M-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-1006-1x6x100-mm-Grit-180-220-250-400-600-800-1000-1200-i.220946702.26562981474?extraParams=%7B%22display_model_id%22%3A128065288008%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-220-gd-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-gd-1006m-grit-220-polishing-stone-oilstone-super-japan-1732974717427221908?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - G SERIES",
            specification: "GRIT 250",
            shopee: "https://shopee.co.id/XEBEC-1006M-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-1006-1x6x100-mm-Grit-180-220-250-400-600-800-1000-1200-i.220946702.26562981474?extraParams=%7B%22display_model_id%22%3A128065288008%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-250-ga-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-ga-1006m-grit-250-polishing-stone-oilstone-super-japan-1732974766293222804?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - G SERIES",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/XEBEC-1006M-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-1006-1x6x100-mm-Grit-180-220-250-400-600-800-1000-1200-i.220946702.26562981474?extraParams=%7B%22display_model_id%22%3A128065288008%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-400-go-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-go-1006m-grit-400-polishing-stone-oilstone-super-japan-1733025197082772884?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - G SERIES",
            specification: "GRIT 600",
            shopee: "https://shopee.co.id/XEBEC-1006M-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-1006-1x6x100-mm-Grit-180-220-250-400-600-800-1000-1200-i.220946702.26562981474?extraParams=%7B%22display_model_id%22%3A128065288008%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-600-gp-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-gp-1006m-grit-600-polishing-stone-oilstone-super-japan-1733025269139277204?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - G SERIES",
            specification: "GRIT 800",
            shopee: "https://shopee.co.id/XEBEC-1006M-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-1006-1x6x100-mm-Grit-180-220-250-400-600-800-1000-1200-i.220946702.26562981474?extraParams=%7B%22display_model_id%22%3A128065288008%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-800-gb-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-gb-1006m-grit-800-polishing-stone-oilstone-super-japan-1733008454763251092?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - G SERIES",
            specification: "GRIT 1000",
            shopee: "https://shopee.co.id/XEBEC-1006M-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-1006-1x6x100-mm-Grit-180-220-250-400-600-800-1000-1200-i.220946702.26562981474?extraParams=%7B%22display_model_id%22%3A128065288008%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1000-gw-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-gw-1006m-grit-1000-polishing-stone-oilstone-super-japan-1732974594375583124?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - G SERIES",
            specification: "GRIT 1200",
            shopee: "https://shopee.co.id/XEBEC-1006M-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-1006-1x6x100-mm-Grit-180-220-250-400-600-800-1000-1200-i.220946702.26562981474?extraParams=%7B%22display_model_id%22%3A128065288008%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1200-gr-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-gr-1006m-grit-1200-polishing-stone-oilstone-super-japan-1733008538821166484?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X10 - G SERIES",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/XEBEC-1010M-1x10x100-mm-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-Grit-180-220-250-400-600-800-1000-1200-i.220946702.29768470580?extraParams=%7B%22display_model_id%22%3A247091482903%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-180-gg-1010m-1x10x100-mm-ceramic-fiber-stone-xebec-gg-1010m-grit-180-polishing-stone-oilstone-super-japan-1733026151214318996?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X10 - G SERIES",
            specification: "GRIT 220",
            shopee: "https://shopee.co.id/XEBEC-1010M-1x10x100-mm-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-Grit-180-220-250-400-600-800-1000-1200-i.220946702.29768470580?extraParams=%7B%22display_model_id%22%3A247091482903%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-220-gd-1010m-1x10x100-mm-ceramic-fiber-stone-xebec-gd-1010m-grit-220-polishing-stone-oilstone-super-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X10 - G SERIES",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/XEBEC-1010M-1x10x100-mm-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-Grit-180-220-250-400-600-800-1000-1200-i.220946702.29768470580?extraParams=%7B%22display_model_id%22%3A247091482903%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-400-go-1010m-1x10x100-mm-ceramic-fiber-stone-xebec-go-1010m-grit-400-polishing-stone-oilstone-super-japan-1732974513134208404?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X10 - G SERIES",
            specification: "GRIT 600",
            shopee: "https://shopee.co.id/XEBEC-1010M-1x10x100-mm-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-Grit-180-220-250-400-600-800-1000-1200-i.220946702.29768470580?extraParams=%7B%22display_model_id%22%3A247091482903%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-600-gp-1010m-1x10x100-mm-ceramic-fiber-stone-xebec-gp-1010m-grit-600-polishing-stone-oilstone-super-japan-1733026256354117012?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X10 - G SERIES",
            specification: "GRIT 800",
            shopee: "https://shopee.co.id/XEBEC-1010M-1x10x100-mm-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-Grit-180-220-250-400-600-800-1000-1200-i.220946702.29768470580?extraParams=%7B%22display_model_id%22%3A247091482903%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-800-gb-1010m-1x10x100-mm-ceramic-fiber-stone-xebec-gb-1010m-grit-800-polishing-stone-oilstone-super-japan-1733026358565569940?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X10 - G SERIES",
            specification: "GRIT 1000",
            shopee: "https://shopee.co.id/XEBEC-1010M-1x10x100-mm-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-Grit-180-220-250-400-600-800-1000-1200-i.220946702.29768470580?extraParams=%7B%22display_model_id%22%3A247091482903%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1000-gw-1010m-1x10x100-mm-ceramic-fiber-stone-xebec-gw-1010m-grit-1000-polishing-stone-oilstone-super-japan-1732974731857331604?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X10 - G SERIES",
            specification: "GRIT 1200",
            shopee: "https://shopee.co.id/XEBEC-1010M-1x10x100-mm-Ceramic-Fiber-Stone-Polishing-Stone-Oilstone-Super-Grit-180-220-250-400-600-800-1000-1200-i.220946702.29768470580?extraParams=%7B%22display_model_id%22%3A247091482903%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1200-gr-1010m-1x10x100-mm-ceramic-fiber-stone-xebec-gr-1010m-grit-1200-polishing-stone-oilstone-super-japan-1733026250356589972?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "3x100 - G SERIES",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/Ceramic-Fiber-Stone-Xebec-Diameter-3x100-mm-180-220-400-600-800-i.220946702.27606282753?extraParams=%7B%22display_model_id%22%3A251265750318%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-180-3x100-mm-ceramic-fiber-stone-round-bulat-xebec-diameter-3-x-100-grit-180-japan?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "3x100 - G SERIES",
            specification: "GRIT 220",
            shopee: "https://shopee.co.id/Ceramic-Fiber-Stone-Xebec-Diameter-3x100-mm-180-220-400-600-800-i.220946702.27606282753?extraParams=%7B%22display_model_id%22%3A251265750318%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-220-3x100-mm-ceramic-fiber-stone-round-bulat-xebec-diameter-3-x-100-grit-220-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "3x100 - G SERIES",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/Ceramic-Fiber-Stone-Xebec-Diameter-3x100-mm-180-220-400-600-800-i.220946702.27606282753?extraParams=%7B%22display_model_id%22%3A251265750318%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-400-3x100-mm-ceramic-fiber-stone-round-bulat-xebec-diameter-3-x-100-grit-400-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "3x100 - G SERIES",
            specification: "GRIT 600",
            shopee: "https://shopee.co.id/Ceramic-Fiber-Stone-Xebec-Diameter-3x100-mm-180-220-400-600-800-i.220946702.27606282753?extraParams=%7B%22display_model_id%22%3A251265750318%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-600-3x100-mm-ceramic-fiber-stone-round-bulat-xebec-diameter-3-x-100-grit-600-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "3x100 - G SERIES",
            specification: "GRIT 800",
            shopee: "https://shopee.co.id/Ceramic-Fiber-Stone-Xebec-Diameter-3x100-mm-180-220-400-600-800-i.220946702.27606282753?extraParams=%7B%22display_model_id%22%3A251265750318%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-800-3x100-mm-ceramic-fiber-stone-round-bulat-xebec-diameter-3-x-100-grit-800-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "3x100 - G SERIES",
            specification: "GRIT 1000",
            shopee: "https://shopee.co.id/Ceramic-Fiber-Stone-Xebec-Diameter-3x100-mm-180-220-400-600-800-i.220946702.27606282753?extraParams=%7B%22display_model_id%22%3A251265750318%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1000-3x100-mm-ceramic-fiber-stone-round-bulat-xebec-diameter-3-x-100-grit-1000-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "3x100 - G SERIES",
            specification: "GRIT 1200",
            shopee: "https://shopee.co.id/Ceramic-Fiber-Stone-Xebec-Diameter-3x100-mm-180-220-400-600-800-i.220946702.27606282753?extraParams=%7B%22display_model_id%22%3A251265750318%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1200-3x100-mm-ceramic-fiber-stone-round-bulat-xebec-diameter-3-x-100-grit-1200-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },


    ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    xebecVariants.forEach((variant, index) => {

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