function maidenParty(input) {

    let priceMaidenParty = Number(input[0]);
    let lovePoslaniq = Number(input[1]);
    let vosuchniRozi = Number(input[2]);
    let kliuchodurj = Number(input[3]);
    let karikatura = Number(input[4]);
    let iznenadi = Number(input[5]);

    let priceLovePosl = lovePoslaniq * 0.60;
    let priceRoses = vosuchniRozi * 7.20;
    let priceKeys = kliuchodurj * 3.60;
    let priceKarikat = karikatura * 18.20;
    let priceGlück = iznenadi * 22;

    let allArticles = lovePoslaniq + vosuchniRozi + kliuchodurj + karikatura + iznenadi;
    let sumOfPrice = priceLovePosl + priceRoses + priceKeys + priceKarikat + priceGlück;

    if (allArticles >= 25) {
        sumOfPrice *= 0.65;
    }

    let allPrice = sumOfPrice * 0.90;
    let diff = Math.abs(allPrice - priceMaidenParty)

    if (allPrice >= priceMaidenParty) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
    }
}
maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])
