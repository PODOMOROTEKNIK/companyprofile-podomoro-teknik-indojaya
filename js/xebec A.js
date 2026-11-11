document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("xebecAVariantList");

    // Jalankan hanya di halaman XEBEC
    if (!variantList) return;


    /* =========================================
       DATA VARIAN XEBEC
    ========================================= */

    const xebecVariants = [

        {
            name: "1X4 - A SERIES",
            specification: "GRIT 120",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-120-av-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-ad-1004m-grit-120-japan-1737247467308942740?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X4 - A SERIES",
            specification: "GRIT 220",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-220-ad-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-ad-1004m-grit-220-japan-1733026077979608468?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X4 - A SERIES",
            specification: "GRIT 300",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X4 - A SERIES",
            specification: "GRIT 400",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-400-ao-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-ao-1004m?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X4 - A SERIES",
            specification: "GRIT 600",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X4 - A SERIES",
            specification: "GRIT 800",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-800-ab-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-ab-1004m?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X4 - A SERIES",
            specification: "GRIT 1000",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1000-aw-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-aw-1004m-grit-1000-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X4 - A SERIES",
            specification: "GRIT 1200",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-1200-ar-1004m-1x4x100-mm-ceramic-fiber-stone-xebec-ar-1004m-grit-1200-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - A SERIES",
            specification: "GRIT 120",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-120-av-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-av-1006m-grit-120-japan-1737247589941020052?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - A SERIES",
            specification: "GRIT 220",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-220-ad-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-ad-1006m-grit-220-polishing-stone-oilstone-super-japan-1732867852397479316?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - A SERIES",
            specification: "GRIT 300",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X6 - A SERIES",
            specification: "GRIT 400",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/xebec-400-ao-1006m-1x6x100-mm-ceramic-fiber-stone-xebec-ao-1006m-1737392837929108884?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "1X6 - A SERIES",
            specification: "GRIT 600",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X6 - A SERIES",
            specification: "GRIT 800",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X6 - A SERIES",
            specification: "GRIT 1000",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X6 - A SERIES",
            specification: "GRIT 1200",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X10 - A SERIES",
            specification: "GRIT 120",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X10 - A SERIES",
            specification: "GRIT 220",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X10 - A SERIES",
            specification: "GRIT 300",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X10 - A SERIES",
            specification: "GRIT 400",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X10 - A SERIES",
            specification: "GRIT 600",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X10 - A SERIES",
            specification: "GRIT 800",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X10 - A SERIES",
            specification: "GRIT 1000",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "1X10 - A SERIES",
            specification: "GRIT 1200",
            shopee: "",
            tokopedia: ""
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