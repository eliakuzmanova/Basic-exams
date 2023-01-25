function addBags(input) {

    let priceKg20 = Number(input[0]);
    let kgPackage = Number(input[1]);
    let days = Number(input[2]);
    let numPackages = Number(input[3]);
    let price = 0;

    if (kgPackage < 10) {
        price += (priceKg20 * 0.20);
    } else if (kgPackage <= 20) {
        price += (priceKg20 * 0.50);
    } else {
        price += priceKg20;
    }
    if (days > 30) {
        price *= 1.10;
    } else if (days >= 7) {
        price *= 1.15;
    } else {
        price *= 1.40;
    }
    let allSum = price * numPackages;
    console.log(`The total price of bags is: ${allSum.toFixed(2)} lv.`);

}
addBags(["63.80",
"23",
"3",
"1"])
