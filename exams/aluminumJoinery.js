function aluminumJoinery(input) {

    let amount = Number(input[0]);
    let type = (input[1]);
    let typeOfDelivery = input[2];

    let price = 0;

    switch (type) {
        case "90X130":
            price = 110 * amount;
            if (amount > 60) {
                price *= 0.92;
            } else if (amount > 30) {
                price *= 0.95;
            }
            break;
        case "100X150":
            price = 140 * amount;
            if (amount > 80) {
                price *= 0.90;
            } else if (amount > 40) {
                price *= 0.94;
            }
            break;
        case "130X180":
            price = 190 * amount;
            if (amount > 50) {
                price *= 0.88;
            } else if (amount > 20) {
                price += 0.93;
            }
            break;
        case "200X300":
            price = 250 * amount;
            if (amount > 50) {
                price *= 0.86
            } else if (amount > 25) {
                price *= 0.91
            }
            break;
        }
    if (typeOfDelivery === "With delivery") {
        price += 60;
    }
    if (amount > 99) {
        price *= 0.96;
    }

    if (amount >= 10) { 
        console.log(`${price.toFixed(2)} BGN`);
    } else {
        console.log(`Invalid order`);
    }
}
aluminumJoinery(["2",
"130X180",
"With delivery"])

