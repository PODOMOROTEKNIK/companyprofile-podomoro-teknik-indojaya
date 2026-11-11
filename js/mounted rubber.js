document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("mountedrubberVariantList");

    // Jalankan hanya di halaman MOUNTED RUBBER //
    if (!variantList) return;


    /* =========================================
       MOUNTED RUBBER
    ========================================= */

    const mountedrubberVariants = [

        {
            name: "TABUNG",
            specification: "3X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-3-mm-tabung-shank-3-amplas-karet-hijau-3x3-mm-kepala-3-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472565242594575?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "3X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-3-mm-kerucut-shank-3-amplas-karet-hijau-3x3-mm-kepala-3-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472748688672015?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "4X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-4-mm-tabung-shank-3-amplas-karet-hijau-4x3-mm-kepala-4-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472505370150159?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "4X3",
            shopee: "https://shopee.co.id/Mounted-Rubber-4-MM-KERUCUT-Shank-3-Amplas-Karet-Hijau-4x3-mm-Kepala-4-mm-Shank-3-mm-Batu-Mata-Grinding-Batu-Amplas-Karet-Produk-Taiwan-i.220946702.43564304026?extraParams=%7B%22display_model_id%22%3A39581757535%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-4-mm-kerucut-shank-3-amplas-karet-hijau-4x3-mm-kepala-4-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472697195463951?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "5X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-5mm-tabung-shank-3-amplas-karet-hijau-5x3-mm-kepala-5-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472457959638287?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "5X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-5-mm-kerucut-shank-3-amplas-karet-hijau-5x3-mm-kepala-5-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472691219367183?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "6X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-6-mm-tabung-shank-3-amplas-karet-hijau-6x3-mm-kepala-6-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472414678811919?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "6X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-6-mm-kerucut-shank-3-amplas-karet-hijau-6x3-mm-kepala-6-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472650692494607?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "8X3",
            shopee: "https://shopee.co.id/Tabung-Rubber-Mounted-Point-Poles-M8-x-3-mm-Folyflex-Stone-ABR-Mounted-Rubber-M8-Shank-3mm-i.220946702.26824598272?extraParams=%7B%22display_model_id%22%3A178686773872%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-8mm-tabung-shank-3-amplas-karet-hijau-8x3-mm-kepala-8-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472392041039119?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "8X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-8-mm-kerucut-shank-3-amplas-karet-hijau-8x3-mm-kepala-8-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472615101662479?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "10X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-10mm-tabung-shank-3-amplas-karet-hijau-10x3-mm-kepala-10-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472360191788303?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "10X3",
            shopee: "https://shopee.co.id/Mounted-Rubber-10-MM-KERUCUT-Shank-3-Amplas-Karet-Hijau-10x3-mm-Kepala-10-mm-Shank-3-mm-Batu-Mata-Grinding-Batu-Amplas-Karet-Produk-Taiwan-i.220946702.43214274018?extraParams=%7B%22display_model_id%22%3A306176678957%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-10-mm-kerucut-shank-3-amplas-karet-hijau-10x3-mm-kepala-10-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472583816021263?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "12X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-12-mm-tabung-shank-3-amplas-karet-hijau-12x3-mm-kepala-12-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731485156589536527?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "12X3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-12-mm-kerucut-shank-3-amplas-karet-hijau-12x3-mm-kepala-12-mm-shank-3-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731472569311266063?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "TABUNG",
            specification: "14X6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-14-mm-tabung-shank-6-amplas-karet-hijau-14x6-mm-kepala-14-mm-shank-6-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731474445666125071?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "14X6",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "16X6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-16-mm-tabung-shank-6-amplas-karet-hijau-16x6-mm-kepala-16-mm-shank-6-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731474443135517967?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "16X6",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "18X6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-18-mm-tabung-shank-6-amplas-karet-hijau-18x6-mm-kepala-18-mm-shank-6-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731474389427717391?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "18X6",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "20X6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-20-mm-tabung-shank-6-amplas-karet-hijau-20x6-mm-kepala-20-mm-shank-6-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731474379781735695?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "20X6",
            shopee: "",
            tokopedia: ""
        },

        {
            name: "TABUNG",
            specification: "25X6",
            shopee: "https://shopee.co.id/Mounted-Rubber-25-MM-TABUNG-Shank-6-Amplas-Karet-Hijau-25x6-mm-Kepala-25-mm-Shank-6-mm-Batu-Mata-Grinding-Batu-Amplas-Karet-Produk-Taiwan-i.220946702.41664276507?extraParams=%7B%22display_model_id%22%3A276176543369%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/mounted-rubber-25-mm-tabung-shank-6-amplas-karet-hijau-25x6-mm-kepala-25-mm-shank-6-mm-batu-mata-grinding-batu-amplas-karet-produk-taiwan-1731474319874229519?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "KERUCUT",
            specification: "25X6",
            shopee: "",
            tokopedia: ""
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    mountedrubberVariants.forEach((variant, index) => {

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