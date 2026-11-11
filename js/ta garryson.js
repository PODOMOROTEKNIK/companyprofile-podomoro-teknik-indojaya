document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("tagarrysonVariantList");

    // Jalankan hanya di halaman TUNER AMPLAS - GARRYSON //
    if (!variantList) return;


    /* =========================================
       DATA VARIAN TUNER AMPLAS - GARRYSON
    ========================================= */

    const tagarrysonVariants = [

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "10 X 10 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-10x10x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm101080-germany-garryson-original-high-quality-1733354419385763220?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "10 X 10 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-10x10x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm101080-germany-garryson-original-high-quality-1733354419385763220?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "10 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-10x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm101580-germany-garryson-original-high-quality-1733393426283398548?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "10 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-10x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm101580-germany-garryson-original-high-quality-1733393426283398548?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "15 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-15x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1515080-germany-garryson-original-high-quality-1733385846524577172?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "15 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-15x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1515080-germany-garryson-original-high-quality-1733385846524577172?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "20 X 10 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-20x10x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm201080-germany-garryson-original-high-quality-1733392848903832980?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "20 X 10 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-20x10x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm201080-germany-garryson-original-high-quality-1733392848903832980?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "20 X 15 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-20x15x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm201580-germany-garryson-original-high-quality-1733392778576561556?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "20 X 15 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-20x15x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm201580-germany-garryson-original-high-quality-1733392778576561556?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "20 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-20x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm202080-germany-garryson-original-high-quality-1733386744659805588?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "20 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-20x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm202080-germany-garryson-original-high-quality-1733386744659805588?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "25 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-25x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm252080-germany-garryson-original-high-quality-1733391771212547476?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "25 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-25x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm252080-germany-garryson-original-high-quality-1733391771212547476?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "25 X 25 X 6",
            shopee: "https://shopee.co.id/Garryson-Flap-Wheel-Fan-Grinder-Tuner-Amplas-25X25X6-mm-80-Article-No-GSM252580-(Germany)-HIGH-QUALITY-i.220946702.54754701369?extraParams=%7B%22display_model_id%22%3A420436431770%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-25x25x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm252580-germany-garryson-original-high-quality-1733354401828930964?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "25 X 25 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-25x25x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm252580-germany-garryson-original-high-quality-1733354401828930964?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 PCS",
            specification: "25 X 5 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-25x5x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2505080-germany-garryson-original-high-quality-1733360126746133908?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 80 - 1 DUS",
            specification: "25 X 5 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-80-25x5x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2505080-germany-garryson-original-high-quality-1733360126746133908?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 PCS",
            specification: "10 X 10 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-10x10x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1010120-germany-garryson-original-high-quality-1733362399279482260?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 DUS",
            specification: "10 X 10 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-10x10x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1010120-germany-garryson-original-high-quality-1733362399279482260?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 PCS",
            specification: "15 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-15x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1515120-germany-garryson-original-high-quality-1733362248847820180?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 DUS",
            specification: "15 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-15x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1515120-germany-garryson-original-high-quality-1733362248847820180?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 PCS",
            specification: "20 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-20x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2020120-germany-garryson-original-high-quality-1733362751511168404?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 DUS",
            specification: "20 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-20x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2020120-germany-garryson-original-high-quality-1733362751511168404?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 PCS",
            specification: "25 X 15 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-25x15x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2515120-germany-garryson-original-high-quality-1733392425916007828?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 DUS",
            specification: "25 X 15 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-25x15x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2515120-germany-garryson-original-high-quality-1733392425916007828?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 PCS",
            specification: "25 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-25x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2520120-germany-garryson-original-high-quality-1733392572080752020?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 DUS",
            specification: "25 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-25x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2520120-germany-garryson-original-high-quality-1733392572080752020?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 PCS",
            specification: "25 X 25 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-25x25x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2525120-germany-garryson-original-high-quality-1733354081580320148?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 DUS",
            specification: "25 X 25 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-25x25x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2525120-germany-garryson-original-high-quality-1733354081580320148?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 PCS",
            specification: "25 X 5 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-25x5x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm255120-germany-garryson-original-high-quality-1733392903412811156?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 120 - 1 DUS",
            specification: "25 X 5 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-120-25x5x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm255120-germany-garryson-original-high-quality-1733392903412811156?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "10 X 10 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-10x10x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1010180-germany-garryson-original-high-quality-1733362612569015700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "10 X 10 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-10x10x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1010180-germany-garryson-original-high-quality-1733362612569015700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "10 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-10x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1015180-germany-garryson-original-high-quality-1733393771557651860?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "10 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-10x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1015180-germany-garryson-original-high-quality-1733393771557651860?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "15 X 15 X 3",
            shopee: "https://shopee.co.id/Garryson-Flap-Wheel-Fan-Grinder-Tuner-Amplas-15X15X3-mm-180-Article-No-GSM1515180-(Germany)-HIGH-QUALITY-i.220946702.49104757167?extraParams=%7B%22display_model_id%22%3A390438480431%2C%22model_selection_logic%22%3A3%7D",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-15x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1515180-germany-garryson-original-high-quality-1733362539540088212?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "15 X 15 X 3",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-15x15x3-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm1515180-germany-garryson-original-high-quality-1733362539540088212?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "20 X 10 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-20x10x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2010180-germany-garryson-original-high-quality-1733385943604430228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "20 X 10 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-20x10x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2010180-germany-garryson-original-high-quality-1733385943604430228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "20 X 15 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-20x15x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2015180-germany-garryson-original-high-quality-1733353478980535700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "20 X 15 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-20x15x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2015180-germany-garryson-original-high-quality-1733353478980535700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "20 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-20x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2020180-germany-garryson-original-high-quality-1733380865285522836?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "20 X 20 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-20x20x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2020180-germany-garryson-original-high-quality-1733380865285522836?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "25 X 15 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-25x15x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2515180-germany-garryson-original-high-quality-1733392665812043156?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "25 X 15 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-25x15x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2515180-germany-garryson-original-high-quality-1733392665812043156?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "25 X 25 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-25x25x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2525180-germany-garryson-original-high-quality-1733354285156173204?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "25 X 25 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-25x25x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm2525180-germany-garryson-original-high-quality-1733354285156173204?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 PCS",
            specification: "25 X 5 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-25x5x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm255180-germany-garryson-original-high-quality-1733401900449498516?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

        {
            name: "FLAP WHEEL GRIT 180 - 1 DUS",
            specification: "25 X 5 X 6",
            shopee: "",
            tokopedia: "https://www.tokopedia.com/podomoroteknik/garryson-180-25x5x6-mm-flap-wheel-fan-grinder-amplas-gagang-article-no-gsm255180-germany-garryson-original-high-quality-1733401900449498516?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
        },

            ];


    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    tagarrysonVariants.forEach((variant, index) => {

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