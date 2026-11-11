document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("osbellstoneVariantList");

    // Jalankan hanya di halaman OIL STONE - BELLSTONE
    if (!variantList) return;


    /* =========================================
       DATA VARIAN OIL STONE - BELLSTONE
    ========================================= */

    const osbellstoneVariants = [

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 120",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-120-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.28055349306?extraParams=%7B%22display_model_id%22%3A98960542028%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-3x6x150-mm-120-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 150",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-150-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.26205348775?extraParams=%7B%22display_model_id%22%3A233000248037%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-3x6x150-mm-150-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-180-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.29805351562?extraParams=%7B%22display_model_id%22%3A217652675670%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-3x6x150-mm-180-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 240",
            shopee: "https://shopee.co.id/BELLSTONE-240-3X6X150-BATU-POLESH-i.220946702.19177111121?extraParams=%7B%22display_model_id%22%3A49286261075%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 320",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-320-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-320-i.220946702.17019666079?extraParams=%7B%22display_model_id%22%3A142934134649%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-3x6x150-320?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-400-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-400-i.220946702.15660756556?extraParams=%7B%22display_model_id%22%3A160732617058%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 600",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-600-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-600-i.220946702.15760753176?extraParams=%7B%22display_model_id%22%3A152930136041%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x6x150-600?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 800",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-800-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-800-i.220946702.14360755123?extraParams=%7B%22display_model_id%22%3A160732409988%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 1000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-1000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-1000-i.220946702.17619564504?extraParams=%7B%22display_model_id%22%3A124567143673%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 1200",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-1200-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.24983504627?extraParams=%7B%22display_model_id%22%3A187652707817%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-atau-oil-stone-uk-3x6x150-grit-1200-merk-bellstone-korea?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 1500",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-1500-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.26105349676?extraParams=%7B%22display_model_id%22%3A251199107919%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x6x150-1500?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 2000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-2000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.28805398504?extraParams=%7B%22display_model_id%22%3A256202502617%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x6x150-2000?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X6X150 MM",
            specification: "GRIT 3000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-3000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.27205401513?extraParams=%7B%22display_model_id%22%3A157381255158%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-3x6x150-mm-3000-batu-polesh-batu-gosok-oil-stone-poleshing?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 120",
            shopee: "https://shopee.co.id/Bellstone-3X13X150-mm-120-Batu-Polesh-Batu-Gosok-Oil-Stone-i.220946702.24417637161?extraParams=%7B%22display_model_id%22%3A176365221127%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-3x13x150-mm-120-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 150",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-150-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.26205348775?extraParams=%7B%22display_model_id%22%3A233000248037%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-3x13x150-mm-150-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-180-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.29805351562?extraParams=%7B%22display_model_id%22%3A217652675670%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 240",
            shopee: "https://shopee.co.id/BELLSTONE-240-3X13X150-BATU-POLESH-i.220946702.23535020449?extraParams=%7B%22display_model_id%22%3A194118507433%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 320",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-320-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-320-i.220946702.17019666079?extraParams=%7B%22display_model_id%22%3A142934134649%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x13x150-320?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/BELLSTONE-400-3X13X150-BATU-POLESH-i.220946702.23234918039?extraParams=%7B%22display_model_id%22%3A146761161331%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x13x150-400?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 600",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-600-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-600-i.220946702.15760753176?extraParams=%7B%22display_model_id%22%3A152930136041%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x13x150-600?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 800",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-800-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-800-i.220946702.14360755123?extraParams=%7B%22display_model_id%22%3A160732409988%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x13x150-800?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 1000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-1000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-1000-i.220946702.17619564504?extraParams=%7B%22display_model_id%22%3A124567143673%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x13x150-1000?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 1200",
            shopee: "https://shopee.co.id/BELLSTONE-1200-3X13X150-BATU-POLESH-i.220946702.19877134052?extraParams=%7B%22display_model_id%22%3A204118522858%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x13x150-1200?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 1500",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-1500-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.26105349676?extraParams=%7B%22display_model_id%22%3A251199107919%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x13x150-1500?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 2000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-2000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.28805398504?extraParams=%7B%22display_model_id%22%3A256202502617%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-uk-3x13x150-2000?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 3X13X150 MM",
            specification: "GRIT 3000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-3000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.27205401513?extraParams=%7B%22display_model_id%22%3A157381255158%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-3x13x150-mm-3000-batu-polesh-batu-gosok-oil-stone-poleshing?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 120",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-120-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.28055349306?extraParams=%7B%22display_model_id%22%3A98960542028%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-5x13x150-mm-120-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 150",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-150-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.26205348775?extraParams=%7B%22display_model_id%22%3A233000248037%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-5x13x150-mm-150-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 180",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-180-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.29805351562?extraParams=%7B%22display_model_id%22%3A217652675670%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-5x13x150-mm-180-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 240",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-240-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-240-i.220946702.17619663439?extraParams=%7B%22display_model_id%22%3A124570377874%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 320",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-320-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-320-i.220946702.17019666079?extraParams=%7B%22display_model_id%22%3A142934134649%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-5x13x150-grit-320?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 400",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-400-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-400-i.220946702.15660756556?extraParams=%7B%22display_model_id%22%3A160732617058%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-5x13x150-mm-400-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 600",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-600-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-600-i.220946702.15760753176?extraParams=%7B%22display_model_id%22%3A152930136041%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/batu-polesh-batu-gosok-oil-stone-bellstone-korea-5x13x150-600?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 800",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-800-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-800-i.220946702.14360755123?extraParams=%7B%22display_model_id%22%3A160732409988%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-5x13x150-mm-800-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 1000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-1000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-1000-i.220946702.17619564504?extraParams=%7B%22display_model_id%22%3A124567143673%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-5x13x150-mm-1000-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 1200",
            shopee: "https://shopee.co.id/BELLSTONE-1200-5X13X150-BATU-POLESH-i.220946702.23935026527?extraParams=%7B%22display_model_id%22%3A137506843505%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-5x13x150-mm-1200-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 1500",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-1500-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.26105349676?extraParams=%7B%22display_model_id%22%3A251199107919%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-5x13x150-mm-1500-batu-polesh-batu-gosok-oil-stone?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 2000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-2000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.28805398504?extraParams=%7B%22display_model_id%22%3A256202502617%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: ""
        },

        {
            name: "OIL STONE 5X13X150 MM",
            specification: "GRIT 3000",
            shopee: "https://shopee.co.id/BELLSTONE-GRIT-3000-3x6x150-3x13x150-5x13x150-Batu-Polesh-Batu-Gosok-Oil-Stone-Merk-BELLSTONE-KOREA-i.220946702.27205401513?extraParams=%7B%22display_model_id%22%3A157381255158%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/bellstone-oilstone-5x13x150-batu-polesh-batu-gosok-oil-stone-mold-finishing-vh-120-vh-3000-1731761397475542420?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    osbellstoneVariants.forEach((variant, index) => {

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