document.addEventListener("DOMContentLoaded", () => {

    const variantList = document.getElementById("nachistVariantList");

    // Jalankan hanya di halaman NACHI STANDART
    if (!variantList) return;


    /* =========================================
       DATA VARIAN NACHI STANDART
    ========================================= */

    const nachistVariants = [
    
    {
    name: "NACHI STANDART",
    specification: "1.0X18X40",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.0-mm-Drill-1.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.53906416266?extraParams=%7B%22display_model_id%22%3A340578741046%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-0-mm-drill-1-0-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.1X42X20",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.1-mm-Drill-1.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.29654723217?extraParams=%7B%22display_model_id%22%3A205225295220%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-1-mm-drill-1-1-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.2X42X20",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.2-mm-Drill-1.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.27754722888?extraParams=%7B%22display_model_id%22%3A215225265320%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-2-mm-drill-1-2-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.3X45X22",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.3-mm-Drill-1.3-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.29704723053?extraParams=%7B%22display_model_id%22%3A118399827894%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-3-mm-drill-1-3-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.4X48X23",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.4-mm-Drill-1.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.27254719800?extraParams=%7B%22display_model_id%22%3A217635670716%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-4-mm-drill-1-4-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.5X48X23",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.0-s-d-1.9-Drill-1.0-1.1-1.2-1.3-1.4-1.5-1.6-1.7-1.8-1.9-MM-Drill-HSS-NACHI-i.220946702.27605317719?extraParams=%7B%22display_model_id%22%3A226545207636%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/mata-bor-nachi-1-5-mm-atau-drill-1-5mm-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.6X50X25",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.6-mm-Drill-1.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.26054897053?extraParams=%7B%22display_model_id%22%3A222975878940%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-6-mm-drill-1-6-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.7X50X25",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.7-mm-Drill-1.7-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.26504764732?extraParams=%7B%22display_model_id%22%3A226523379173%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-7-mm-drill-1-7-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.8X52X28",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.8-mm-Drill-1.8-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.27204719617?extraParams=%7B%22display_model_id%22%3A256155228240%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-8-mm-drill-1-8-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "1.9X52X28",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-1.9-mm-Drill-1.9-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.28504719522?extraParams=%7B%22display_model_id%22%3A215225267908%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-1-9-mm-drill-1-9-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.0X55X29",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.0-mm-Drill-2.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.19493682533?extraParams=%7B%22display_model_id%22%3A187070536193%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-0-mm-drill-2-0-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.1X55X29",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.1-mm-Drill-2.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.21193758662?extraParams=%7B%22display_model_id%22%3A207075575193%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-0-s-d-2-9-drill-2-0-2-1-2-2-2-3-2-4-2-5-2-6-2-7-2-8-2-0-6d4b9?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.2X58X33",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.2-mm-Drill-2.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.17496227357?extraParams=%7B%22display_model_id%22%3A187070546051%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-2-mm-drill-2-2-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.3X58X33",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.3-mm-Drill-2.3-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.23836827529?extraParams=%7B%22display_model_id%22%3A156786323289%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-3-mm-drill-2-3-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.4X61X35",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.4-mm-Drill-2.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.15098237577?extraParams=%7B%22display_model_id%22%3A217075736313%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-4-mm-drill-2-4-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.5X61X35",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.5-mm-Drill-2.5-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.18463141839?extraParams=%7B%22display_model_id%22%3A183240436142%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-5-mm-drill-2-5-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.6X64X37",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.6-mm-Drill-2.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.22381933161?extraParams=%7B%22display_model_id%22%3A214620775389%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-6-mm-drill-2-6-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.7X64X37",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.7-mm-Drill-2.7-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.22982220082?extraParams=%7B%22display_model_id%22%3A176130058969%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-7-mm-drill-2-7-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.8X67X39",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.8-mm-Drill-2.8-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.22482222567?extraParams=%7B%22display_model_id%22%3A232093321577%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-2-8-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "2.9X71X42",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-2.9-mm-Drill-2.9-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.20884830982?extraParams=%7B%22display_model_id%22%3A118199313489%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/mata-bor-nachi-2-9-mm-mata-bor-besi-hss-2-9-mm-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.0X71X42",
    shopee: "https://shopee.co.id/Mata-Bor-NACHI-3.0-mm-Mata-Bor-Besi-Hss-3mm-Merk-Nachi-Japan-i.220946702.7052204798?extraParams=%7B%22display_model_id%22%3A30989753309%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-0-mm-drill-3-0-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.1X71X42",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-3.1-mm-Drill-3.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.19484838076?extraParams=%7B%22display_model_id%22%3A39356014800%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-1-mm-drill-3-1-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.2X71X42",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-3.2-mm-Drill-3.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.22482223585?extraParams=%7B%22display_model_id%22%3A197077207032%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-2-mm-drill-3-2-mm-hss-mata-bor-besi-merek-nachi-1732857337091622292?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.3X75X45",
    shopee: "",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-3-mm-drill-3-3mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.4X73X45",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-3.4-mm-Drill-3.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.27305165681?extraParams=%7B%22display_model_id%22%3A241185106352%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-4-mm-drill-3-4-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.5X73X45",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-3.5-mm-Drill-3.5-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.22882317391?extraParams=%7B%22display_model_id%22%3A147042978616%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-5-mm-drill-3-5-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.6X76X48",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-3.6-mm-Drill-3.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.21884857426?extraParams=%7B%22display_model_id%22%3A194629606493%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-6-mm-drill-3-6-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.7X76X48",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-3.7-mm-Drill-3.7-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.18893817631?extraParams=%7B%22display_model_id%22%3A39706025655%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/mata-bor-nachi-3-7mm-mata-bor-besi-hss-3-7-mm-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.8X76X48",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-3.8-mm-Drill-3.8-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.18993818364?extraParams=%7B%22display_model_id%22%3A59705735002%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-8-mm-drill-3-8-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "3.9X79X51",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-3.9-mm-Drill-3.9-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.15499575917?extraParams=%7B%22display_model_id%22%3A214629648167%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-3-9-mm-drill-3-9-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.0X83X54",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.0-mm-Drill-4.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.21377774530?extraParams=%7B%22display_model_id%22%3A165795025077%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-0-mm-drill-4-0-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.1X83X54",
    shopee: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-1-mm-drill-4-1-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key=",
    tokopedia: "https://shopee.co.id/NACHI-Mata-Bor-4.1-mm-Drill-4.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.18084889636?extraParams=%7B%22display_model_id%22%3A148391479519%2C%22model_selection_logic%22%3A3%7D"
},
{
    name: "NACHI STANDART",
    specification: "4.2X83X54",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.2-mm-Drill-4.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.18793822962?extraParams=%7B%22display_model_id%22%3A108200170190%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-2-mm-drill-4-2-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.3X83X54",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.3-mm-Drill-4.3-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.23682322122?extraParams=%7B%22display_model_id%22%3A128761881105%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-3-mm-drill-4-3-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.4X86X56",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.4-mm-Drill-4.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.19984897568?extraParams=%7B%22display_model_id%22%3A207081235888%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-4-mm-drill-4-4-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.5X86X56",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.5-mm-Drill-4.5-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.23282547258?extraParams=%7B%22display_model_id%22%3A232102748289%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-5-mm-drill-4-5-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.6X86X56",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.6-mm-Drill-4.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22957740388?extraParams=%7B%22display_model_id%22%3A197098728783%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-6-mm-drill-4-6-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.7X89X59",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.7-mm-Drill-4.7-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.20094128450?extraParams=%7B%22display_model_id%22%3A158402044005%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-7-mm-drill-4-7-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.8X89X59",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.8-mm-Drill-4.8-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22883236453?extraParams=%7B%22display_model_id%22%3A217098732507%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-8-mm-drill-4-8-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "4.9X92X62",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-4.0-s-d-4.9-Drill-4.0-4.1-4.2-4.3-4.4-4.5-4.6-4.7-4.8-i.220946702.29305325394?extraParams=%7B%22display_model_id%22%3A241197175382%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-4-9-mm-drill-4-9-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.0X92X62",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.0-mm-Drill-5.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.18894137344?extraParams=%7B%22display_model_id%22%3A89456007801%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/mata-bor-nachi-5-0-mm-mata-bor-besi-hss-5mm-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.1X92X62",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.1-mm-Drill-5.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.21985180926?extraParams=%7B%22display_model_id%22%3A197098766216%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-5-1-mm-drill-5-1-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.2X95X64",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.2-mm-Drill-5.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23457740105?extraParams=%7B%22display_model_id%22%3A217098771652%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/mata-bor-nachi-5-2-mm-mata-bor-besi-hss-5-2mm-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.3X95X64",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.3-mm-Drill-5.3-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.21594131572?extraParams=%7B%22display_model_id%22%3A222125172679%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-5-3-mm-drill-5-3-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.4X95X64",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.4-mm-Drill-5.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.18285204183?extraParams=%7B%22display_model_id%22%3A222125184531%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-5-4-mm-drill-5-4-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.5X95X64",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.5-mm-Drill-5.5-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22957744809?extraParams=%7B%22display_model_id%22%3A225730929377%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-5-5-mm-drill-5-5-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.6X98X67",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.6-mm-Drill-5.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.20994128631?extraParams=%7B%22display_model_id%22%3A207098793815%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-5-6-mm-drill-5-6-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.7X98X67",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.7-mm-Drill-5.7-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23083239662?extraParams=%7B%22display_model_id%22%3A158402082423%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-5-7-mm-drill-5-7-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.8X98X67",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.8-mm-Drill-5.8-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.19585193279?extraParams=%7B%22display_model_id%22%3A109862553748%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-5-8-mm-drill-5-8-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "5.9X67X98",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-5.9-mm-Drill-5.9-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.48606433383?extraParams=%7B%22display_model_id%22%3A206366868671%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-5-9-mm-drill-5-9-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.0X102X70",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.0-mm-Drill-6.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.21994127964?extraParams=%7B%22display_model_id%22%3A176145615287%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-0-mm-drill-6-0-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.1X102X70",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.1-mm-Drill-6.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23683241698?extraParams=%7B%22display_model_id%22%3A214649019850%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-1-mm-drill-6-1-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.2X102X70",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.2-mm-Drill-6.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22257743925?extraParams=%7B%22display_model_id%22%3A177910095844%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-2-mm-hss-standar-sd-6-2-panjang-70-mm-l1-102-mm-l-total-10-pcs-original-japan-1731761400616682900?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.3X102X70",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.3-mm-Drill-6.3-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.15699617799?extraParams=%7B%22display_model_id%22%3A232125233232%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-3-mm-drill-6-3-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.4X105X73",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.4-mm-Drill-6.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22283239887?extraParams=%7B%22display_model_id%22%3A204649037349%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-4-mm-drill-6-4-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.5X105X73",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.5-mm-Drill-6.5-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.6052205962?extraParams=%7B%22display_model_id%22%3A30989952872%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-5-mm-drill-6-5-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.6X105X73",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.6-mm-Drill-6.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.20094132918?extraParams=%7B%22display_model_id%22%3A69358011544%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-6-mm-drill-6-6-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.7X105X73",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.7-mm-Drill-6.7-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23292537058?extraParams=%7B%22display_model_id%22%3A222125278813%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-7-mm-drill-6-7-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.8X105X73",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.8-mm-Drill-6.8-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.18294146538?extraParams=%7B%22display_model_id%22%3A157053646433%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-8-mm-drill-6-8-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "6.9X105X73",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-6.9-mm-Drill-6.9-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.21794133648?extraParams=%7B%22display_model_id%22%3A194649087181%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-6-9-mm-drill-6-9-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.0X105X73",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.0-mm-Drill-7.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.29255180502?extraParams=%7B%22display_model_id%22%3A157377847649%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-0-mm-drill-7-0-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.1X108X75",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.1mm-Drill-7.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.26855177617?extraParams=%7B%22display_model_id%22%3A215236958454%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-1mm-drill-7-1-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.2X108X75",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.2-mm-Drill-7.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.24383423838?extraParams=%7B%22display_model_id%22%3A246186228575%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-2-mm-drill-7-2-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.3X108X75",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.3-mm-Drill-7.3-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.18885319029?extraParams=%7B%22display_model_id%22%3A197106814093%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-3-mm-drill-7-3-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.4X111X78",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.4-mm-Drill-7.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.28955180722?extraParams=%7B%22display_model_id%22%3A232993147779%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-4-mm-drill-7-4-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.5X111X78",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.5-mm-Drill-7.5-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23783589885?extraParams=%7B%22display_model_id%22%3A176151382197%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-5-mm-drill-7-5-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.6X111X78",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.6-mm-Drill-7.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22358094063?extraParams=%7B%22display_model_id%22%3A157058016561%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-6-mm-drill-7-6-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.7X114X81",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.7-mm-Drill-7.7-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.18894262284?extraParams=%7B%22display_model_id%22%3A235742793042%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-7-mm-drill-7-7-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.8X114X81",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.8-mm-Drill-7.8-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22983590724?extraParams=%7B%22display_model_id%22%3A225742808737%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-8-mm-drill-7-8-mm-hss-mata-bor-besi-merk-nachi-japan?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "7.9X114X81",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-7.9-mm-Drill-7.9-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.19197455733?extraParams=%7B%22display_model_id%22%3A217106860024%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-7-9-mm-drill-7-9-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.0X114X81",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.0-mm-Drill-8.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.4452211646?extraParams=%7B%22display_model_id%22%3A21891947145%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-0-mm-drill-8-0-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.1X117X84",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.1-mm-Drill-8.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.18585376848?extraParams=%7B%22display_model_id%22%3A158407661532%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-1-mm-drill-8-1-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.2X117X84",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.2-mm-Drill-8.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22558203021?extraParams=%7B%22display_model_id%22%3A99458736249%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-2-mm-drill-8-2-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.3X117X84",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.3-mm-Drill-8.3-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22083700118?extraParams=%7B%22display_model_id%22%3A232140198808%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-3-mm-drill-8-3-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.4X121X87",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.4-mm-Drill-8.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22083704896?extraParams=%7B%22display_model_id%22%3A232140212469%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-4-mm-drill-8-4-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.5X121X87",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.5-mm-Drill-8.5-mm-HSS-Mata-Bor-Besi-Merk-NACHI-Japan-i.220946702.3354804674?extraParams=%7B%22display_model_id%22%3A51188247624%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-5-mm-drill-8-5-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.6X121X87",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.6-mm-Drill-8.6-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.19694311600?extraParams=%7B%22display_model_id%22%3A214659213097%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-6-mm-drill-8-6-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.7X121X87",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.7-mm-Drill-8.7-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22658203715?extraParams=%7B%22display_model_id%22%3A167917437835%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: ""
},
{
    name: "NACHI STANDART",
    specification: "8.8X124X89",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.8-mm-Drill-8.8-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.20385351076?extraParams=%7B%22display_model_id%22%3A235745991152%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-8-mm-drill-8-8-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "8.9X124X89",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-8.9-mm-Drill-8.9-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22958206208?extraParams=%7B%22display_model_id%22%3A157059225775%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-8-9-mm-drill-8-9-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.0X124X89",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.0-mm-Drill-9.0-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23383968618?extraParams=%7B%22display_model_id%22%3A158410872264%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-0-mm-drill-9-0-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.1X124X89",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.1-mm-Drill-9.1-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.20885442534?extraParams=%7B%22display_model_id%22%3A176157168039%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-0-9-1-9-2-9-3-9-4-9-5-9-6-9-7-9-8-9-9-mm-hss-drill-mata-bor-besi-1731761375317820820?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.2X127X92",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.2-mm-Drill-9.2-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.14799667840?extraParams=%7B%22display_model_id%22%3A194665035518%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-2-mm-drill-9-2-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.3X127X92",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.3-mm-Drill-9.3-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.20694396596?extraParams=%7B%22display_model_id%22%3A148410876998%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-3-mm-drill-9-3-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.4X127X92",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.4-mm-Drill-9.4-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23483969143?extraParams=%7B%22display_model_id%22%3A187114837891%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: ""
},
{
    name: "NACHI STANDART",
    specification: "9.5X127X92",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.5-mm-Drill-9.5-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22458477109?extraParams=%7B%22display_model_id%22%3A214665044474%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-5-mm-drill-9-5-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.6X130X95",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.6-mm-Drill-9.6-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.20985443133?extraParams=%7B%22display_model_id%22%3A127738382005%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-6-mm-drill-9-6-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.7X130X95",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.7-mm-Drill-9.7-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23958475897?extraParams=%7B%22display_model_id%22%3A167921723018%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-7-mm-drill-9-7-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.8X130X95",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.8-mm-Drill-9.8-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.19494408557?extraParams=%7B%22display_model_id%22%3A158410949499%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-8-mm-drill-9-8-mm-hss-mata-bor-besi-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "9.9X130X95",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-9.9-mm-Drill-9.9-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23483971539?extraParams=%7B%22display_model_id%22%3A225754771333%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-9-9-mm-drill-9-9-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.0X130X95",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.0mm-Drill-10.0-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23658933359?extraParams=%7B%22display_model_id%22%3A176165155568%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-0-mm-drill-10-0-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.1X133X98",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.1-mm-Drill-10.1-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.21094554831?extraParams=%7B%22display_model_id%22%3A204676146333%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-0-s-d-10-9-drill-10-0-10-1-10-2-10-3-10-4-10-5-10-6-nachi-10-9mm-8a996?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.2X133X98",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.2-mm-Drill-10.2-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22158929130?extraParams=%7B%22display_model_id%22%3A214676162634%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-2-mm-drill-10-2-mm-hss-mata-bor-besi-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.3X133X98",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.3-mm-Drill-10.3-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.19394565742?extraParams=%7B%22display_model_id%22%3A166165208918%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-3-mm-drill-10-3-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.4X133X98",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.4-mm-Drill-10.4-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23658934275?extraParams=%7B%22display_model_id%22%3A222165302408%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-0-s-d-10-9-drill-10-0-10-1-10-2-10-3-10-4-10-5-10-6-nachi-10-9mm-8a996?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.5X137X100",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.5-mm-Drill-10.5-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23384432570?extraParams=%7B%22display_model_id%22%3A127743088323%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-5-mm-drill-10-5-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.6X137X100",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.6-mm-Drill-10.6-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.19594643562?extraParams=%7B%22display_model_id%22%3A147073721464%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-6-mm-drill-10-6-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.7X137X100",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.7-mm-Drill-10.7-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.21494632511?extraParams=%7B%22display_model_id%22%3A184685653538%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-7-mm-drill-10-7-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.8X140X103",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.8-mm-Drill-10.8-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23859154681?extraParams=%7B%22display_model_id%22%3A166172036741%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-10-8-mm-drill-10-8-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "10.9X140X103",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-10.9-mm-Drill-10.9-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22484653118?extraParams=%7B%22display_model_id%22%3A232179233862%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://shopee.co.id/NACHI-Mata-Bor-10.9-mm-Drill-10.9-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22484653118?extraParams=%7B%22display_model_id%22%3A232179233862%2C%22model_selection_logic%22%3A3%7D"
},
{
    name: "NACHI STANDART",
    specification: "11.0X140X103",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.0-mm-Drill-11.0-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23559155158?extraParams=%7B%22display_model_id%22%3A108218840803%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-0-mm-drill-11-0-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.1X140X103",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.1-mm-Drill-11.1-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22684653536?extraParams=%7B%22display_model_id%22%3A137747081973%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-1-mm-drill-11-1-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.2X143X106",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.2-mm-Drill-11.2-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.17999340171?extraParams=%7B%22display_model_id%22%3A222179405100%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-2-mm-drill-11-2-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.3X143X106",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.0-s-d-11.9-Drill-11.0-11.1-11.2-11.3-11.4-11.5-11.6-i.220946702.26605341029?extraParams=%7B%22display_model_id%22%3A256198179836%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-3-mm-drill-11-3-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.4X143X106",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.4-mm-Drill-11.4-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.14598382248?extraParams=%7B%22display_model_id%22%3A157073803984%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-0-s-d-11-9-drill-11-0-11-1-11-2-11-3-11-4-11-5-11-6-nachi-11-9mm-b6bf5?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.5X143X106",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.5-mm-Drill-11.5-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.19385689782?extraParams=%7B%22display_model_id%22%3A49364032173%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-5-mm-drill-11-5-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.6X146X109",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.6-mm-Drill-11.6-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22859158115?extraParams=%7B%22display_model_id%22%3A176172140177%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-6-mm-drill-11-6-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.7X146X109",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.7-mm-Drill-11.7-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.19194639910?extraParams=%7B%22display_model_id%22%3A222179448490%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-7-mm-drill-11-7-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.8X146X109",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.8-mm-Drill-11.8-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.22384655241?extraParams=%7B%22display_model_id%22%3A39364296388%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-8-mm-drill-11-8-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "11.9X146X109",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-11.9-mm-Drill-11.9-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.23359155659?extraParams=%7B%22display_model_id%22%3A79713334228%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-11-0-s-d-11-9-drill-11-0-11-1-11-2-11-3-11-4-11-5-11-6-nachi-11-9mm-b6bf5?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.0X149X111",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.0-mm-Drill-12.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22585077707?extraParams=%7B%22display_model_id%22%3A194703333784%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-0-s-d-12-9-drill-12-0-12-1-12-2-12-3-12-4-12-5-12-6-nachi-12-9mm-bc779?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.1X149X111",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.1-mm-Drill-12.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.21994780134?extraParams=%7B%22display_model_id%22%3A176184778344%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-1-mm-drill-12-1-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.2X149X111",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.2-mm-Drill-12.2-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23785073995?extraParams=%7B%22display_model_id%22%3A166184780291%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-2-mm-drill-12-2-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.3X149X111",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.3-mm-Drill-12.3-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.57206399831?extraParams=%7B%22display_model_id%22%3A282418195135%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-3-mm-drill-12-3-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.4X152X114",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.4-mm-Drill-12.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.20394781137?extraParams=%7B%22display_model_id%22%3A222205327729%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-0-s-d-12-9-drill-12-0-12-1-12-2-12-3-12-4-12-5-12-6-nachi-12-9mm-bc779?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.5X152X114",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.5-mm-Drill-12.5-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.52306411439?extraParams=%7B%22display_model_id%22%3A445578394143%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-5-mm-drill-12-5-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.6X152X114",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.6-mm-Drill-12.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22959571957?extraParams=%7B%22display_model_id%22%3A222205354172%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-6-mm-drill-12-6-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.7X152X114",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.7-mm-Drill-12.7-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.26505988997?extraParams=%7B%22display_model_id%22%3A79794573100%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-7-mm-drill-12-7-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "12.8X152X114",
    shopee: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-8-mm-drill-12-8-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key=",
    tokopedia: "https://shopee.co.id/NACHI-Mata-Bor-12.8-mm-Drill-12.8-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.22685078123?extraParams=%7B%22display_model_id%22%3A29431921970%2C%22model_selection_logic%22%3A3%7D"
},
{
    name: "NACHI STANDART",
    specification: "12.9X152X114",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-12.9-mm-Drill-12.9-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.21285826718?extraParams=%7B%22display_model_id%22%3A204703406063%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-12-9-mm-drill-12-9-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.0X153X114",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.0-mm-Drill-13.0-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.21394776787?extraParams=%7B%22display_model_id%22%3A222205415473%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-0-mm-drill-13-0-mm-hss-mata-bor-besi-merek-nachi-1732865880684660116?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.1X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.1-mm-Drill-13.1-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23959580065?extraParams=%7B%22display_model_id%22%3A194703516008%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-1-mm-drill-13-1-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.2X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.2-mm-Drill-13.2-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.55656409297?extraParams=%7B%22display_model_id%22%3A420578553063%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-2-mm-drill-13-2-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.3X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.3-mm-Drill-13.3-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.19685837832?extraParams=%7B%22display_model_id%22%3A194703534661%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-0-s-d-13-9-drill-13-0-13-1-13-2-13-3-13-4-13-5-13-6-nachi-13-9mm-652a4?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.4X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.4-mm-Drill-13.4-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.18694797999?extraParams=%7B%22display_model_id%22%3A222205591801%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-4-mm-drill-13-4-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.5X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.5-mm-Drill-13.5-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.21285827323?extraParams=%7B%22display_model_id%22%3A232205614715%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-5-mm-drill-13-5-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.6X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.6-mm-Drill-13.6-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23959582661?extraParams=%7B%22display_model_id%22%3A232205625913%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-0-s-d-13-9-drill-13-0-13-1-13-2-13-3-13-4-13-5-13-6-nachi-13-9mm-652a4?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.7X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.7-mm-Drill-13.7-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.23259582699?extraParams=%7B%22display_model_id%22%3A222205642277%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-7-mm-drill-13-7-mm-hss-mata-bor-besi-merek-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.8X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.8-mm-Drill-13.8-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.19585842114?extraParams=%7B%22display_model_id%22%3A204703591180%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-8-mm-drill-13-8-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "13.9X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-13.9-mm-Drill-13.9-mm-HSS-Mata-Bor-Besi-Merk-NACHI-i.220946702.11599953084?extraParams=%7B%22display_model_id%22%3A222205678436%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-13-9-mm-drill-13-9-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.0X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.0-mm-Drill-14.0-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.22585080757?extraParams=%7B%22display_model_id%22%3A214703609936%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.1X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.1-mm-Drill-14.1-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.56906427591?extraParams=%7B%22display_model_id%22%3A355579593214%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.2X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.2-mm-Drill-14.2-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.51456430424?extraParams=%7B%22display_model_id%22%3A228250276304%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.3X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.3-mm-Drill-14.3mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.46206447644?extraParams=%7B%22display_model_id%22%3A272418943776%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.4X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.4-mm-Drill-14.4-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.49906450400?extraParams=%7B%22display_model_id%22%3A395579614048%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.5X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.5-mm-Drill-14.5-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.19485844169?extraParams=%7B%22display_model_id%22%3A222206399216%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-5-mm-drill-14-5-mm-hss-mata-bor-besi-merk-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.6X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.6-mm-Drill-14.6-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.46606444089?extraParams=%7B%22display_model_id%22%3A282418986242%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.7X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.7-mm-Drill-14.7-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.56856424117?extraParams=%7B%22display_model_id%22%3A310580264726%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.8X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.8-mm-Drill-14.8-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.52856430659?extraParams=%7B%22display_model_id%22%3A390579701097%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "14.9X168X122",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-14.9-mm-Drill-14.9-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.44506453108?extraParams=%7B%22display_model_id%22%3A380579746156%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-14-0-s-d-14-9-drill-14-0-14-1-14-2-14-3-14-4-14-5-14-6-hss-straight-shank-l-n-500-original-product-made-in-japan-1731761386593486228?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.0X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.0-mm-Drill-15.0-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.22685098321?extraParams=%7B%22display_model_id%22%3A29745256630%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-mm-drill-15-0-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.1X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.1-mm-Drill-15.1-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.49056448331?extraParams=%7B%22display_model_id%22%3A415579785128%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-s-d-15-9-drill-15-0-15-1-15-2-15-3-15-4-15-5-15-6-15-7-15-8-15-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761402700727700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.2X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.2-mm-Drill-15.2-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.46806450967?extraParams=%7B%22display_model_id%22%3A335579781572%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-s-d-15-9-drill-15-0-15-1-15-2-15-3-15-4-15-5-15-6-15-7-15-8-15-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761402700727700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.3X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.3-mm-Drill-15.3-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.47206439636?extraParams=%7B%22display_model_id%22%3A370579774980%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-s-d-15-9-drill-15-0-15-1-15-2-15-3-15-4-15-5-15-6-15-7-15-8-15-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761402700727700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.4X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.4-mm-Drill-15.4-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.49556444534?extraParams=%7B%22display_model_id%22%3A262419254165%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-s-d-15-9-drill-15-0-15-1-15-2-15-3-15-4-15-5-15-6-15-7-15-8-15-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761402700727700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.5X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.5-mm-Drill-15.5-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.21385841148?extraParams=%7B%22display_model_id%22%3A222207282270%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-5-mm-drill-15-5-mm-hss-mata-bor-besi-merek-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.6X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.6-mm-Drill-15.6-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.56906430994?extraParams=%7B%22display_model_id%22%3A405579800276%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-s-d-15-9-drill-15-0-15-1-15-2-15-3-15-4-15-5-15-6-15-7-15-8-15-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761402700727700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.7X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.7-mm-Drill-15.7-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.26394290146?extraParams=%7B%22display_model_id%22%3A390579794685%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-s-d-15-9-drill-15-0-15-1-15-2-15-3-15-4-15-5-15-6-15-7-15-8-15-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761402700727700?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.8X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.8-mm-Drill-15.8-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.46456439897?extraParams=%7B%22display_model_id%22%3A380579807861%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-s-d-15-9-drill-15-0-15-1-15-2-15-3-15-4-15-5-15-6-15-7-15-8-15-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761402700727700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "15.9X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-15.9-mm-Drill-15.9-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.47956448392?extraParams=%7B%22display_model_id%22%3A395579804131%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-15-0-s-d-15-9-drill-15-0-15-1-15-2-15-3-15-4-15-5-15-6-15-7-15-8-15-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761402700727700?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.0X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.0-mm-Drill-16.0-mm-HSS-Mata-Bor-Besi-NACHI-i.220946702.40128873792?extraParams=%7B%22display_model_id%22%3A370579072939%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-mm-drill-16-0-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.1X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.1-mm-Drill-16.1-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.51506480015?extraParams=%7B%22display_model_id%22%3A395582279780%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-s-d-16-9-drill-16-0-16-1-16-2-16-3-16-4-16-5-16-6-16-7-16-8-16-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761435683947924?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.2X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.2-mm-Drill-16.2-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.50556480497?extraParams=%7B%22display_model_id%22%3A380582363853%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-s-d-16-9-drill-16-0-16-1-16-2-16-3-16-4-16-5-16-6-16-7-16-8-16-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761435683947924?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.3X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.3-mm-Drill-16.3-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.41528898459?extraParams=%7B%22display_model_id%22%3A420582369392%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-s-d-16-9-drill-16-0-16-1-16-2-16-3-16-4-16-5-16-6-16-7-16-8-16-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761435683947924?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.4X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.4-mm-Drill-16.4-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.45306492155?extraParams=%7B%22display_model_id%22%3A380582372587%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-s-d-16-9-drill-16-0-16-1-16-2-16-3-16-4-16-5-16-6-16-7-16-8-16-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761435683947924?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.5X181X132",
    shopee: "https://shopee.co.id/Nachi-Mata-Bor-16.5-mm-Drill-16.5-mm-HSS-Mata-Bor-Besi-Nachi-i.220946702.46156434299?extraParams=%7B%22display_model_id%22%3A385579250379%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-5-mm-drill-16-5-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.6X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.6-mm-Drill-16.6-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.55206469433?extraParams=%7B%22display_model_id%22%3A310582993334%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-s-d-16-9-drill-16-0-16-1-16-2-16-3-16-4-16-5-16-6-16-7-16-8-16-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761435683947924?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.7X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.7-mm-Drill-16.7-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.45356489451?extraParams=%7B%22display_model_id%22%3A340582404766%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-s-d-16-9-drill-16-0-16-1-16-2-16-3-16-4-16-5-16-6-16-7-16-8-16-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761435683947924?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.8X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.8-mm-Drill-16.8-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.48656500835?extraParams=%7B%22display_model_id%22%3A445582421579%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-s-d-16-9-drill-16-0-16-1-16-2-16-3-16-4-16-5-16-6-16-7-16-8-16-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761435683947924?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "16.9X181X132",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-16.9-mm-Drill-16.9-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.53356469500?extraParams=%7B%22display_model_id%22%3A415582418679%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-16-0-s-d-16-9-drill-16-0-16-1-16-2-16-3-16-4-16-5-16-6-16-7-16-8-16-9-mm-hss-straight-shank-made-in-japan-l-n-500-1731761435683947924?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "17.0X194X143",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-17.0-mm-Drill-17.0-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.23185108709?extraParams=%7B%22display_model_id%22%3A39716702060%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-17-0-mm-drill-17-0-mm-hss-mata-bor-besi-nachi?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "17.1X194X143",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-17.1-mm-Drill-17.1-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.48706489562?extraParams=%7B%22display_model_id%22%3A345582431889%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-17-0-s-d-17-9-drill-17-0-17-1-17-2-17-3-17-4-17-5-17-6-17-7-17-8-17-9-mm-17-0-mm-d5b84?extParam=src%3Dshop%26whid%3D7176500&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "17.2X194X143",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-17.2-mm-Drill-17.2-m-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.45006496120?extraParams=%7B%22display_model_id%22%3A272420574384%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-17-0-s-d-17-9-drill-17-0-17-1-17-2-17-3-17-4-17-5-17-6-17-7-17-8-17-9-mm-17-0-mm-d5b84?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "17.3X194X143",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-17.3-mm-Drill-17.3-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.57906472389?extraParams=%7B%22display_model_id%22%3A315583046989%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-17-0-s-d-17-9-drill-17-0-17-1-17-2-17-3-17-4-17-5-17-6-17-7-17-8-17-9-mm-17-0-mm-d5b84?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},
{
    name: "NACHI STANDART",
    specification: "17.4X194X143",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-17.4-mm-Drill-17.4-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.57306472592?extraParams=%7B%22display_model_id%22%3A445582507410%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: ""
},
{
    name: "NACHI STANDART",
    specification: "17.5X195X135",
    shopee: "https://shopee.co.id/NACHI-Mata-Bor-17.5-mm-Drill-17.5-mm-HSS-Mata-Bor-Besi-Merek-NACHI-i.220946702.46006489762?extraParams=%7B%22display_model_id%22%3A395582509061%2C%22model_selection_logic%22%3A3%7D",
    tokopedia: "https://www.tokopedia.com/podomoroteknik/nachi-mata-bor-17-5-mm-drill-17-5-mm-hss-mata-bor-besi-nachi?extParam=whid%3D7176500%26src%3Dshop&aff_unique_id=&channel=others&chain_key="
},

];

    /* =========================================
       GENERATE VARIANT CARD
    ========================================= */

    nachistVariants.forEach((variant, index) => {

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