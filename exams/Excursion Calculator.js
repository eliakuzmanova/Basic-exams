function excursionCalculator(input) {
    
    let persons = Number(input[0]);
    let season = input[1];
    let price = 0;

    switch (season) {
        case "spring":
            if (persons <= 5) {
                price = 50 * persons;
            } else {
                price = 48 * persons;
            }
        break;
        case "summer":
            if (persons <= 5) {
                price = 48.50 * persons;
            } else {
                price = 45 * persons;
            }
        break;
        case "autumn":
            if (persons <= 5) {
                price = 60 * persons;
            } else {
                price = 49.50 * persons;
            }
        break;
        case "winter":
            if (persons <= 5) {
                price = 86 * persons;
            } else {
                price = 85 * persons;
            }
        break;
    }

    if (season === "summer") {
        price *= 0.85;
    } else if (season === "winter") {
        price *= 1.08;
    }

    console.log(`${price.toFixed(2)} leva.`);
}
excursionCalculator(["20",
"winter"])

